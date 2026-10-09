import Link from "next/link";

const tickets = [
    {
        id: "#2245",
        title: "How can i share ?",
        status: "Pending",
        statusClass: "pending",
        actionText: "Invoice",
        actionLink: "#",
    },
    {
        id: "#2220",
        title: "Send money, but not working",
        status: "Need your replay",
        statusClass: "reply",
        actionText: "Reply",
        actionLink: "#",
    },
    {
        id: "#2125",
        title: "Balance error",
        status: "Resolved",
        statusClass: "done",
        actionText: "Invoice",
        actionLink: "#",
    },
    {
        id: "#2124",
        title: "How to decline bid",
        status: "On Hold",
        statusClass: "hold",
        actionText: "Status",
        actionLink: "#",
    },
    {
        id: "#2121",
        title: "How to contact",
        status: "Resolved",
        statusClass: "done",
        actionText: "Invoice",
        actionLink: "#",
    },
];

const ProfileTicketTable = () => {
    return (
        <div className="profile__ticket table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Product Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">View</th>
                    </tr>
                </thead>

                <tbody>
                    {tickets.map((ticket, index) => (
                        <tr key={index}>
                            <th scope="row">{ticket.id}</th>

                            <td data-info="title">{ticket.title}</td>

                            <td data-info={`status ${ticket.statusClass}`}>
                                {ticket.status}
                            </td>

                            <td>
                                <Link href={ticket.actionLink} className="tp-logout-btn">
                                    {ticket.actionText}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProfileTicketTable;
