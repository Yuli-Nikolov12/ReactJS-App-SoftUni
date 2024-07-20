import { Link } from "react-router-dom";

export default function Register() {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center py-20 lg:px-8">
            <div className="relative isolate h-screen px-32 py-32">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
                    Register an account
                    </h2>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl "
                    >
                        <div
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[4/3] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        />
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
                        Email address
                        </label>
                        <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
        
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
                            Password
                        </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
                            Confirm Password
                        </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="confirm-password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Create an account
                        </button>
                    </div>
                    </form>
        
                    <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Click Here to Login!
                    </Link>
                    </p>
                </div>
          </div>
        </div>
      </>
    )
  }
  