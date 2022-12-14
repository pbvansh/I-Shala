// const Footer = ()=>{
//      return(
//         <>

//         </>
//      );
// }


// export default Footer


import React from 'react'

function Footer() {
  return (
    <>
      <div className="bg-gray-800 text-white mt-5">
        <div className="grid grid-cols-4">
          {/* column1 */}
          <div className="mx-16">
            <h5 className='font-bold py-5'>Internships by places</h5>
            <ul className='space-y-1'>
              <li>Internship in India</li>
              <li>Internship in Delhi</li>
              <li>Internship in Bangalore</li>
              <li>Internship in Hyderabad</li>
              <li>Internship in Mumbai</li>
              <li>Internship in Chennai</li>
              <li>Internship in Gurgaon</li>
              <li>Internship in Kolkata</li>
              <li>Virtual internship</li>
            </ul>
          </div>
          {/* column2 */}
          <div className="">
            <h5 className='font-bold py-5'>Internship by Stream</h5>
            <ul className='space-y-1'> 
              <li>Computer Science Internship</li>
              <li>Electronics Internship</li>
              <li>Mechanical Internship</li>
              <li>Civil Internship</li>
              <li>Marketing Internship</li>
              <li>Chemical Internship</li>
              <li>Finance Internship</li>
              <li>Summer Research Fellowship</li>
              <li>Campus Ambassador Programs</li>
            </ul>

          </div>
          {/* column3 */}
          {/* <div className="">
                        <h5>Online Trainigs</h5>
                        <ul >
                            <li>Web Development</li>
                            <li>Android App Development</li>
                            <li>Programming with Python</li>
                            <li>Data Science</li>
                            <li>Ethical Hacking</li>
                            <li>Core Java</li>
                            <li>Digital Marketing</li>
                            <li>Advanced Excel</li>
                            <li>Programming with C & c++</li>
                        </ul>

                    </div> */}

          <div className="bg-gray-800 justify-center items-center flex flex-grow space-x-2 col-span-2 shadow-transparent">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
              height={30} width={40} className="p-2 hover:cursor-pointer"
            />

            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" 
              height={30} width={40} className="p-2 hover:cursor-pointer"
            />
            <img src="https://ctl.s6img.com/society6/img/HIPy8HEc1R67PFZ5zABov-1SLSw/w_700/posters/top/~artwork,fw_2719,fh_3621,fx_-1,fy_449,iw_2720,ih_2720/s6-original-art-uploads/society6/uploads/misc/8e29a2e79387449caa28090d71f489e3/~~/github-logo-posters.jpg"
              height={20} width={30} className="p-1 hover:cursor-pointer rounded-full bg-black"
            />

            <img src="https://cdn.cdnlogo.com/logos/t/96/twitter-icon.svg"
              height={20} width={30} className="p-1 hover:cursor-pointer rounded-full bg-black"
            />
            <img src="mail.png" height={30} width={25} className="ml-3 hover:cursor-pointer"/>
          </div>
        </div>


      </div>

    </>

  )
}

export default Footer
