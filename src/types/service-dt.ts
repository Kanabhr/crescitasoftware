import React from "react";

export interface serviceDT {
    id: number;
    title: string;
    image?: string,
    description: string,
    icon?: () => React.ReactNode;
    delay?: string;
    year?: string;
}