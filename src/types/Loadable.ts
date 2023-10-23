export type Loadable<T> = {
  data: T
  isLoading: 'idle' | 'loading' | 'succeeded' | 'failed'
  error?: string | null
}
