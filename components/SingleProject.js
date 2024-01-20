import Image from 'next/image';
import { FaRegPaperPlane } from "react-icons/fa";

export default function SingleProject(props) {
    return (
        <div className="singleProjectWrapper customBg shadow p-6 rounded-2xl">
            <div className="singleProjectImg w-12/12 h-44 rounded-xl mb-16">
                <Image
                    src={props.projectImg}
                    className="projectImagecustom rounded-xl"
                    alt="Picture of the author"
                />
            </div>
            <div className="singleProjectTitle"><h1 className="customLime text-base font-medium mt-4 mb-1">{props.projectName}</h1></div>
            <div className="singleProjectDec text-justify text-sm font-light text-white">{props.projectDesc}</div>
            <div className="singleProjectTags flex justify-between mt-3 mb-1">
                <div className="singleProjectMeta">
                    <h1 className="customBorder p-2 text-sm customLime">{props.projectTag}</h1>
                </div>
                <div className="singleProjectLink mt-2">
                    <a href={props.projectLink} target="_blank" rel="noopener noreferrer" className='flex justify-start customLime '>
                        <div className="btnTxt customLime">{props.visit}</div>
                        <div className="btnIco ml-1 text-xl"><FaRegPaperPlane className='customLime' /></div>
                    </a>
                </div>
            </div>
        </div>
    )
}
