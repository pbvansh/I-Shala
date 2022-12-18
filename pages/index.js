import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isEmpState } from "../atom/loginAtom";
import JWT from 'jsonwebtoken'
import Home from "../components/Home"
import { useRouter } from "next/router";
import Header from "../components/Header";
import axios from "axios";

const Index = () => {
    
     const route = useRouter();
     const [user,setUser] = useState()
     const [isEmp,setIsEmp] = useRecoilState(isEmpState);
     useEffect(()=>{
          const token = localStorage.getItem('i_shala_token');
          const user = JWT.decode(token)
          setUser(user)
          if(user?.isEmp) setIsEmp(true)
     },[])
     const isEmporNot =()=>{
          if(isEmp){
               axios.get('https://I-Shalabackend.pratikvansh.repl.co/employee/' + user?.id).then((res) => {
                    if(res.data){
                         route.push('/employee/dashboard')
                    }else{
                         route.push('/employee/personal_details')
                    }
               })
              
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