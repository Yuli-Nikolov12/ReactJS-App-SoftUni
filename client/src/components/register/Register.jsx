import { Link } from "react-router-dom";
import { useState, useContext, useCallback } from 'react';
import { ThemeModeContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from "../../hooks/useForm";

export default function Register() {
    const [mode, setMode] = useContext(ThemeModeContext);

    const { onRegister } = useContext(AuthContext);
    
    const { values, changeHandler, submitHandler} = useForm({email: '', password: '', confPassword: '', username: ''}, onRegister);

    const [errors, setErrors] = useState({
        requiredEmail: false,
        testEmail: false,
        requiredPassword: false,
        requiredRepeatPassword: false,
        username: false,
    });
    
    const onEmailBlur = useCallback(() => {
        const rgx = /^(.+)@(.+)$/;

        if (values.email === "") {
            setErrors(state => ({...state, requiredEmail:true, testEmail: false}));
        } else  if (!rgx.test(values.email)) {
            setErrors(state => ({...state, requiredEmail:false, testEmail: true}));
        } else {
            setErrors(state => ({...state, requiredEmail: false, testEmail: false}));
        };
    }, [values]);
    
    const onPasswordBlur = useCallback(() => {
        if (values.password === "") {
            setErrors(state => ({...state, requiredPassword: true}));
        } else {
            setErrors(state => ({...state, requiredPassword: false}));
        }
    }, [values]);
    
    const onConfPasswordBlur = useCallback(() => {
        if (values.confPassword === "") {
            setErrors(state => ({...state, requiredRepeatPassword: true}));
        } else {
            setErrors(state => ({...state, requiredRepeatPassword: false}));
        }
    }, [values]);

    const onUsernameBlur = useCallback(() => {
        if (values.username === "") {
            setErrors(state => ({...state, username: true}));
        } else {
            setErrors(state => ({...state, username: false}));
        }
    }, [values]);

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
                    <h2 className={`mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-${mode=== false? "200" : "900"}`}>
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
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email" className={`block text-sm font-medium leading-6 text-gray-${mode=== false? "200" : "900"}`}>
                        Email address
                        </label>
                        <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={changeHandler}
                            value={values.email}
                            onBlur={onEmailBlur} 
                            autoComplete="email"
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.requiredEmail && <span style={{color: "red"}}>This field is required</span>}
                        {errors.testEmail && <span style={{color: "red"}}>Enter valid email</span>}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className={`block text-sm font-medium leading-6 text-gray-${mode=== false? "200" : "900"}`}>
                            User Name
                        </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            onChange={changeHandler}
                            value={values.username}
                            onBlur={onUsernameBlur} 
                            autoComplete="username"
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.requiredRepeatPassword && <span style={{color: "red"}}>This field is required</span>}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className={`block text-sm font-medium leading-6 text-gray-${mode=== false? "200" : "900"}`}>
                            Password
                        </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={changeHandler}
                            value={values.password}
                            onBlur={onPasswordBlur} 
                            autoComplete="current-password"
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.requiredPassword && <span style={{color: "red"}}>This field is required</span>}
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className={`block text-sm font-medium leading-6 text-gray-${mode=== false? "200" : "900"}`}>
                            Confirm Password
                        </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="confirm-password"
                            name="confPassword"
                            type="password"
                            onChange={changeHandler}
                            value={values.confPassword}
                            onBlur={onConfPasswordBlur} 
                            autoComplete="current-password"
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.requiredRepeatPassword && <span style={{color: "red"}}>This field is required</span>}
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
  