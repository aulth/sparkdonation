import React from 'react'

const Navbar = () => {
  return (
   <div className="w-full flex justify-between items-center p-2 shadow">
    <div className="flex items-center">
    <img className='w-[30px] align-middle' src="https://internship.thesparksfoundation.info/assests/img/logo.png" alt="" />
    {/* <h2 className="font-semibold  text-xl font-[helvetica]">TSF</h2> */}
    </div>
    <nav>
        <ul className="flex">
            <li className='ml-2 hover:font-bold font-semibold cursor-pointer'>About</li>
            <li className='ml-2 hover:font-bold font-semibold cursor-pointer'>Contact</li>
        </ul>
    </nav>
   </div>
  )
}

export default Navbar