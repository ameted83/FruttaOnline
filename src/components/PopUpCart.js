import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItem } from "../states/cartSlice";
import { useDispatch } from "react-redux";

const PopUpCart = () => {
  const modalCart = useSelector((state) => state.cart);
  // console.log(modalCart);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div className="z-10 fixed flex justify-center align-center w-screen h-scrren top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[500px] bg-orange-400 flex flex-col p-3 rounded-xl">
            {modalCart.fruits.map((fruit, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-around items-center text-center text-white text-lg"
                >
                  <div className="w-[33%]">
                    <img
                      className="w-[50px] text-center mt-2"
                      src={fruit.image}
                      alt={fruit.name}
                    />
                  </div>
                  <div className="w-[33%]">{fruit.name}</div>
                  <div className="w-[33%]">{fruit.price}</div>
                  <div>
                    <DeleteIcon onClick={() => dispatch(removeItem(fruit))} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpCart;
