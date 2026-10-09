
export interface portfolioDT {
    id: number;
    title: string;
    subtitle?: string;
    year?: string;
    image: string;
    col?: string;
    itemClass?: string;
    category?: string;
    bgClass?: string
    tags?: string[];
    filterCategory?:string[]
}
