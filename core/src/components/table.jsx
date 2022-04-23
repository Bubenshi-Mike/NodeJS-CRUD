import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Search from './search';

const Table = () => {
    const [data, setData] = useState();
    useEffect(() => {
        allProducts();
    }, []);

    const allProducts = async (data) => {
        const response = await axios.get('http://localhost:3001');
    };
  return (
    <>
        <div className="px-2 sm:px-4 py-8">
            <div className="container flex justify-center items-center mx-auto">
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <div className="flex items-center justify-between sm:justify-between">
                        <Search />
                        <div className="p-4">
                            <Link to="/new-product" class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                                <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
                                    <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                                </svg>
                                New
                            </Link>
                        </div>
                    </div>
                    <table class="w-full text-sm text-left text-gray-500 table-auto">
                        <thead class="text-xs text-gray-100 uppercase bg-gray-700">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">View</span>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-gray-800 hover:bg-gray-700 border-b">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-200 whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4 text-gray-200">
                                    Sliver
                                </td>
                                <td class="px-6 py-4 text-gray-200">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 text-gray-200">
                                    $2999
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="/" class="font-medium text-blue-600 hover:underline">View</a>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="/" class="font-medium text-blue-600 hover:underline">Edit</a>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="/" class="font-medium text-blue-600 hover:underline">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Table;