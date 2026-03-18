'use client'

import { useEffect, useState, memo } from 'react'
import { usePathname } from 'next/navigation'

interface Heading {
    id: string
    text: string
    level: number
}

const TableOfContentsComponent = () => {
    const [headings, setHeadings] = useState<Heading[]>([])
    const [activeId, setActiveId] = useState<string>('')
    const pathname = usePathname()

    useEffect(() => {
        const elements = document.querySelectorAll('h1[id], h2[id], h3[id]')
        const items: Heading[] = Array.from(elements).map((el) => ({
            id: el.id,
            text: el.textContent || '',
            level: parseInt(el.tagName[1]),
        }))
        setHeadings(items)
    }, [pathname])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                }
            },
            { rootMargin: '0px 0px -80% 0px', threshold: 0.1 }
        )

        const elements = document.querySelectorAll('h1[id], h2[id], h3[id]')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [headings])

    return (
        <aside className="hidden xl:block xl:sticky xl:top-14 xl:max-h-[calc(100dvh-3.5rem)] xl:overflow-y-auto xl:shrink-0 xl:w-[250px] xl:border-l xl:border-l-zinc-700 p-5">
            {headings.length > 0 && (
                <>
                    <p className="font-semibold text-sm text-zinc-400 mb-3">On this page</p>
                    <ul className="space-y-1">
                        {headings.map((heading) => (
                            <li key={heading.id} style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}>
                                <a
                                    href={`#${heading.id}`}
                                    className={`block text-sm py-1 transition-colors ${
                                        activeId === heading.id
                                            ? 'text-aoba-purple font-medium'
                                            : 'text-zinc-500 hover:text-zinc-300'
                                    }`}
                                >
                                    {heading.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </aside>
    )
}

export const TableOfContents = memo(TableOfContentsComponent)
