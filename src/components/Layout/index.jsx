import React from 'react'
import Header from '../Header'
import { Table } from '../Table'
import RegionBox from '../RegionBox'
import Status from '../Status'

export default function Layout() {
    return (
        <div className='flex flex-col bg-green-800   md:h-full md:pb-5 lg:p-4 lg:pb-10'>
            <div className='buscardor flex h-14 bg-red-400 m-2  md:mt-3'>
                <Header />
            </div>
            <div className='flex flex-col md:flex-row md:h-full'>
                <div className='filtros flex m-2 bg-gray-900 h-44 md:h-full  md:mb-4 md:w-1/4 lg:w-1/6 lg:h-full flex-col'>
                    <div className='w-full h-10'>

                    </div>
                    <div className="flex justify-center p-4  bg-gray-900 flex-wrap h-2/5">
                        <RegionBox name="América" />
                        <RegionBox name="Antarctic" />
                        <RegionBox name="Africa" />
                        <RegionBox name="Asia" />
                        <RegionBox name="Europe" />
                        <RegionBox name="Oceanía" />
                    </div>
                    <Status/>
                </div>
                <div className='tabla flex m-2 bg-red-950 h-[450px] md:h-full  md:mb-4 md:w-3/4 lg:w-5/6 lg:h-full'>
                    <Table />
                </div>
            </div>
        </div>
    )
}
