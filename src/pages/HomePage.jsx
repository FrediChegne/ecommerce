import React from "react";
import Product from "../components/Product/Product";
import useAppState from "../hooks/useAppState";

const HomePage = () => {

  const {products} = useAppState();
  
  return (
    <div className="container-home">
      {products.map((product) => (
            <Product id={product.id} imageUrl={product.thumbnail} key={product.id}/>
          ))}
        
    </div>
  );
};

export default HomePage;
