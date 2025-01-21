import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({children}) => (
      <h1 className='text-bold border-b border-zinc-500 mb-5 text-3xl'>{children}</h1>  
    ),
    ul: ({children}) => (
      <ul className='mt-5 mb-5'>{children}</ul>
    ),
    li: ({children}) => (
      <li className=''>☆ {children}</li>
    ),
    p: ({children}) => (
      <p className='mt-5 mb-5'>{children}</p>
    ),
    code: ({children}) => (
      <code className='bg-[#1a1a1a] px-1 py-2 border-4 text-[#bb86fc]'>{children}</code>
    ),
    ...components,
  }
}