import CareerSliderAreaClient from "./CareerSliderAreaClient";
import { getCareerPage } from "@/lib/careerPage";

const CareerSliderArea = async () => {
  const { slides } = await getCareerPage();
  return <CareerSliderAreaClient slides={slides} />;
};

export default CareerSliderArea;
