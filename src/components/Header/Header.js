import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        // <div className='md:flex justify-between md:px-20 p-3 bg-blue-200 mb-10'>
        //     <div className='hidden md:block text-3xl font-bold'>
        //         <h3>Honest Review</h3>
        //     </div>
        //     <div className='block text-xl font-semibold md:flex gap-4'>
        //         <CustomLink className='p-2 rounded-md' to="/">Home</CustomLink>
        //         <CustomLink className='p-2 rounded-md' to="/dashboard">Dashboard</CustomLink>
        //         <CustomLink className='p-2 rounded-md' to="/reviews">Reviews</CustomLink>
        //         <CustomLink className='p-2 rounded-md' to="/blogs">Blogs</CustomLink>
        //         <CustomLink className='p-2 rounded-md' to="/about">About</CustomLink>
        //     </div>
        // </div>



        <nav class="bg-gray-800 sticky top-0 z-50 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 text-white md:mb-10">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <Link to='/' class="flex items-center hidden md:block">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Honest Review</span>
                </Link>
                <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul class="flex flex-col mt-4 md:flex-row items-center md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <CustomLink to='/' class="block py-2 pr-4 pl-3 text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</CustomLink>
                        </li>
                        <li>
                            <CustomLink to='/dashboard' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</CustomLink>
                        </li>
                        <li>
                            <CustomLink to='/reviews' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Reviews</CustomLink>
                        </li>
                        <li>
                            <CustomLink to='blogs' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</CustomLink>
                        </li>
                        <li>
                            <CustomLink to='/about' class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</CustomLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;