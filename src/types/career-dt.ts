import React from "react";

export interface SidebarItem {
    icon: React.ElementType; // icon component
    label: string;
    value: string;
}

export interface TopInfoItem {
    label: string;
    value: string;
}

export interface TopInfo {
    subtitle: string;
    title: string;
    info: TopInfoItem[];
}

export interface CareerDT {
    id: number;
    topInfo: TopInfo;
    summary: string;
    keyResponsibilities: string[];
    qualifications: string[];
    perks: string[];
    sidebar: SidebarItem[];
    salary: string;
    applyLink: string;
    roles: string;
    
}
