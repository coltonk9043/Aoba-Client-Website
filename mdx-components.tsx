import type { MDXComponents } from 'mdx/types'
import InformationPane from './components/InformationPane/InformationPane'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({children}) => (
      <h1 className="my-3 pb-2 border-b-2 border-b-aoba-purple">{children}</h1> 
    ),
    ul: ({children}) => (
      <ul className='mt-5 mb-5'>{children}</ul>
    ),
    li: ({children}) => (
      <li className=''>∘ {children}</li>
    ),
    p: ({children}) => (
      <p className='mt-5 mb-5'>{children}</p>
    ),
    code: ({children}) => (
      <InformationPane>
        <p>
          {children}
        </p>
      </InformationPane>
    ),
    ...components,
  }
}