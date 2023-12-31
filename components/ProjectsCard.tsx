'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Button } from './ui/button'
import useHover from '@/hooks/use-hover'
import Link from 'next/link'

const ProjectsCard = ({ project }: { project: any }) => {
    const photo = useRef<HTMLDivElement>(null);
    const projectData = useHover(photo, {
        x: -4,
        y: -5,
        z: 3,
    });
    return (
        <div
            ref={photo}
            key={project.title}
            className=" bg-white text-center border py-4 px-3 "
            style={{
                transform: projectData.transform,
            }}
        >
            <Image width={500} height={500} alt='/' className="mx-auto w-full rounded-md  object-contain aspect-square flex-shrink-0 " src={project.imageUrl} />
            <div className='flex flex-col items-start gap-2 mt-4'>
                <Link href={project?.href} className='text-1xl font-extrabold underline'>{project?.title}</Link>


            </div>


        </div>
    )
}

export default ProjectsCard