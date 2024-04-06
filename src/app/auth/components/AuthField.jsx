import React, { useState } from 'react';
import { FaEye,FaEyeSlash} from "react-icons/fa";
const AuthField = ({authField,handleChange}) => {
  const {label,type,name,id,required} = authField;
    const [toggle,setToggle] = useState(true);
    
    return (
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2 relative" htmlFor="email">
           {label}
          </label>
          <input
            type={ 
       type==='password'? toggle?type:'text':type
            }
            id={id}
            name={name}
            // value={credentials.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required = {required}
          />
          { 
        type==="password" &&  <span className='text-black absolute top-[60%] right-[10px] cursor-pointer' onClick={()=>setToggle(!toggle)}>{ toggle?<FaEye />: <FaEyeSlash />}</span>}
        </div>  
    );
};

export default AuthField;