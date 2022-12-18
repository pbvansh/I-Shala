
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isApplicationUpdatedState } from "../../atom/applicationAtom";
import Applicant from "../../components/Applicant";
import Header from "../../components/Header";
import StatusModal from "../../components/StatusModal";

const Applicants = ({ id }) => {

  const [applicants, setApplicants] = useState([])
  const [showStatusModal, setshowStatusModal] = useState(false);
  const IsUpdated = useRecoilValue(isApplicationUpdatedState)
  useEffect(() => {
    axios.get(`https://I-Shalabackend.pratikvansh.repl.co/company/${id}/applicants`).then((res) => {
      setApplicants(res.data)
      console.log(res.data);
    })
  }, [IsUpdated])

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto">
      <div>
        <p className="font-semibold text-4xl p-12 text-center text-gray-700">Details of applicants</p>
      </div>

      <div className="border border-gray-300 rounded-md shadow-xl ">
        <Header title={'Details of applicants'}/>
        <div className="grid grid-cols-6 text-gray-500 font-semibold  p-3  bg-gray-100 gap-5">
          <p>NO.</p>
          <p>STUDENT NAME</p>
          <p>APPLIED ON</p>
          <p>COVER LETTER</p>
          <p>STATUS</p>
          <p>ACTION</p>
        </div>
        {
          applicants.map((cand, i) => (
            <Applicant key={i} cand={cand} i={i} setshowStatusModal={setshowStatusModal} />
          ))
        }
        <div>

        </div>

      </div>
      {
        showStatusModal ?
          <>
            <StatusModal setshowStatusModal={setshowStatusModal} />
          </>
          : null
      }
    </div>
  )
}

export default Applicants;


export function getServerSideProps(context) {
  const id = (context.query.Internship_id).toString();
  return {
    props: { id }
  }
}