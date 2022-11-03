import React from "react";

const Action = ()=>{
  return(
   <>
    <div className="min-h-screen max-w-screen-xl mx-auto">
    <div>
     <p className="font-semibold text-4xl p-12 text-center text-gray-700">Details of applicants</p>
     </div>

     <div className="border border-gray-300 rounded-md shadow-xl ">
                        <div className="grid grid-cols-5 text-gray-500 font-semibold  p-3  bg-gray-100 gap-5">
                            <p>NO.</p>
                            <p>STUDENT NAME</p>
                            <p>APPLIED ON</p>
                            <p>COVER LETTER</p>
                            <p>STATUS</p>

                            {/* <p>REVIEW APPLICATION</p> */}

                        </div>
                        <div>
                            
                        </div>

</div>
    </div>
   </>
  )
}

export default Action