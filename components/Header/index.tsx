'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const menuItems = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Focus',
      route: '/focus',
    },
  ]
  return (
    <div className='flex flex-col gap-4 p-8'>
      <div className='flex flex-row-reverse '>
        <button
          onClick={handleClick}
          className='flex flex-col items-center justify-center'
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white 
                    transition-all duration-300 ease-out ${
                      isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
                    }`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-6 rounded-sm 
                    bg-white transition-all duration-300 ease-out ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-white 
                    transition-all duration-300 ease-out ${
                      isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
                    }`}
          ></span>
        </button>
      </div>

      {isOpen && (
        <div className='flex flex-col gap-4 p-8'>
          {menuItems.map(({ label, route }) => (
            <Link key={route} href={route}>
              <div className='text-white'> {label}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
