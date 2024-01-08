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
      <>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-7xl mx-auto gap-y-10 p-10 animate-fade-down">
        {displayProducts}
      </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"flex items-center justify-center space-x-4 mt-8"} 
          previousLinkClassName={"bg-blue-500 text-white px-4 py-2 rounded"} 
          nextLinkClassName={"bg-blue-500 text-white px-4 py-2 rounded"} 
          disabledClassName={"text-gray-400 cursor-not-allowed"} 
          activeClassName={"border text-primary p-2"} 
        />
      </>
    );
  } else return <h1>We don't have this product</h1>;
};

export default ProductsList;
