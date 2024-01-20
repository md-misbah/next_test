import Image from "next/image";

export default function SingleCertificate(props) {
    return (
        <div className="singlecertificateWrapper customBg shadow p-6 rounded-2xl">
            <div className="singlecertificateImg w-full rounded-xl mb-8">
                <Image
                    src={props.certificateImg}
                    className="certificateImagecustom rounded-xl"
                    alt="Picture of the author"
                />
            </div>
            <div className="singlecertificateTitle"><h1 className="customLime text-xl font-semibold mt-4 mb-1">{props.certificateFirstName}<span className="certificateLastName text-white">{props.certificateLastName}</span> </h1></div>
            <div className="certificateInst">
                <h1 className="font-semibold customlightLime">{props.cerDate} <span className='font-normal text-white'>{props.cerDateD}</span></h1>
                <h1 className="font-semibold customlightLime">{props.institute} <span className='font-normal text-white'>{props.instituteName}</span></h1>
            </div>
            <div className="singlecertificateDec text-justify text-sm font-light text-white mt-2">{props.certificateDesc}</div>
            <div className="singlecertificateTags flex justify-end mt-3 mb-1">
                <div className="singlecertificateMeta flex gap-x-2">
                    <h1 className="customBorder p-2 text-sm customLime">{props.certificateTag}</h1>
                    <h1 className="customBorder p-2 text-sm customLime">{props.certificateTagtwo}</h1>
                </div>
            </div>
        </div>
    )
}
