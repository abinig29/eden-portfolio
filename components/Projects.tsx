import { projectsData } from "@/lib/constants"
import ProjectsCard from "./ProjectsCard"
export default function Project() {
    return (
        <div className="max-w-[900px] mx-auto mt-40 py-8 px-10 ">
            <div className=" text-3xl font-semibold mb-10">My projects</div>
            <ul role="list" className="grid grid-cols-1 gap-y-16 gap-10 sm:grid-cols-2 sm:px-0">
                {projectsData.map((project) => (
                    <ProjectsCard key={project?.href} project={project} />
                ))}

            </ul>
        </div>
    )
}
