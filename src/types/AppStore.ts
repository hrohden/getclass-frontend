import { Loadable } from './Loadable'
import { Moment } from './Moment'

export type Identity = {
  isAuthenticated: boolean
  authentication?: Authentication
}

export type AppStore = {
  moments: Loadable<Moment[]>
  identity: Identity
}
