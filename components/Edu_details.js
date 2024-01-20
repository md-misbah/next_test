import { LiaGraduationCapSolid } from "react-icons/lia";


export default function Edu_details(props) {
    return (
        <div>
            <div className="eduCard customBoxBorder p-4 mt-4 rounded-xl">
                <div className="educard_title flex justify-between">
                    <div className="edutitleM flex customLime font-semibold	">
                        <LiaGraduationCapSolid className='customLime text-2xl mr-1' /> <span
                            className="font-semibold">{props.exmTitle}</span>
                    </div>
                    <span className="text-white">{props.passingYear}</span>
                </div>
                <div className="educard_desc">
                    <div className="scResulc flex justify-between">
                        <h1 className="font-semibold customLime">{props.background} <span className='font-normal text-white'>{props.backgroundName}</span>
                        </h1>
                        <h1 className="font-semibold customLime">{props.gpa} <span>{props.gpaGrade}</span>
                        </h1>

                    </div>
                    <h1 className="font-semibold customLime">{props.institute} <span className='font-normal text-white'>{props.instituteName}</span></h1>
                    <h1 className="font-semibold customLime">{props.location} <span className='font-normal text-white'>{props.locationName}</span></h1>
                </div>
            </div>
        </div>
    )
}
