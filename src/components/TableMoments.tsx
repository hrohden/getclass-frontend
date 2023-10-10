import { Table } from 'flowbite-react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useDeleteMoment } from '../hooks/useMoment'
import { Moment } from '../types/Moment'

const TableMoments = ({ moments }: { moments: Moment[] | undefined }) => {
  const deleteMoment = useDeleteMoment()
  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Title</Table.HeadCell>
        <Table.HeadCell>Description</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {moments?.map(moment => (
          <Table.Row key={moment.id}>
            <Table.Cell>{moment.title}</Table.Cell>
            <Table.Cell>{moment.description}</Table.Cell>
            <Table.Cell className='flex gap-4'>
              <Link to={`/edit/${moment.id}`}>Edit</Link>
              <Link
                to='#'
                referrerPolicy='no-referrer'
                onClick={async () => {
                  await deleteMoment.mutateAsync(moment.id!)
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
