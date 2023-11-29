import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  
  return (
    <div className=''>
     {/* top */} 
     <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
      <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>Discover your next <span className='text-slate-500'>Ideal</span> <br/>abode effortlessly</h1>
      <div className='text-gray-500 text-xs sm:text-sm font-semibold'>
       Real estate is the prime destination to discover your next ideal residence.
       <br/>
       We offer a diverse selection of properties for you to choose from.
     </div>
     <Link to={'/search'} className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'>
     Let's commence...
     </Link>
     </div>

     {/*swiper*/}
     <div></div>
   
    </div>
  )
}
