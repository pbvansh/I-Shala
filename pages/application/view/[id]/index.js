
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import ResumeComp from '../../../../components/ResumeComp'

const Review = ({user_id}) => {
    const route = useRouter();
    const id = route.query.id;
    const [app, setApp] = useState([])

    useEffect(() => {
        axios.get(`https://I-Shalabackend.pratikvansh.repl.co/application/cov/${id}`).then((res) => {
            setApp(res.data);
            console.log(res.data);
        }).catch((ex) => {
            console.log(ex)
        })
    }, [])

    return (
        <>
            <div className="min-h-screen max-w-screen-lg mx-auto">
                <Header title={'Cover letter | Resume'} />
                <div className="border border-gray-300 rounded-md mt-14">
                    <div className="bg-sky-100 border rounded-md border-gray-200 p-5 mt-0">
                        <p className="text-gray-900 text-4xl font-semibold">Application</p>
                    </div>

                    <div className="p-5 space-y-3">
                        <p className="text-gray-800 text-lg font-semibold">Cover letter</p>
                        <p className="text-gray-700 text-base font-semibold">Why should you be hired for this role?</p>
                        <p className="text-gray-500 font-semibold text-base">{app.cover_letter}</p>
                    </div>

                    <div className="p-5 space-y-3">
                        <p className="text-gray-800 text-lg font-semibold">Availability</p>
                        <p className="text-gray-500 font-semibold text-base">{app.Availability}</p>
                    </div>

                </div>


                {/* Resume */}
                <ResumeComp user_id={user_id}/>
            </div>
        </>
    )

}

export default Review


export function getServerSideProps(context) {
    const user_id = (context.query?.user_id).toString();
    return {
      props: { user_id }
    }
  }