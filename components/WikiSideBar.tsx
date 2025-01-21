'use client'
import { WikiEntries, WikiEntry } from "@/app/wiki/wiki";
import React from "react";
import Image from "next/image";

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
                return (<a className="font-light" key={index} href={"/" + e.path}><p>{e.name}</p></a>)
            }
        })
    }

    const renderChildren = () => {
        if(props.entry.children !== undefined && expanded){
            return(
                <div className="border-l border-l-gray-700">
                    <div className="ml-[3rem]">
                        {mapChildren(props.entry.children)}
                    </div>
                </div>
            )
        }
    }

    return (
        <>
        <div className="flex gap-8" onClick={(e) => {setExpanded(!expanded)}}>
            <p className="font-semibold text-xl" >{props.entry.name}</p>
            <Image className={`w-[16px] h-[16px] ml-auto center mt-auto mb-auto hover:cursor-pointer ${expanded ? 'rotate-180' : ''}`} src="/expander.png"
                  width={16}
                  height={16}
                  alt="Expand"/>
        </div>
        
        {renderChildren()}
        </>
    )
}

export function WikiSideBar({ posts } : { posts?: string[]}) {
    return(
        <div className={'bg-zinc-800 border-aoba-purple border rounded-lg m-5 p-5 md:inline-block'}>
            <div className='w-full pl-5 pr-5 inline-block'>
                <CollapsibleTree entry={WikiEntries} />
            </div>
        </div>
    )
}