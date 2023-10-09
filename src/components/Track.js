import React from 'react';

function Track(props) {
  return (
    <div className="p-5 max-w-xl m-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
      <a href={props.content.iconlink} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-between">
          <div>
            <h5 className="mb-4 mt-2 text-2xl font-bold tracking-tight text-gray-900">
              {props.content.title}
            </h5>
          </div>
          <div className="mb-4 mt-2 text-2xl font-bold tracking-tight text-gray-900">
            <img
              width={24}
              height={24}
              src={props.content.icon}
              alt={`${props.content.title} icon`}
            />
          </div>
        </div>
      </a>
      <p className="mb-5 mt-5 font-normal text-gray-700">
        {props.content.desc}
      </p>

      <div className="grid grid-cols-2 gap-x-10 mb-5">
        <div className="mb-3 font-normal">
          Prize
        </div>
        <div>
          $1,000
        </div>
      </div>

      <a href="#" className="inline-flex items-center py-2 text-sm font-medium text-center text-black bg-white rounded-lg focus:outline-none">
        Apply
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
    </div>
  );
}

export default Track;
