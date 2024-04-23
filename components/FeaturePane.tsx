export type FeaturePanelProps = {
    title: string,
    description: string,
    img: string,
}

export const FeaturePanel = (props : FeaturePanelProps) => {
    return (
        <div className="flex border border-zinc-500 bg-zinc-700 rounded-lg w-[500px] m-2">
            <div className="basis-1/2">
                <h2 className="mr-2 ml-2">{props.title}</h2>
                <p className="m-2">{props.description}</p>
            </div>
            <div className="basis-1/2">
                <img src={props.img}/>
            </div>
        </div>
    )
}