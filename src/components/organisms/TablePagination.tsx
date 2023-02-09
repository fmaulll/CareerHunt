import React, { FC } from 'react'
import { PositionData } from '../../type'
import Pagination from '../atoms/Pagination';
import JobsTable from '../molecules/JobsTable'

interface Props {
    data: PositionData[];
    totalPages: number
    currentPage: number
    handleChangePage: (type: string) => void
}

const TablePagination:FC<Props> = ({data,totalPages, currentPage, handleChangePage}) => {
  return (
    <div className='h-5/6 w-full flex flex-col mt-4'>
        <JobsTable data={data} />
        <Pagination handleChangePage={handleChangePage} currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}

export default TablePagination