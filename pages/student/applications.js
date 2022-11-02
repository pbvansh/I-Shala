
import axios from "axios";
import { useEffect, useState } from "react"
import Application from "../../components/Application";
import JWT from 'jsonwebtoken'



const application = () => {

    const [app, setapp] = useState([]);

    useEffect(() => {
        const { id } = JWT.decode(localStorage.getItem('i_shala_token'))
        axios.get("http://localhost:5000/application/app/" +id).then((res) => {
            setapp(res.data);
            console.log(res.data);
        }).catch((ex) => {
            console.log(ex)
        })
    }, [])
    return (
        <>
            <div className="min-h-screen max-w-screen-xl mx-auto">
                <div>
                    <p className="font-semibold text-4xl p-12 text-center text-gray-700">My Applications</p>
                </div>
                <section className="text-gray-600">

                    <div className="border border-gray-300 rounded-md shadow-xl ">
                        <div className="grid grid-cols-9 text-gray-500 font-semibold  p-3  bg-gray-100">
                            <p>COMPANY</p>
                            <p className="col-span-2">PROFILE</p>
                            <p>APPLIED ON</p>
                            <p>NUMBER OF APPLICANTS</p>
                            <p className="col-span-2">APPLICATION STATUS</p>

                            <p>REVIEW APPLICATION</p>

                        </div>


                        {
                            app.map((app, i) => (
                                <Application key={i} app={app} />
                            ))
                        }
                        {/* <div className="grid grid-cols-9 p-4 text-gray-600">
                            <p>TCS</p> */}
                        {/* <div className="flex">  */}
                        {/* <p className="col-span-2">Software Engineer</p> */}
                        {/* <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-sky-600">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg> */}

                        {/* </div> */}
                        {/* <p>27 sep 22022</p>
                            <p>38</p>
                            <div className="flex space-x-1 col-span-2">
                                <p className="text-sky-500 bg-sky-50 font-semibold text-base border rounded-full w-28 text-center">Applied</p>
                                <QuestionMarkCircleIcon className="h-5 w-5 text-sky-500" />
                            </div>
                            <DocumentReportIcon className="w-6 h-6 hover:shadow-xl text-sky-600 hover:text-sky-700 cursor-pointer" />
                        </div> */}
                    </div>
                </section>
            </div>
        </>
    );
}

export default application