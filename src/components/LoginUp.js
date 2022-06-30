import * as React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import CloseIcon from "@mui/icons-material/Close";

export const LoginUp = () => {
  return (
    // <div className="bg-grey  text-center rounded shadow fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen backdrop-brightness-[.2]">
    //   <form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-zinc-300 ng-untouched ng-pristine ng-valid">
    //     <div>
    //       <h2 className="w-full text-3xl font-bold leading-tight">
    //         Login Utente
    //       </h2>
    //     </div>
    //     <div className=" flex flex-col text-center">
    //       <div>
    //         <div className="flex justify-center p-3">
    //           <PersonIcon />
    //           <input className="" placeholder="inserisci il tuo username" />
    //         </div>
    //       </div>
    //       <div>
    //         <div className="flex justify-center p-3">
    //           <LockIcon />
    //           <input placeholder="inserisci la tua password" />
    //         </div>
    //       </div>
    //       <div className="text-black rounded-[10px] bg-green-500 w-[50%] self-center m-5 hover:bg-white cursor-pointer ">
    //         <button>Accedi</button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen backdrop-brightness-[.2]">
      <div className="font-sans">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">
              <div className="mt-6">
                <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-700"></div>
                <form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-zinc-300 ng-untouched ng-pristine ng-valid">
                  <div className="mx-auto max-w-lg">
                    <div className="text-end">
                      <button className="text-[15px] hover:text-red-700">
                        <CloseIcon />
                      </button>
                    </div>
                    <h2 className="text-center text-[30px]">Login</h2>
                    <div className="py-9">
                      <span className="px-1 text-sm text-green-600">
                        <PersonIcon className="mb-4 text-green-600" />
                        Username
                      </span>
                      <input
                        placeholder="Scrivi il tuo username"
                        type="text"
                        className="text-md block px-3 py-2  rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                    <div className="py-2" x-data="{ show: true }">
                      <span className="px-1 text-sm text-green-600">
                        <LockIcon className="mb-4 text-green-600" />
                        Password
                      </span>
                      <div className="relative">
                        <input
                          placeholder="scrivi la tua password"
                          type="show ? 'password' : 'text'"
                          className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white
                focus:border-gray-600
                focus:outline-none"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-start text-[10px]">
                      Hai dimenticato la password ?
                    </span>
                  </div>
                  <div className="text-center pt-4">
                    <button className=" w-[50%] border rounded-[10px] bg-green-600 p-2 hover:bg-white">
                      ACCEDI
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
