import { useEffect, useState } from "react"
import AddProjectModal from "../../components/AddProjectModal"
import {
    PlusIcon,
} from '@heroicons/react/solid';
import axios from "axios";
import JWT from 'jsonwebtoken'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Resume = () => {
    const [projectModal, setProjectModal] = useState(false)
    const [Fname, setFName] = useState(null)
    const [Lname, setLName] = useState(null)
    const [email, setEmail] = useState(null)
    const [contact, setContact] = useState(null)
    const [address, setAddress] = useState(null)
    const [education, setEducation] = useState({})
    const [certificate, setCertificate] = useState(null)
    const [projects, setProjects] = useState([])
    const [skills, setSkills] = useState(null)
    const [Portfolio_or_works, setPortfolio_or_works] = useState(null)
    const [Accomplishments, setAccomplishments] = useState(null)

    const [skillsArray, setSkillsArray] = useState([])
    const [certificateArray, setCertificateArray] = useState([])
    const [works, setWorks] = useState([])
    const [user_id, setUserId] = useState(null)
    const [resume, setResume] = useState({})

    useEffect(() => {
        const { id } = JWT.decode(localStorage.getItem('i_shala_token'))
        setUserId(id);
        axios.get('http://localhost:5000/resume/' + id).then((res) => {
            setResume(res.data[0]);
            setFName(res.data[0]?.Fname)
            setLName(res.data[0]?.Lname)
            setEmail(res.data[0]?.email)
            setCertificate(res.data[0]?.certificate)
            setContact(res.data[0]?.contact)
            setAddress(res.data[0]?.address)
            setEducation(res.data[0]?.education)
            setSkills(res.data[0]?.skills)
            setPortfolio_or_works(res.data[0]?.Portfolio_or_works)
            setAccomplishments(res.data[0]?.Accomplishments)
            setProjects(res.data[0]?.projects)

        })
    }, [])

    const SaveResume = () => {
        const splitedSkills = skills ? skills.split(',') : []
        const splitedCerti = certificate ? certificate.split(',') : []
        const splitedWorks = Portfolio_or_works ? Portfolio_or_works.split(',') : []
        setSkillsArray(splitedSkills)
        setCertificateArray(splitedCerti)
        setWorks(splitedWorks)
        axios.post('http://localhost:5000/resume/' + user_id, {
            user_id,
            Fname,
            Lname,
            email,
            contact,
            address,
            education,
            projects,
            skills,
            certificate,
            Portfolio_or_works,
            Accomplishments
        }).then((res) => {
            if (res.data.acknowledged) {
                toast.success('Resume saved successfully', { autoClose: 2000 })
            }
        })
    }

    return (
        <section className="min-h-screen max-w-4xl mx-auto border p-10 m-5 rounded-md space-y-8">
            <p className="text-center font-bold text-4xl p-5">Your Resume</p>
            <div>
                <div className="flex p-3 space-x-10">
                    <input defaultValue={resume?.Fname} onChange={(e) => setFName(e.target.value)} type={'text'} placeholder='First Name' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    <input defaultValue={resume?.Lname} onChange={(e) => setLName(e.target.value)} type={'text'} placeholder='Last Name' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
                <div className="flex p-3 space-x-10">
                    <input defaultValue={resume?.email} onChange={(e) => setEmail(e.target.value)} type={'text'} placeholder='Email - xyz@gmail.com' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    <input defaultValue={resume?.contact} onChange={(e) => setContact(e.target.value)} type={'text'} placeholder='Mobile No.' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
                <div className="flex p-3">
                    <textarea defaultValue={resume?.address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" className="flex-1 focus:outline-none border focus:border-sky-500 p-2" />
                </div>
            </div>
            <hr />
            <div>
                <p className="text-2xl font-bold text-sky-500">Graduation details</p>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">College</label>
                    <input defaultValue={resume?.education?.college} onChange={(e) => {
                        setEducation({ ...education, college: e.target.value })
                    }} type={'text'} placeholder='e.g. Hindu College' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Degree</label>
                    <input defaultValue={resume?.education?.degree} onChange={(e) => {
                        setEducation({ ...education, degree: e.target.value })
                    }} type={'text'} placeholder='e.g. B.Sc' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
                <div className="flex p-3 space-x-5">
                    <div className="flex  flex-col flex-1 text-gray-700">
                        <label className="font-bold p-[5px]">Start year</label>
                        <input defaultValue={resume?.education?.sDate} onChange={(e) => {
                            setEducation({ ...education, sDate: e.target.value })
                        }} type={'text'} placeholder='Choose Your' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="font-bold p-[5px] text-gray-700">End year</label>
                        <input defaultValue={resume?.education?.eDate} onChange={(e) => {
                            setEducation({ ...education, eDate: e.target.value })
                        }} type={'text'} placeholder='Choose Your' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="font-bold p-[5px] text-gray-700">Performance</label>
                        <input defaultValue={resume?.education?.gPoint} onChange={(e) => {
                            setEducation({ ...education, gPoint: e.target.value })
                        }} type={'text'} placeholder='0.00 (GP/10)' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <p className="text-2xl font-bold text-sky-500">Academic/ personal project</p>
                <div>
                    {
                        projects.map((p, i) => (
                            <div key={i} className="border p-3 m-5 rounded-md">
                                <p className="font-semibold">{p.title}</p>
                                <p>{p.sMonth} - {p.eMonth}</p>
                                <a href={p.like} className='text-sky-600 cursor-pointer'>{p.link}</a>
                                <p>{p.desc}</p>

                            </div>
                        ))
                    }
                </div>
                <div className="p-5">
                    <p onClick={() => setProjectModal(true)} className="flex items-center hover:text-sky-500 cursor-pointer">
                        <PlusIcon className="h-5 px-1" /> Add academic/ personal project
                    </p>
                </div>
                {/* <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Title</label>
                    <input type={'text'} placeholder='e.g. MyProjectTitle' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
                <div className="flex p-3 space-x-5">
                    <div className="flex  flex-col flex-1 text-gray-700">
                        <label className="font-bold p-[5px]">Start month</label>
                        <input type={'text'} placeholder='yyyy-mm' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="font-bold p-[5px] text-gray-700">End month</label>
                        <input type={'text'} placeholder='yyyy-mm' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    </div>
                </div>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Description <span className="text-xs">(Optional)</span></label>
                    <textarea type={'text'} placeholder='Short description about project (max 250 char)' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Project link <span className="text-xs">(Optional)</span></label>
                    <input type={'text'} placeholder='e.g. http://myprojectlink.com ' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div> */}
            </div>
            <hr />
            <div>
                <p className="text-2xl font-bold text-sky-500">Skills</p>
                <div className="flex mt-2 p-3">
                    {
                        skillsArray.map((s, i) => s.trim() !== '' && (
                            <p key={i} className=" px-2 p-1 rounded-sm border m-1">{s}</p>
                        ))
                    }
                </div>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Add skills</label>
                    <textarea defaultValue={resume?.skills} onChange={(e) => setSkills(e.target.value)} type={'text'} placeholder='e.g. C++,Java,PHP,etc...' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
            </div>
            <hr />
            <div>
                <p className="text-2xl font-bold text-sky-500">Certificate</p>
                <div className="flex mt-2 p-3">
                    {
                        certificateArray.map((c, i) => c.trim() !== '' && (
                            <p key={i} className=" px-2 p-1 rounded-sm border m-1">{c}</p>
                        ))
                    }
                </div>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Add Certificate</label>
                    <textarea defaultValue={resume?.certificate} onChange={(e) => setCertificate(e.target.value)} multiline={true} type={'text'} placeholder={'Put certificate link here like this \nABC,\nXYZ,\nETC...'} className="flex-1 min-h-[120px] whitespace-pre-line rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
            </div>
            <hr />
            <div>
                <p className="text-2xl font-bold text-sky-500">portfolio /work samples</p>
                <div className="flex mt-2 p-3">
                    {
                        works.map((w, i) => w.trim() !== '' && (
                            <p key={i} className=" px-2 p-1 rounded-sm border m-1">{w}</p>
                        ))
                    }
                </div>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Add work samples</label>
                    <textarea defaultValue={resume?.Portfolio_or_works} onChange={(e) => setPortfolio_or_works(e.target.value)} type={'text'} placeholder='e.g. C++,Java,PHP,etc...' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
            </div>
            <hr />
            <div>
                <p className="text-2xl font-bold text-sky-500">accomplishments/ additional details</p>
                <div>
                    youe skills here
                </div>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Additional details</label>
                    <textarea defaultValue={resume?.Accomplishments} onChange={(e) => setAccomplishments(e.target.value)} type={'text'} placeholder='Write anything' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
            </div>
            {
                projectModal ? <AddProjectModal setProjectModal={setProjectModal} projects={projects} setProjects={setProjects} />
                    : null
            }
            <div className="flex justify-end">
                <button onClick={SaveResume} className="p-2 px-10 bg-sky-500 hover:bg-sky-600 rounded-sm text-white">Save Resume</button>
            </div>
        </section>
    )
}

export default Resume
