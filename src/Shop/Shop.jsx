import React, { useState } from "react";
import Pageheader from "../components/Pageheader";
import Data from "../products.json";
import Productcards from "./Productcards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const showResults = "showing 01-12 of 150 Results";

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  //   pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLAstProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLAstProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLAstProduct
  );

  //   function to change the current page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //filter products based on category
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((val) => val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });

    setSelectedCategory(curcat);
    setProducts(newItem);
  };
  return (
    <div>
      <Pageheader title="our shop page" curPage="shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title */}
                <div className="shop-title d-flex flex-wrap justify-content-between ">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                {/* product cards */}
                <div>
                  <Productcards
                    GridList={GridList}
                    products={currentProducts}
                  />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activepage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
