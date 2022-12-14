
import { PencilIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import JWT from "jsonwebtoken"
import Header from '../components/Header';
import ResumeComp from '../components/ResumeComp'

const Resume = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('i_shala_token')
        const user = JWT.decode(token)
        console.log(user)
        setUser(user)
    }, [])
    const router = useRouter()
    const internshipID = router.query.id;
    return (
        <>
            <div className="min-h-screen max-w-screen-lg mx-auto">
                <Header title={'My Resume'} />
                <div className="border border-sky-400 rounded-md p-5 mt-7 bg-sky-50 text-sky-600">
                    <p className="font-semibold">Applying to this Internship </p>
                    <div className="flex space-x-6">
                        <p>
                            This is the resume that the employer will see, make sure it is up to date. You can add or edit details below.
                        </p>
                        <Link href={`/application/${internshipID}`}>
                            <button className="bg-sky-500 text-white shadow-lg hover:bg-sky-600 border rounded-md  w-60 font-semibold">Proceed to an Application</button>
                        </Link>
                    </div>
                </div>
                <ResumeComp />
            </div>

        </>
    );
}

export default Resume