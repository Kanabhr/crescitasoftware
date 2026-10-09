import SmartLink from "../common/SmartLink";

const BlogTopIntro = () => {
    return (
        <div className="tp-blog-grid-area tp-pd-2-ptb pt-175 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-pd-2-top tp-breadcrumb-border pb-15">
                            <h3 className="tp-section-title fs-72 tp_fade_anim mb-20" data-delay=".5">Inside Story Report</h3>
                            <div className="tp-pd-2-categories mb-10 tp_fade_anim" data-delay=".3">
                                <span><SmartLink href="/">Website</SmartLink></span>{" "}
                                <span>Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogTopIntro;