import { Alert, Button } from 'flowbite-react'
import { HiInformationCircle, HiPlus } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const NoMomentsToDisplayAlert = () => {
  return (
    <Alert
      color='info'
      rounded
      icon={HiInformationCircle}
      additionalContent={
        <div className='flex flex-col gap-3'>
          <p>Create a new moment to share to your friends!</p>
          <div>
            <Button size='xs' as={Link} to='/new' className='inline'>
              <HiPlus className='mr-2' />
              New moment
            </Button>
          </div>
        </div>
      }
    >
      <p className='font-bold'>Currently, there are no moments to display</p>
    </Alert>
  )
}
export default NoMomentsToDisplayAlert
