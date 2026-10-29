import type { CollectionConfig, PayloadRequest } from "payload";
import { hasAnyPermission, isSuperAdmin } from "../access/collectionAccess";
import { clientUserIsSuperAdmin } from "../access/resources";
import { hasOtherActiveSuperAdmin, isSuperAdminRole, relationID, throwAccessError } from "../access/roleSafety";

const hasOwn = (value: object, key: string) => Object.prototype.hasOwnProperty.call(value, key);

async function findAdminRole(req: PayloadRequest) {
  const { docs } = await req.payload.find({
    collection: "roles",
    where: { slug: { equals: "admin" } },
    limit: 1,
    depth: 0,
    overrideAccess: true,
    req,
  });
  return docs[0] as { id: number | string } | undefined;
}

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
    hidden: ({ user }) => !clientUserIsSuperAdmin(user),
  },
  auth: { depth: 1 },
  access: {
    admin: async ({ req }) => hasAnyPermission(req),
    create: async ({ req }) => isSuperAdmin(req),
    read: async ({ req }) => isSuperAdmin(req),
    update: async ({ req, id, data }) => {
      const isSelf = req.user && id !== undefined && String(req.user.id) === String(id);
      if (isSelf) {
        return Object.keys(data ?? {}).every((key) => ["name", "email", "password"].includes(key));
      }
      return isSuperAdmin(req);
    },
    delete: async ({ req }) => isSuperAdmin(req),
  },
  hooks: {
    beforeValidate: [
      async ({ data, operation, req }) => {
        if (operation !== "create") return data;
        const { totalDocs } = await req.payload.count({
          collection: "users",
          overrideAccess: true,
          req,
        });
        if (totalDocs !== 0) return data;
        const adminRole = await findAdminRole(req);
        if (!adminRole) throwAccessError("The built-in Admin role is not available.");
        return { ...data, role: adminRole.id };
      },
    ],
    beforeChange: [
      async ({ data, originalDoc, req, operation }) => {
        if (operation !== "update" || !originalDoc || !hasOwn(data, "role")) return data;

        if (req.user && String(req.user.id) === String(originalDoc.id)) {
          throwAccessError("Users cannot change their own role.");
        }

        const previousRoleID = relationID(originalDoc.role);
        const nextRoleID = relationID(data.role);
        if (previousRoleID !== null && String(previousRoleID) !== String(nextRoleID) && (await isSuperAdminRole(req, previousRoleID)) && !(nextRoleID !== null && (await isSuperAdminRole(req, nextRoleID))) && !(await hasOtherActiveSuperAdmin(req, originalDoc.id))) {
          throwAccessError("At least one active super admin must remain.");
        }
        return data;
      },
    ],
    beforeDelete: [
      async ({ id, req }) => {
        const { docs } = await req.payload.find({
          collection: "users",
          where: { id: { equals: id } },
          limit: 1,
          depth: 0,
          overrideAccess: true,
          req,
          select: { role: true },
        });
        const user = docs[0] as { id: number | string; role?: number | string | { id?: number | string } | null } | undefined;
        const roleID = relationID(user?.role);
        if (roleID !== null && (await isSuperAdminRole(req, roleID)) && !(await hasOtherActiveSuperAdmin(req, id))) {
          throwAccessError("At least one active super admin must remain.");
        }
      },
    ],
  },
  fields: [
    { name: "name", type: "text" },
    {
      name: "role",
      type: "relationship",
      relationTo: "roles",
      admin: {
        position: "sidebar",
        condition: (_data, _siblingData, { user }) => clientUserIsSuperAdmin(user),
      },
    },
  ],
};
