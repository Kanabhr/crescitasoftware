import Image from "next/image";

const JobApplicationTopIntro = () => {
    return (
        <div className="ar-hero-area about-us-spacing p-relative z-index-1 pb-80">
            <div className="tp-breadcrumb-bg">
                <Image width={1905} height={539} src="/assets/img/breadcrumb/background.png" alt="background" />
            </div>
            <div className="container container-1230">
                <div className="ar-about-us-4-hero-ptb">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="ar-hero-title-box tp_fade_anim" data-delay=".3">
                                <span className="tp-application-subtitle mb-25">Full time</span>
                                <h3 className="tp-career-title pb-30">UI/UX Designer</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApplicationTopIntro;