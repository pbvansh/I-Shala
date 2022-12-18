
import { PencilIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import JWT from "jsonwebtoken"
import Header from './Header';
import axios from 'axios';
const Resume = ({ user_id }) => {
    const [resume, setresume] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('i_shala_token')
        const user = JWT.decode(token)
        if (user_id) {
            axios.get('https://I-Shalabackend.pratikvansh.repl.co/resume/' + user_id).then((res) => {
                console.log(res.data);
                setresume(res.data[0]);
            })
        } else {
            axios.get('https://I-Shalabackend.pratikvansh.repl.co/resume/' + user.id).then((res) => {
                console.log(res.data);
                setresume(res.data[0]);
            })
        }
    }, [])

    // const PrintResume = () => {
    //     var prtresume = document.getElementById('resume');
    //     var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    //     WinPrint.document.write(prtresume.innerHTML);
    //     WinPrint.document.close();
    //     WinPrint.focus();
    //     WinPrint.print();
    //     WinPrint.close();
    // }

    return (
        <> {resume ?
            <div className="min-h-screen max-w-screen-lg mx-auto">
                <Header title={'My resume'} />
                <div className="justify-center flex mt-10">
                    <p className="text-gray-700 font-semibold text-2xl items-center justify-center">Resume</p>
                </div>

                <div className="border border-gray-300 rounded-md mt-6 mb-8 p-16" id='resume'>
                    <div className='space-y-1 mb-5'>
                        <div className='flex space-x-2'>
                            <p className="text-4xl text-gray-700 font-semibold">{resume.Fname} {resume.Lname}</p>
                            {
                                !user_id ?
                                    <Link href={'/student/edit_resume'}>
                                        <PencilIcon className='h-7 w-7 cursor-pointer' />
                                    </Link>
                                    : null
                            }

                        </div>
                        <div className='text-gray-500 font-semibold text-sm'>
                            <p>{resume.email}</p>
                            <p>{resume.contact}</p>
                            <p>{resume.address}</p>
                        </div>
                        {/* <button onClick={PrintResume}>Download</button> */}
                    </div>
                    <hr />
                    <div className='mt-4 flex flex-auto gap-x-40'>
                        <p className='text-gray-500 font-semibold text-sm'>EDUCATION</p>
                        <div className='text-gray-500 font-semibold'>
                            <p className='text-gray-800 font-semibold'>{resume?.education.degree}</p>
                            <p>{resume.education.college}</p>
                            <p>{resume.education.sDate} - {resume.education.eDate}</p>
                            <p>CGPA: {resume.education.gPoint}/10</p>
                        </div>
                    </div>

                    <hr className='mt-7'></hr>
                    <div className='flex mt-4 flex-auto gap-x-40'>
                        <p className='text-gray-500 font-semibold text-sm'>PERSONAL PROJECTS</p>
                        <div>
                            {
                                resume?.projects.map((pro, i) => (
                                    <div key={i} className='mt-4'>
                                        <p className='text-gray-800 font-semibold'>{pro.title}</p>
                                        <p className='text-gray-500 font-semibold'>{pro.desc}</p>
                                        {/* <div className='flex'>
                                            <span className='text-gray-800 font-semibold'>Technology used :</span><p className='text-gray-500 font-semibold mx-2'> Next.js | Tailwind CSS </p>
                                        </div> */}
                                        <div className='flex'>
                                            <p className='text-gray-800 font-semibold'>Show Project : </p>
                                            <a href={pro.link} className='text-sky-500 hover:text-sky-600 font-semibold mx-2'>{pro.link}</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <hr className='mt-7'></hr>

                    <div className='flex gap-x-44 mt-4'>
                        <p className='text-gray-500 font-semibold'>SKILLS</p>
                        <div className='grid grid-cols-3 justify-evenly w-full'>
                            {
                                resume.skills.split(',').map((s, i) => (
                                    <p key={i} className='text-gray-800 font-semibold border m-2 p-2 rounded-md text-center hover:shadow-lg hover:scale-105 duration-300 cursor-pointer'>{s}</p>
                                ))
                            }
                        </div>

                    </div>
                    <hr className='mt-7'></hr>
                    <div className='flex gap-x-28 mt-7'>
                        <p className='text-gray-500 font-semibold'>WORK SAMPLES</p>
                        <div>
                            {
                                resume.Portfolio_or_works.split(',').map((w, i) => (
                                    <a key={i} href={w} className='text-sky-500 hover:text-sky-600 font-semibold block m-1'>{w}</a>
                                ))
                            }
                        </div>
                    </div>

                    <hr className='mt-7'></hr>
                    <div className='flex gap-x-36 mt-7'>
                        <p className='text-gray-500 font-semibold'>CERTIFICATE</p>
                        <div>

                            {
                                resume.certificate.split(',').map((c, i) => (
                                    <a key={i} href={c} className='text-sky-500 hover:text-sky-600 font-semibold block m-1'>{c}</a>
                                ))
                            }
                        </div>
                    </div>

                    <hr className='mt-7'></hr>
                    <div className='flex gap-x-36 mt-7'>
                        <p className='text-gray-500 font-semibold'>ACCOMPLISHMENTS</p>
                        <p>{resume.Accomplishments}</p>
                    </div>
                </div>
            </div>
            :
            <div className='min-h-screen flex items-center justify-center'>
                <Link href={'/student/edit_resume'}>
                    <button className='p-2 px-5 border rounded-md hover:shadow-lg hover:bg-black hover:text-white duration-300'>Create your Resume</button>
                </Link>
            </div>
        }
        </>
    );
}

export default Resume


