import React, { use } from 'react'
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {

  return (
    <div className=' -mb-10'>
      <hr className='border border-base-200 ' />

    <footer className="footer  sm:footer-horizontal bg-[#1c263c] shadow-sm  text-base-600 py-10 w-full px-[8%] mx-auto text-gray-100 ">
  <nav>
    <h6 className="footer-title">Services</h6>

    <a className="link link-hover">Find Tutors</a>
    <a className="link link-hover">Find Tuitions</a>
    <a className="link link-hover">Making Post</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
      <FaXTwitter size={19} className='mt-1' />
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  
  
</footer>
 
<div className="bootm flex justify-center items-center py-4 px-[7%] text-center bg-[#192235] text-gray-100">
  
       <p className='py-1' >Copyright © {new Date().getFullYear()} - All right reserved by eTuitionBD</p>

  </div>
    </div>
  )
}

export default Footer
