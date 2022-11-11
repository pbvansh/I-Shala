
import { PencilIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import JWT from "jsonwebtoken"
import Header from '../components/Header';
const Resume = () => {
    const [user,setUser] = useState([])
    useEffect(()=>{
        const token = localStorage.getItem('i_shala_token')
        const user = JWT.decode(token)
        console.log(user)
        setUser(user)
    },[])
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
                <div className="justify-center flex mt-10">
                    <p className="text-gray-700 font-semibold text-2xl items-center justify-center">Resume</p>
                </div>

                <div className="border border-gray-300 rounded-md mt-6 mb-8 p-12">
                    <div className='space-y-1'>
                        <div className='flex space-x-2'>
                            <p className="text-4xl text-gray-700 font-semibold">{user.firstName} {user.lastName}</p>
                            <PencilIcon className='h-7 w-7' />
                        </div>
                        <div className='text-gray-500 font-semibold text-sm'>
                            <p>{user.email}</p>
                            <p>{user.Contact}</p>
                            <p>Khambhat, Anand</p>
                        </div>
                    </div>
                    <hr className='mt-7'></hr>

                    <div className='mt-4 flex flex-auto gap-x-40'>
                        <p className='text-gray-500 font-semibold text-sm'>EDUCATION</p>
                        <div className='text-gray-500 font-semibold'>
                            <p className='text-gray-800 font-semibold'>B.Tech,AIT</p>
                            <p>College Of Agricultural Information Technology</p>
                            <p>2019 - 2023</p>
                            <p>CGPA: 7.92/10</p>
                        </div>
                    </div>

                    <hr className='mt-7'></hr>
                    <div className='flex mt-4 flex-auto gap-x-40'>
                        <p className='text-gray-500 font-semibold text-sm'>PERSONAL PROJECTS</p>
                        <div>
                            <p className='text-gray-800 font-semibold'>My-Movie-List</p>
                            <p className='text-gray-500 font-semibold'>This is movie app built with Next.js and Tailwind CSS I created this clone to learn new skills and imp-
                                rove my knowledge. It shows users a list of movies of their interest. </p>
                            <div className='flex'>
                                <span className='text-gray-800 font-semibold'>Technology used :</span><p className='text-gray-500 font-semibold mx-2'> Next.js | Tailwind CSS </p>
                            </div>
                            <div className='flex'>
                                {/* <p>Link</p> */}
                                <p className='text-gray-800 font-semibold'>Show Project : </p>
                                <a href="https://github.com/vidhi000/MyMovieList" className='text-sky-500 hover:text-sky-600 font-semibold mx-2'>MyMovieList</a>
                            </div>

                            <div className='mt-4'>
                                <p className='text-gray-800 font-semibold'>LinkedIn Clone</p>
                                <p className='text-gray-500 font-semibold'>LinkedIn is simply clone . I created this clone to learn new things and for practical implementation
                                    .It Helps users to make a useful posts. In this project I used Google Authentication</p>
                                <div className='flex'>
                                    <span className='text-gray-800 font-semibold'>Technology used :</span>
                                    <p className='text-gray-500 font-semibold mx-2'> Next.js | Tailwind CSS | Google Auth (NextAuth)</p>
                                </div>
                                <div className='flex'>
                                    {/* <p>Link</p> */}
                                    <p className='text-gray-800 font-semibold'>Show Project : </p>
                                    <a href="https://github.com/vidhi000/MyLinkedIn" className='text-sky-500 hover:text-sky-600 font-semibold mx-2'>LinkedIn Clone</a>
                                </div>
                            </div>


                            <div className='mt-4'>
                                <p className='text-gray-800 font-semibold'>I-Shala</p>
                                <p className='text-gray-500 font-semibold'>I-Shala is easy to use and provides Internships to student /users. It helps students to get Internships
                                      In which they are interested. I use Node.js Express.js and MongoDB to build a complete backend and
                                      I use MongoDB cloud database to store all the Informations.</p>
                                <div className='flex'>
                                    <span className='text-gray-800 font-semibold'>Technology used :</span>
                                    <p className='text-gray-500 font-semibold mx-2'>Node.js | Express.js | MongoDB</p>
                                </div>
                                <div className='flex'>
                                    {/* <p>Link</p> */}
                                    <p className='text-gray-800 font-semibold'>Show Project : </p>
                                    <a href="https://github.com/vidhi000/I-Shala" className='text-sky-500 hover:text-sky-600 font-semibold mx-2'>I-Shala</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-7'></hr>

                    <div className='flex gap-x-44 mt-4'>
                        <p className='text-gray-500 font-semibold'>SKILLS</p>
                        <p className='text-gray-800 font-semibold'>JavaScript | Node.js | Express.js | React.js | Next.js | Tailwind CSS | MongoDB
                             C | JAVA | C++ | ML | Postman | HTML | CSS | REST API | Python | .NET
                            Object Oriented Programming | GitHub</p>

                    </div>
                    <hr className='mt-7'></hr>
                    <div className='flex gap-x-28 mt-7'>
                        <p className='text-gray-500 font-semibold'>WORK SAMPLES</p>
                        <a href="https://github.com/vidhi000" className='text-sky-500 hover:text-sky-600 font-semibold'>https://github.com/vidhi000</a>
                    </div>

                    <hr className='mt-7'></hr>
                    <div className='flex gap-x-36 mt-7'>
                    <p className='text-gray-500 font-semibold'>CERTIFICATE</p>
                    {/* <p>Introduction to Web Development with HTML, CSS, JavaScript By IBM</p> */}
                    <p>
                    <a href="https://coursera.org/share/6ea9ac81872479611bad6b7bc7771766" className='text-sky-500 hover:text-sky-600 font-semibold'>https://coursera.org/share/6ea9ac81872479611bad6b7bc7771766</a>
                    </p>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Resume