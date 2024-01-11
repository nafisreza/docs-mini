import React ,{useState} from 'react'
import Card from './Card'

function Foreground() {
  const data = [
    { description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, vel.",
      size: "0.9mb",
      closed: false,
      tags: {
        downloadable: true,
        title: "Download Now",
        bgcolor: "green"
      }
    },
    { description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, vel, adipisicing elit, akuna frem garek leto mag fresco alaf.",
      size: "0.5mb",
      closed: true,
      tags: {
        downloadable: false,
        title: "Downloading",
        bgcolor: "yellow"
      }
    },
    { description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, vel, uruskasu, brent, gelm.",
      size: "0.3mb",
      closed: false,
      tags: {
        downloadable: false,
        title: "Downloaded",
        bgcolor: "blue"
      }
    }
  ]
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5 ">
      {
        data.map((item, index)=>
        (<Card data={item}/>)
        )
      }
    </div>
  )
}

export default Foreground
