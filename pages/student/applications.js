
import axios from "axios";
import { useEffect, useState } from "react"
import JWT from 'jsonwebtoken'
import Header from "../../components/Header";

const Application = () => {

    const [app, setapp] = useState([]);

    useEffect(() => {
        const { id } = JWT.decode(localStorage.getItem('i_shala_token'))
        axios.get("http://localhost:5000/application/app/" + id).then((res) => {
            setapp(res.data);
            console.log(res.data);
        }).catch((ex) => {
            console.log(ex)
        })
    }, [])
    return (
        <>
            <div className="min-h-screen max-w-screen-xl mx-auto">
                <Header title={'My Applications'} />
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
                    </div>
                </section>
            </div>
        </>
    );
}

export default Application