// import ModernAgencyMain from "@/pages/homes/modern-agency/ModernAgencyMain";
// import DarkLayout from "../../layout";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Modern Agency - Creative Portfolio Agency Nextjs Template",
// };

// const page = () => {
//     return (
//         <DarkLayout>
//             <ModernAgencyMain />
//         </DarkLayout>
//     );
// };

// export default page;
import ModernAgencyPortfolio from "@/components/portfolio/ModernAgencyPortfolio";
import ModernAgencyAbout from "@/components/about/ModernAgencyAbout";
import ModernAgencyAward from "@/components/award/ModernAgencyAward";
import ModernAgencyBlog from "@/components/blog/ModernAgencyBlog";
import ModernAgencyHero from "@/components/hero/ModernAgencyHero";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Modern Agency - Creative Portfolio Agency Nextjs Template",
};

const page = () => {
    return (
        <main>
            <ModernAgencyHero />
            <ModernAgencyAbout />
            <ModernAgencyPortfolio />
            <ModernAgencyAward />
            <ModernAgencyBlog />
        </main>
    );
};

export default page;