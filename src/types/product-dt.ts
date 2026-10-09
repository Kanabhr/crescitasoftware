interface colorDT {
    name: string;
    code: string;
}

export interface ProductDt {
    id: number;
    title: string;
    image: string;
    gallery?: string[];
    price: number;
    oldPrice?: number;
    description: string;
    stock?: string;
    rating?: number;
    reviewsCount?: number;
    colors?: colorDT[];
    sku?: string;
    tags?: string[];
    badge?: string;
    quantity: number;
    categories: string[];
    returnPolicy: string;
    deliveryInfo: string;
    category: string;
}