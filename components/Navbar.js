import Link from "next/link";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, UserCircleIcon } from '@heroicons/react/outline'
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isEmpState, loginState } from "../atom/loginAtom";
import JWT from 'jsonwebtoken'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Navbar = () => {

  const [isLogin, setIsLogin] = useRecoilState(loginState)
  const [isEmp, setIsEmp] = useRecoilState(isEmpState)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('i_shala_token');
    const user = JWT.decode(token)
    if (user?.isEmp) setIsEmp(true)
    if (localStorage.getItem("i_shala_isAuth")) {
      setIsLogin(true)

    }
    else {
      setIsLogin(false)
    }
  }, [])

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const Logout = () => {
    setIsLogin(false)
    setIsEmp(false)
    toast.success("Logout Successfull", { autoClose: 1500, position: "bottom-right" });
    localStorage.removeItem("i_shala_isAuth")
    localStorage.removeItem("i_shala_user_email")
    localStorage.removeItem("i_shala_token")
    localStorage.removeItem("i_shala_user_fname")
    router.push("/")

  }


  return (

    <div className="border-b-[1px] p-4 shadow-md bg-white z-50">
      <nav className="flex max-w-4xl mx-auto">
        <div>
          <Link href='/' >
            <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" className="cursor-pointer" height={70} width={100} />
          </Link>
        </div>
        <div className="flex flex-grow justify-end items-center space-x-10">

          {
            !isEmp ?
              <Link href="/internships">
                <p className="font-semibold cursor-pointer text-gray-500 hover:text-sky-500 text-lg">Internships</p>
              </Link> : null
          }
          {!isLogin ?
            <Link href='/login'>
              <button
                className="border w-24 h-11 p-1 border-gray-300 hover:border-sky-600 rounded-md font-semibold text-sky-500 shadow-md hover:shadow-lg text-lg">Login</button>
            </Link> : null
          }

          {/* <Link href={'/auth'}> */}

          {/* <Link href="/auth">
            <button className="px-5 py-2 bg-sky-400 hover:bg-sky-500 font-semibold text-white rounded-sm p-5 hover:shadow-lg shadow-lg text-lg">Register</button>
            </Link> */}
          {/* </Link> */}
          {/* <div className=" flex-col bg-gray-100 mt-1 p-2 w-40 hidden">
               <a href="#" className="py-1 px-2 hover:bg-sky-200 rounded">As a student</a>
               <a href="#" className="py-1 px-2 hover:bg-sky-200 rounded">As an Employee</a>
            </div> */}
          {/* <div>
            <Link href="/applications">
              <p className="text-gray-500 hover:text-sky-500 font-semibold text-base cursor-pointer">My Applications</p>
            </Link>
          </div> */}
          {isEmp &&
            <Link href="/employee/post_internship">
            <p className="font-semibold cursor-pointer text-gray-500 hover:text-sky-500 text-base">Post Internships</p>
          </Link>}
          {/* <UserCircleIcon className="w-7 h-7 text-gray-700 hover:text-sky-500 cursor-pointer"/> */}
          {/* <div className="relative w-full lg:max-w-sm p-3 ">
            <select className="w-full p-2 text-gray-500 space-y-3  bg-white border rounded-md shadow-sm outline-none
             focus:border-sky-500">
               
               <option>Login / Register</option>
               <Link href="/auth">
                <option>Register as a student</option>
                </Link>
                <option>Register as an employer</option> 
                <option>Login</option>
                
            </select>
        </div> */}
          {
            !isLogin ?

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-32 justify-center items-center text-white bg-sky-500 hover:bg-sky-600
                  font-semibold text-lg p-2 border rounded-md shadow-lg">
                    Register
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md 
         bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/auth">
                            <a
                              href="#"
                              className={classNames(
                                active ? ' text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-base hover:text-sky-500 hover:bg-gray-50'
                              )}
                            >
                              Register as a student
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/registration/employer">
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-base hover:text-sky-500 hover:bg-gray-50'
                              )}
                            >
                              Register as an employer
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        {({ active }) => (
                          <Link href="/login">
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-base hover:text-sky-500 hover:bg-gray-50'
                              )}
                            >
                              Login
                            </a>
                          </Link>
                        )}
                      </Menu.Item> */}
                      <form method="POST" action="#">
                        {/* <Menu.Item>
                {({ active }) => (
                  <Link href="/">
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-base hover:text-sky-500'
                    )}
                  >
                    Sign out
                  </button>
                  </Link>
                )}
              </Menu.Item> */}
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              :

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center items-center text-gray-700 hover:text-sky-500 font-semibold text-lg p-2">
                    {/* <UserCircleIcon className="h-7 w-7 text-gray-500 hover:text-sky-500" /> */}
                    <img src="https://sharedpro.in/images/user-icon.png" className="h-8 w-8"/>
                    <ChevronDownIcon className="-mr-1 ml-2 h-6 w-6 text-sky-600" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md 
         bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (

                          <a
                            href="#"
                            className={classNames(
                              active ? ' text-gray-900' : 'text-gray-500',
                              'block px-4 py-2 text-base font-semibold'
                            )}
                          >{
                              <div>
                                <p>{
                                  localStorage.getItem("i_shala_user_fname")
                                }
                                </p>
                                <p>
                                  {
                                    localStorage.getItem("i_shala_user_email")

                                  }
                                </p>
                              </div>
                            }
                          </a>

                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href={isEmp ? '/employee/dashboard' : '/student/applications'}>
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-500',
                                'block px-4 py-2 text-base hover:text-sky-500 hover:bg-gray-50 font-semibold'
                              )}
                            >
                              {isEmp ? 'Dashboard' : 'My Applications'}
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      {!isEmp && <Menu.Item>
                        {({ active }) => (
                          <Link href="/student/myresume">
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-500', 
                                'block px-4 py-2 text-base hover:text-sky-500 hover:bg-gray-50 font-semibold'
                              )}
                            >
                              My Resume
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      }
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-500',
                              'block px-4 py-2 text-base hover:text-sky-500 hover:bg-gray-50 font-semibold',
                            )} onClick={Logout}
                          >
                            Log out
                          </a>

                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>


          }

        </div>
      </nav>
    </div>
  );
}

export default Navbar