import { ArrowIconEight } from "@/svg/ArrowIcons";
import { getAboutPage } from "@/lib/aboutPage";

const AboutUsAward = async () => {
  const page = await getAboutPage();

  return (
    <div className="cs-awards-area pt-130 pb-160">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mg-awards-title-wrap mb-15 text-center text-md-start">
              <h2 className="mg-awards-title tp-ff-sequel-bold-head lh-1 reveal-text">{page.awardsTitle}</h2>
              <span className="mg-awards-title-sm tp-ff-sequel-bold-head">{page.awardsSubtitle}</span>
            </div>

            <div className="mg-awards-item-wrap mp-awards-item-wrap cs-awards-item-wrap fix">
              {page.awards.map((item, index) => (
                <div key={index} className="right-item-animetion">
                  <div className="mp-awards-item d-flex justify-content-between align-items-center gap-4">
                    <div className="mp-awards-left mb-20">
                      <span className="count">
                        <ArrowIconEight />
                        {item.text}
                      </span>
                      <span>{item.title}</span>
                    </div>
                    <div className="mp-awards-right mb-20">
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsAward;
