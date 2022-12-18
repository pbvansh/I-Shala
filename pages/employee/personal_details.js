import { DocumentDuplicateIcon, DocumentTextIcon, UsersIcon } from "@heroicons/react/outline"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../components/Header";
import JWT from 'jsonwebtoken'
import notify from "../../atom/notify";


const Personal_details = () => {
    const route = useRouter();
    const [company_id, setCompany] = useState(null)
    const [Email, setemail] = useState()
    const [Fname, setfname] = useState()
    const [Lname, setlname] = useState()
    const [Contact, setcontact] = useState()

    useEffect(() => {
        const { id } = JWT.decode(localStorage.getItem('i_shala_token'))
        setCompany(id);
        axios.get('https://I-Shalabackend.pratikvansh.repl.co/employee/' + id).then((res) => {
            if (res.data) {
                setcontact(res.data.Contact);
                setfname(res.data.FirstName);
                setlname(res.data.LastName);
                setemail(res.data.Email);
            }
        })
    }, [])

    const formRef = useRef();

    const userDetail = (e) => {
        e.preventDefault();
        axios.post("https://I-Shalabackend.pratikvansh.repl.co/employee/create/"+company_id, {
            company_id,
            Email,
            FirstName: Fname,
            LastName: Lname,
            Contact
        }).then((res) => {
            notify('success','personal details saved successfully')
        })
        //    formRef.current.reset()
        route.push("/employee/organization_details")
    }
    return (
        <>
            <div className="min-h-screen max-w-4xl mx-auto">
                <Header title={'Personal Details'} />
                <div className="flex space-x-40 justify-center p-20">
                    <Link href="/employee/personal_details">
                        <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500 text-gray-800">
                            <UsersIcon className="h-12 w-12 cursor-pointer text-sky-500 border p-3 border-2px border-sky-500 bg-white rounded-full" />
                            <p>Personal Details</p>
                        </div>
                    </Link>
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500 text-gray-800">
                        <Link href="/employee/organization_details">
                            <DocumentDuplicateIcon className="h-12 w-12 cursor-pointer p-3 text-white hover:bg-sky-500 bg-gray-400 rounded-full" />
                        </Link>
                        <p>Organization Details</p>
                    </div>
                    <div className="flex flex-col justify-center items-center font-semibold hover:text-sky-500  text-gray-800">
                        <DocumentTextIcon className="h-12 w-12 cursor-pointer p-3  text-white bg-gray-400 hover:bg-sky-500 rounded-full" />
                        <p>Post Internship</p>
                    </div>
                </div>

                <div className="text-gray-700 font-semibold text-4xl p-10 text-center">
                    <p>Personal details</p>
                </div>
                <from className="flex flex-col items-center">
                    <div className="border border-gray-200 rounded-md p-7 space-y-4 max-w-xl mx-auto">

                        <div className="flex space-x-5">
                            <div className="flex flex-col flex-1 space-y-1">
                                <label className="block font-semibold ">First Name</label>
                                <input type='first name' defaultValue={Fname} onChange={((e) => setfname(e.target.value))} placeholder="Vidhi" className=" outline-none border inline rounded-sm
                             border-gray-300 hover:border-sky-500 p-[6px] w-full" />
                            </div>
                            <div className="flex flex-col flex-1 space-y-1">
                                <label className="block font-semibold">Last Name</label>
                                <input type='first name' defaultValue={Lname} onChange={((e) => setlname(e.target.value))} placeholder="Rana" className="outline-none border inline rounded-sm border-gray-300 hover:border-sky-500 p-[6px] w-full" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="block font-semibold ">Email</label>
                            <input type='email' defaultValue={Email} onChange={((e) => setemail(e.target.value))} placeholder="vidhi@example.com" className="outline-none p-[6px] border rounded-sm border-gray-300 hover:border-sky-500 w-full" />
                        </div>
                        <div className="space-y-1">
                            <label className="block font-semibold">Contact</label>
                            <input type='number' defaultValue={Contact} onChange={((e) => setcontact(e.target.value))} placeholder="must be atleast 10 numbers" className="outline-none p-[6px] border rounded-sm
                         border-gray-300 hover:border-sky-500  w-full" />
                        </div>
                    </div>

                    <button className="text-white bg-sky-500 hover:bg-sky-600  shadow-lg font-semibold text-lg text-center p-2 w-24 border rounded-md mt-6" onClick={userDetail}>Next</button>

                </from>
            </div>
        </>
    );
}


export default Personal_details