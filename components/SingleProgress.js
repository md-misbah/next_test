import { FaLanguage } from "react-icons/fa6";

export default function SingleProgress(props) {
    return (
        <div className="singleProgress mb-5">
            <div className="educard_title flex justify-between text-white">
                <div className="edutitleM flex customLime font-semibold	">
                    <FaLanguage className='customLime text-2xl mr-1' /> <span className="font-semibold">{props.languageName}</span>
                </div>
                <span>{props.stage}</span>
            </div>
            <div className="roundbxprog rounded-2xl"><progress className="progress progress-cus-success  w-full" value={props.value} max="100"></progress></div>
        </div>
    )
}
