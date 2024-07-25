import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ThemeModeContext } from '../../contexts/ThemeContext';
import { useForm } from "../../hooks/useForm";
import { useLogin } from '../../hooks/useAuth';

export default function Login() {
    const [mode, setMode] = useContext(ThemeModeContext);
    
    const login = useLogin();
    const { values, changeHandler, submitHandler} = useForm(
        {email: '', password: ''},
        async ({email, password}) => {
            try {
                await login(email,password)
            }
            catch(err) {
                console.log(err.massage)
            }
        }
    );
 
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
                    <h2 className={`mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-${mode=== false? "300" : "900"}`}>
                    Log in to your account
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
                    <form className="space-y-6" onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="email" className={`block text-sm font-medium leading-6 text-gray-${mode=== false? "300" : "900"}`}>
                            Email address
                            </label>
                            <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={changeHandler}
                                value={values.email}
                                required
                                autoComplete="email"
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
        
                        <div>
                            <div className="flex items-center justify-between">
                            <label htmlFor="password" className={`block text-sm font-medium leading-6 text-gray-${mode=== false? "300" : "900"}`}>
                                Password
                            </label>
                            <div className="text-sm">
                            </div>
                            </div>
                            <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={changeHandler}
                                value={values.password}
                                required
                                autoComplete="current-password"
                                className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
            
                        <div>
                            <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                            Sign in
                            </button>
                        </div>
                    </form>
        
                    <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Click Here to Register!
                    </Link>
                    </p>
                </div>
          </div>
        </div>
      </>
    )
  }
  