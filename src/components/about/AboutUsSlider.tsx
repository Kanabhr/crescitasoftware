import AboutUsSliderClient from "./AboutUsSliderClient";
import { getAboutPage } from "@/lib/aboutPage";

const AboutUsSlider = async () => {
  const { slides } = await getAboutPage();
  return <AboutUsSliderClient slides={slides} />;
};

export default AboutUsSlider;
