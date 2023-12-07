
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    isFavourite: boolean;
}

export interface Links {
    label: string;
    path: string;
}

export interface Document {
    title: string;
    content: string
}

export interface Menu {
    isOpenMenu: boolean;
    handleMenu: () => void;
}

export interface ProductSearchIconProps {
    expandSearcher: boolean;
    setExpandSearcher: React.Dispatch<React.SetStateAction<boolean>>;
    setIsOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
  }

  export interface CartIconProps{
    isOpenCart: boolean;
    setIsOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
    setExpandSearcher: React.Dispatch<React.SetStateAction<boolean>>;
  }