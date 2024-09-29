import React from 'react'
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='flex justify-center'>
        <Image
            src="https://prodeastusmappscreative.azureedge.net/prmt/6723e84d25fc84d0d77342e9560c64e2"
            alt='test'
            width={800}
            height={50}
        />
    </div>
  )
}

export default Banner