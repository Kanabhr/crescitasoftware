
const BrandingStudioHero = () => {
    return (
        <div className="cs-hero-area cs-hero-spacing bg-position" style={{ backgroundImage: `url(/assets/img/hero/cs/bg.jpg)` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cs-hero-content">
                            <h2 className="cs-hero-title text-uppercase text-white tp-ff-sequel-heavy-disp tp_fade_anim" data-delay=".4">
                                <span className="text-center d-block">Creative</span>
                                <span className="text-center d-md-flex justify-content-center">Agency <span className="text-sm tp-ff-inter d-none d-md-inline-block">Global Brand<br /> Innovator</span> And</span>
                                <span className="cs-hero-video d-md-flex align-items-center ml-140">
                                    <video className="d-none d-md-inline-block" loop muted autoPlay playsInline>
                                        <source src="https://html.aqlova.com/videos/cunnet/video-3.mp4" type="video/mp4" />
                                    </video>
                                    <span className="text-sm text-sm-video tp-ff-inter d-none d-md-inline-block">Play <br /> Video</span>
                                    Studio
                                    <video className="d-md-none" loop muted autoPlay playsInline>
                                        <source src="https://html.aqlova.com/videos/cunnet/video-3.mp4" type="video/mp4" />
                                    </video>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandingStudioHero;