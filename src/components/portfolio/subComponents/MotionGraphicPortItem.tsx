import SmartLink from '@/components/common/SmartLink';
import { portfolioDT } from '@/types/portfolio-dt';
import Image from 'next/image';
import Link from 'next/link';

interface portfolioPropsDT {
    item: portfolioDT
}

const PortfolioTags = ({ tags }: { tags: string[] }) => (
    <ul>
        {tags.map((tag, index) => (
            <li key={index}>
                <Link href="#">{tag}</Link>
            </li>
        ))}
    </ul>
);

const MotionGraphicPortItem: React.FC<portfolioPropsDT> = ({ item }) => {
    return (
        <div className="mg-portfolio-item anim-zoomin-wrap mb-55">
            <div
                className="mg-portfolio-thumb anim-zoomin not-hide-cursor"
                data-cursor="View<br/>Demo"
            >
                <SmartLink className="cursor-hide" href={`/portfolio-details/${item.id}`}>
                    <Image style={{ width: "100%", height: "auto" }} width={940} height={618} className="w-100" src={item.image} alt={item.title} />
                </SmartLink>
            </div>

            <div className="mg-portfolio-content cs-portfolio-content d-flex align-items-center flex-wrap justify-content-between">
                <h3 className="cs-portfolio-title tp-title-anim fix mr-20 tp-ff-sequel-semi-bold">
                    <SmartLink href={`/portfolio-details/${item.id}`} className="tp-title-text">
                        {item.title}
                    </SmartLink>
                </h3>

                <div className="cs-portfolio-tag">
                    <PortfolioTags tags={item.tags ?? []} />
                </div>
            </div>
        </div>
    );
};

export default MotionGraphicPortItem;