import {  Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeModeContext } from '../../contexts/ThemeContext';

const navigation = [
    { name: 'Home', to: '/' },
    { name: 'All Product', to: '/all-products' },
    { name: 'Your Products', to: '#' },
    { name: 'About Us', to: '/about-us' },
  ]


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mode, setMode] = useContext(ThemeModeContext);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-${mode === false? "300" : "900"}`}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} className={`text-sm font-semibold leading-6 text-gray-${mode === false? "300" : "900"}`}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <button
                type="button"
                onClick={() => setMode(prevMode => !prevMode)}
                className={`pr-10 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-${mode === false? "300" : "900"}`}
                >
                  <span className="sr-only">Dark menu</span>
                  {mode === false ? 
                    <SunIcon aria-hidden="true" className="h-6 w-6" />
                    :
                    <MoonIcon aria-hidden="true" className="h-6 w-6" />
                }
                </button>
            <Link to="/login" className={`text-sm font-semibold leading-6 text-gray-${mode === false? "300" : "900"}`}>
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-${mode === false? "black" : "white"} px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className={`-m-2.5 rounded-md p-2.5 text-gray-${mode === false? "300" : "900"}`}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-10/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-${mode === false? "300" : "900"} hover:bg-gray-600`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-${mode === false? "300" : "900"} hover:bg-gray-600`}
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  )
}
