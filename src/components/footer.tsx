import React from 'react'
function Footer() {
  return (
    <footer className="text-gray-100 bg-black body-font">
      <hr />
    <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img src="https://media.licdn.com/dms/image/D4D0BAQGigjTN1JPVzA/company-logo_200_200/0/1692046912810/plateupindia_logo?e=1718236800&v=beta&t=DDEpw0EVdaYkMkH0HzakLhh_PEqrAKRUeZwTRzgvLyk" alt="Plateup" className='rounded-full w-2/4 h-2/4'/>
        </a>
        <h1 className="font-black text-white text-lg py-3">Plateup</h1>
        <p className="mt-2 text-sm text-gray-500">One Stop Solution to all your need with our Allowance Services.</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
        <div className="lg:w-1/3 md:w-1/2 w-full p-4 justify-center">
          <nav className="list-none">
            <li className='text-lg cursor-pointer hover:scale-110 transition-all py-2 font-bold'>
              <a className="text-gray-100 hover:text-white">Home</a>
            </li>
            <li className='text-lg cursor-pointer hover:scale-110 transition-all py-2 font-bold'>
              <a className="text-gray-100 hover:text-white">About Us</a>
            </li>
            <li className='text-lg cursor-pointer hover:scale-110 transition-all py-2 font-bold'>
              <a className="text-gray-100 hover:text-white">Services</a>
            </li>
            <li className='text-lg cursor-pointer hover:scale-110 transition-all py-2 font-bold'>
              <a className="text-gray-100 hover:text-white">Careers</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full p-4 justify-center">
          <nav className="list-none">
            <li className='text-lg cursor-pointer hover:scale-110 transition-all py-2 font-bold'>
              <a className="text-gray-100 hover:text-white">Terms & Conditions</a>
            </li>
            <li className='text-lg cursor-pointer hover:scale-110 transition-all py-2 font-bold'>
              <a className="text-gray-100 hover:text-white">Privacy Policy</a>
            </li>
            <li className='text-lg cursor-pointer hover:scale-110 transition-all py-2 font-bold'>
              <a className="text-gray-100 hover:text-white">Get In Touch</a>
            </li>
            <li className='text-lg cursor-pointer hover:scale-110 transition-all py-2 font-bold'>
              <a className="text-gray-100 hover:text-white">FAQs</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full p-4 justify-center">
          <nav className="list-none">
            <li className='text-lg py-2 font-semibold'>
              <a className="text-white">Address</a>
            </li>
            <li className='text-md font-semibold flex text-white items-start my-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
              <a  className='ml-2'> Address Line 1, Area, City, State, India</a>
            </li>
            <li className='text-md font-semibold flex text-white items-start my-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
              <a className='ml-2'> Address Line 2, Area, City, State, UAE</a>
            </li>
            <li className='text-md font-semibold flex text-white items-center my-2' >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
              <a className='ml-2'> hello@plateup.in</a>
            </li>
            <li className='text-md font-semibold flex text-white items-center my-2' >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
              <a className='ml-2'> +91 9876543210</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <hr />
    <div className="bg-orange bg-opacity-75">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-100 text-sm text-center sm:text-left">© 2024 Plateup 
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">- Plateup.in</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-100">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-100">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-100">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-100">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer
