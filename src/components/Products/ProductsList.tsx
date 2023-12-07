import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import { useProducts } from "../../context/ProductsProvider";
import ReactPaginate from "react-paginate";

const ProductsList: React.FC = () => {
  const { productsList } = useProducts();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const productsPerPage = 8; // liczba produktów na stronie

  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = productsList
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => <SingleProduct key={product.id} {...product} />);

  const pageCount = Math.ceil(productsList.length / productsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  if (productsList.length) {
    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {displayProducts}
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"flex items-center justify-center space-x-4"} 
          previousLinkClassName={"bg-blue-500 text-white px-4 py-2 rounded"} 
          nextLinkClassName={"bg-blue-500 text-white px-4 py-2 rounded"} 
          disabledClassName={"text-gray-400 cursor-not-allowed"} 
          activeClassName={"bg-blue-700 text-white"} 
        />
      </div>
    );
  } else return <h1>We dont have this product</h1>;
};

export default ProductsList;
