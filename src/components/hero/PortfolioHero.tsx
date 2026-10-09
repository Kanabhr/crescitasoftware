
const PortfolioHero = () => {
    return (
        <div className="tp-portfolio-hero-area tp-portfolio-hero-ptb p-relative fix z-index-1">
            <div className="tp-portfolio-hero-video">
                <video loop muted autoPlay playsInline>
                    <source src="https://html.aqlova.com/videos/cunnet/video.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-portfolio-hero-content mb-185 text-center">
                            <h2 className="tp-breadcrumb-title tp-ff-sequel-bold-head text-white tp-char-animation">Portfolio<br/> Driven Production</h2>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="tp-portfolio-hero-dec mb-20 tp_fade_anim" data-delay=".3">
                            <p>Web & Digital Experiences<br/> Design, Development, Brand Identity</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="tp-portfolio-hero-dec text-sm-end mb-20 tp_fade_anim" data-delay=".5">
                            <p>Philadelphia, PA<br/>2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioHero;