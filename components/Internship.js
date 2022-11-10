import { CalendarIcon, ChevronRightIcon, ClockIcon, CurrencyRupeeIcon, HomeIcon, LocationMarkerIcon, PlayIcon, TrendingUpIcon } from '@heroicons/react/outline'
import Link from 'next/link';


const Internship = ({ i }) => {
    console.log(i);
    return (

        <div className="bg-white p-5 w-full space-y-5 border rounded-md shadow-lg ">
            <div className='border rounded-md inline-flex'>
                <TrendingUpIcon className='h-5 w-5 text-sky-600' />
                <p className='text-gray-800  text-sm inline p-1'>Actively hiring</p>
            </div>
            <div className='space-y-1'>
                <Link href={`/internship/${i._id}`}>
                <p className="text-gray-900 font-semibold text-xl cursor-pointer">{i.Internship_Name}</p>
                </Link>
                <p className="text-gray-500 font-semibold cursor-pointer">{i.company_id ? i.company_id.Name : 'sp'}</p>
            </div>
            { i.Internship_type==='work_from_home' ? 
                <div className="flex space-x-1">
                    <HomeIcon className='h-5 w-5 text-gray-500' />
                    <p className='text-gray-700'>Work From Home</p>
                </div>
            :
                <div className="flex space-x-1">
                    <LocationMarkerIcon className='h-5 w-5 text-gray-500' />
                    <p className='text-gray-700'>{i.Location}</p>
                </div>
            }
            <div className="flex space-x-10 text-sm">
                <div className='space-x-1 space-y-1 '>
                    <div className='flex text-gray-500 space-x-1'>
                        <PlayIcon className='h-5 w-5 ' />
                        <p className='font-semibold text-sm'>START DATE</p>
                    </div>
                    <p className='text-gray-800 text-base'>{i.start_date}</p>
                </div>
                <div className='space-x-1 space-y-1'>
                    <div className='flex text-gray-500 space-x-1'>
                        <CalendarIcon className='h-5 w-5' />
                        <p className='font-semibold text-sm'>DURATION</p>
                    </div>
                    <p className='text-gray-800 text-base'>{i.Duration}</p>
                </div>
                <div className='space-x-1 space-y-1'>
                    <div className='flex text-gray-500 space-x-1'>
                        <CurrencyRupeeIcon className='h-5 w-5 ' />
                        <p className='font-semibold text-sm'>STIPEND</p>
                    </div>
                    <p className='text-gray-800 text-base'>{i.Stipend}</p>

                </div>
            </div>

            <div className='flex space-x-10 text-sm'>
                <div className='bg-green-100 flex space-x-1 p-1'>
                    <ClockIcon className='h-5 w-5 text-green-700' />
                    <p className='text-green-700'>Just now</p>
                </div>
                <p className='bg-gray-200 border rounded-md text-gray-700 p-1 font-semibold'>Internship</p>
                <p className='bg-gray-200 border rounded-md text-gray-700 p-1 font-semibold'>Internship with job offer</p>
                <div className='flex text-sky-500 hover:text-sky-600 cursor-pointer'>
                    <Link href={`/internship/${i._id}`}>
                        <p className='font-semibold text-right ml-44'>View details</p>
                    </Link>
                    <ChevronRightIcon className='h-5 w-5'/>
                </div>

            </div>




        </div>


    );
}

export default Internship