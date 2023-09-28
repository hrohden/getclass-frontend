import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MomentsContext from '../store/momentsContext'
import { Moment } from '../types/Moment'

const TableMoments = ({ moments }: { moments: Moment[] }) => {
  const { deleteMoment } = useContext(MomentsContext)
  return (
    <table className='w-full table-auto border-collapse border border-gray-400'>
      <thead>
        <tr>
          <th className='border border-gray-400 bg-gray-200 px-4 py-2 text-gray-600'>
            Title
          </th>
          <th className='border border-gray-400 bg-gray-200 px-4 py-2 text-gray-600'>
            Description
          </th>
          <th className='border border-gray-400 bg-gray-200 px-4 py-2 text-gray-600'>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {moments.map(moment => (
          <tr key={moment.id}>
            <td className='border border-gray-400 px-4 py-2'>{moment.title}</td>
            <td className='border border-gray-400 px-4 py-2'>
              {moment.description}
            </td>
            <td className='border border-gray-400 px-4 py-2'>
              <Link to={`/edit/${moment.id}`}>
                <i className='fa-fw fa-solid fa-trash'></i> Edit
              </Link>
              <button
                onClick={() => {
                  deleteMoment(moment)
                }}
              >
                <i className='fa-fw fa-solid fa-trash'></i> Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableMoments
