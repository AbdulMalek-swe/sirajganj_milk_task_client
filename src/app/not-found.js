import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='h-[calc(100vh-100px)] flex justify-center items-center'>
            <Image src="/error.gif" alt="error..." width={400} height={400}/>
        </div>
    );
};

export default Page;