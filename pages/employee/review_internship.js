import {
    BookmarkIcon, CalendarIcon, ClipboardCheckIcon, ClockIcon, CurrencyRupeeIcon, HomeIcon, LocationMarkerIcon,
    PlayIcon, TrendingUpIcon, UserGroupIcon, UsersIcon
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';

const Review_internship = () => {
    const route = useRouter();
    const internship = route.query;
    return (
        <div>
            <div className='p-8 justify-center text-center text-4xl mt-0'>
                <p className=' font-semibold text-gray-800'>{internship.Internship_Name} Internship At {internship.company_name}</p>
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
                            <p className="text-gray-800 font-semibold text-xl cursor-pointer">{internship.Internship_Name}</p>
                            <p className="text-gray-500 font-semibold cursor-pointer">{internship.company_name}</p>
                        </div>
                        {internship.Location == 'Work from home' ?
                            <div className="flex space-x-1">
                                <HomeIcon className='h-5 w-5 text-gray-500' />
                                <p className='text-gray-700'>Work From Home</p>
                            </div>
                            :
                            <div className="flex space-x-1">
                                <LocationMarkerIcon className='h-5 w-5 text-gray-500' />
                                <p className='text-gray-700'>{internship.Location}</p>
                            </div>
                        }
                        <div className="flex space-x-10 text-sm">
                            <div className='space-x-1 space-y-1 '>
                                <div className='flex text-gray-500 space-x-1'>
                                    <PlayIcon className='h-5 w-5 ' />
                                    <p className='font-semibold text-sm'>START DATE</p>
                                </div>
                                <p className='text-gray-800 text-base'>{internship.start_date}</p>
                            </div>
                            <div className='space-x-1 space-y-1'>
                                <div className='flex text-gray-500 space-x-1'>
                                    <CalendarIcon className='h-5 w-5' />
                                    <p className='font-semibold text-sm'>DURATION</p>
                                </div>
                                <p className='text-gray-800 text-base'>{internship.Duration}</p>
                            </div>
                            <div className='space-x-1 space-y-1'>
                                <div className='flex text-gray-500 space-x-1'>
                                    <CurrencyRupeeIcon className='h-5 w-5 ' />
                                    <p className='font-semibold text-sm'>STIPEND</p>
                                </div>
                                <p className='text-gray-800 text-base'>{internship.Stipend}</p>
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
                        <div className='flex text-gray-600 space-x-2'>
                            <UserGroupIcon className='h-5 w-5' />
                            <p className='text-gray-500 font-semibold'>{internship.TotalNoOfApplicants} Applicants</p>
                        </div>
                        <hr></hr>
                        <div className='space-y-2'>
                            <p className='font-semibold text-gray-800 text-xl'>About {internship.company_name}</p>
                            <p className='text-base text-gray-500 font-semibold'>{internship.About_company}</p>
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
                                About the internship
                            </p>
                            <p className='text-gray-600 font-semibold'>Selected intern's day-to-day responsibilities include:</p>
                        </div>
                        <div className='text-gray-600 font-normal'>

                            <p className='text-gray-500 font-semibold'>{internship.About_internship}</p>

                        </div>
                        <div>
                            <p className='text-gray-800 font-semibold text-xl'>Skills Required</p>
                            <p className='text-gray-500 text-base font-semibold'>{internship.RequiredSkills}</p>
                        </div>
                        <div className='text-xl text-gray-800 font-semibold'>
                            <p>Who can apply</p>
                            <p className='text-gray-500 text-base'>{internship.whocanapply}</p>
                        </div>
                        <div >
                        </div>

                        <div className='space-y-1'>
                            <p className='text-xl text-gray-800 font-semibold'>
                                Perks
                            </p>
                            <div className='flex space-x-10 text-gray-500 font-semibold'>
                                <p>{internship.perks}</p>
                            </div>

                        </div>
                        <div className='space-y-2'>
                            <p className='text-xl text-gray-800 font-semibold'>Additional Information</p>
                            <p className='text-gray-500 font-semibold'>{internship.Additional_information}</p>
                        </div>
                        <div>
                            <p className='text-xl text-gray-800 font-semibold'>Number of openings</p>
                            <p className='font-semibold text-gray-500'>{internship.NoOfOpening}</p>
                        </div>
                        <div className='flex items-center justify-center'>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Review_internship