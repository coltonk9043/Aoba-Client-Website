'use client'
import { WikiEntries, WikiEntry } from "@/app/wiki/wiki";
import React from "react";

export type DirectoryTreeNode = {
    name: string,
    url_path: string,
    children: Array<DirectoryTreeNode>
}

export const CollapsibleTree =  (props : {entry : WikiEntry}) => {
    const [expanded, setExpanded] = React.useState<boolean>(true);

    const mapChildren = (childrenList : WikiEntry[] ) => {
        return childrenList.map((e, index) => {
            if(Array.isArray(e.children)){
                if(e.children.length == undefined){
                    return (<a key={index} href={"/" + e.path}><p>{e.name}</p></a>)
                }else{
                    return (<CollapsibleTree key={index} entry={e}/>)
                }
            }else{
                return (<a key={index} href={"/" + e.path}><p>{e.name}</p></a>)
            }
        })
    }

    const renderChildren = () => {
        if(props.entry.children !== undefined && expanded){
            return(
                <div className="ml-[3rem]">
                    {mapChildren(props.entry.children)}
                </div>
            )
        }
    }

    return (
        <>
        <p className="font-semibold text-xl" onClick={(e) => {setExpanded(!expanded)}}>{props.entry.name}</p>
        {renderChildren()}
        </>
    )
}

export async function WikiSideBar({ posts } : { posts?: string[]}) {
    return(
        <div className="p-5 bg-zinc-800 border-r border-zinc-500 w-auto">
            <CollapsibleTree entry={WikiEntries} />
        </div>
    )
}