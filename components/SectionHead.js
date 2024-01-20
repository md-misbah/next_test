export default function SectionHead(props) {
    return (
        <div className="projectHeadingTitle mb-12">
            <h3 className='projectsSub_Title mx-auto text-center text-sm mb-1.5 text-white'>{props.subTitle}</h3>
            <h1 className="projectsHeadTitleLine mx-auto text-2xl text-center customLime font-bold">{props.titleFirst}<span className="projecttitle text-white">{props.titleLast}</span>
            </h1>
        </div>
    )
}
