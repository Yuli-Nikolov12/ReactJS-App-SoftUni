import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ThemeModeContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthContext';
import { useGetOneProduct } from '../../hooks/useProducts';
import productsAPI from '../../api/products-api';

export default function ProductEdit() {

    const { productId } = useParams();
    const [mode, setMode] = useContext(ThemeModeContext);
    const {isAuthenticated, email, productOwner} = useContext(AuthContext);
    const [currentProduct, setCurrentProduct] = useGetOneProduct(productId);

    const navigate = useNavigate();

    const submitHandle = async (e) => {
        e.preventDefault();

        await productsAPI.editProduct(productId, currentProduct.name, currentProduct.price, currentProduct.imageSrc, currentProduct.details);

        navigate(`/all-products/${productId}/details`);
    }

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
            <div className="mx-auto max-w-2xl text-center px-4 py-16 sm:px-6 sm:pt-24 pb-2 lg:max-w-7xl lg:px-8">
                <h2 className={`pb-10 text-4xl font-bold tracking-tight text-gray-${mode=== false? "300" : "900"}`}>Edit Product</h2>
            </div>
            {isAuthenticated && productOwner === currentProduct._ownerId ? 
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={submitHandle} className="space-y-6">
                    <div>
                        <label htmlFor="productName" className={`block text-sm font-medium leading-6 text-gray-${mode=== false? "300" : "900"}`}>
                        Product Name
                        </label>
                        <div className="mt-2">
                        <input
                            id="productName"
                            name="name"
                            type="text"
                            onChange={(e) => setCurrentProduct(prev => ({...prev,[e.target.name]:e.target.value}))}
                            value={currentProduct.name ? currentProduct.name : ''}
                            required
                            autoComplete="productName"
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="price" className={`block text-sm font-medium leading-6 text-gray-${mode=== false? "300" : "900"}`}>
                            Price
                        </label>
                        <div className="text-sm">
                        </div>
                        </div>
                        <div className="mt-2">
                        <input
                            id="price"
                            name="price"
                            type="text"
                            onChange={(e) => setCurrentProduct(prev => ({...prev,[e.target.name]:e.target.value}))}
                            value={currentProduct.price ? currentProduct.price : ''}
                            required
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="imageSrc" className={`block text-sm font-medium leading-6 text-gray-${mode=== false? "300" : "900"}`}>
                            Image Address Src
                        </label>
                        <div className="text-sm">
                        </div>
                        </div>
                        <div className="mt-2">
                        <input
                            id="imageSrc"
                            name="imageSrc"
                            type="text"
                            onChange={(e) => setCurrentProduct(prev => ({...prev,[e.target.name]:e.target.value}))}
                            value={currentProduct.imageSrc ? currentProduct.imageSrc : ''}
                            required
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="detailsInfo" className={`block text-sm font-medium leading-6 text-gray-${mode=== false? "300" : "900"}`}>
                            Details
                        </label>
                        <div className="text-sm">
                        </div>
                        </div>
                        <div className="mt-2">
                        <textarea id="detailsInfo" rows="4"
                            name='details'
                            onChange={(e) => setCurrentProduct(prev => ({...prev,[e.target.name]:e.target.value}))}
                            value={currentProduct.details ? currentProduct.details : ''}
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Write a details..." 
                            required></textarea>
                        </div>
                    </div>

                    <input type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-blue-800"
                        value="Edit Product"/>
                    <span className='pl-2'/>
                    <button type="button"
                        onClick={() => navigate(`/all-products/${productId}/details`)}
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-blue-800">
                        Close
                    </button>
                </form>
            </div>
            : 
                <div>
                    {isAuthenticated && productOwner !== currentProduct._ownerId ?
                        <h2 className={`pb-10 text-4xl text-center font-bold tracking-tight italic text-gray-${mode=== false? "300" : "900"}`}>You need to be the owner of this product to be able to edit!</h2> 
                    :
                        <h2 className={`pb-10 text-4xl text-center font-bold tracking-tight italic text-gray-${mode=== false? "300" : "900"}`}>You need to Login to be able to edit this product!</h2> 
                    }
                </div>
            }
            
        </div>
    )
}