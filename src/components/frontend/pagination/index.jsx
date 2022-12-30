import _ from 'lodash'
import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ totalCount, showPerPage, handlePageChange }) => {
  const pages = Math.ceil(totalCount / showPerPage)

  const numberOfPages = []
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i)
  }

  return (
    <div className="pt-16 pb-24 text-center flex gap-1 items-center justify-center">
      <ReactPaginate
        pageCount={numberOfPages.length}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={(data) => {
          window.scrollTo(0, 250)
          handlePageChange(data)
        }}
        breakLabel={
          <button className="text-base font-normal text-themeWhiteLow hover:text-white bg-white shadow py-2 px-4 hover:bg-themePrimary rounded-lg">
            ...
          </button>
        }
        previousLabel={false}
        nextLabel={false}
        onPageActive={(data) => {
          window.scrollTo(0, 250)
          handlePageChange(data)
        }}
        containerClassName={`flex flex-row flex-nowrap justify-between md:justify-center items-center`}
        pageLinkClassName={`flex w-10 h-10 mx-1 justify-center items-center text-base font-normal text-themeWhiteLow hover:text-white bg-white shadow py-2 px-4 hover:bg-themePrimary rounded-lg`}
        breakLinkClassName={`flex w-10 h-10 mx-1 text-xs justify-center items-center rounded-md bg-white text-deep hover:!bg-themePrimary hover:text-white`}
        activeLinkClassName={`flex w-10 h-10 mx-1 justify-center items-center text-base font-normal text-white !text-white !bg-themePrimary shadow py-2 px-4 hover:bg-themePrimary rounded-lg`}
      />

      {/* Previous code  */}
      {/* <button
        className="text-base font-normal text-themeWhiteLow hover:text-white bg-white shadow py-2 px-4 hover:bg-themePrimary rounded-lg"
        onClick={() => handlePageChange(page - 1)}
      >
        1
      </button>
      <button
        className="text-base font-normal text-white hover:text-white bg-themePrimary shadow py-2 px-4 hover:bg-themePrimary rounded-lg"
      >
        2
      </button>
      <button
        className="text-base font-normal text-themeWhiteLow hover:text-white bg-white shadow py-2 px-4 hover:bg-themePrimary rounded-lg"
      >
        3
      </button>
      <button
        className="text-base font-normal text-themeWhiteLow hover:text-white bg-white shadow py-2 px-4 hover:bg-themePrimary rounded-lg"
      >
        4
      </button>
      <button
        className="text-base font-normal text-themeWhiteLow hover:text-white bg-white shadow py-2 px-4 hover:bg-themePrimary rounded-lg"
      >
        ...
      </button>
      <button
        className="text-base font-normal text-themeWhiteLow hover:text-white bg-white shadow py-2 px-4 hover:bg-themePrimary rounded-lg"
      >
        6
      </button> */}
    </div>
  )
}

export default Pagination
