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
      <div className="mt-[50px] flex justify-center items-center">
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
          <div className="text-3xl font-bold">Caricamento dati in corso...</div>
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

          .map((fruit) => (
            <div className="border border-neutral-300 border-solid rounded-lg p-10">
              <p>
                <img src={fruit.image} className="w-60 h-60" alt={fruit.name} />
              </p>
              <p className="text-3xl font-bold mt-10">{fruit.name}</p>
              <p className="text-2xl mt-3">{fruit.price} €</p>
              <div className="mt-3 text-gray-500">
                <div>calorie: {fruit.nutritions.calories}</div>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addItem({
                      ...fruit,
                      cartId: nanoid(),
                    })
                  )
                }
                className="bg-lime-500 rounded-lg p-3 text-white w-[100%] mt-5"
              >
                Acquista
              </button>
              <button
                onClick={() => {
                  setPopUpData(fruit);
                  handlePopUp();
                }}
                className="bg-orange-400 rounded-lg p-3 text-white w-[100%] mt-3"
              >
                Dettagli
              </button>
            </div>
          ))}
        {popUp && <PopUpFruits fruit={popUpData} state={setPopUp} />}
      </div>
    </>
  );
};

export default Product;
