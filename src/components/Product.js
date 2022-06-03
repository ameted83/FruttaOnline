/* eslint-disable array-callback-return */
import React, { useState } from "react";
import PopUpFruits from "../components/PopUpFruits";
import { useDispatch } from "react-redux";
import { addItem } from "../states/cartSlice";
import { nanoid } from "nanoid";
import { FruitsApi } from "../hooks/useFruitsApi";

const Product = () => {
  const [product, loading] = FruitsApi();
  const [search, setSearch] = useState("");
  const [popUp, setPopUp] = useState(false);
  // console.log(popUp);
  const [popUpData, setPopUpData] = useState(null);
  // console.log(popUpData);
  const handlePopUp = () => setPopUp(!popUp);

  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-[150px] flex justify-center items-center">
        <input
          className=" rounded-lg p-3 w-[90%] border-0 mt-2 mb-4 outline-0 text-lg bg-slate-100"
          onChange={(event) => setSearch(event.target.value)}
          type="search"
          id="search"
          placeholder="Cerca il tuo frutto..."
        ></input>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 mx-auto p-20 font-sans">
        {loading ? (
          <div className="text-3xl font-bold text-white">
            Caricamento dati in corso...
          </div>
        ) : (
          false
        )}

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
            <div key={index} className="shadow-lg rounded-lg p-10">
              <div className="flex items-center justify-center">
                <img
                  src={fruit.image}
                  className="w-[190px] h-[170px] object-scale-down"
                  alt={fruit.name}
                />
              </div>
              <p className="text-3xl font-bold mt-10">{fruit.name}</p>
              <p className="text-2xl mt-3">{fruit.price} €</p>
              <div className="mt-3 text-gray-500">
                <div>calorie: {fruit.nutritions.calories}</div>
              </div>
              <div className="flex items-center justify-between   flex-wrap mt-5">
                <button
                  onClick={() =>
                    dispatch(
                      addItem({
                        ...fruit,
                        cartId: nanoid(),
                      })
                    )
                  }
                  className="bg-lime-500 rounded-lg p-2 text-white"
                >
                  Acquista
                </button>
                <button
                  onClick={() => {
                    setPopUpData(fruit);
                    handlePopUp();
                  }}
                  className="bg-orange-400 rounded-lg p-2 text-white"
                >
                  Dettagli
                </button>
              </div>
            </div>
          ))}
        {popUp && <PopUpFruits fruit={popUpData} state={setPopUp} />}
      </div>
    </>
  );
};

export default Product;
