import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Sink = () => {
    const features = [
        "Book Borrowing System",
        "Borrowing History",
        "Due Dates and Reminders",
        "Member Ratings for Borrowed Books",
        "Admin Controls for Book Management",
        "User Profile Bookshelf",
        "Book Reservation",

    ]
    const homePage = [
        "Book Recommendations",
        "Top categories",
        "Filter by genre",
        "Latest books",

    ]
    const listing = [
        "Latest books ",
        "Book Categories",
        "Filter by language",
        "See borrowing status",
        "Different layout options"
    ]
    const profile = [
        "Update profile information",
        "View borrowing history",
        "Update password",
        "Check Shelf",
        'Check contribution to the club'
    ]
    return (
        <div>
            <Header />
            <section className=' max-w-[900px] mx-auto px-8 mt-16'>
                <h3 className='t text-2xl font-extrabold'>Feature Highlights</h3>
                <div className='mt-4'>
                    {
                        features?.map(f => {
                            return <li key={f}>{f}</li>
                        })
                    }
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
                        <div className='flex-1'>

                            <Image
                                alt=''
                                width={700}
                                height={700}
                                className='o object-contain  flex-1 mt-2 w-full '
                                src={'/images/p11.jpg'} />
                        </div>
                        <div className='flex-1 flex flex-col items-center md:justify-center md:items-start'>
                            <h3 className='text-2xl font-bold'>Home</h3>
                            {
                                homePage?.map(p => {
                                    return <h4 key={p} className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>  {p}</h4>

                                })
                            }

                        </div>
                    </div>
                    <div className='flex  md:flex-row flex-col-reverse  mt-10 px-4 py-2 '>
                        <div className='flex-1 flex flex-col items-center md:justify-center md:items-start'>
                            <h3 className='text-2xl font-bold'>Listing</h3>
                            {
                                listing?.map(p => {
                                    return <h4 key={p} className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>  {p}</h4>

                                })
                            }

                        </div>
                        <div className='flex-1'>

                            <Image
                                alt=''
                                width={700}
                                height={700}
                                className='o object-contain  flex-1 mt-2 w-full '
                                src={'/images/p16.jpg'} />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row   px-4 py-2 mt-10 '>
                        <div className='flex-1'>

                            <Image
                                alt=''
                                width={700}
                                height={700}
                                className='o object-contain  flex-1 mt-2 w-full '
                                src={'/images/p6.jpg'} />
                        </div>
                        <div className='flex-1 flex flex-col items-center md:justify-center md:items-start'>
                            <h3 className='text-2xl font-bold'>Profile </h3>
                            {
                                profile?.map(p => {
                                    return <h4 key={p} className='text-sm text-gray-700 pl-3 py-1'> <span>-</span>  {p}</h4>

                                })
                            }

                        </div>
                    </div>
                </div>


            </section >
        </div >
    )
}

export default Sink