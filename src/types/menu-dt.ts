export interface MenuLink {
    label: string;
    href: string;
}

export interface MenuColumn {
    title: string;
    links: MenuLink[];
}

export interface MenuItem {
    id: number;
    type: "mega" | "dropdown";
    label: string;
    href: string;
    // `columns` exists only for "mega" type, optional otherwise
    columns?: MenuColumn[];
    // `links` exists only for "dropdown" type, optional otherwise
    links?: MenuLink[];
}