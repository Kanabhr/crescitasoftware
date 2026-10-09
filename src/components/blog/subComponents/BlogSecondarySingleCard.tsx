import SmartLink from '@/components/common/SmartLink';
import { BlogItemDt } from '@/types/custom-dt';
import Image from 'next/image';
import Link from 'next/link';

interface AnimationConfig {
    delay?: string;
    ease?: string;
    fadeFrom?: string;
}
interface BlogSecondarySingleCardProps extends BlogItemDt {
    animation?: AnimationConfig;
    spacingCls?: string;
}


const BlogSecondarySingleCard: React.FC<BlogSecondarySingleCardProps> = ({ id, image, tag, title, animation, spacingCls = "mb-40" }) => {
    return (
        <div
            className={`cs-blog-item cs-blog-item-2 ${spacingCls} ${animation ? "tp_fade_anim" : ""
                }`}
            {...(animation && {
                "data-delay": animation.delay,
                "data-ease": animation.ease,
                "data-fade-from": animation.fadeFrom,
            })}
        >
            <div className="cs-blog-thumb fix p-relative mb-35">
                <Image width={553} height={519} className="img-fluid w-100" src={image} alt={tag || "blog image"} />
                <Link href="#" className="cs-blog-tag">
                    {tag}
                </Link>
            </div>
            <h4 className="cs-blog-title tp-ff-sequel-semi-bold">
                <SmartLink
                    href={`/blog-details/${id}`}
                    className="common-underline"
                >
                    {title}
                </SmartLink>
            </h4>
        </div>
    );
};

export default BlogSecondarySingleCard;