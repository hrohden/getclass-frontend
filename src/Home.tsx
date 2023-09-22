import { useContext } from 'react'
import DefaultLayout from './DefaultLayout'
import MomentsContext from './momentsContext'

const Home = () => {
  const moments = useContext(MomentsContext)

  return (
    <DefaultLayout
      title='All moments'
      documentTitle='Moments'
      description='Here you can find all important moments in my life'
    >
      {moments.length === 0 && (
        <p>Currently, there are no moments to display</p>
      )}

      <table className='w-full table-auto border-collapse border border-gray-400'>
        <thead>
          <tr>
            <th className='border border-gray-400 bg-gray-200 px-4 py-2 text-gray-600'>
              Title
            </th>
            <th className='border border-gray-400 bg-gray-200 px-4 py-2 text-gray-600'>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {moments.map(moment => (
            <tr key={moment.id}>
              <td className='border border-gray-400 px-4 py-2'>
                {moment.title}
              </td>
              <td className='border border-gray-400 px-4 py-2'>
                {moment.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DefaultLayout>
  )
}
export default Home
