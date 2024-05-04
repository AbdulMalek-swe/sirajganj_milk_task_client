import { returnPagination } from '@/utils/pagination';
import React from 'react';
 
const Pagination = ({ totalPage, page, limits, siblings, handleChange } ) => {
    const arr = returnPagination(totalPage, page, limits, siblings)
    return (
        <div className='flex justify-center'>
            <div>
                <ul className='pag flex    '>
                    <li onClick={(e) => handleChange(page-1)} className='border p-2'>
                        <button>prev</button>
                    </li>

                    {
                        arr.map((item, index) => <li className={`${'border p-2'} ${page==item?'bg-green-500':''}`}  key={index}> 
                        <button   onClick={(e) => handleChange(item)}>{item}</button>
                        </li>)
                    }
                    <li onClick={(e) => handleChange(page+1)} className='border p-2'>
                        <button>next</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Pagination;