
import { useRef } from "react";
const review = () => {

    return (
        <>
            <div className="min-h-screen max-w-screen-lg mx-auto">
                <div className="border border-gray-300 rounded-md mt-14">
                    <div className="bg-sky-100 border rounded-md border-gray-200 p-5 mt-0">
                        <p className="text-gray-900 text-4xl font-semibold">Application</p>
                    </div>

                    <div className="p-5 space-y-3">
                        <p className="text-gray-800 text-lg font-semibold">Cover letter</p>
                        <p className="text-gray-700 text-base font-semibold">Why should you be hired for this role?</p>
                        <p className="text-gray-500 font-semibold text-base">{}</p>
                    </div>

                    <div className="p-5 space-y-3">
                        <p className="text-gray-800 text-lg font-semibold">Availability</p>
                        <p className="text-gray-500 font-semibold text-base">{}</p>
                    </div>
                    
                </div>


            </div>

        </>
    )

}

export default review