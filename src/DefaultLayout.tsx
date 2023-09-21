import { ReactNode } from 'react'

type Props = {
  title: string
  description?: string
  children?: ReactNode
}

const DefaultLayout = (props: Props) => {
  return (
    <>
      <h1 className='text-6xl font-bold tracking-tight'>{props.title}</h1>
      {props.description && (
        <p className='text-2xl font-semibold tracking-tight text-slate-400'>
          {props.description}
        </p>
      )}
      <article className='rounded-xl border border-slate-300 bg-white p-4'>
        {props.children}
      </article>
    </>
  )
}
export default DefaultLayout
