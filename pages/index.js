import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isEmpState } from "../atom/loginAtom";
import JWT from 'jsonwebtoken'
import Home from "../components/Home"
import { useRouter } from "next/router";
import Header from "../components/Header";

const Index = () => {
    
     const route = useRouter();
     const [isEmp,setIsEmp] = useRecoilState(isEmpState);
     useEffect(()=>{
          const token = localStorage.getItem('i_shala_token');
          const user = JWT.decode(token)
          if(user?.isEmp) setIsEmp(true)
     },[])
     const isEmporNot =()=>{
          if(isEmp){
               route.push('/employee/personal_details')
               // return(<p>hello welcome</p>)
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

export default Index