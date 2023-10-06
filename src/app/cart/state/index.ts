export interface Product {
    id: number;
    name: string;
    price: string;
    brand_id: string;
}

export interface ProductReducerState {
    loading: boolean;
    error: any;
    products: Product[]
}