export type Loadable<T> = {
  data?: T
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error?: string
}
