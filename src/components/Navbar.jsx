import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='w-full h-16 bg-zinc-800 flex justify-between items-center px-16'>
            <div className='brand flex font-bold gap-1'>
                <p className='text-white text-xl'>Kami</p>
                <p className='text-orange-600 text-xl'>Peduli</p>
            </div>
            <div className='navigation-links flex items-center text-white font-semibold gap-16'>
                <p className='hover:cursor-pointer'>Beranda</p>
                <p className='hover:cursor-pointer'>Kategori <FaChevronDown className='inline-block ml-2' /> </p>

                <p className='hover:cursor-pointer'>Komunitas</p>
                <p className='hover:cursor-pointer'>Tentang</p>
                <p className='hover:cursor-pointer hover:bg-orange-700 transition-all  px-5 py-1 rounded-sm bg-orange-600'>Donasi</p>
            </div>
        </div>
    )
}

export default Navbar