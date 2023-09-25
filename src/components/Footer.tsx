const Footer = () => {
  return (
    <footer className='py-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='mb-4 w-full lg:mb-0 lg:w-1/3'>
            <h2 className='mb-2 text-lg font-bold text-gray-500'>About Us</h2>
            <p className='text-gray-400'>
              Moments is a web application that helps you keep track of
              important moments in your life. You can add, edit, and delete
              moments, and view them in a list or on a calendar.
            </p>
          </div>
          <div className='mb-4 w-full lg:mb-0 lg:w-1/3'>
            <h2 className='mb-2 text-lg font-bold text-gray-500'>Contact Us</h2>
            <p className='text-gray-400'>
              123 Main St.
              <br />
              New York, NY 10001
              <br />
              info@example.com
              <br />
              555-555-5555
            </p>
          </div>
          <div className='mb-4 w-full lg:mb-0 lg:w-1/3'>
            <h2 className='mb-2 text-lg font-bold text-gray-500'>Follow Us</h2>
            <div className='flex gap-4'>
              <a
                href='#'
                className='text-6xl text-gray-400 hover:text-gray-400'
              >
                <i className='fa-fw fa-brands fa-square-facebook'></i>
              </a>
              <a
                href='#'
                className='text-6xl text-gray-400 hover:text-gray-400'
              >
                <i className='fa-fw fa-brands fa-square-twitter'></i>
              </a>
              <a
                href='#'
                className='text-6xl text-gray-400 hover:text-gray-400'
              >
                <i className='fa-fw fa-brands fa-square-instagram'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
