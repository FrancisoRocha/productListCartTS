
export interface ProductImg {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface Product {
    image: ProductImg;
    name: string;
    category: string;
    price: number;
    id: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}
