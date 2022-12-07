

const Resume = () => {
    return (
        <section className="min-h-screen max-w-4xl mx-auto border p-10 m-5 rounded-md space-y-8">
            <p className="text-center font-bold text-4xl p-5">Your Resume</p>
            <div>
                <div className="flex p-3 space-x-10">
                    <input type={'text'} placeholder='First Name' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    <input type={'text'} placeholder='Last Name' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
                <div className="flex p-3 space-x-10">
                    <input type={'text'} placeholder='Email - xyz@gmail.com' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    <input type={'text'} placeholder='Mobile No.' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
                <div className="flex p-3">
                    <textarea placeholder="Enter your address" className="flex-1 focus:outline-none border focus:border-sky-500 p-2" />
                </div>
            </div>
            <hr />
            <div>
                <p className="text-2xl font-bold text-sky-500">Graduation details</p>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">College</label>
                    <input type={'text'} placeholder='e.g. Hindu College' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Degree</label>
                    <input type={'text'} placeholder='e.g. B.Sc' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
                <div className="flex p-3 space-x-5">
                    <div className="flex  flex-col flex-1 text-gray-700">
                        <label className="font-bold p-[5px]">Start year</label>
                        <input type={'text'} placeholder='Choose Your' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="font-bold p-[5px] text-gray-700">End year</label>
                        <input type={'text'} placeholder='Choose Your' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="font-bold p-[5px] text-gray-700">Performance</label>
                        <input type={'text'} placeholder='0.00 (GP/10)' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <p className="text-2xl font-bold text-sky-500">Academic/ personal project</p>
                <div className="flex p-3 flex-col">
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
                </div>
            </div>
            <hr />
            <div>
                <p className="text-2xl font-bold text-sky-500">Skills</p>
                <div>
                    youe skills here
                </div>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Add skills</label>
                    <textarea type={'text'} placeholder='e.g. C++,Java,PHP,etc...' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
            </div>
            <hr />
            <div>
                <p className="text-2xl font-bold text-sky-500">Certificate</p>
                <div>
                    youe CERTIFICATE here
                </div>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Add skills</label>
                    <textarea multiline={true} type={'text'} placeholder={'Put certificate link here like this \nABC,\nXYZ,\nETC...'} className="flex-1 min-h-[120px] whitespace-pre-line rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
            </div>
            <hr />
            <div>
                <p className="text-2xl font-bold text-sky-500">portfolio /work samples</p>
                <div>
                    youe skills here
                </div>
                <div className="flex p-3 flex-col">
                    <label className="font-bold p-[5px] text-gray-700">Add skills</label>
                    <textarea type={'text'} placeholder='e.g. C++,Java,PHP,etc...' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
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
                    <textarea type={'text'} placeholder='Write anything' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                </div>
            </div>
        </section>
    )
}

export default Resume
