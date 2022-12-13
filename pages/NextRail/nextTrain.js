import React from 'react';

const NextTrain = () => {
    return (
        <div>
            <h3 className='text-4xl font-semibold text-center '>Next Train</h3>
            {/* table  */}
            <div className='p-10'>
               <table className='table auto mx-auto'>
                <thead className='bg-green-900 text-white '>
                    <tr className='  font-semibold '>
                        <th className='border border-white px-5 md:px-20'>
                            Name
                        </th>
                        <th className='border border-white px-5 md:px-20'>
                            Arrival Time
                        </th>
                        <th className='border border-white px-5 md:px-20'>
                            Departure Time
                        </th>
                        <th className='border border-white px-5 md:px-20'>
                            Next Station
                        </th>
                    </tr>
                </thead>
                <tbody className='text-xl text-gray-700 my-2'>
                    <tr className=''>
                        <td className='border bg-gray-100 text-center py-1'>
                            Metro-224244
                        </td>
                        <td className='border bg-gray-100 text-center py-1'>
                            07:30 PM
                        </td>
                        <td className='border bg-gray-100 text-center py-1'>
                            7:50
                        </td>
                        <td className='border bg-gray-100 text-center py-1'>
                            Mirpur-10
                        </td>
                    </tr>
                    <tr >
                        <td className='border bg-gray-100 text-center py-1'>
                            Metro-334244
                        </td>
                        <td className='border bg-gray-100 text-center py-1'>
                            07:50 PM
                        </td>
                        <td className='border bg-gray-100 text-center py-1'>
                            8:20
                        </td>
                        <td className='border bg-gray-100 text-center py-1'>
                            Agargaon
                        </td>
                    </tr>
                </tbody>
               </table>
            </div>
        </div>
    );
};

export default NextTrain;