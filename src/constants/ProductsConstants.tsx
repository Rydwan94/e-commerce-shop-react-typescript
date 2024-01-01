// products.ts

import { Product } from "../interface/interfaces";

export const products: Product[] = [
  {
    id: 1,
    name: 'Smartphone',
    description: 'Powerful and sleek smartphone for your daily needs.',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1634403665481-74948d815f03?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
    isFavourite: false,
    isBestseller: true,
    stock: 10,
    orderedQuantity: 1
  },
  {
    id: 2,
    name: 'Laptop',
    description: 'High-performance laptop with a stunning display.',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
    isFavourite: false,
    isBestseller: false,
    stock: 15,
    orderedQuantity: 1
  },
  {
    id: 3,
    name: 'Headphones',
    description: 'Noise-canceling headphones for an immersive audio experience.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
    isFavourite: false,
    isBestseller: false,
    stock: 20,
    orderedQuantity: 1
  },
  {
    id: 4,
    name: 'Fitness Tracker',
    description: 'Track your fitness and stay active with this smart fitness tracker.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
    isFavourite: false,
    isBestseller: true,
    stock: 15,
    orderedQuantity: 1
  },
  {
    id: 5,
    name: 'Coffee Maker',
    description: 'Enjoy freshly brewed coffee at home with this advanced coffee maker.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1593369196682-6d8ec9ff3ae0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Appliances',
    isFavourite: false,
    isBestseller: true,
    stock: 12,
    orderedQuantity: 1
  },
  {
    id: 6,
    name: 'Smartwatch',
    description: 'Stay connected and track your health with this stylish smartwatch.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1617625802912-cde586faf331?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
    isFavourite: false,
    isBestseller: true,
    stock: 18,
    orderedQuantity: 1
  },
  {
    id: 7,
    name: 'Wireless Earbuds',
    description: 'Compact and wireless earbuds for an on-the-go audio experience.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1590658006821-04f4008d5717?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
    isFavourite: false,
    isBestseller: false,
    stock: 25,
    orderedQuantity: 1
  },
  {
    id: 8,
    name: 'Tablet',
    description: 'Versatile tablet for work and entertainment on the move.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
    isFavourite: false,
    isBestseller: false,
    stock: 8,
    orderedQuantity: 1
  },
  {
    id: 9,
    name: 'Robot Vacuum Cleaner',
    description: 'Effortlessly keep your home clean with this smart robot vacuum cleaner.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1603618090561-412154b4bd1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Appliances',
    isFavourite: false,
    isBestseller: false,
    stock: 10,
    orderedQuantity: 1
  },
  {
    id: 10,
    name: 'Gaming Console',
    description: 'Immerse yourself in the world of gaming with this powerful gaming console.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
    isFavourite: false,
    isBestseller: false,
    stock: 5,
    orderedQuantity: 1
  },
  {
    id: 11,
    name: 'T-Shirt',
    description: 'Comfortable cotton T-shirt for everyday wear.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Clothes',
    isFavourite: false,
    isBestseller: true,
    stock: 30,
    orderedQuantity: 1
  },
  {
    id: 12,
    name: 'Jeans',
    description: 'Classic denim jeans for a timeless look.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Clothes',
    isFavourite: false,
    isBestseller: false,
    stock: 20,
    orderedQuantity: 1
  },
  {
    id: 13,
    name: 'Sneakers',
    description: 'Stylish sneakers for a casual and trendy appearance.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Clothes',
    isFavourite: false,
    isBestseller: true,
    stock: 25,
    orderedQuantity: 1
  },
  
];
