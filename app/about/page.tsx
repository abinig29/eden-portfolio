import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className=''>
            <Header />
            <div className='flex  justify-between items-center  pt-24 px-4 gap-8 flex-col md:flex-row max-w-[900px] mx-auto'>
                <div className='flex flex-col gap-4 flex-1 text-[#7c808c]'>
                    <h3 className='t text-4xl font-extrabold tracking-normal mb-10'>Holla ッ</h3>

                    <h3>
                        Hello! I'm Eden Gelan, a passionate UI/UX designer and a dedicated student at Addis Ababa University.
                        I thrive on the intersection of creativity and functionality, and my journey
                        in the world of design has been nothing short of exhilarating.
                    </h3>
                    <h3>
                        🎨 Design Philosophy:
                        In the dynamic realm of UI/UX design,
                        I believe in the power of creating experiences that are not only visually appealing but also intuitive and user-centric. Each project is an opportunity for me to blend aesthetics with seamless functionality.
                    </h3>
                    <h3>
                        📚 Academic Pursuits:
                        Currently pursuing my studies at Addis Ababa University, I'm immersed in a rich academic environment that fuels my curiosity and expands my understanding of design principles. The balance between academia and hands-on design work allows me to bring fresh perspectives to every project.
                    </h3>
                </div>
                {/* <div className='flex-[1.2] upAnimate'>
                    <Image width={400} className='w-full aspect-square object-contain' height={400} src={'/images/about.png'} alt='' />

                </div> */}
            </div>

        </div>
    )
}

export default About