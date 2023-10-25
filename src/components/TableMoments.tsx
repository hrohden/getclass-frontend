import { Button, Table } from 'flowbite-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteMomentThunk } from '../store/momentsSlice'
import { Moment } from '../types/Moment'
import NoMomentsToDisplayAlert from './NoMomentsToDisplayAlert'

const TableMoments = ({ moments }: { moments: Moment[] | undefined }) => {
  const [listMoments, setListMoments] = useState<Moment[] | undefined>(moments)
  const dispatch = useDispatch()
  const handleSortByTitle = () => {
    setListMoments(prevState => {
      let newState = prevState ? [...prevState] : []
      newState.sort((a, b) => {
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
        return 0
      })
      return newState
    })
  }
  return moments?.length === 0 ? (
    <NoMomentsToDisplayAlert />
  ) : (
    <>
      <div className='mb-4 flex gap-4'>
        <Button onClick={handleSortByTitle}>Sort by title</Button>
      </div>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {listMoments?.map(({ id, title, description }) => (
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
    </>
  )
}

export default TableMoments
