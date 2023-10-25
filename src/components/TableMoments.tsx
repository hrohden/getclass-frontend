import { Table } from 'flowbite-react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteMomentThunk } from '../store/momentsSlice'
import { Moment } from '../types/Moment'
import NoMomentsToDisplayAlert from './NoMomentsToDisplayAlert'

const TableMoments = ({ moments }: { moments: Moment[] | undefined }) => {
  const dispatch = useDispatch()
  return moments?.length === 0 ? (
    <NoMomentsToDisplayAlert />
  ) : (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Title</Table.HeadCell>
        <Table.HeadCell>Description</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {moments?.map(({ id, title, description }) => (
          <Table.Row key={id}>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell>{description}</Table.Cell>
            <Table.Cell className='flex gap-4'>
              <Link to={`/edit/${id}`}>Edit</Link>
              <Link
                to='#'
                referrerPolicy='no-referrer'
                onClick={async () => {
                  // @ts-ignore
                  dispatch(deleteMomentThunk(id))
                  toast.success('Moment removed')
                }}
              >
                Remove
              </Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default TableMoments
