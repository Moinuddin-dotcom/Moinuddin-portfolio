import { ThumbUp } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"


const ProjectsDetails = () => {
    const { id } = useParams()
    // console.log(id)
    const projectData = useLoaderData()
    // console.log(projectData)

    const [cardsDes, setCardsDes] = useState({})
    console.log(cardsDes)

    const {
        // id,
        projectName,
        projectImage,
        mainTechnologyStack,
        briefDescription,
        liveProjectLink,
        githubRepositoryLink,
        challengesFaced,
        potentialImprovements,
    } = cardsDes;
    useEffect(() => {
        console.log(Array.isArray(projectData)); // Check if it's an array
        const findCardsDescription = projectData?.find(card => card.id === parseInt(id));
        setCardsDes(findCardsDescription);
    }, [projectData, id]);
    
    return (
        <div className="max-w-[90vw] mx-auto">
            <div className="flex justify-center">
                <span className=" mt-10 text-2xl font-semibold border-purple-950/85 border-t-2 border-b-2 p-1.5 px-20 rounded-lg shadow-2xl shadow-amber-200">
                    Details <span className="text-blue-500">Of Projects</span><span className="text-3xl"> <ThumbUp className="text-yellow-300" /> </span></span>
            </div>
            <div className="my-10">
                <h1 className="text-2xl font-bold">{projectName}</h1>
                <p><span className="text-green-500">Technology:</span> <Button>{mainTechnologyStack?.join(' | ')}</Button> </p>
                <div>
                    <span className="text-blue-400 underline underline-offset-4"><a href={liveProjectLink}>Live Link</a></span> - <span className="text-blue-400 underline underline-offset-4"><a href={githubRepositoryLink}>Git Repo Link</a></span>
                </div>
                <p className="mt-5"><span className="text-green-500 underline underline-offset-2">About this project:</span> {briefDescription}</p>
                <p><span className="text-green-500 underline underline-offset-2">Difficulties: </span>{challengesFaced}</p>
                <p><span className="text-green-500 underline underline-offset-2">Upcoming: </span>{potentialImprovements}</p>
                <div className="my-10">
                    <img src={projectImage} alt="Site Image" className="rounded-xl shadow-2xl shadow-amber-300" />
                </div>
            </div>
        </div>
    )
}

export default ProjectsDetails
