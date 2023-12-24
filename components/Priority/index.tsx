import React from 'react'
import Image from 'next/image'

export const Priority = ({ priority }: { priority: number }) => {
  return (
    <div className='flex justify-between'>
      <Image src='/images/flag.png' alt='flag' width={18} height={18} />
      <div className='flex text-gray-200'>{priority}</div>
    </div>
  )
}
