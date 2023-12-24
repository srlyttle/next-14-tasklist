'use client'
import { useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  const closeModal = () => {
    onClose()
  }

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='fixed inset-0 bg-black opacity-50'></div>
          <div className='absolute rounded-lg bg-white p-8'>
            <button
              onClick={closeModal}
              className='absolute right-2 top-2 text-gray-500 hover:text-gray-700 focus:outline-none'
            >
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
