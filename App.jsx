import { useState } from 'react'

import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative p-24">
        <img src="https://img4.idealista.com/blur/HOME_ORIGINAL/0/id.pro.es.image.master/home/1721039890313.jpg" alt="" className="h-auto w-full" />
        <div className="subcategor transform absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 bg-[#E1F56E] px-16 py-4 opacity-95 sm:w-4/5 md:w-3/5  md:px-24 md:py-6 lg:w-3/4 lg:px-6 xl:w-4/5">
          {/* <!-- Main content Area --> */}
          <h1 className="mb-2 text-center text-2xl font-bold">Find your property in Spain</h1>
          <div className="relative  h-full max-w-screen-lg bg-[#E1F56E] pl-1 pt-4  ">
            {/* <!-- Overlay Content --> */}
            <div className="relative flex flex-col items-center space-y-4 lg:flex-row  lg:items-center lg:justify-between lg:space-y-0">
              {/* <!-- Buy and Rent Buttons --> */}
              <div className="mb-4 flex justify-center lg:mb-0">
                <button className="rounded-sm bg-white px-6 py-2 font-bold shadow focus:outline-none">Buy</button>
                <button className="rounded-sm bg-white px-6 py-2 font-bold text-gray-800 shadow hover:bg-gray-100 focus:outline-none">Rent</button>
              </div>

              {/* <!-- Dropdown --> */}
              <div className="relative mb-4 lg:mb-0 mx-4 ">
                <select className="appearance-none rounded-sm border border-gray-300 bg-white px-4 py-2 pr-20  leading-tight text-gray-800 shadow focus:border-pink-600 focus:outline-none ">
                  <option>Homes</option>
                  <option>Apartments</option>
                  <option>Villas</option>
                </select>

                <svg className="pointer-events-none absolute right-2 top-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>

              {/* <!-- Search Bar --> */}
              <div className="flex flex-col lg:flex-row lg:space-x-4 items-center">
                <input id="campoBus" className="w-full rounded-sm border border-gray-300 px-52 py-2 focus:otline-none focus:ring-2 focus:ring-blue-500 lg:w-auto" autocomplete="off" type="text" name="freeText" placeholder="Search in Spain" />
                <svg className="transform pointer-events-none absolute top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M17.707 16.293a1 1 0 01-1.414 0l-3.586-3.586a7 7 0 111.414-1.414l3.586 3.586a1 1 0 010 1.414zM7 11a4 4 0 100-8 4 4 0 000 8z" clip-rule="evenodd" />
                </svg>
                <button className="rounded-sm bg-[#8c1d64] px-6 py-2 font-bold text-white shadow hover:bg-pink-700 focus:outline-none">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
