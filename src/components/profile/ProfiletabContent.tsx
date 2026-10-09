import Image from "next/image";
import Link from "next/link";
import {
    DownlaodIcon,
    GiftBoxIcon,
    OrderIcon,
    WishlistBigIcon,
} from "@/svg/ProfileIcons";

const PROFILE_STATS = [
    {
        id: "download",
        title: "Downloads",
        count: 2,
        icon: DownlaodIcon,
        countClass: "profile-download",
    },
    {
        id: "order",
        title: "Orders",
        count: 6,
        icon: OrderIcon,
        countClass: "profile-order",
    },
    {
        id: "wishlist",
        title: "Wishlist",
        count: 8,
        icon: WishlistBigIcon,
        countClass: "profile-wishlist",
    },
    {
        id: "gift",
        title: "Gift Box",
        count: 7,
        icon: GiftBoxIcon,
        countClass: "profile-wishlist",
    },
];

const ProfiletabContent = () => {
    return (
        <div className="profile__main">

            {/* Top */}
            <div className="profile__main-top pb-80">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="profile__main-inner d-flex flex-wrap align-items-center">
                            <div className="profile__main-thumb">
                                <Image
                                    src="/assets/img/product/details/user-5.png"
                                    alt="profile image"
                                    width={100}
                                    height={50}
                                />
                                <div className="profile__main-thumb-edit">
                                    <input
                                        id="profile-thumb-input"
                                        className="profile-img-popup"
                                        type="file"
                                    />
                                    <label htmlFor="profile-thumb-input">
                                        <i className="fa-light fa-camera"></i>
                                    </label>
                                </div>
                            </div>

                            <div className="profile__main-content">
                                <h4 className="profile__main-title">
                                    Welcome Mr. Admin!
                                </h4>
                                <p>
                                    You have <span>08</span> notifications
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="profile__main-logout text-sm-end">
                            <Link href="/login" className="tp-logout-btn">
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="profile__main-info">
                <div className="row gx-3">
                    {PROFILE_STATS.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="col-md-3 col-sm-6"
                            >
                                <div className="profile__main-info-item">
                                    <div className="profile__main-info-icon">
                                        <span>
                                            <span
                                                className={`profile-icon-count ${item.countClass}`}
                                            >
                                                {item.count}
                                            </span>
                                            <Icon />
                                        </span>
                                    </div>
                                    <h4 className="profile__main-info-title">
                                        {item.title}
                                    </h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default ProfiletabContent;
