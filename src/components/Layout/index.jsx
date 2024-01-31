import React from 'react'

export default function Layout() {
    return (
        <div className='flex flex-col bg-green-800   md:h-full md:pb-5 lg:p-4 lg:pb-10'>
            <div className='buscardor flex h-14 bg-red-400 m-2  md:mt-3'>
                
            </div>
            <div className='flex flex-col md:flex-row md:h-full'>
                <div className='filtros flex m-2 bg-red-700 h-44 md:h-full  md:mb-4 md:w-1/4 lg:w-1/6 lg:h-full'>
                    <h3>filtros</h3>
                </div>
                <div className='tabla flex m-2 bg-red-950 h-[450px] md:h-full  md:mb-4 md:w-3/4 lg:w-5/6 lg:h-full'>
                <h3>tabla</h3>
                </div>
            </div>
        </div>
    )
}
