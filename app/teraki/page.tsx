import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Teraki = () => {
    return (
        <div>
            <Header />
            <section className=' max-w-[900px] mx-auto px-8 mt-16'>
                <h3 className='t text-2xl font-extrabold'>Feature Highlights</h3>
                <div className='mt-4'>
                    <li>Extensive Book Library</li>
                    <li> User Profiles</li>
                    <li>Search and Discovery</li>
                    <li> Audiobook Player</li>
                    <li> Ebook Reader</li>
                </div>
                <div className='mt-4'>
                    <h2 className='my-2 text-2xl font-semibold'>  Design Process</h2>
                    <h5>
                        Before diving deeper into the project, I’d like to highlight the design process we followed:
                    </h5>
                    <Image
                        alt=''
                        width={700}
                        height={700}
                        className='o object-cover mt-2 w-[600px]'
                        src={'/images/dp.webp'}
                    />
                </div>
                <div className='my-10'>
                    <div className='flex flex-col md:flex-row  px-4 py-2 '>
                        <Image
                            alt=''
                            width={700}
                            height={700}
                            className='o object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/p7.jpg'} />
                        <div className='flex-1 flex flex-col items-center md:justify-center md:items-start'>
                            <h3 className='text-2xl font-bold'>Home</h3>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>  Featured Audiobook</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Curated Book Recommendations</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>New Releases</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Personalized Content</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Quick Search Bar</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Promotional Offers</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> User Profile Quick Access</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Genre or Category Thumbnails</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Clear Navigation</h4>
                        </div>
                    </div>
                    <div className='flex  md:flex-row flex-col-reverse  mt-10 px-4 py-2 '>
                        <div className='flex-1 flex  flex-col  items-center md:justify-center md:items-end '>
                            <h3 className='text-2xl font-bold'>Signin page</h3>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Social Media Sign-In</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Branding and Logo</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Create Account Link</h4>

                        </div>
                        <Image
                            alt=''
                            width={700}
                            height={700}
                            className='object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/p8.jpg'} />
                    </div>
                    <div className='flex flex-col md:flex-row   px-4 py-2 mt-10 '>
                        <Image
                            alt=''
                            width={700}
                            height={700}
                            className='o object-contain aspect-[3/2] flex-1 mt-2 w-full '
                            src={'/images/p1.jpg'} />
                        <div className='flex-1 flex flex-col items-center md:justify-center md:items-start'>
                            <h3 className='text-2xl font-bold'>Filter</h3>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span> Date filter</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Language filter</h4>
                            <h4 className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>Page filter</h4>

                        </div>
                    </div>
                </div>


            </section >
        </div >
    )
}

export default Teraki