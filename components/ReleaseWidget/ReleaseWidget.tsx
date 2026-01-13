'use client'

import { useState, useMemo, useCallback, memo } from "react";

enum State {
    Releases = 0,
    Prereleases = 1,
}

interface ReleasesWidgetProps {
    children: React.ReactNode;
}

const ReleasesWidgetComponent = ({ children }: ReleasesWidgetProps) => {
    const [state, setState] = useState<State>(State.Releases);

    const childrenArray = useMemo(() => {
        return Array.isArray(children) ? children : [children];
    }, [children]);

    const currentView = useMemo(() => {
        const childArray = Array.isArray(children) ? children : [children];
        return state === State.Releases ? childArray[0] : childArray[1];
    }, [state, children]);

    const handleReleasesClick = useCallback(() => {
        setState(State.Releases);
    }, []);

    const handlePrereleasesClick = useCallback(() => {
        setState(State.Prereleases);
    }, []);

    return (
        <div>
            <div className="border rounded w-[300px] flex mt-5 mb-5">
                <button
                    className={`border-r text-center basis-1/2 hover:cursor-pointer transition-colors ${state === State.Releases ? 'bg-[#DC0BF6]' : 'bg-transparent'}`}
                    onClick={handleReleasesClick}
                >
                    Releases
                </button>
                <button
                    className={`text-center basis-1/2 hover:cursor-pointer transition-colors ${state === State.Prereleases ? 'bg-[#DC0BF6]' : 'bg-transparent'}`}
                    onClick={handlePrereleasesClick}
                >
                    Pre-releases
                </button>
            </div>
            {currentView}
        </div>
    );
};

const ReleasesWidget = memo(ReleasesWidgetComponent);

export default ReleasesWidget;