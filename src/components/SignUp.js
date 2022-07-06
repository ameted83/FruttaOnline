import * as React from "react";
import { addUser } from "../states/signUpSlice";
import { useDispatch, useSelector } from "react-redux";
import Welcome from "./Welcome";

export const SignUp = ({ login }) => {
  const array = useSelector((state) => state.user.users);
  console.log(array);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = event.target.userName;
    const userPassword = event.target.userPassword;
    const userEmail = event.target.userEmail;

    dispatch(
      addUser({
        name: userName.value,
        password: userPassword.value,
        email: userEmail.value,
        registrationDate: new Date().toLocaleDateString(),
      })
    );

    event.target.reset();
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen backdrop-brightness-[.2]">
      <section className="p-6 text-black">
        <form
          onSubmit={handleSubmit}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-zinc-300 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            Registrati
          </h2>
          <div>
            <label for="name" className="block mb-1 ml-1">
              Nome
            </label>
            <input
              onChange={() => "BENVENUTI"}
              name="userName"
              id="name"
              type="text"
              placeholder="Scrivi il tuo Nome e Cognome"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700  "
            />
          </div>
          <div>
            <label for="email" className="block mb-1 ml-1">
              Password
            </label>
            <input
              name="userPassword"
              id="password"
              type="password"
              placeholder="Password"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700  "
            />
          </div>
          <div>
            <label for="message" className="block mb-1 ml-1">
              Email
            </label>
            <input
              name="userEmail"
              id="message"
              type="email"
              placeholder="scrivi la tua email"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-green-700 "
            ></input>
          </div>
          <div className="flex justify-around">
            <button
              onClick={<Welcome />}
              type="submit"
              className=" mt-5 px-4 py-2 font-bold rounded shadow focus:outline-none hover:ring focus:ring-opacity-50 hover:ring-white bg-green-500"
            >
              Registrati
            </button>
            <button
              onClick={() => login(false)}
              className=" mt-5 px-4 py-2 font-bold rounded shadow focus:outline-none hover:ring focus:ring-opacity-50 hover:ring-white bg-green-500"
            >
              Chiudi
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};
