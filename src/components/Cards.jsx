import React, { useState } from "react";

import { data } from "./Data";
import "../ionicon.css";

const Cards = () => {
    const [bookmarks, setBookmarks] = useState(data.map(() => false));

    const toggleBookmark = (index) => {
        const updatedBookmarks = [...bookmarks];
        updatedBookmarks[index] = !updatedBookmarks[index];
        setBookmarks(updatedBookmarks);
    };

   

    return (
    <>
    
  
                 {data.map((item, index) => (


                        
                    <div key={item.id} className="mt-20 flex flex-row justify-between ">
                        <div className="w-[320px] h-[310px] shadow-2xl bg-gray-400 rounded-2xl flex justify-center pt-1 flex-row  ">
                            <div style={{ backgroundImage: `url(${item.URL})` }} className="relative w-[310px] h-[300px] flex justify-between rounded-2xl bg-cover px-4 pt-5">
                                <h1 className="font-bold font-Roboto text-white">
                                    
                                    {item.price}
                                    
                                </h1>
                                
                                <div onClick={() => toggleBookmark(index)}>
                                    <ion-icon name={`${bookmarks[index] ? 'bookmark' : 'bookmark-outline'}`}>

                                    </ion-icon>
                                </div>

                                <div className="absolute z-10 inset-10 flex items-center justify-center">
                                    <h2 className="font-bold text-6xl font-Roboto text-white">
                                        
                                        {item.names}
                                    
                                    </h2>
                                </div>
                                
                                <div className="mt-48 p-10 absolute inset-15 flex justify-end items-end">
                                    <button className="w-[200px] h-[30px] bg-black rounded-xl hover:bg-white duration-700 text-white hover:text-black">
                                        
                                        {item.button}
                                    
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
        </>
    );
   
};

export default Cards;