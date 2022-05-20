import { FruitsApi } from "../hooks/useFruitsApi";
import React, { useState } from "react";

const Product = () => {
  const [product, loading] = FruitsApi();
  const [search, setSearch] = useState("");
  console.log(product);
  return (
    <div className="max-w-[1100px] mx-auto py-8 w-full my-20 ">
      <div className="mb-4 flex justify-center items-center">
        <input
          className=" rounded-lg p-2 w-[90%] border-0 mt-2 mb-4 outline-0 text-lg bg-slate-100"
          onChange={(event) => setSearch(event.target.value)}
          type="search"
          id="search"
          placeholder="Cerca il tuo frutto..."
        ></input>
      </div>
      <div className="relative grid mx-auto justify-center items-center w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {loading ? <h1>Caricamento prodotti in corso...</h1> : false}
        {product
          .filter((fruit) => {
            if (search === "") {
              return fruit;
            } else if (
              fruit.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return fruit;
            }
          })
          .map((fruit, index) => (
            <div
              key={index}
              className="flex flex-col mx-auto justify-center items-center w-[250px] "
            >
              <div>
                <h1 className="font-bold text-2xl">{fruit.name}</h1>
              </div>
              <div
                className="w-full h-[150px] bg-contain bg-center bg-no-repeat overflow-hidden"
                style={{ backgroundImage: "url(" + fruit.image + ")" }}
              ></div>
              <div className="mt-4 flex items-center justify-center flex-wrap">
                <p className="text-sm mb-3 mx-2 bg-slate-300 p-1 rounded-md mr-2">
                  Carboidrati: {fruit.nutritions.carbohydrates}
                </p>
                <p className="text-sm mb-3 mx-2 bg-slate-300 p-1 rounded-md mr-2">
                  Calorie: {fruit.nutritions.calories}
                </p>
                <p className=" text-sm mb-3 mx-2 bg-slate-300 p-1 rounded-md mr-2">
                  Grassi: {fruit.nutritions.fat}%
                </p>
                <p className="text-sm mb-3 mx-2 bg-slate-300 p-1 rounded-md mr-2">
                  Prezzo:{fruit.price}
                </p>
              </div>
              <div className="mt-4 flex justify-center items-center">
                <button className="p-2 bg-green-700 ml-4 rounded-lg text-white">
                  Acquista
                </button>
                <button className="p-2 bg-orange-700 ml-4 rounded-lg text-white">
                  Dettagli
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
