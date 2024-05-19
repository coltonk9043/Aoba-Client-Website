import type { MDXComponents } from 'mdx/types'
import { ImageProps } from 'next/image'
 
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
    ...components,
  }
}