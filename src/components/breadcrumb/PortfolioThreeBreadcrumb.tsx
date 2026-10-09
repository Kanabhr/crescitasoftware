import Image from 'next/image';

const PortfolioThreeBreadcrumb = () => {
    return (
        <div className="tp-breadcrumb-area about-us-spacing p-relative z-index-1 pb-50">
            <div className="tp-breadcrumb-bg">
               <Image style={{width:"100%", height:"auto"}} width={1905} height={539} src="/assets/img/breadcrumb/background.png" alt="background image" />
            </div>
            <div className="container">
                <div className="tp-breadcrumb-border">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-3">
                            <div className="tp-breadcrumb-main p-relative mb-30">
                                <h2 className="tp-breadcrumb-title tp-ff-sequel-bold-head text-uppercase fs-152 mb-20 tp-char-animation">Portfolio</h2>
                                <div className="tp-breadcrumb-dec-wrap d-flex ml-100 tp_fade_anim" data-delay=".5">
                                    <span className="tp-breadcrumb-date text-uppercase mr-75">( 1990-2026 )</span>
                                    <p className="tp-breadcrumb-dec">Cunnet is a beacon of best innovation the <br /> dynamic parent a company of wealcoder many<br /> other subsidiaries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioThreeBreadcrumb;