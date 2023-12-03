
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

export interface Links {
    label: string;
    path: string;
}

export interface Menu {
    isOpenMenu: boolean;
    handleMenu: () => void;
}