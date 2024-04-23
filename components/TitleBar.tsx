'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const TitleBar = () => {

    const [mobile, setMobile] = React.useState<boolean>(typeof window == "undefined" ? false : window.innerWidth < 768)
    const [expanded, setExpanded] = React.useState<boolean>(false);

    React.useEffect(() => {
        if(typeof window !== "undefined"){
            const event = window.matchMedia("(max-width: 768px)")
            const handler = (e : MediaQueryListEvent) => { setMobile(e.matches); setExpanded(false); }
            event.addEventListener("change", handler);
            return () => { event.removeEventListener("change", handler); }
        }
    }, [])

    const HandleMenuClick = () => {
        let curState = expanded;
        setExpanded(!curState);
    }

    return (
        <div className="z-50 sticky top-0 bg-zinc-800 border-zinc-500 border-1 border-b">
            <div className="flex items-center justify-between w-full h-16 gap-0 sm:gap-3">
                <Link className='h-full m-2 hover:bg-purple-300 basis-50px' href="/">
                    <Image src="/aoba.png" width={50} height={50} alt="Aoba Logo"/>
                </Link>
                
                {!mobile && 
                <>
                    <div className='flex grow shrink justify-center h-full'>
                        <Link className='p-5 hover:bg-purple-300' href="/download/">Download</Link>
                        <Link className='p-5 hover:bg-purple-300' href="/wiki/">Wiki</Link>
                        <Link className='p-5 hover:bg-purple-300' href="/contact/">Contact</Link>
                        <Link className='p-5 hover:bg-purple-300' href="/">Donate</Link>
                    </div>
                    <a className='h-full m-2 basis-50px hover:bg-purple-300' href="https://discord.gg/HyZ3uGrwgs">
                        <Image src="/discord.svg" width={75} height={75} alt="Aoba Fan Club (Unofficial)"/>
                    </a>
                    <a className='h-full m-2 basis-50px hover:bg-purple-300' href="https://github.com/coltonk9043/Aoba-MC-Hacked-Client">
                        <Image src="/github.svg" width={35} height={35} alt="GitHub Logo"/>
                    </a>
                </>}

                {mobile && 
                    <div className='m-2 hover:cursor-pointer' onClick={() => {HandleMenuClick()}}>
                        <Image width={50} height={50} src="/menu.svg" alt='Menu'/>
                    </div>
                }
            </div>

            {(mobile && expanded) && 
                <div>
                    <div className='w-full p-5 hover:bg-purple-300'><Link className='w-full' href="/download/">Download</Link></div>
                    <div className='w-full p-5 hover:bg-purple-300'><Link className='w-full' href="/wiki/">Wiki</Link></div>
                    <div className='w-full p-5 hover:bg-purple-300'><Link className='w-full' href="/contact/">Contact</Link></div>
                    <div className='w-full p-5 hover:bg-purple-300'><Link className='w-full' href="/">Donate</Link></div>
                </div>
            }
        </div>
    )
}