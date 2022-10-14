import { useRecoilValue } from "recoil";
import { isEmpState } from "../atom/loginAtom";
import Home from "../components/Home"

const index = () => {

     const isEmp = useRecoilValue(isEmpState);
     console.log(isEmp);
     const isEmporNot =()=>{
          if(isEmp){
               return(<p>hello welcome</p>)
          }
          else{
               return( <Home />)
          }
     }
     return (
          
               <div className="max-w-screen-xl mx-auto">
               {
                    isEmporNot()
               }
                </div>


     );
}

export default index