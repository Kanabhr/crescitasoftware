import AboutUsTeamClient from "./AboutUsTeamClient";
import { getAboutPage } from "@/lib/aboutPage";

const AboutUsTeam = async () => {
  const page = await getAboutPage();
  return (
    <AboutUsTeamClient
      data={{
        teamHeading: page.teamHeading,
        teamButtonText: page.teamButtonText,
        teamButtonLink: page.teamButtonLink,
        teamImages: page.teamImages,
        historyHeading: page.historyHeading,
        historyButtonText: page.historyButtonText,
        historyButtonLink: page.historyButtonLink,
        historyImages: page.historyImages,
      }}
    />
  );
};

export default AboutUsTeam;
