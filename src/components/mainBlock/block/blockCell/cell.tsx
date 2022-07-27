import React from 'react'
import s from './cell.module.css'

type propsType = {
    cell: null | string
}

export const Cell: React.FC<propsType> = ({cell}) => {
    return (
        <div className={s.flex__zrazok_robobl}>
            {cell}
        </div>
    )
}