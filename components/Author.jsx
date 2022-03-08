import React from 'react'
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
    <div className="absolute left-0 right-0 -top-14">
        <Image 
            unoptimized
            // loader={graphCMSImageLoader}
            alt={author.name}
            height="100px"
            width="100px"
            className="align-middle rounded-full"
            src={author.photo.url}
        />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
    </div>
  )
}

export default Author
