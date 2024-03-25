import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';


class Home extends Component {
    render() {
        return (
            <div className='flex justify-between pt-5 cursor-pointer  border-b-2  border-red-500 bg-slate-900 p-3 text-1.9xl'>
            <div className='text-white text-2xl cursor-pointer '>
            <FontAwesomeIcon icon={faFeather} className='text-white mr-2' />
                Cline</div>
            <div className=' flex justify-between align-middle '>
                 <ul className='flex space-x-5 mt-2  mr-4  '>
                     <li><a href='#' className=' text-white hover:font-semibold'>Features</a></li>
                     <li><a href='#' className=' text-white hover:font-semibold'>Pricing</a></li>
                     <li><a href='#' className=' text-white hover:font-semibold'>Contact</a></li>
                    
                 </ul>
                 <div className="border-2 border-pink-400 pl-2 pr-2 pt-1  pb-2 h-9 rounded-md text-pink-600  hover:text-white hover:bg-pink-400">
                 <button className=' font-bold pb-4'>
                     Dashboard
                 </button>
                 </div>
                 
            </div>
         </div>
        );
    }
}

export default Home;