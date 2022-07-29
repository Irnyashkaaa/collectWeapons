import React from 'react'
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
    setCurrentCell: (cell: cellType) => void
    currentCell: cellType
    setFirstBlockRandomCells: () => void
    anotherBlockCells: cellType[]
    setAnotherBlockCells: (cells: cellType[]) => void
}

export const Cell: React.FC<propsType> = ({ cell, cells, setCellsBlock, setCurrentCell, currentCell, setFirstBlockRandomCells, anotherBlockCells, setAnotherBlockCells }) => {

    const dragOver = (e: any) => {
        e.preventDefault()
    }

    const drop = (e: any, cell: cellType) => {
        e.preventDefault()
        if (!cell.imageNumber && cell.blockNumber === 2) {
            if (cell.cellIndex === currentCell.cellIndex) {
                let newCells = [...cells, cells[cell.cellIndex].imageNumber = currentCell.imageNumber]
                newCells.length = 9
                //@ts-ignore
                setCellsBlock(newCells)
                let newAnotherBlockCells = [...anotherBlockCells, anotherBlockCells[cell.cellIndex].imageNumber = null]
                newAnotherBlockCells.length = 9
                //@ts-ignore
                setAnotherBlockCells(newAnotherBlockCells)
            } else {
                setFirstBlockRandomCells()
            }
        }
    }
    let cellImage;
    switch (cell.imageNumber) {
        case 0:
            cellImage = firstImage
            break
        case 1:
            cellImage = secondImage
            break
        case 2:
            cellImage = thirdImage
            break
        case 3: cellImage = fourthImage
    }

    return (
        <div onMouseEnter={() => setCurrentCell(cell)} className={s.flex__zrazok_robobl}
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => drop(e, cell)}
            draggable={true}>
            <img src={cellImage} />
        </div>
    )
}