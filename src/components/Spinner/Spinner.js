import React from 'react';

const Spinner = () => {
    return (
     
<div className="mx-auto w-full z-50 h-screen flex justify-center items-center">
   <div className="mx-auto animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
</div>
       
    );
};

export default Spinner;