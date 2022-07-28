import React, { useState } from 'react'
import { cellType } from '../mainBlock'
import s from './block.module.css'
import {Cell} from './blockCell/cell'

type propsType = {
    cells: cellType[]
    setCellsBlock: (cells: cellType[]) => void
}
export const Block: React.FC<propsType> = ({cells, setCellsBlock}) => {

    return (
        <div className={s.block__flex}>
            {cells.map(cell => <Cell cell={cell} setCellsBlock={setCellsBlock} cells={cells}/>)}
        </div>
    )
}