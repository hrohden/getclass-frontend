import { ReactNode, useEffect } from 'react'

type Props = {
  title: string
  documentTitle?: string
  description?: string
  children?: ReactNode
}

const DefaultLayout = (props: Props) => {
  useEffect(() => {
    document.title = props.documentTitle
      ? props.documentTitle
      : `${props.title} | Moments`
  }, [props.documentTitle, props.title])

  return (
    <>
      <h1 className='text-6xl font-bold tracking-tight'>{props.title}</h1>
      {props.description && (
        <p className='text-2xl font-semibold tracking-tight text-slate-400'>
          {props.description}
        </p>
      )}
      <article className='rounded-md border border-slate-300 bg-white p-4'>
        {props.children}
      </article>
    </>
  )
}
export default DefaultLayout
