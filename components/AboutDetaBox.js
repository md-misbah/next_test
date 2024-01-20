export default function AboutDetaBox(props) {
    return (
        <div className="aboutIcoBox text-center py-4 px-5 customBg shadow rounded-xl text-white">
            <div className="abIco my-2 customLime w-fit m-auto text-3xl">
                {props.icon}
            </div>
            <h1 className="mt-2 mb-0 text-sm font-semibold text-white">{props.title}</h1>
            <span className="mb-2  text-xs text-white">{props.subtitle}</span>
        </div>
    )
}
