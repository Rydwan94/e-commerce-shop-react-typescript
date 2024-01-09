import Image1 from "../assets/Images/HomePage/1.png";
import Image2 from "../assets/Images/HomePage/2.png";

import clothes from "../assets/Images/HomePage/clothes.png";
import toys from "../assets/Images/HomePage/toys.png";
import electronics from "../assets/Images/HomePage/electronics.png";
import appliances from "../assets/Images/HomePage/appliances.png";

export const mainBanerImages = [Image1, Image2];


export const ProductCategoryImages = [
    {
        id:0,
        classProp: "relative col-span-3 row-span-6 max-md:min-w-[50%]",
        buttonMessage: "Clothes",
        src: clothes
    },
    {
        id:1,
        classProp: "relative col-span-2 row-span-6 col-start-4 max-md:min-w-[50%] ",
        buttonMessage: "Electronics",
        src: electronics,
    },
    {
        id:2,
        classProp: "relative col-span-2 row-span-3 col-start-6 max-md:min-w-[50%]",
        buttonMessage: "Toys",
        src: toys
    },
    {
        id:3,
        classProp:"relative col-span-2 row-span-3 col-start-6 row-start-4 max-md:min-w-[50%]",
        buttonMessage: "Appliances",
        src: appliances
    }
]