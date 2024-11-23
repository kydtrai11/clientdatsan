"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
const Header = () => {
    const menu = [
        {
            name: "Giới thiệu",
            href: "/"
        },
        {
            name: "Chính sách",
            href: "/"
        },
        {
            name: "Điều khoản",
            href: "/"
        },
        {
            name: "Dành cho chủ sân",
            href: "/"
        },
        {
            name: "Liên hệ",
            href: "/"
        },
    ]
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-blue-bold text-white '>
            <div className=' border-b'>
                <div className='flex justify-center lg:justify-between k lg:container'>
                    <Image src={"/logo.png"} alt='logo' width={204} height={60} />
                    <div className='hidden lg:flex bg-yellow hover:bg-hover-yellow px-[30px] items-center'>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXrIOxYh1OFi5kZNF5nZiA8-6r92zLjUU-nT05bBTBTyZXUQ/viewform">
                            Chăm sóc khách hàng
                        </a>
                    </div>
                </div>
            </div>

            <div className='flex font-[500] lg:container justify-between '>
                <div className=' lg:hidden h-[50px] flex items-center  justify-center px-[16px] border-r  '>
                    <FaBars size={24} />
                </div>
                <div className='lg:flex hidden '>
                    <div className='text-yellow h-[50px] flex items-center px-15 border-x  '>
                        <a href="/">Trang chủ</a>
                    </div>
                    <div className='hover:text-yellow h-[50px] flex items-center px-15 relative group  '>
                        <button className='' href="/">Danh sách sân bãi </button>
                        <ul className=' hidden group-hover:block absolute top-[50px] left-0 py-10 w-[150px] rounded-10 bg-white text-[#566985] shadow-cart '>
                            <li className='px-10 py-10 hover:text-yellow '>
                                <a href='/danh-sach-san/1' className=''>
                                    Bóng đá
                                </a>
                            </li>
                            <li className='px-10 py-10 hover:text-yellow '>
                                <a href='/danh-sach-san/1' className=''>
                                    Bóng đá
                                </a>
                            </li>
                            <li className='px-10 py-10 hover:text-yellow '>
                                <a href='/danh-sach-san/1' className=''>
                                    Bóng đá
                                </a>
                            </li>

                        </ul>
                    </div>
                    {
                        menu.map((item, index) => {
                            return (
                                <div key={index} className='hover:text-yellow h-[50px] flex items-center px-15  '>
                                    <a href={item.href}>{item.name} </a>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex border-r  px-15 '>
                    <button className='mr-15'>
                        Đăng ký
                    </button>
                    <button>
                        Đăng nhập
                    </button>
                </div>
                <button onClick={() => { setOpen(!open) }} className='flex items-center justify-center px-25  '>
                    Tìm kiếm
                    <IoSearchSharp className='ml-5' />
                </button>

            </div>
            {
                open &&
                <div className='bg-white px-20 py-10  '>
                    <form action="" className='lg:container lg:flex '>
                        <select className=' w-full lg:mx-15  rounded-5 px-15 h-[48px] my-15  bg-[#f7f9fb] border border-[#ccc] outline-none text-black '>
                            <option value={""}>
                                Lọc theo loại sân
                            </option>
                            <option value={""}>
                                Bóng đá
                            </option>
                            <option value={""}>
                                Pickleball
                            </option>
                        </select>
                        <input type="text" placeholder='Nhập tên sân hoặc địa chỉ để tìm kiếm...'
                            className='w-full lg:mx-15  rounded-5 px-15 h-[48px] my-15  bg-[#f7f9fb] border border-[#ccc] outline-none text-black  ' />
                        <input type="text" placeholder='Nhập khu vực...'
                            className='w-full lg:mx-15  rounded-5 px-15 h-[48px] my-15  bg-[#f7f9fb] border border-[#ccc] outline-none text-black  ' />
                        <button type='submit' className='bg-yellow lg:mx-15  w-full rounded-5 px-15 h-[48px] my-15  border border-[#ccc] outline-none '>
                            Tìm kiếm
                        </button>
                    </form>

                </div>
            }

        </div >
    )
}

export default Header