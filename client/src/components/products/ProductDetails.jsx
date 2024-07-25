import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import commentsApi from '../../api/comments-api';
import { ThemeModeContext } from '../../contexts/ThemeContext';
import Modal from '../modal/Modal';
import { useGetOneProduct } from '../../hooks/useProducts';

export default function ProductDetails()
{
    const { productId } = useParams();
    const [mode, setMode] = useContext(ThemeModeContext);
    const [showModal, setShowModal] = useState(false);
    const [comment, setComment] = useState('');
    
    const [product, setProduct] = useGetOneProduct(productId);
    let numberTax = 0;

    const submitHandle = async (e) => {
        e.preventDefault();

        const newComment = await commentsApi.createComment(productId, "test@test.com", comment);

        setProduct(prevProduct => ({
            ...prevProduct,
            comments: {
                ...prevProduct.comments,
                [newComment._id]: newComment,
            }
        }))

        setShowModal(false);
        setComment('');
    }

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
                <h2 className={`flex pb-10 text-4xl font-bold tracking-tight text-gray-${mode=== false? "300" : "900"}`}>Product Details
                    <span className='pl-2' />
                    <button onClick={() => alert("To be implemented!")} className='min-w-[60px] px-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded'>Edit</button>
                    <span className='pl-2' />
                    <button onClick={() => alert("To be implemented!")} className='min-w-[60px] px-1 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded'>Delete</button>
                </h2>
                
                <div className="relative isolate grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_5px_20px_3px_rgba(611,181,237,10)] p-6 rounded-lg">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">

                        <div className="px-4 py-1 rounded-lg shadow-[0_5px_20px_-3px_rgba(611,181,237,5)] relative">
                            <img src={product.imageSrc} alt="Product" className="w-2/3 rounded object-cover mx-auto" />
                        </div>
                        <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto"></div>
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className={`text-2xl font-extrabold text-gray-${mode=== false ? "300" : "900"}`}>{product.name}</h2>

                        <div className="flex space-x-2 mt-4">
                            <h4 className={`text-gray-${mode=== false ? "300" : "900"} text-base`}>{product.comments === undefined ? "0": Object.keys(product.comments).length } Reviews</h4>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <p className={`text-gray-${mode=== false? "300" : "900"} text-3xl font-bold`}>{product.price}</p>
                            <p className="text-gray-400 text-base"><strike>{'$'+String(numberTax)}</strike> <span className="text-sm ml-1">Tax included</span></p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <h4 className={`text-gray-${mode=== false ? "300" : "900"} text-base`}>{product.details}</h4>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button onClick={() => alert("To be implemented!")} type="button" className="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-6 p-4 mx-auto"></div>
                
                <div className="relative isolate grid items-start grid-cols-1 lg:grid-cols-5 gap-6 shadow-[0_5px_20px_3px_rgba(611,181,237,10)] pt-10 p-9 rounded-lg">
                    <h4 className={`absolute p-3 text-2xl font-bold tracking-tight text-gray-${mode=== false? "300" : "900"}`}>Comments Section
                        <span className='pl-5'></span>
                        <button onClick={() => setShowModal(true)} type="button" className={`absolute relative text-sm px-2 py-1 bg-blue-600  hover:bg-blue-700 border border-blue-600 text-gray-200 rounded`}>Add comment</button>
                    </h4>
                    
                    {product.comments && Object.values(product.comments).map(comment => (
                        <div className='pt-6' key={comment._id}>
                            <div className="flex items-start">
                                <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                                <div className="ml-3">
                                    <h4 className={`text-sm font-bold text-gray-${mode=== false? "300" : "900"}`}>{comment.emailAddress}</h4>
                                    <p className={`text-sm mt-1 text-gray-${mode=== false? "300" : "900"}`}>{comment.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-white ">Add Comment</h2>
                </div>
                <form className="mb-6" onSubmit={submitHandle}>
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows="6"
                            name='comment'
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Write a comment..." 
                            required></textarea>
                    </div>
                    <input type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-blue-800"
                        value="Post Comment"/>
                    <span className='pl-2'/>
                    <button type="button"
                        onClick={() => setShowModal(false)}
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-blue-800">
                        Close
                    </button>
                </form>
            </Modal>
        </div>

    )
}