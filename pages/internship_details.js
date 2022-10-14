import Link from 'next/link';
import {
    CalendarIcon, ChevronRightIcon, ClipboardCheckIcon, ClockIcon, CurrencyRupeeIcon, HomeIcon, LocationMarkerIcon,
    PlayIcon, TrendingUpIcon, UserGroupIcon, UsersIcon
} from '@heroicons/react/outline'


const internship_details = () => {
    return (
        <>
            <div className='p-14 justify-center text-center text-4xl'>
                <p className=' font-semibold text-gray-800'>work from home job/internship at Ahemdabad</p>
            </div>
            <div>

                <div className="max-w-screen-lg min-h-screen border rounded-lg mx-auto mb-12">
                    {/* <Internship/> */}

                    <div className="bg-white p-5 w-full space-y-5 ">
                        <div className='border rounded-md inline-flex'>
                            <TrendingUpIcon className='h-5 w-5 text-sky-600' />
                            <p className='text-gray-800  text-sm inline p-1'>Actively hiring</p>
                        </div>
                        <div className='space-y-1'>
                            <p className="text-gray-800 font-semibold text-xl cursor-pointer">Web Development</p>
                            <p className="text-gray-500 font-semibold cursor-pointer">sp</p>
                        </div>
                        <div className="flex space-x-1">
                            <HomeIcon className='h-5 w-5 text-gray-500' />
                            <p className='text-gray-700'>Work From Home</p>
                        </div>
                        <div className="flex space-x-1">
                            <LocationMarkerIcon className='h-5 w-5 text-gray-500' />
                            <p className='text-gray-700'>Location</p>
                        </div>
                        <div className="flex space-x-10 text-sm">
                            <div className='space-x-1 space-y-1 '>
                                <div className='flex text-gray-500 space-x-1'>
                                    <PlayIcon className='h-5 w-5 ' />
                                    <p className='font-semibold text-sm'>START DATE</p>
                                </div>
                                <p className='text-gray-800 text-base'>Immediatly</p>
                            </div>
                            <div className='space-x-1 space-y-1'>
                                <div className='flex text-gray-500 space-x-1'>
                                    <CalendarIcon className='h-5 w-5' />
                                    <p className='font-semibold text-sm'>DURATION</p>
                                </div>
                                <p className='text-gray-800 text-base'>6 months</p>
                            </div>
                            <div className='space-x-1 space-y-1'>
                                <div className='flex text-gray-500 space-x-1'>
                                    <CurrencyRupeeIcon className='h-5 w-5 ' />
                                    <p className='font-semibold text-sm'>STIPEND</p>
                                </div>
                                <p className='text-gray-800 text-base'>20,000-50,000/month</p>

                            </div>
                        </div>

                        <div className='flex space-x-10 text-sm'>
                            <div className='bg-green-100 flex space-x-1 p-1'>
                                <ClockIcon className='h-5 w-5 text-green-700' />
                                <p className='text-green-700'>Just now</p>
                            </div>
                            <p className='bg-gray-200 border rounded-md text-gray-700 p-1 font-semibold'>Internship</p>
                            <p className='bg-gray-200 border rounded-md text-gray-700 p-1 font-semibold'>Internship with job offer</p>
                        </div>
                        <div className='flex text-gray-500 space-x-2'>
                            <UserGroupIcon className='h-5 w-5' />
                            <p>315 applicants</p>
                        </div>

                        <hr></hr>

                        <div className='space-y-2'>
                            <p className='font-semibold text-gray-800 text-xl'>About sp</p>
                            <p className='text-base text-gray-500'>Jankalyan Multipurpose Education Society started in 2001, is a non-profit organization
                                committed to bringing the best educational resources to under-served tribal communities
                                of Chandrapur district (Maharashtra). We always stressed on activities and strategies that cover the
                                whole cycle of what is required for providing quality education to an individual child in a structured manner.
                                Our mission is to build a platform for vulnerable and oppressed children, living in poverty. Thus empowering
                                them with a well-equipped education system and gaining knowledge to alleviate poverty</p>
                        </div>

                        <div className='border rounded-md p-3 space-y-1'>
                            <div>
                                <p className='text-gray-700 text-base font-semibold'>Activity on Internshala</p>
                            </div>
                            <div className='flex space-x-12'>
                                <div className='flex space-x-1 text-gray-600 font-semibold'>
                                    <CalendarIcon className='h-5 w-5' />
                                    <p>Hiring since December 2019</p>
                                </div>
                                <div className='flex space-x-1 text-gray-600 font-semibold'>
                                    <ClipboardCheckIcon className='h-5 w-5' />
                                    <p>3674 opportunities posted</p>
                                </div>
                                <div className='flex space-x-1 text-gray-600 font-semibold'>
                                    <UsersIcon className='w-5 h-5' />
                                    <p>10252 candidates hired</p>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <p className='text-gray-800 font-semibold text-xl'>
                                About the work from home job/internship
                            </p>
                            <p className='text-gray-600 font-semibold'>Selected intern's day-to-day responsibilities include:</p>
                        </div>
                        <div className='text-gray-600 font-normal'>

                            <p>1. Creating fundraising campaigns</p>
                            <p>2. Formalizing growth strategy</p>
                            <p>3. Working on the execution of various strategies</p>
                        </div>

                        <div className='text-xl text-gray-800 font-semibold'>
                            <p>Who can apply</p>
                        </div>
                        <div className='text-gray-600 '>
                            <p>Only those candidates can apply who:</p>
                            <p>1. are available for the work from home job/internship</p>
                            <p>2. can start the work from home job/internship between 8th Sep'22 and 13th Oct'22</p>
                            <p>3. are available for duration of 1 week</p>
                            <p>4. have relevant skills and interests</p>
                        </div>

                        <div className='space-y-1'>
                            <p className='text-xl text-gray-800 font-semibold'>
                                Perks
                            </p>
                            <div className='flex space-x-10 text-gray-700'>
                                <p className='border rounded-md bg-gray-100 p-1 outline-none'>Certificate</p>
                                <p className='border rounded-md bg-gray-100 p-1'>Letter of recommendation</p>
                                <p className='border rounded-md bg-gray-100 p-1'>Flexible work hours</p>
                            </div>

                        </div>
                        <div className='space-y-2'>
                            <p className='text-xl text-gray-800 font-semibold'>Additional Information</p>
                            <p className='text-gray-700'>Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also
                                be paid a performance-linked incentive (10% of total funds raised).</p>
                        </div>
                        {/* <p className='text-gray-700'>Incentives shall be awarded to the intern based on the performance.</p> */}

                        <div>
                            <p className='text-xl text-gray-800 font-semibold'>Number of openings</p>
                            <p>200</p>
                        </div>

                        {/* <p className='bg-sky-400 text-white font-semibold border rounded-md p-3 w-32 text-lg cursor-pointer hover:bg-sky-500 shadow-lg text-center mx-auto'>Apply now</p> */}
                         <div className='flex items-center justify-center'>
                            <Link href='/resume'>
                             <button className='bg-sky-400 text-white font-semibold border rounded-md p-3 w-32 text-lg 
                             cursor-pointer hover:bg-sky-500 shadow-lg text-center mx-auto'>Apply now</button>
                            </Link>
                            </div> 



                    </div>




                </div>
            </div>
        </>
    );

}

export default internship_details