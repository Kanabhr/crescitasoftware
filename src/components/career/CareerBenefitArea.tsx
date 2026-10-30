import { BENEFIT_ICONS, getCareerPage } from "@/lib/careerPage";
import { ArrowIconEleven } from "@/svg/ArrowIcons";
import MultiLine from "../common/MultiLine";

const CareerBenefitArea = async () => {
  const page = await getCareerPage();

  return (
    <section className="tp-benefit-ptb pt-140 pb-160">
      <div className="container container-1230">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-benefit-heading mb-85">
              <div className="tp-service-details-hero-subtitle mb-10 tp_fade_anim" data-delay=".3">
                <span className="text-uppercase fw-500">
                  {page.benefitsEyebrow} <ArrowIconEleven />
                </span>
              </div>
              <h3 className="tp-section-title lts tp_fade_anim tp-ff-sequel-semi-bold">{page.benefitsHeading}</h3>
            </div>
          </div>
        </div>

        <div className="tp-benefit-box">
          <div className="row gx-0">
            {page.benefits.map(({ title, iconKey, border }, index) => {
              const Icon = BENEFIT_ICONS[iconKey];
              return (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className={`tp-benefit-item ${border === "bottom" ? "tp-benefit-borber-bottom" : border === "right" ? "br" : ""}`}>
                    <div className="tp-benefit-item-icon pb-30">
                      <span>{Icon && <Icon />}</span>
                    </div>

                    <h4 className="tp-benefit-item-title">
                      <MultiLine text={title} />
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBenefitArea;
