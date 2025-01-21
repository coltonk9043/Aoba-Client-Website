export type FeaturePanelProps = {
    key?: string | undefined,
    title?: string | undefined,
    description: string,
    href?: string | undefined,
}

export const FeaturePanel = (props: FeaturePanelProps) => {
    const generateTitle = () => {
        if (props.title !== undefined) {
            return (
                <h3 className="text-aoba-purple-dark text-2xl font-bold">{props.title}</h3>
            );
        }
    }

    const generateElement = () => {
        if (props.href != undefined) {
            return (
                <a key={props.key} className="text-center" href={props.href}>
                    {generateTitle()}
                    <p>{props.description}</p>
                </a>
            )
        } else {
            return (
                <>
                    {generateTitle()}
                    <p>{props.description}</p>
                </>
            )
        }
    }

    return (
        <div className='m-2 p-4 border border-aoba-purple-dark-0.4 rounded-xl bg-opacity-20 bg-gradient-to-br from-aoba-purple-dark-0.2 to-aoba-purple-0.2 backdrop-blur transition-transform hover:-translate-y-1 hover:scale-105'>
            {generateElement()}
        </div>
    )
}