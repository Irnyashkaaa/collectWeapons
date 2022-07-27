import React from 'react'
import s from './block.module.css'
import {Cell} from './blockCell/cell'

type propsType = {
    cells: any[]
}
export const Block: React.FC<propsType> = ({cells}) => {
    return (
        <div className={s.block__flex}>
            {cells.map(cell => <Cell cell={'1'}/>)}
        </div>
    )
}