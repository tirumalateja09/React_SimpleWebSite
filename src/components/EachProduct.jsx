import React from 'react';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
const EachProduct = ({ imageUrl, brand, name, collection, price, pricesign, productcolours,rating }) => {
    const formattedCurrency = formatter.format(price)
    return (
     
         <div className=" flex flex-col p-4 border border-gray-200 rounded-lg shadow-sm w-72 h-[480px] transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className='flex justify-center items-center mt-8'><img src={imageUrl} alt={`${name}`} className="w-36 h-36 object-cover mb-4 " /></div>
            <h3 className="text-lg font-semibold my-3">{brand}</h3>
            <h3 className="text-md font-semibold leading-6 my-3">{name}</h3>
            {/* <p className="text-sm  my-2">&#36;{price}</p> */}
            <p className="text-sm  my-2">{formattedCurrency}</p>
            <p className="text-sm  my-2">{ (rating!=null? rating.toFixed(1):"")}</p>
             
            <div className="grid  grid-cols-10 gap-1 ">
                { productcolours.length > 0 && (
                    productcolours.map((color, index) => (
                        <div
                            key={index}
                            className="w-4 h-4  rounded-full"
                            style={{ backgroundColor: color.hex_value }}
                        ></div>
                    ))
                )}
            </div>
        </div>
      
    );
};

export default EachProduct;
