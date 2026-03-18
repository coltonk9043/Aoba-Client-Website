import type { MDXComponents } from 'mdx/types'
import InformationPane from './components/InformationPane/InformationPane'
import React from 'react'

function toId(children: React.ReactNode): string {
  const text = React.Children.toArray(children)
    .map(child => (typeof child === 'string' ? child : ''))
    .join('')
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({children}) => (
      <h1 id={toId(children)} className="my-3 pb-2 border-b-2 border-b-aoba-purple">{children}</h1>
    ),
    h2: ({children}) => (
      <h2 id={toId(children)}>{children}</h2>
    ),
    h3: ({children}) => (
      <h3 id={toId(children)} className="mt-3 mb-0">{children}</h3>
    ),
    ul: ({children}) => (
      <ul className='mt-5 mb-5'>{children}</ul>
    ),
    wrapper: ({children}) => (
      <div className="mdx-content">{children}</div>
    ),
    li: ({children}) => (
      <li>∘ {children}</li>
    ),
    p: ({children}) => (
      <p className='mt-2 mb-5'>{children}</p>
    ),
    img: (props) => (
      <figure className="my-4">
        <img {...props} className="rounded-lg mx-auto" />
        {props.alt && <figcaption className="text-sm text-zinc-500 mt-2 text-center">{props.alt}</figcaption>}
      </figure>
    ),
    pre: ({children}) => (
      <div className="bg-[#0a0a0c] rounded-lg my-4 border-l-4 border-l-aoba-purple overflow-x-auto">
        <pre className="p-5 m-0 whitespace-pre-wrap">{children}</pre>
      </div>
    ),
  }
}
