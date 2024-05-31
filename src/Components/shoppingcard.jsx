import React from "react";
import cat from "../assets/graycat.jpg"

const Shoppingcard = () => {
   return (
     <div className=" w-3/4 h-[500px] flex justify-center items-center m-auto my-10 rounded-md pt-10 pb-10 p-10 bg-gray-600"> 
      {/* First Box */ }
       <div className= " h-[390px] w-[300px] ml-10 bg-gray-300 rounded-l-lg justify-center">
          <h3 className=" text-3xl font-medium mr-14 text-gray-700 mt-10">Soft fleece <br></br>cat sweater</h3>
          <div className="flex" >
            <div className="text-yellow-500 ml-8 h-15 w-15 text-3xl  rounded-lg "> ⋆ ⋆ ⋆ ⋆ ⋆ </div>
            <div className="text-xs ml-5 mt-3 text-gray-500" > 345 ratings </div>
          </div>

          <ul>
            <li className="mb-8 ">
              <span className="font-small flex ml-8 mt-5 text-gray-700">Color
                <div className="bg-cyan-800 ml-3 h-5 w-5 rounded-md "></div>
                <div className="bg-gray-600 ml-2 h-5 w-5 rounded-md"></div>
                <div className="bg-pink-400 ml-2 h-5 w-5 rounded-md"></div>
                <div className="bg-yellow-600 ml-2 h-6 w-6 rounded-md"></div>
                <div className="bg-green-600 ml-2 h-5 w-5 rounded-md"></div>
              </span> 

              <span className="ml-8 text-sm flex mt-5 text-gray-700">Size
                <div className="ml-3 h-6 w-6 rounded-md border-2 border-gray-500">S</div>
                <div className="ml-2 h-5 w-5 rounded-md">M</div>
                <div className="ml-2 h-5 w-5 rounded-md">L</div>
                <div className="ml-2 h-5 w-5 rounded-md">XL</div>
              </span>
            </li>
          </ul>
        
          <div className="text-gray-600 font-xl font-bold flex ml-8"> $14.99</div>
            <div className="flex">
              <button type= "submit" className="bg-gray-600 text-white h-8 w-40 rounded-md mt-5 ml-8"> Order now</button>
              <div className="text-gray-700 h-9 w-9 text-3xl   rounded-lg ml-2 mt-4 text-center border-2 border-gray-500"> ♥ </div>
            </div>
        </div>
       
        {/* Second Box */ }
        <div className= " w-[300px] h-[390px] mr-12 rounded-r-lg   bg-white">
           { <img src={cat} alt="A gray cat" className=" w-64 p-3 mt-10 ml-5" />}
          <div className="flex justify-center">
            <div className="mt-8 ml-2 h-3 w-3"> ‹ </div>
            <div className="bg-gray-300 mt-10 ml-2 h-3 w-3 rounded-sm"></div>
            <div className="bg-gray-300 mt-10 ml-2 h-3 w-3 rounded-sm "></div>
            <div className="bg-gray-300 mt-10 ml-2 h-3 w-3 rounded-sm "></div>
            <div className="bg-gray-600 mt-10 ml-2 h-3 w-3 rounded-sm"></div>
            <div className="bg-gray-300 mt-10 ml-2 h-3 w-3 rounded-sm"></div>
            <div className=" mt-8 ml-2 h-3 w-3"> › </div>
          </div>
        </div>

      </div>

    ); 
};

export default Shoppingcard;