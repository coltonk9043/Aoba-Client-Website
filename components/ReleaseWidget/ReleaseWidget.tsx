'use client'

import React from "react";

enum State{
    Releases = 0,
    Prereleases = 1,
}

const ReleasesWidget = (props: {children: React.ReactNode}) => {
    const [state, setState] = React.useState<State>(State.Releases);

    const getDownloadPage = () => {
        let children = React.Children.toArray(props.children);
        if(Array.isArray(children)){
            if(state == State.Releases){
                const view = children[0];
                return view;
            }else if (state == State.Prereleases){
                const view = children[1];
                return view;
            }
        }
    }

    return (
        <div>
            <div className="border rounded w-[300px] flex mt-5 mb-5">
                <p className="border-r text-center basis-1/2 hover:cursor-pointer" style={{backgroundColor: state == State.Releases ? '#DC0BF6' : 'transparent'}} onClick={() => {setState(State.Releases)}} >Releases</p>
                <p className="text-center basis-1/2 hover:cursor-pointer" style={{backgroundColor: state == State.Prereleases ? '#DC0BF6' : 'transparent'}} onClick={() => {setState(State.Prereleases)}}>Pre-releases</p>
            </div>

            {getDownloadPage()}
        </div>
    )
}
export default ReleasesWidget;