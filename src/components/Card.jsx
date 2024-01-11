import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";

function Card({ data }) {
    let icon;
    if(data.tags.title==="Downloaded"){
        icon = <TiTick color="white" size="20px" />
    } else if(data.tags.title === "Downloading"){
        icon = <IoMdCloseCircle color="white" size="16px" />
    } else if(data.tags.title === "Download Now"){
        icon = <MdDownloadForOffline color="white" size="16px" />
    }

  return (
    <div className="relative w-60 h-72 rounded-[30px] bg-zinc-900/70 overflow-hidden">
      <div className="top-bar p-5">
        <FaRegFileAlt color="white" size="20px" />
        <p className="text-sm text-gray-300 mt-5">{data.description}</p>
      </div>
      <div className="bottom-bar absolute w-full bottom-0">
        <div className="flex justify-between m-5">
          <h5 className="text-gray-300 text-xs">{data.size}</h5>
          {icon}

        </div>
        {data.tags.title === "Download Now" ? (
          <div
            className="bg-green-600
                py-2"
          >
            <h5 className="text-center text-sm font-semibold leading-tight text-white">
              {data.tags.title}
            </h5>
          </div>
        ) : null}
        {data.tags.title === "Downloading" ? (
          <div
            className="bg-yellow-600
                py-2"
          >
            <h5 className="text-center text-sm font-semibold leading-tight text-white">
              {data.tags.title}
            </h5>
          </div>
        ) : null}
        {data.tags.title === "Downloaded" ? (
          <div
            className="bg-blue-600
                py-2"
          >
            <h5 className="text-center text-sm font-semibold leading-tight text-white">
              {data.tags.title}
            </h5>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
