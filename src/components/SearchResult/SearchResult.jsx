import React from "react";

import ProductDetail from "../ProductDetail/ProductDetail";
import "./styles.css";

const SearchResult = ({ products }) => {

  return (
    <>
      <h2>Results</h2>
      <div className="container-results">
        <div>

          {products.length > 0 ? products.map((p) => (
            <ProductDetail product={p} key={p.id} />
          )) : <div>
                <p>Sorry, no results were found</p>
            </div>}
        </div>
      </div>
    </>
  );
};

export default SearchResult;
