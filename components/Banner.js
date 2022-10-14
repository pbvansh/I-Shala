import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles//carousel.min.css'


const bannerUrl =[
  'https://raw.githubusercontent.com/SrikanthReddyBV/Internshala/master/src/public/images/get_set_intern_2021-1920-5bb08e.png',
  'https://raw.githubusercontent.com/SrikanthReddyBV/Internshala/master/src/public/images/learn_with_me-1920-5da5b0.png',
  'image.PNG',
  'banner.PNG',
  'int.PNG',
  'https://raw.githubusercontent.com/SrikanthReddyBV/Internshala/master/src/public/images/social_issue_camapign_jul21-1920-b70cf7.png',
  // 'https://raw.githubusercontent.com/SrikanthReddyBV/Internshala/master/src/public/images/page_3rd_image.png',
  'https://raw.githubusercontent.com/SrikanthReddyBV/Internshala/master/src/public/images/year_specific_21-1920-d0c72f.png',
  // 'https://internshala-frontend.web.app/static/media/sliderimg.40786c65.jpeg',
  // 'https://github.com/mukeshmjn/internshala-clone/blob/main/public/img/img3.jpeg?raw=true'
  // "https://kishorsasemahal.com/wp-content/uploads/2021/06/featured-image-6.jpeg"
   'job.PNG'



]

const Banner = () =>{
  return(
   <div>
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
      >
        {
          bannerUrl.map(url=>(
            <div key={url}>
              <img src={url} loading="lazy"/>
            </div>
          ))
        }



    </Carousel>
    </div>)
}


export default Banner








// const Banner = () => {
//   return (
//     <div className='mx-auto relative'>
//       <div className='absolute w-full z-10 h-52 bottom-0 bg-gradient-to-t from-white to-transparent'/>
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showStatus={false}
//         showIndicators={false}
//         showThumbs={false}
//         interval={5000}
//       >
//         {
//           bannerUrl.map(url => (
//             <div key={url}>
//               <img src={url} loading='lazy' />
//             </div>
//           ))
//         }
//       </Carousel>
//     </div>
//   )
// }

// export default Banner