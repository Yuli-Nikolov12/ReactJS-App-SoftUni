import { useContext, useEffect, useState } from 'react';
import { ThemeModeContext } from '../../contexts/ThemeContext';
import productsAPI from '../../api/products-api';
import { useParams } from 'react-router-dom';

export default function ProductDetails()
{
    const [mode, setMode] = useContext(ThemeModeContext);
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    let numberTax = 0;

    useEffect(() => {
        (async () => {
            const result = await productsAPI.oneProduct(productId);

            setProduct(result);
        })()
    },[]);

    numberTax = product.price?.slice(1,5);
    numberTax = Number(numberTax) + Number(100);
    return(
        <div className="relative isolate pt-10 min-h-screen">
            <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className={`pb-10 text-4xl font-bold tracking-tight text-gray-${mode=== false? "300" : "900"}`}>Product Details</h2>
                
                <div className="relative isolate grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">

                        <div className="px-4 py-1 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <img src={product.imageSrc} alt="Product" className="w-2/3 rounded object-cover mx-auto" />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className={`text-2xl font-extrabold text-gray-${mode=== false? "300" : "900"}`}>{product.name}</h2>

                        <div className="flex space-x-2 mt-4">
                            <h4 className={`text-gray-${mode=== false? "300" : "900"} text-base`}>500 Reviews</h4>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <p className={`text-gray-${mode=== false? "300" : "900"} text-3xl font-bold`}>{product.price}</p>
                            <p className="text-gray-400 text-base"><strike>{'$'+String(numberTax)}</strike> <span className="text-sm ml-1">Tax included</span></p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button onClick={() => alert("To be implemented!")} type="button" className="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}