
import { DocumentDuplicateIcon, DocumentTextIcon, UsersIcon } from "@heroicons/react/outline"
import Link from "next/link";
import { useRef } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import JWT from 'jsonwebtoken'
import Header from "../../components/Header";
const Organization_details = () => {
    const orgnameRef = useRef();
    const orgdetailRef = useRef();
    const urlRef = useRef();

    const orgDetail = (e) => {
        e.preventDefault();
        const token = JWT.decode(localStorage.getItem('i_shala_token'))
        axios.put(`http://localhost:5000/company/${token.id}/update`, {
            Name: orgnameRef.current.value,
            About_company: orgdetailRef.current.value,
            // website_URL: urlRef.current.value
        }).then((res) => {
            console.log(res.data)
        })
        Router.push("/employee/post_internship")
    }
    return (
        <>
            <div className="min-h-screen max-w-4xl mx-auto relative">
                <Header title={'Organization Details'} />
                <div className="flex space-x-40 justify-center p-20">
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500 text-gray-800">
                        <Link href="/employee/personal_details">
                            <UsersIcon className="h-12 w-12 cursor-pointer p-3 bg-sky-500 text-white rounded-full" />
                        </Link>
                        <p>Personal Details</p>
                    </div>
                    <span className="h-1 w-[245px] bg-sky-500 absolute top-[100px] left-[22px] ml-14"></span>
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500 text-gray-800">
                        <DocumentDuplicateIcon className="h-12 w-12 cursor-pointer p-3 text-sky-500 border border-2px border-sky-500 bg-white rounded-full" />
                        <p>Organization Details</p>
                    </div>
                    <Link href="/employee/post_internship">
                        <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500  text-gray-800">
                            <DocumentTextIcon className="h-12 w-12 cursor-pointer p-3  text-white bg-gray-400 hover:bg-sky-500 rounded-full" />
                            <p>Post Internship</p>

                        </div>
                    </Link>
                </div>

                <div>
                    <p className="text-gray-800 font-semibold text-2xl text-center">Organization details</p>
                </div>
                <div className=" border border-gray-300 rounded-md mt-5 p-7 max-w-3xl mx-auto">
                    <div className="space-y-1">
                        <label className="font-semibold text-gray-700">Organization name</label>
                        <input type="text" ref={orgnameRef} className="outline-none hover:border-sky-500 border border-gray-300 rounded-md block p-[6px] w-full"></input>
                    </div>
                    <div className="flex space-x-2 mt-3">
                        <input type="checkbox" className="h-4 w-4 mt-1 cursor-pointer"></input>
                        <p className="text-gray-600 ">I am an independent practitioner (freelancer, architect, lawyer etc.) posting for self</p>
                    </div>

                    <div className="mt-3 space-y-1">
                        <p className="text-gray-700 font-semibold">Organization description</p>
                        <textarea ref={orgdetailRef} className="outline-none hover:border-sky-500 border rounded-md
                         border-gray-300 w-full p-5"></textarea>
                    </div>
                </div>
                <div className="p-12">
                    <p className="text-gray-800 font-semibold text-2xl text-center">Organization verification</p>
                </div>

                <div className="border border-gray-300 rounded-md  max-w-3xl mx-auto p-7 mb-10 items-center">
                    <p className="text-gray-700 p-1">Get your organization verified and start posting internships</p>
                    <div className="space-y-2">
                        <p className="text-gray-600 p-1 font-semibold">Verify using your active & functional website</p>
                        <div className="space-y-1 p-2">
                            <p className="text-gray-700 font-semibold">Enter website URL</p>
                            <input ref={urlRef} type="text" className="outline-none hover:border-sky-500 border border-gray-300 rounded-md p-[6px] w-full"></input>
                        </div>

                    </div>

                </div>
                <div className="flex flex-col items-center">
                    <Link href="/post_internship">
                        <button className="text-white bg-sky-500 hover:bg-sky-600 
                shadow-lg font-semibold text-lg text-center w-32 border rounded-md mt-4 mb-10 p-2" onClick={orgDetail}>Next</button>
                    </Link>
                </div>
            </div>

        </>
    );
}

export default Organization_details












