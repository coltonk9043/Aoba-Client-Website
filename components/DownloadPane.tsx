export type DownloadPaneProps = {
    version : string,
    changelog: string,
    link: string,
}

export const DownloadPane = (props : DownloadPaneProps) => {
    return (
        <div className="flex border border-zinc-500 bg-zinc-700 rounded-lg mt-5 mb-5 p-3">
            <div className="flex w-full">
                <h2 className="grow">Aoba {props.version}</h2>

                <a className="bg-red-500 basis-10 pl-5 pr-5 pt-2 pb-2 rounded-md" href={props.link}>
                    <p>Download</p>
                </a>
            </div>

            <p>{props.changelog}</p>
        </div>
    )
}