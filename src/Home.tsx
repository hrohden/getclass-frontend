import { useState } from 'react'
import DefaultLayout from './DefaultLayout'
import { Moment } from './Moment'

const Home = () => {
  const [moments] = useState<Moment[]>([
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

  return (
    <DefaultLayout
      title='All moments'
      documentTitle='Moments'
      description='Here you can find all important moments in my life'
    >
      {moments.length === 0 && (
        <p>Currently, there are no moments to display</p>
      )}

    <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">Title</th>
            <th className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-400">Description</th>
          </tr>
        </thead>
        <tbody>
          {moments.map(moment => (
            <tr key={moment.id}>
              <td className="px-4 py-2 border border-gray-400">{moment.title}</td>
              <td className="px-4 py-2 border border-gray-400">{moment.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DefaultLayout>
  )
}
export default Home
