import { CalenderIcon, EditIcon } from "@/svg/BenefitIcons";
import { ClockIcon } from "@/svg/BenefitIcons";
import { ExperienceIcon } from "@/svg/BenefitIcons";
import { CareerDT } from "@/types/career-dt";

export const careerData: CareerDT[] = [
    {
        id: 1,
        topInfo: {
            subtitle: "Design",
            title: "UI/UX Designer",
            info: [
                { label: "Location", value: "2600, Austin, New York" },
                { label: "Date", value: "03 Feb 2025" },
                { label: "Job Type", value: "Full time (Remote)" },
            ],
        },
        summary: `We are seeking a UI/UX Designer to join our team at Agntix. In this role, you will help craft
the visual and interactive elements of our software products, ensuring a seamless and intuitive user experience.`,
        keyResponsibilities: [
            "Design intuitive and user-friendly interfaces for our digital products.",
            "Develop wireframes, storyboards, and user flows to communicate design ideas.",
            "Conduct user research and evaluate feedback to refine UI/UX design.",
            "Apply and maintain design guidelines and standards across all products.",
            "Stay updated on the latest UI/UX design trends and technologies.",
        ],
        qualifications: [
            "Strong portfolio in UI/UX design.",
            "Proficient with Figma, Adobe XD, or Sketch.",
            "Understanding of user-centered design principles.",
            "Experience in usability testing.",
            "Good communication and collaboration skills.",
        ],
        perks: [
            "Flexible Spending Account (FSA)",
            "Healthcare reimbursement for international employees",
            "401(k) matching",
            "Professional development reimbursement",
            "Unlimited PTO",
        ],
        sidebar: [
            { icon: ExperienceIcon, label: "Experience", value: "4+ Years Experience" },
            { icon: ClockIcon, label: "Working Hours", value: "08 AM to 05 PM" },
            { icon: EditIcon, label: "Job Category", value: "UI/UX Designer" },
            { icon: CalenderIcon, label: "Working Days", value: "Weekly 5 days (Sun to Thu)" },
            { icon: ClockIcon, label: "Deadline", value: "03 Feb 2025" },
        ],
        salary: "$50k - 60k (Yearly)",
        applyLink: "/job-application-form",
        roles: "02 Open Roles",
    },

    {
        id: 2,
        topInfo: {
            subtitle: "Development",
            title: "Frontend Developer",
            info: [
                { label: "Location", value: "San Francisco, CA" },
                { label: "Date", value: "15 Mar 2025" },
                { label: "Job Type", value: "Remote" },
            ],
        },
        summary: `We are looking for a Frontend Developer proficient in React and Next.js to help build
high-performance web applications with modern UI/UX practices.`,
        keyResponsibilities: [
            "Develop responsive web applications using React/Next.js.",
            "Collaborate with designers to implement UI components.",
            "Optimize applications for speed and scalability.",
            "Maintain code quality and perform code reviews.",
            "Troubleshoot and debug software issues.",
        ],
        qualifications: [
            "3+ years of frontend development experience.",
            "Proficient in JavaScript, HTML5, CSS3.",
            "Experience with React, Next.js, and state management.",
            "Knowledge of web performance optimization.",
            "Familiarity with Git and agile development.",
        ],
        perks: [
            "Remote work flexibility",
            "Healthcare coverage",
            "Team retreats and hackathons",
            "Stock options",
            "Paid learning opportunities",
        ],
        sidebar: [
            { icon: ExperienceIcon, label: "Experience", value: "3+ Years Experience" },
            { icon: ClockIcon, label: "Working Hours", value: "09 AM to 06 PM" },
            { icon: EditIcon, label: "Job Category", value: "Frontend Developer" },
            { icon: CalenderIcon, label: "Working Days", value: "Weekly 5 days (Mon to Fri)" },
            { icon: ClockIcon, label: "Deadline", value: "15 Mar 2025" },
        ],
        salary: "$60k - 70k (Yearly)",
        applyLink: "/job-application-form",
        roles: "01 Open Role",
    },

    {
        id: 3,
        topInfo: {
            subtitle: "Management",
            title: "Product Manager",
            info: [
                { label: "Location", value: "New York, NY" },
                { label: "Date", value: "28 Mar 2025" },
                { label: "Job Type", value: "Full-Time" },
            ],
        },
        summary: `We are seeking an experienced Product Manager to lead cross-functional teams
and drive the development of innovative products from concept to launch.`,
        keyResponsibilities: [
            "Define product roadmap and strategy.",
            "Work closely with design and development teams.",
            "Gather and prioritize product requirements.",
            "Analyze market trends and customer feedback.",
            "Ensure timely delivery of product milestones.",
        ],
        qualifications: [
            "5+ years in product management or related role.",
            "Strong leadership and communication skills.",
            "Experience with agile methodologies.",
            "Ability to define KPIs and measure product success.",
            "Strong analytical and problem-solving skills.",
        ],
        perks: [
            "Competitive salary and bonuses",
            "Health and dental insurance",
            "Flexible working hours",
            "Professional development budget",
            "Annual team retreats",
        ],
        sidebar: [
            { icon: ExperienceIcon, label: "Experience", value: "5+ Years Experience" },
            { icon: ClockIcon, label: "Working Hours", value: "09 AM to 06 PM" },
            { icon: EditIcon, label: "Job Category", value: "Product Manager" },
            { icon: CalenderIcon, label: "Working Days", value: "Weekly 5 days (Mon to Fri)" },
            { icon: ClockIcon, label: "Deadline", value: "28 Mar 2025" },
        ],
        salary: "$80k - 95k (Yearly)",
        applyLink: "/job-application-form",
        roles: "03 Open Roles",
    },

    {
        id: 4,
        topInfo: {
            subtitle: "Development",
            title: "JavaScript Engineer",
            info: [
                { label: "Location", value: "Austin, TX" },
                { label: "Date", value: "10 Apr 2025" },
                { label: "Job Type", value: "Remote" },
            ],
        },
        summary: `We are hiring a JavaScript Engineer skilled in ES6+, Node.js, and modern frontend frameworks
to develop scalable web applications.`,
        keyResponsibilities: [
            "Develop web applications using JavaScript frameworks.",
            "Implement RESTful APIs and integrate with backend services.",
            "Write clean, maintainable, and testable code.",
            "Collaborate with team members on software architecture.",
            "Stay updated with latest JavaScript technologies.",
        ],
        qualifications: [
            "3+ years experience with JavaScript frameworks.",
            "Proficient with Node.js and React.",
            "Familiarity with database systems like MongoDB or SQL.",
            "Experience in API integration.",
            "Problem-solving mindset and team player.",
        ],
        perks: [
            "Remote work option",
            "Health benefits",
            "Flexible schedule",
            "Paid learning resources",
            "Annual tech conferences",
        ],
        sidebar: [
            { icon: ExperienceIcon, label: "Experience", value: "3+ Years Experience" },
            { icon: ClockIcon, label: "Working Hours", value: "10 AM to 07 PM" },
            { icon: EditIcon, label: "Job Category", value: "JavaScript Engineer" },
            { icon: CalenderIcon, label: "Working Days", value: "Weekly 5 days (Mon to Fri)" },
            { icon: ClockIcon, label: "Deadline", value: "10 Apr 2025" },
        ],
        salary: "$65k - 75k (Yearly)",
        applyLink: "/job-application-form",
        roles: "01 Open Role",
    },

    {
        id: 5,
        topInfo: {
            subtitle: "Development",
            title: "Joomla Developer",
            info: [
                { label: "Location", value: "Los Angeles, CA" },
                { label: "Date", value: "20 Apr 2025" },
                { label: "Job Type", value: "Full-Time" },
            ],
        },
        summary: `We are seeking a Joomla Developer to maintain and develop dynamic web solutions
for our clients, ensuring secure and optimized websites.`,
        keyResponsibilities: [
            "Develop and maintain Joomla-based websites.",
            "Customize Joomla templates and extensions.",
            "Ensure website performance and security.",
            "Collaborate with front-end developers and designers.",
            "Troubleshoot and resolve technical issues.",
        ],
        qualifications: [
            "2+ years experience with Joomla development.",
            "Strong PHP and MySQL skills.",
            "Knowledge of Joomla templates and extensions.",
            "Good understanding of web security practices.",
            "Problem-solving and debugging skills.",
        ],
        perks: [
            "Competitive salary and benefits",
            "Flexible working hours",
            "Team building events",
            "Healthcare coverage",
            "Paid time off",
        ],
        sidebar: [
            { icon: ExperienceIcon, label: "Experience", value: "2+ Years Experience" },
            { icon: ClockIcon, label: "Working Hours", value: "09 AM to 05 PM" },
            { icon: EditIcon, label: "Job Category", value: "Joomla Developer" },
            { icon: CalenderIcon, label: "Working Days", value: "Weekly 5 days (Mon to Fri)" },
            { icon: ClockIcon, label: "Deadline", value: "20 Apr 2025" },
        ],
        salary: "$55k - 65k (Yearly)",
        applyLink: "/job-application-form",
        roles: "02 Open Roles",
    },
];
