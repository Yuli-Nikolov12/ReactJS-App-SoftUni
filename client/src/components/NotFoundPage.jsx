import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ThemeModeContext } from '../contexts/ThemeContext';

export default function NotFoundPage() {
    const [mode, setMode] = useContext(ThemeModeContext);

    return (
      <>
        <main className="min-h-full px-6 py-24 sm:py-32 lg:px-8">
            <div  className="text-center p-20 ">
                <p className="text-3xl text-base font-semibold text-indigo-600">404</p>
                <h1 className={`mt-4 text-3xl font-bold tracking-tight text-gray-${mode=== false? "200" : "900"} sm:text-5xl`}>Page not found</h1>
                <p className={`mt-6 text-base leading-7 text-gray-${mode=== false? "200" : "900"}`}>Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link to="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                    </div>
            </div>
            <div
            aria-hidden="true"
            className="overflow-hidden blur-3xl "
            >
                <div
                style={{
                clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>
        </main>
      </>
    )
  }