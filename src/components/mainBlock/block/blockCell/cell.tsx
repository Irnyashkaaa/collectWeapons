import React, { useState } from 'react'
import s from './cell.module.css'
import firstImage from '../../../../img/factory_ammo.png'
import secondImage from '../../../../img/factory_metall.png'
import thirdImage from '../../../../img/factory_scrap.png'
import fourthImage from '../../../../img/factory_wood.png'
import { cellType } from '../../mainBlock'

type propsType = {
    cell: cellType
    cells: cellType[]
    setCellsBlock: (cells: cellType[]) => void
}

//@ts-ignore
export const Cell: React.FC<propsType> = ({ cell, cells, setCellsBlock }) => {

    const [currentCell, setCurrentCell] = useState<cellType>({blockNumber: 2, imageNumber: 1, cellIndex: 0})


    const dragOver = (e: any) => {
        e.preventDefault()
    }

    const drop = (e: any, cell: cellType) => {
        e.preventDefault()
        if (!cell.imageNumber && cell.blockNumber === 2) {
            let newCells = [...cells, cells[cell.cellIndex].imageNumber = 1]
            newCells.length = 9
            //@ts-ignore
            setCellsBlock(newCells)
        }
    }
    
    return (
        <div onMouseEnter={() => setCurrentCell(cell)} className={s.flex__zrazok_robobl}
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => drop(e, cell)}
            draggable={true}>
            <img src={cell.imageNumber === 1 ? firstImage : cell.imageNumber === 2 ? secondImage : cell.imageNumber === 3 ? thirdImage : cell.imageNumber === 0 ? fourthImage : ''} />
        </div>
    )
}