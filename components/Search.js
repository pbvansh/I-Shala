import {SearchIcon} from "@heroicons/react/solid"
const Search = () =>{
return(
<>
   <div className="flex m-10 w-[500px] mx-auto flex-grow h-12">
      <input type="text" placeholder="What are you looking for?" className="outline-none hover:border-sky-500 rounded-l-md px-2 flex-1 border border-r-0"/>
      <div>
         <SearchIcon className="h-full p-1 bg-sky-500 text-white rounded-r-md hover:bg-sky-600"/>
      </div>
   </div>
</>

);

}

export default Search


// div className="flex m-10 w-[500px] justify-center mx-auto flex-grow h-12">
//                 <input type={'text'} placeholder="What are you looking for?" className="outline-none rounded-l-sm px-2 flex-1 border border-r-0 hover:border-sky-600"/>
//                 <div className="">
//                   <SearchIcon className="h-full p-1 bg-sky-500 text-white rounded-r-sm "/>
//                 </div>
//             </div>