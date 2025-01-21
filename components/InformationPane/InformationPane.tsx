const InformationPane = (props: { children: React.ReactNode, className?: string }) => {
    return (
        <>
            <div className={"bg-background-accent rounded-lg p-5 border-l-4 border-l-aoba-purple " + props.className}>
                {props.children}
            </div>
        </>

    )
}

export default InformationPane;