export interface TeamDetailItem {
    label: string;
    value: string;
}

export interface TeamSkill {
    title: string;
    value: number; // percentage (0–100)
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    phone: string;
    email: string;
    description: string;
    details: TeamDetailItem[];
    experience: string[];
    skills: TeamSkill[];
    delay?: number; // optional animation delay
}