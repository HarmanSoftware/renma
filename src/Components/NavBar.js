import React from 'react'
import {useLocation,Link } from "react-router-dom";
import { Disclosure, Menu } from '@headlessui/react';
import {MenuIcon, XIcon } from '@heroicons/react/outline';

export default function NavBar() {
  
  const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/', current: true},
        { name: 'About', href: '/about', current: false },
        { name: 'Services', href: '/services', current: false },
        { name: 'Renma', href: '/renma', current: false },
        { name: 'Contact', href: '/contact', current: false },
        { name: 'Appointment', href: '/bookAppointment', current: false },
      ]
    
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

  return (
    <>
    <Disclosure as="nav" className="bg-purple">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-lightmauve hover:bg-mauve hover:text-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="RenmaLogo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Renmalogo"
                  />
                  <p className='text-white text-xl font-medium px-2'>Renma</p>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        as={Link}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href
                            ? 'bg-white'
                            : ' text-white hover:bg-mauve hover:text-black',
                          'px-1 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined} 
                      >
                       
                        {item.name}
                      </Link>
                    ))}                    
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <button className="bg-white px-1 py-1 font-medium text-base bg-white-800 flex rounded-md hover:bg-mauve">
                      Mode
                    </button>
                  </div>                  
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-center">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? 'bg-white'
                      : 'text-white hover:bg-mauve hover:text-black',
                    'block px-1 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  )
}