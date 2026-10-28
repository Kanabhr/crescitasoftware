import BrandingStudioBrand from "./BrandingStudioBrand";
import { getAboutPage } from "@/lib/aboutPage";

const AboutUsBrands = async ({ spacingClass = "" }: { spacingClass?: string }) => {
  const { brands } = await getAboutPage();
  // Repeated so the endless loop always has enough slides.
  const logos = [...brands, ...brands, ...brands];
  return <BrandingStudioBrand spacingClass={spacingClass} logos={logos} />;
};

export default AboutUsBrands;
