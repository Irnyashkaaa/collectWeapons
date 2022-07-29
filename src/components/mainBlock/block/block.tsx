import React from 'react'
import { cellType } from '../mainBlock'
import s from './block.module.css'
import {Cell} from './blockCell/cell'

type propsType = {
    setCellsBlock: (cells: cellType[]) => void
    setAnotherBlockCells: (cells: cellType[]) => void
    setCurrentCell: (cell: cellType) => void
    setFirstBlockRandomCells: () => void
    anotherBlockCells: cellType[]
    cells: cellType[]
    currentCell: cellType
}
export const Block: React.FC<propsType> = ({cells, setCellsBlock, setCurrentCell, 
    currentCell, setFirstBlockRandomCells, anotherBlockCells, setAnotherBlockCells}) => {

    return (
        <div className={s.block__flex}>
            {cells.map(cell => <Cell 
            setAnotherBlockCells={setAnotherBlockCells}
            anotherBlockCells={anotherBlockCells}
            setFirstBlockRandomCells={setFirstBlockRandomCells}
            setCurrentCell={setCurrentCell} 
            currentCell={currentCell} 
            cell={cell} 
            setCellsBlock={setCellsBlock} 
            cells={cells}/>)}
        </div>
    )
}