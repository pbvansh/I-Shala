import Image from "next/image"

const Body = () => {

    const cities = [
        {
            url: "https://internshala.com/static/images/home/internships/categories/work_from_home.svg",
            Name: "Work from home"

        },
        {
            url: "https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg",
            Name: "Delhi/NCR"

        },
        {
            url: "https://internshala.com/static/images/home/internships/categories/bangalore.svg",
            Name: "Bangalore"

        },
        {
            url: "https://internshala.com/static/images/home/internships/categories/mumbai.svg",
            Name: "Mumbai"

        },
        {
            url: "https://internshala.com/static/images/home/internships/categories/hyderabad.svg",
            Name: "Hyderabad"

        },
        {
            url: "https://internshala.com/static/images/home/internships/categories/chennai.svg",
            Name: "Chennai"

        },
        {
            url: "https://internshala.com/static/images/home/internships/categories/kolkata.svg",
            Name: "Kolkata"

        },
        {
            url: "https://internshala.com/static/images/home/internships/categories/international.svg",
            Name: "International"

        }
    ];

    const catagoires = [
        {
            Url: "https://internshala.com/static/images/home/internships/categories/part_time.svg",
            cname: "Part-time"
        },
        {
            Url: "https://internshala.com/static/images/home/internships/categories/engineering.svg",
            cname: "Engineering"
        },
        {
            Url: "https://internshala.com/static/images/home/internships/categories/ngo.svg",
            cname: "NGO"
        },
        {
            Url: "https://internshala.com/static/images/home/internships/categories/business_mba.svg",
            cname: "Bussiness/MBA"
        },
        {
            Url: "https://internshala.com/static/images/home/internships/categories/design.svg",
            cname: "Design"
        },
        {
            Url: "https://internshala.com/static/images/home/internships/categories/science.svg",
            cname: "Science"
        },
        {
            Url: "https://internshala.com/static/images/home/internships/categories/media.svg",
            cname: "Media"
        },
        {
            Url: "https://internshala.com/static/images/home/internships/categories/humanities.svg",
            cname: "Humanities"
        },

    ]

    const pics = [
        {
            Urlp: "https://internshala.com/static/images/home/internships/categories/marketing.svg",
            pname: "Marketing"
        },
        {
            Urlp: "https://internshala.com/static/images/home/internships/categories/content_writing.svg",
            pname: "Content Writing"
        },
        {
            Urlp: "https://internshala.com/static/images/home/internships/categories/finance.svg",
            pname: "Finance"
        },
        {
            Urlp: "https://internshala.com/static/images/home/internships/categories/graphic_designing.svg",
            pname: "Graphic Designing"
        },
        {
            Urlp: "https://internshala.com/static/images/home/internships/categories/computer_science.svg",
            pname: "Computer Science"
        },
        {
            Urlp: "https://internshala.com/static/images/home/internships/categories/hr.svg",
            pname: "HR"
        },
        {
            Urlp: "https://internshala.com/static/images/home/internships/categories/data_science.svg",
            pname: "Data Science"
        },
    ]


    return (
        <>
            <div className="m-10">
                <div className="flex items-center space-x-3"> <h1 className="font-semibold text-gray-800 text-4xl">I-Shala Internships</h1>
                    <img src="https://internshala.com/cached_uploads/offer_tags/63198abd9fafd1662618301.png" width={90} height={8}
                        className="py-10 cursor-pointer" />


                </div>

                {/* <div className="flex text-gray-500 font-semibold text-xl">
                    Learn new-age skills on the go
                </div> */}
                <p className="flex text-black font-semibold my-10 text-xl ">
                    Popular Cities
                </p>

                {/* images */}
                <div className="space-y-16">
                    <div className="flex m-2 cursor-pointer ">
                        {
                            cities.map((obj,i) => (
                                <div key={i} className="p-3 hover:shadow-2xl">
                                    <img src={obj.url} />
                                    <p className="text-center font-semibold hover:text-sky-700">{obj.Name}</p>

                                </div>
                            ))
                        }
                    </div>
                    {/* catagories */}
                    <div className="flex text-xl text-black font-semibold">
                        Popular Catagories
                    </div>
                    <div className="flex m-2 cursor-pointer">
                        {
                            catagoires.map((ob , i) => (
                                <div key={i} className="p-3 hover:shadow-2xl">
                                    <img src={ob.Url} />
                                    <p className="text-center font-semibold hover:text-sky-700">{ob.cname}</p>
                                </div>
                            ))
                        }
                    </div>

                    {/* pics */}
                    <div className="flex m-2 cursor-pointer">
                        {
                            pics.map((pic , i) => (
                                <div key={i} className="p-3 hover:shadow-2xl">
                                    <img src={pic.Urlp} />
                                    <p className="text-center font-semibold hover:text-sky-700">{pic.pname}</p>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default Body