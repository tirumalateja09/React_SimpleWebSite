import { useEffect, useState } from 'react';
import EachProduct from './EachProduct';
import axios from 'axios';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [SortedProducts,setSortedProducts]=useState(true)

    useEffect(() => {
        getProducts();
    }, [setProducts]);

    async function getProducts() {
        try {
          
            const res = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=nail_polish");
            setProducts(res.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    console.log(products);

    const items = products.map((product, index) => (
        <EachProduct
            key={index}
            imageUrl={product.image_link}
            brand={product.brand}
            name={product.name}
            collection={product.product_type}
            price={product.price}
            pricesign={product.price_sign}
            rating={product.rating}
            productcolours={product.product_colors} // here passing entire array 
        />
    ));

    // const Sorteditems = SortedProducts.map((product, index) => (
    //     <EachProduct
    //         key={index}
    //         imageUrl={SortedProducts.image_link}
    //         brand={SortedProducts.brand}
    //         name={SortedProducts.name}
    //         collection={SortedProducts.product_type}
    //         price={SortedProducts.price}
    //         pricesign={SortedProducts.price_sign}
    //         rating={SortedProducts.rating}
    //         productcolours={SortedProducts.product_colors} // here passing entire array 
    //     />
    // ));
 
    const sortData=()=>{
        setProducts(
            (
                products.filter((ele)=>{
                  return ele.rating >3
                })
            )
        )
   
    }
    return (
        <>
    <div className='h-[1400px]'>
    <div className="p-4">
      <h1 className="text-4xl font-semi-bold text-center mt-12 mb-14">Listing Nail polishes</h1>
      <p className="text-lg text-center mb-4">Product type: Nail polish</p>
      <p className="text-lg text-center mb-8">Product tags: Vegan</p>
      <hr className="border-t-2 border-gray-500 mt-6 mx-12" />
    </div>
    <button className='p-3  bg-blue-300 rounded-full cursor-pointer mx-14 my-5' onClick={sortData}>Sort by 3.5</button>
         <div className='grid grid-cols-4 mx-20 '>
          
           {items}
         </div>
    </div>
        </>
       
    );
}

export default Products;
