
const AddProjectModal = ({setProjectModal}) => {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setProjectModal(false)}
            ></div>
            <div className="flex min-h-screen items-center justify-center">
                <div className=" p-4 w-full max-w-xl h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => setProjectModal(false)} type="button" className="absolute  top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center mb-3">
                            <img src='https://t3.ftcdn.net/jpg/02/96/27/28/240_F_296272864_7XXe0wavzRXA9zKSkzXxhmZhQbyY8b26.jpg' height={100} width={100} className='mx-auto p-1' />
                            <div className='mb-5 whitespace-nowrap'>
                                <div>
                                    <p className="text-2xl font-bold text-sky-500">Academic/ personal project</p>
                                    <div className="flex p-3 flex-col">
                                        <label className="font-semibold p-[5px] text-gray-700">Title</label>
                                        <input type={'text'} placeholder='e.g. MyProjectTitle' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                                    </div>
                                    <div className="flex p-3 space-x-5">
                                        <div className="flex  flex-col flex-1 text-gray-700">
                                            <label className="font-semibold p-[5px]">Start month</label>
                                            <input type={'text'} placeholder='yyyy-mm' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label className="font-semibold p-[5px] text-gray-700">End month</label>
                                            <input type={'text'} placeholder='yyyy-mm' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                                        </div>
                                    </div>
                                    <div className="flex p-3 flex-col">
                                        <label className="font-semibold p-[5px] text-gray-700">Description <span className="text-xs">(Optional)</span></label>
                                        <textarea type={'text'} placeholder='Short description about project (max 250 char)' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                                    </div>
                                    <div className="flex p-3 flex-col">
                                        <label className="font-semibold p-[5px] text-gray-700">Project link <span className="text-xs">(Optional)</span></label>
                                        <input type={'text'} placeholder='e.g. http://myprojectlink.com ' className="flex-1 rounded-sm p-2 focus:outline-none border focus:border-sky-500" />
                                    </div>
                                    <div className="flex justify-end p-3">
                                        <button className="p-2 px-8 bg-sky-500 text-lg text-white rounded-sm hover:bg-sky-600">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProjectModal
