export type Loadable<T> = {
  data: T | null
  isLoading: boolean
  error?: string | null
}
