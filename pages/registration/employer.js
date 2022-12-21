import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'
import notify from '../../atom/notify';
import Header from '../../components/Header';

const Employer = () => {
    // const [isLogin, setIsLogin] = useRecoilState(loginState)

    const emailRef = useRef();
    const passwordRef = useRef();
    const fnameRef = useRef();
    const lnameRef = useRef();
    const contactRef = useRef();
    const formRef = useRef();
    const route = useRouter();
    const [valid, setValid] = useState(true);

    const userReg = (e) => {
        setValid(true);
        e.preventDefault();
        const ev = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        const mv = /^([789]{1})([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$/
        if (emailRef.current.value && passwordRef.current.value && contactRef.current.value && fnameRef.current.value && lnameRef.current.value) { } else {
            setValid(false)
            notify('warning', 'Please enter all details');
            return;
        }
        if (!emailRef.current.value.match(ev)) {
            setValid(false)
            notify('warning', 'Please enter valid email');
        }
        if (!contactRef.current.value.match(mv)) {
            setValid(false)
            notify('warning', 'Please enter valid mobile number');
        }
        const isValid = passwordRef.current.value.search(/^[A-Za-z0-9@_]{6,20}$/);
        if (isValid != 0) {
            setValid(false)
            notify('warning', "Please enter strong Password");
        } else if (passwordRef.current.value.length < 6) {
            setValid(false)
            toast.warning("warning", "you have to enter at least 6 digit!");
        }
        if (valid) {
            axios.post("https://I-Shalabackend.pratikvansh.repl.co/company/signup", {
                email: emailRef.current.value,
                password: passwordRef.current.value,
                Contact: contactRef.current.value,
                First_name: fnameRef.current.value,
                Last_name: lnameRef.current.value

            }).then((res) => {
                console.log(res.data)
                notify("success", "Signup Successfull");
                formRef.current.reset();
                route.push("/login")
            }).catch((e)=>{
                console.log(e);
                setValid(false)
            })
        }

    }

    return (
        <>

            <form className="min-h-screen relative " ref={formRef}
                style={{
                    backgroundImage: "url('https://internshala.com/static/images/registration/employer/registration_new/internship/banner/r_1255_new.png')",
                    backgroundRepeat: "no-repeat", backgroundSize: "1700px"
                }}
            >
                <div className="max-w-screen-2xl mx-auto p-10 flex justify-around">
                    <Header title={'Register as employee'} />
                    <div>
                        <p className="font-bold text-4xl flex">
                            <span className="relative">
                                <img src="https://internshala.com/static/images/registration/employer/registration_new/internship/heading/r_1920.svg" className='ml-24' />
                                {/* <span className="absolute z-10 top-0 right-3 text-white">Free</span> */}
                            </span>
                        </p>
                        {/* <div className="justify-between space-y-3 text-4xl">
                            <p className="font-semibold text-2xl p-4 text-gray-700">Register and apply to 10000+ opportunities</p>

                            <p className="flex font-semibold text-2xl text-gray-700">
                                <img src="https://internshala.com/static/images/common/check_box.svg" />
                                Internships
                            </p>
                            <p className="flex font-semibold text-2xl text-gray-700">
                                <img src="https://internshala.com/static/images/common/check_box.svg" />
                                Work from home Internships
                            </p>
                        </div> */}
                    </div>
                    <div className="border rounded-sm min-w-[400px] max-w-md space-y-3 p-8 shadow-xl text-gray-600 bg-gray-50 ml-24">
                        <div className="flex space-x-2 border rounded-sm max-w-full items-center justify-center bg-white">
                            <img src="https://internshala.com/static/images/login/google_logo.png " />
                            <p className="font-semibold justify-center items-center cursor-pointer p-2">Sign Up With Google</p>
                        </div>
                        <div className='relative flex justify-center flex-col items-center'>
                            <p className='bg-slate-100 p-1 rounded-lg w-fit text-xs z-10 tracking-wider px-3'>OR</p>
                            <span className='border-b border-gray-300 block h-1 w-full absolute' />
                        </div>
                        <div className="space-y-1">
                            <label className="block font-semibold ">Email</label>
                            <input type='email' ref={emailRef} placeholder="vidhi@example.com" className="outline-none p-[6px] border shadow-md rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                        </div>
                        <div className="space-y-1">
                            <label className="block font-semibold">Password</label>
                            <input type='password' ref={passwordRef} placeholder="must be atleast 6 characters" className="shadow-md outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                        </div>

                        <div className="space-y-1">
                            <label className="block font-semibold">Contact</label>
                            <input type='number' ref={contactRef} placeholder="must be atleast 10 numbers" className="shadow-md outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500  w-full" />
                        </div>

                        <div className="grid w-fit grid-cols-2 gap-10">
                            <div className="flex flex-col space-y-1">
                                <label className="block font-semibold ">First Name</label>
                                <input type='first name' ref={fnameRef} placeholder="Vidhi" className="shadow-md outline-none border inline rounded-sm border-gray-300 hover:border-sky-500 p-[6px]" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="block font-semibold">Last Name</label>
                                <input type='first name' ref={lnameRef} placeholder="Rana" className="shadow-md outline-none border inline rounded-sm border-gray-300 hover:border-sky-500 p-[6px]" />
                            </div>
                        </div>
                        <div className="justify-center space-y-5">
                            <p className="text-sm justify-center">By signing up, you agree to our <span className="text-sky-500 font-semibold text-sm cursor-pointer hover:text-sky-600">Terms and Conditions.</span></p>
                            <button className="bg-sky-500 text-xl font-semibold text-white border rounded-sm  cursor-pointer w-full p-2 hover:bg-sky-600 shadow-lg" onClick={userReg}>Sign up</button>

                        </div>
                        <div className="flex justify-center">

                            <p>Already registered?
                                <Link href="/login">
                                    <span className="p-2 font-semibold text-sky-500 cursor-pointer hover:text-sky-600">
                                        Login
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>
            </form>

        </>

    );
}

export default Employer