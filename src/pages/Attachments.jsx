import React from 'react'

const Attachments = () => {
  return (
    <div>
       <div className='flex justify-end '>
            <div className='w-1/2 p-4 m-4 justify-end shadow-lg rounded-lg'>
                <h1 className='text-xl  font-bold uppercase text-blue-900 flex items-center justify-center cursor-pointer'>restore original attachments</h1>
            </div>
       </div>

        <div className='flex justify-between mt-5'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl '>Utility Disclosure</h1>
                <h1 className='text-xl text-gray-400'>Status</h1>
            </div>
            <div className="p-3 text-xl font-bold uppercase text-blue-900 flex items-center justify-center cursor-pointer">
                <label
                    htmlFor="file-upload"
                    className="bg-blue-900 text-white px-4 py-3 rounded-lg hover:bg-blue-900 cursor-pointer"
                >
                    Upload Now
                </label>
                <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={(e) => console.log(e.target.files)}
                />
            </div>
        </div>

        <div className='flex justify-between'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl '>New York State Sprinkler Disclosure</h1>
                <div className='flex gap-2'>
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Rename</h1>
                    {/* <div className='w-1 bg-blue-900 h-6'></div> */}
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Download</h1>
                </div>
            </div>
            <div className="p-4 text-xl font-bold uppercase text-red-600 flex items-center justify-center cursor-pointer">
                <button
                    className="shadow-lg text-red-500 px-5 py-3 rounded-lg hover:text-red-700 cursor-pointer"
                >
                    Remove
                </button>
            </div>
        </div>

        <div className='flex justify-between'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl '>New York State Rent Stabilized Units</h1>
                <div className='flex gap-2'>
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Rename</h1>
                    {/* <div className='w-1 bg-blue-900 h-6'></div> */}
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Download</h1>
                </div>
            </div>
            <div className="p-4 text-xl font-bold uppercase text-red-600 flex items-center justify-center cursor-pointer">
                <button
                    className="shadow-lg text-red-500 px-5 py-3 rounded-lg hover:text-red-700 cursor-pointer"
                >
                    Remove
                </button>
            </div>
        </div>

        <div className='flex justify-between'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl '>Lead Paint Pamphlet</h1>
                <div className='flex gap-2'>
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Rename</h1>
                    {/* <div className='w-1 bg-blue-900 h-6'></div> */}
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Download</h1>
                </div>
            </div>
            <div className="p-4 text-xl font-bold uppercase text-red-600 flex items-center justify-center cursor-pointer">
                <button
                    className="shadow-lg text-red-500 px-5 py-3 rounded-lg hover:text-red-700 cursor-pointer"
                >
                    Remove
                </button>
            </div>
        </div>

        <div className='flex justify-between'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl '>New York State Fair Housing Guide</h1>
                <div className='flex gap-2'>
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Rename</h1>
                    {/* <div className='w-1 bg-blue-900 h-6'></div> */}
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Download</h1>
                </div>
            </div>
            <div className="p-4 text-xl font-bold uppercase text-red-600 flex items-center justify-center cursor-pointer">
                <button
                    className="shadow-lg text-red-500 px-5 py-3 rounded-lg hover:text-red-700 cursor-pointer"
                >
                    Remove
                </button>
            </div>
        </div>

        <div className='flex justify-between'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl '>New York State Security Deposit Holdings Disclosure</h1>
                <div className='flex gap-2'>
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Rename</h1>
                    {/* <div className='w-1 bg-blue-900 h-6'></div> */}
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Download</h1>
                </div>
            </div>
            <div className="p-4 text-xl font-bold uppercase text-red-600 flex items-center justify-center cursor-pointer">
                <button
                    className="shadow-lg text-red-500 px-5 py-3 rounded-lg hover:text-red-700 cursor-pointer"
                >
                    Remove
                </button>
            </div>
        </div>


        <div className='flex justify-between'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl '>Flood Insurance Disclosure</h1>
                <div className='flex gap-2'>
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Rename</h1>
                    {/* <div className='w-1 bg-blue-900 h-6'></div> */}
                    <h1 className='text-xl text-gray-400 cursor-pointer hover:text-black'>Download</h1>
                </div>
            </div>
            <div className="p-4 text-xl font-bold uppercase text-red-600 flex items-center justify-center cursor-pointer">
                <button
                    className="shadow-lg text-red-500 px-5 py-3 rounded-lg hover:text-red-700 cursor-pointer"
                >
                    Remove
                </button>
            </div>
        </div>

        <div className="p-3 text-xl  flex flex-col items-center justify-center cursor-pointer w-full">
            <label className='text-start'>Choose Other files</label>
            <input
                type="file"
                placeholder='choose other files'
                className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer text-gray-600 file:cursor-pointer file:bg-blue-900 file:text-white file:rounded-lg file:py-2 file:px-4 file:border-none file:hover:bg-blue-700"
            />
        </div>
          

    </div>
  )
}

export default Attachments