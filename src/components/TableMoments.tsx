import { Checkbox, Label, Select, Table } from 'flowbite-react'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useDeleteMomentMutation } from '../store/apiSlice'
import { Moment } from '../types/Moment'
import NoMomentsToDisplayAlert from './NoMomentsToDisplayAlert'

type SortConfig = {
  key: string
  directionAsc: boolean
}

const TableMoments = ({ moments }: { moments: Moment[] | undefined }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'title',
    directionAsc: true,
  })
  const sortedMoments = useMemo(() => {
    let sortedMoments = moments ? [...moments] : []
    let ascOrder = sortConfig.directionAsc ? 1 : -1
    sortedMoments.sort((a, b) => {
      // @ts-ignore
      if (a[sortConfig.key] > b[sortConfig.key]) return 1 * ascOrder
      // @ts-ignore
      if (a[sortConfig.key] < b[sortConfig.key]) return -1 * ascOrder
      return 0
    })
    return sortedMoments
  }, [moments, sortConfig])
  const [deleteMoment] = useDeleteMomentMutation()
  return moments?.length === 0 ? (
    <NoMomentsToDisplayAlert />
  ) : (
    <>
      <div className='mb-4 flex items-center gap-4'>
        <Select
          onChange={e =>
            setSortConfig(prevState => {
              return { ...prevState, key: e.target.value }
            })
          }
        >
          <option value='title'>title</option>
          <option value='description'>description</option>
          <option value='headline'>headline</option>
        </Select>
        <Checkbox
          id='asc'
          onChange={() =>
            setSortConfig(prevState => {
              return { ...prevState, directionAsc: !prevState.directionAsc }
            })
          }
          value='asc'
          checked={sortConfig.directionAsc}
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
          {sortedMoments?.map(({ id, title, headline, description }) => (
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
                    deleteMoment(id!)
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
