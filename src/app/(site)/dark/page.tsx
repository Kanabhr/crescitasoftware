import { redirect } from "next/navigation";

export default function RootPage() {
    try {
        redirect("/dark/creative-agency");
    } catch (error) {
        // Next.js redirect intentionally throws an error
        if (error instanceof Error && error.message.includes('NEXT_REDIRECT')) {
            throw error; // Re-throw redirect error
        }
        throw error;
    }
}