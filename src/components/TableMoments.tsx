import { Button, Checkbox, Label, Select, Table } from 'flowbite-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteMomentThunk } from '../store/momentsSlice'
import { Moment } from '../types/Moment'
import NoMomentsToDisplayAlert from './NoMomentsToDisplayAlert'

const TableMoments = ({ moments }: { moments: Moment[] | undefined }) => {
  const [listMoments, setListMoments] = useState<Moment[] | undefined>(moments)
  const [criteria, setCriteria] = useState('title')
  const [asc, setAsc] = useState(false)
  const dispatch = useDispatch()
  const handleSort = () => {
    setListMoments(prevState => {
      let newState = prevState ? [...prevState] : []
      let ascOrder = asc ? 1 : -1
      newState.sort((a, b) => {
        // @ts-ignore
        if (a[criteria] > b[criteria]) return 1 * ascOrder
        // @ts-ignore
        if (a[criteria] < b[criteria]) return -1 * ascOrder
        return 0
      })
      return newState
    })
  }
  return moments?.length === 0 ? (
    <NoMomentsToDisplayAlert />
  ) : (
    <>
      <div className='mb-4 flex items-center gap-4'>
        <Button onClick={handleSort}>Sort</Button>
        <Select onChange={e => setCriteria(e.target.value)}>
          <option value='title'>title</option>
          <option value='description'>description</option>
          <option value='headline'>headline</option>
        </Select>
        <Checkbox
          id='asc'
          onChange={() => setAsc(!asc)}
          value='asc'
          checked={asc}
        />
        <Label htmlFor='asc'>
          <p>Ascending</p>
        </Label>
      </div>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Headline</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {listMoments?.map(({ id, title, headline, description }) => (
            <Table.Row key={id}>
              <Table.Cell>{title}</Table.Cell>
              <Table.Cell>{headline}</Table.Cell>
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
