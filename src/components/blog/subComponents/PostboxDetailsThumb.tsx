import Image from "next/image";

const thumbs = [
    {
        src: "/assets/img/blog/details/thumb.jpg",
        alt: "thumb",
    },
    {
        src: "/assets/img/blog/details/thumb-2.jpg",
        alt: "thumb",
    },
];

const PostboxDetailsThumb = () => {
    return (
        <div className="postbox-details-thumb-wrap mb-10">
            <div className="row">
                {thumbs.map((item, index) => (
                    <div className="col-lg-6" key={index}>
                        <div className="postbox-details-thumb mb-20">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={553}
                                height={420}
                                className="w-100"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostboxDetailsThumb;
