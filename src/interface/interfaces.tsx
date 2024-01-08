import { Dispatch, SetStateAction } from "react";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    isFavourite: boolean;
    isBestseller:boolean;
    stock:number;
    orderedQuantity: number
    opinions:Opinion[]
}

export interface CartProductProps extends Product {
  handleRemoveFromCart: (id: number) => void;
}


export interface Opinion {
  id: number;
  name: string;
  email: string;
  opinionText: string;
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
    setMenuAsClosed?: () => void;
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

  export interface CheckoutFormData {
    firstName: string;
    lastName: string
    email: string;
    address: string;
    phoneNumber: string;
    parcelPost: false;
    stripe: false;
    comments: string
  }

  export interface CheckoutFormProps {
    totalPrice: number;
    finalPrice: number;
    setFinalPrice: React.Dispatch<SetStateAction<number>>;
  }

  export interface SentDataModalProps {
    dataIsSent: boolean;
    setDataIsSent: Dispatch<SetStateAction<boolean>>;
  }

  export interface RemoveProductModalProps {
    removeProductModal: boolean;
    setRemoveProductModal: React.Dispatch<SetStateAction<boolean>>
  }

  export interface SubscribeConfirmationProps {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  }

  export interface FilterProductsProps {
    categoryFilter: string;
    setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
    bestsellers: Product[];
    setBestsellers: React.Dispatch<React.SetStateAction<Product[]>>;
  }

  export interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }
  
  export interface ProductCategory {
    classProp: string;
    src: string;
    buttonMessage: string;
  }

  export interface CategoryCardProps {
    src: string;
    category: string;
  }

  export interface CartCheckoutProps {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    id: number;
  }


  export interface OpinionFormProps {
    productId:number;
    productsList:Product[];
    setProductsList: Dispatch<SetStateAction<Product[]>>
  }