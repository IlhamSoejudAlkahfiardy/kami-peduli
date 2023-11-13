import React from 'react'
import Navbar from '../components/Navbar'
import { FaAngleRight, FaRegSmile, FaRegSmileWink, FaRegLaughBeam } from 'react-icons/fa'
import { BiCool } from 'react-icons/bi'

const Berbagi = () => {
    return (
        <div className='flex flex-col mb-40'>
            {/* Heading */}
            <p className='text-xl font-bold my-10 m-auto'>Berbagi untuk saudara kita yang membutuhkan</p>

            {/* Card */}
            <div className='w-1/2 py-2 px-4 bg-white border drop-shadow-md rounded-md flex flex-col m-auto'>
                <p className='text-sm text-gray-300 mb-5 m-auto '>Pilih nominal donasi</p>

                {/* Body Card */}
                <div className='w-full flex flex-col gap-4'>

                    <div className='w-full h-14 rounded-md border flex justify-center bg-white items-center drop-shadow gap-10'>
                        <FaRegSmile className='text-amber-400' style={{ scale: '2.5' }} />
                        <p className=' text-xl font-bold'>Rp 30.000 <FaAngleRight className='inline-flex mb-1' /></p>
                    </div>

                    <div className='w-full h-14 rounded-md border flex justify-center bg-white items-center drop-shadow gap-10'>
                        <FaRegSmileWink className='text-cyan-600' style={{ scale: '2.5' }} />
                        <p className=' text-xl font-bold'>Rp 50.000 <FaAngleRight className='inline-flex mb-1' /></p>
                    </div>

                    <div className='w-full h-14 rounded-md border flex justify-center bg-white items-center drop-shadow gap-10'>
                        <FaRegLaughBeam className='text-green-600' style={{ scale: '2.5' }} />
                        <p className=' text-xl font-bold'>Rp 75.000 <FaAngleRight className='inline-flex mb-1' /></p>
                    </div>

                    <div className='w-full h-14 rounded-md border flex justify-center bg-white items-center drop-shadow gap-7'>
                        <BiCool className='text-red-600' style={{ scale: '2.7' }} />
                        <p className=' text-xl font-bold'>Rp 100.000 <FaAngleRight className='inline-flex mb-1' /></p>
                    </div>

                </div>

                {/* Footer */}
                <hr className='mt-7 mb-3' />
                <p className='font-bold'>Nominal Lainnya</p>

                <div className='mt-4 pl-5 flex gap-5 items-center'>
                    <p className='font-bold'>Rp</p>
                    <input type="number" className='border h-9 pl-3 rounded-md shadow-md w-full' placeholder='0' />
                </div>

                <p className='text-xs text-gray-400 mt-5'>Minimum donasi Rp 10.000</p>

                <button className='w-full h-10 mb-5 bg-orange-500 mt-3 rounded-md hover:bg-orange-700 transition-all'>
                    <p className='text-white font-semibold'>Lanjut Donasi</p>
                </button>

            </div>
        </div>
    )
}

export default Berbagi