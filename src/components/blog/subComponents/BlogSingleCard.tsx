import SmartLink from '@/components/common/SmartLink';
import { getCurrentYear } from '@/utils/getCurrentYear';
import { BlogItemDt } from '@/types/custom-dt';
import Image from 'next/image';

interface blogPropsDT {
    item: BlogItemDt;
    spacingCls?: string;
}

const BlogSingleCard: React.FC<blogPropsDT> = ({ item, spacingCls = "mb-30" }) => {
    return (
        <div className={`mp-blog-item tp-hover-item ${spacingCls} tp_fade_anim`}
            data-delay={item.delay}
        >
            <SmartLink
                href={`/blog-details/${item.id}`}
                className="mp-blog-thumb mb-25 p-relative fix d-block"
            >
                <div
                    className="tp-hover-img"
                    data-displacement="/assets/img/imghover/fluid.jpg"
                    data-intensity="0.2"
                    data-speedin="1"
                    data-speedout="1"
                >
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={408}
                        height={360}
                        className="img-fluid w-100"
                    />
                </div>
            </SmartLink>

            <div className="mp-blog-content">
                <h2 className="mp-blog-title tp-ff-sequel-semi-bold mb-10">
                    <SmartLink
                        href={`/blog-details/${item.id}`}
                        className="common-underline"
                    >
                        {item.title}
                    </SmartLink>
                </h2>
                <span className="mp-blog-date">
                    <span>By</span> Cunnet – {getCurrentYear()}
                </span>
            </div>
        </div>
    );
};

export default BlogSingleCard;