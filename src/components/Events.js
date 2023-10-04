import ArweaveLogo from '../images/arweave.png'

function Events() {
  return (
    <div class="mx-auto py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto">
        <div class="text-4xl px-5">
          <h1
            class="mx-5 text-black bg-clip-text font-extrabold text-transparent md:mb-0"
          >
            Learn to hack on Arweave 🧑‍💻
          </h1>
        </div>
        <div>
          <div className="grid pl-5 flex items-center grid-cols-1 md:grid-cols-3">
            <div className='md:col-span-2 px-6 mb-8 mt-4 text-lg'>
              Permahacks will host workshops and demos throughout the duration of the event.
              <p>&nbsp;</p>
              Learn in groups and meet the ecosystem in Gathertown events that'll level up your knowledge of permaweb development.
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  className="rounded bg-[#FF630B] hover:cursor-not-allowed px-12 py-3 text-md font-medium text-gray-900 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="https://community.g8way.io/"
                >
                  {`View event calendar`}
                </button>
                <button
                  class="block w-full rounded border border-[#FF630B] px-12 py-3 text-md font-medium text-[#FF630B] focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="https://cookbook.arweave.dev"
                  
                >
                  {`Read the docs`}
                </button>
              </div>
            </div>

            <div className='hidden md:flex md:items-center md:justify-end'>
              <div className='w-1/2 overflow-hidden'>
                {/*<img
                  className='float-right'
                  width={300}
                  height={300}
                  src={ArweaveLogo}
                  alt="Arweave logo"
                />*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Events;
