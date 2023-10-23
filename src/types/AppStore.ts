import { Loadable } from './Loadable'
import { Moment } from './Moment'

export type AppStore = {
  moments: Loadable<Moment[]>
}
