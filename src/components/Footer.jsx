import React from 'react'
import { FaInstagram, FaFacebookF, FaYoutube, FaGithub, FaAngleRight } from 'react-icons/fa'
import { FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='w-full bg-zinc-800 flex justify-center py-14 px-24 gap-8'>
            <div className='flex flex-col gap-4 w-1/4' >
                <div className='flex gap-3'>
                    <p className='text-white font-bold text-3xl'>Kami</p>
                    <p className='text-orange-600 font-bold text-3xl'>Peduli</p>
                </div>
                <div className='text-white'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, nesciunt odit ipsa nemo enim qui labore non aperiam, magni deleniti aspernatur aliquam. Ad porro corporis nemo totam labore dolorum minima?
                </div>
                <div className='flex gap-3'>
                    <div className='border w-fit h-fit p-3 rounded-md'>
                        <FaInstagram className='scale-150 text-white' />
                    </div>
                    <div className='border w-fit h-fit p-3 rounded-md'>
                        <FaFacebookF className='scale-150 text-white' />
                    </div>
                    <div className='border w-fit h-fit p-3 rounded-md'>
                        <FaYoutube className='scale-150 text-white' />
                    </div>
                    <div className='border w-fit h-fit p-3 rounded-md'>
                        <FaGithub className='scale-150 text-white' />
                    </div>
                </div>
            </div>
            <div className='w-1/4 flex flex-col gap-4'>
                <p className='text-white font-bold text-xl'>Alamat</p>

                <div className='text-white flex items-center gap-2 text-sm'>
                    <FaLocationDot />
                    <p>Kota Palu, Sulawesi Tengah, Indonesia</p>
                </div>

                <div className='text-white flex items-center gap-2 text-sm'>
                    <FaPhone />
                    <p>+62 822-7337-0260</p>
                </div>

                <div className='text-white flex items-center gap-2 text-sm'>
                    <FaEnvelope />
                    <p>kamipeduli@gmail.com</p>
                </div>

            </div>
            <div className='flex flex-col gap-3 w-1/5'>

                <p className='text-white font-bold text-xl'>Halaman</p>

                <p className='text-white text-sm flex items-center'> <FaAngleRight className='inline-block' />Beranda</p>
                <p className='text-white text-sm flex items-center'> <FaAngleRight className='inline-block' />Kategori</p>
                <p className='text-white text-sm flex items-center'> <FaAngleRight className='inline-block' />Komunitas</p>
                <p className='text-white text-sm flex items-center'> <FaAngleRight className='inline-block' />Tentang</p>

            </div>
            <div className='flex flex-col gap-3 w-1/5'>
                <p className='text-white font-bold text-xl'>Daftar</p>

                <p className='text-white text-sm'>Ayo kita saling membantu</p>

                <input type="text" className='border max-w-xs bg-zinc-800 rounded-md h-8 pl-3 align-middle text-white' placeholder='Email' />
            </div>
        </div>
    )
}

export default Footer