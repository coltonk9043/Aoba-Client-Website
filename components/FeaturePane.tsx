import Image from 'next/image'

export type FeaturePanelProps = {
    title: string,
    description: string,
    img: string,
}

export const FeaturePanel = (props : FeaturePanelProps) => {
    return (
        <div className="border border-zinc-500 bg-zinc-700 rounded-lg w-[500px] m-2 text-center">
            <h2 className="mr-2 ml-2 border-b border-zinc-600">{props.title}</h2>
            <p className="m-2">{props.description}</p>
            <Image className="m-5 ml-auto mr-auto rounded-lg" width={435} height={200} src={props.img} alt='Screenshot'/>
        </div>
    )
}