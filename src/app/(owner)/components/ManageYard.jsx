"use client"
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'

const Manageyard = ({ admin, axiosJwt }) => {

    return (
        <div className='text-14 bg-gray-50 min-h-screen' >
            <h2 className='text-20 text-center  font-bold py-[30px] bg-blue-bold text-white  '>danh sách sân</h2>
            {
                <div className="relative px-[100px] mt-25   sm:rounded-lg">
                    <table className="w-full shadow-md text-[14px] text-left  text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-20 py-15">
                                    Mã sân
                                </th>
                                <th scope="col" className="px-20 py-15">
                                    tên sân
                                </th>
                                <th scope="col" className="px-20 py-15">
                                    tình trạng
                                </th>
                                <th scope="col" className="px-20 py-15">
                                    mã loại
                                </th>
                                <th scope="col" className="px-20 py-15">
                                    giá thuê 1h
                                </th>
                                <th scope="col" className="px-20 py-15">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                                <th scope="row" className="px-20 py-15 font-medium text-gray-900 whitespace-nowrap ">
                                    001
                                </th>
                                <td className="px-20 py-15">
                                    sân đom đóm
                                </td>
                                <th scope="row" className="px-20 py-15 font-medium text-gray-900 whitespace-nowrap ">
                                    hoạt động
                                </th>
                                <td className="px-20 py-15">
                                    003
                                </td>
                                <td className="px-20 py-15">
                                    200000đ
                                </td>
                                <td className="px-20 py-15">
                                    <button className="font-bold text-red-500 hover:underline">XÓA</button>
                                    <button className="font-bold text-blue-bold  px-10 hover:underline uppercase ">sửa</button>

                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            }
            <form class="max-w-sm mx-auto my-[50px] ">
                <h3 className='text-center uppercase text-20 mb-20'>thêm sân bóng</h3>
                <div class="mb-20">
                    <label class="block  text-sm font-medium  mb-10 ">mã sân</label>
                    <input class="bg-gray-50 border outline-none border-gray-300  text-sm rounded-lg block w-full p-2.5 focus:border-blue-500" placeholder="nhập mã sân..." required />
                </div>
                <div class="mb-20">
                    <label class="block  text-sm font-medium  mb-10 ">tên sân</label>
                    <input class="bg-gray-50 border outline-none border-gray-300  text-sm rounded-lg block w-full p-2.5 focus:border-blue-500" placeholder="nhập tên sân..." required />
                </div>
                <div class="mb-20">
                    <label class="block  text-sm font-medium  mb-10 ">tình trạng </label>
                    <input class="bg-gray-50 border outline-none border-gray-300  text-sm rounded-lg block w-full p-2.5 focus:border-blue-500" placeholder="nhập tình trạng..." required />
                </div>
                <div class="mb-20">
                    <label class="block  text-sm font-medium  mb-10 ">thuộc mã loại</label>
                    <input class="bg-gray-50 border outline-none border-gray-300  text-sm rounded-lg block w-full p-2.5 focus:border-blue-500" placeholder="thuộc mã loại..." required />
                </div>
                <div class="mb-20">
                    <label class="block  text-sm font-medium  mb-10 ">giá thuê 1h</label>
                    <input class="bg-gray-50 border outline-none border-gray-300  text-sm rounded-lg block w-full p-2.5 focus:border-blue-500" placeholder="giá thuê 1h..." required />
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>

    )
}

export default Manageyard