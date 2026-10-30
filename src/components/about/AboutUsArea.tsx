import MultiLine from "@/components/common/MultiLine";
import { getAboutPage } from "@/lib/aboutPage";

const AboutUsArea = async () => {
  const page = await getAboutPage();

  return (
    <div className="about-us-area about-us-spacing">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 offset-xxl-2 col-xl-10">
            <div className="about-us-title-wrap">
              <h2 className="about-us-title tp-ff-sequel-medium tp-text-perspective">
                <MultiLine text={page.heroHeading} />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsArea;
