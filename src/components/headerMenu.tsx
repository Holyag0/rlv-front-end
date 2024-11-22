'use client'
import Image from 'next/image'
import Epaper from '@/assets/e-paper.png'
import { SidebarProvider,  useSidebar } from "@/components/ui/sidebar"
import {LayoutGrid,Menu } from 'lucide-react'
const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Soluções', href: '#', current: true },
 
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function CustomTrigger({ className }) {
  const { toggleSidebar } = useSidebar();
  return (
    <button className={className} onClick={toggleSidebar}>
      <Menu/>
    </button>
  );
}
export default function Header() {
  return (
    <>
      <div className="h-full w-full z-50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-300">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex shrink-0 items-center">
                  <CustomTrigger className="-ml-8 mt-2"/>
                  <Image
                    alt="Your Company"
                    src={Epaper}                    
                    className="block h-8 w-auto lg:hidden"
                  />
                  <Image
                    alt="Your Company"
                    src={Epaper}
                    className="hidden h-8 w-auto ml-2 lg:block"
                  />
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 border-l border-gray-200 pl-6 ">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current
                          ? 'border-green-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                      )}
                    >
                      <LayoutGrid className="mr-4 hover:animate-spin duration-700"/>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  
                </button>

                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <div>
                    <button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img alt="" src={user.imageUrl} className="size-8 rounded-full" />
                    </button>
                  </div>
                 
                </div>
              </div>
              {/* <div className="-mr-2 flex items-center sm:hidden">
          
                <button className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <a aria-hidden="true" className="block size-6 group-data-[open]:hidden">|||</a>
                  <a aria-hidden="true" className="hidden size-6 group-data-[open]:block" >X</a>
                </button>
              </div> */}
            </div>
          </div>

          <div className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'border-green-600 bg-green-500 text-black rounded-sm'
                      : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                    'border-l-4 py-2 pl-3 pr-4 text-base font-medium flex',
                  )}
                >
                  <LayoutGrid className="mr-4 hover:animate-spin duration-700"/>
                  {item.name}
                </a>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="shrink-0">
                  <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{user.name}</div>
                  <div className="text-sm font-medium text-gray-500">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <a aria-hidden="true" className="size-6">🔔</a>
                </button>
              </div>
              {/* <div className="mt-3 space-y-1">
                {userNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        </div>
    </>
  )
}
