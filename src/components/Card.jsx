import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";

function Card() {
  return (
    <div className="relative w-60 h-72 rounded-[30px] bg-zinc-900/70 overflow-hidden">
        <div className="top-bar p-5">
        <FaRegFileAlt color="white" size="20px" />
        <p className='text-sm text-gray-300 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus saepe rerum quibusdam eaque doloribus nulla odio. Nam molestiae eveniet vero?</p>
        </div>
        <div className="bottom-bar absolute w-full bottom-0">
            <div className="flex justify-between m-5">
                <h5 className='text-gray-300 text-xs'>0.4mb</h5>
                <MdDownloadForOffline color="white" size="16px" />
            </div>
            <div className="download-status bg-green-400 py-2">
                <h5 className='text-center text-sm font-semibold leading-tight'>Download Now</h5>
            </div>
        </div>
    </div>
  )
}

export default Card