import ProfilePasswordChangeForm from "../form/ProfilePasswordChangeForm";
import ProfilePersonalDetailsForm from "../form/ProfilePersonalDetailsForm";
import ProfileNotification from "./ProfileNotification";
import ProfileTicketTable from "./ProfileTicketTable";
import ProfiletabContent from "./ProfiletabContent";
import ProfileAddress from "./ProfileAddress";

const PROFILE_TABS = [
    {
        id: "profile",
        label: "Profile",
        icon: "fa-regular fa-user-pen",
        content: <ProfiletabContent />,
        active: true,
    },
    {
        id: "information",
        label: "Information",
        icon: "fa-regular fa-circle-info",
        content: <ProfilePersonalDetailsForm />,
    },
    {
        id: "address",
        label: "Address",
        icon: "fa-light fa-location-dot",
        content: <ProfileAddress />,
    },
    {
        id: "order",
        label: "My Orders",
        icon: "fa-light fa-clipboard-list-check",
        content: <ProfileTicketTable />,
    },
    {
        id: "notification",
        label: "Notification",
        icon: "fa-regular fa-bell",
        content: <ProfileNotification />,
    },
    {
        id: "password",
        label: "Change Password",
        icon: "fa-regular fa-lock",
        content: <ProfilePasswordChangeForm />,
    },
];

const ProfileAreaMain = () => {
    return (
        <div className="profile__area pre-header tp-animate-tab pt-200 pb-160">
            <div className="container">
                <div className="profile__inner p-relative">
                    <div className="row">

                        {/* Tabs */}
                        <div className="col-xxl-4 col-lg-4">
                            <div className="profile__tab mr-40">
                                <nav>
                                    <div
                                        className="nav nav-tabs tp-tab-menu flex-column"
                                        id="profile-tab"
                                        role="tablist"
                                    >
                                        {PROFILE_TABS.map((tab) => (
                                            <button
                                                key={tab.id}
                                                className={`nav-link ${tab.active ? "active" : ""}`}
                                                id={`nav-${tab.id}-tab`}
                                                data-bs-toggle="tab"
                                                data-bs-target={`#nav-${tab.id}`}
                                                type="button"
                                                role="tab"
                                                aria-controls={`nav-${tab.id}`}
                                            >
                                                <span>
                                                    <i className={tab.icon}></i>
                                                </span>
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="col-xxl-8 col-lg-8">
                            <div className="profile__tab-content">
                                <div className="tab-content p-relative" id="profile-tabContent">
                                    {PROFILE_TABS.map((tab) => (
                                        <div
                                            key={tab.id}
                                            className={`tab-pane ${tab.active ? "show active" : ""}`}
                                            id={`nav-${tab.id}`}
                                            role="tabpanel"
                                            aria-labelledby={`nav-${tab.id}-tab`}
                                        >
                                            {tab.content}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAreaMain;