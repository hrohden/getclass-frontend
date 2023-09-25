import { ReactNode, useState } from 'react'
import { Moment } from '../types/Moment'
import MomentsContext from './momentsContext'

const MomentsContextProvider = ({ children }: { children: ReactNode }) => {
  const [moments, setMoments] = useState<Moment[]>([
    {
      id: '1',
      title: 'Trip to NYC',
      headline: 'My trip to NY with my wife',
      description:
        'It was an amazing trip! Many places to take pictures and visit!',
      isFavorite: false,
    },
    {
      id: '2',
      title: 'Trip to Europe',
      headline: 'My trip to Europe with my wife in 2014',
      description:
        'This trip was when we were waiting for Lucas. Many pictures and great moments.',
      isFavorite: false,
    },
  ])

  const addMoment = (moment: Moment) => {
    setMoments(prevMoments => prevMoments.concat(moment))
  }

  const deleteMoment = (moment: Moment) => {
    setMoments(prevMoments => prevMoments.filter(m => m.id !== moment.id))
  }

  const context = {
    moments,
    addMoment,
    deleteMoment,
  }

  return (
    <MomentsContext.Provider value={context}>
      {children}
    </MomentsContext.Provider>
  )
}
export default MomentsContextProvider
