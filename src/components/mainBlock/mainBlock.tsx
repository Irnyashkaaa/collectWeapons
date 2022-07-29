import React, { useEffect, useState } from 'react'
import { Block } from './block/block'
import s from './mainBlock.module.css'

export type cellType = {
    imageNumber: number | null
    blockNumber: 1 | 2
    cellIndex: number
}

type propsType = {
    setIsComplete: (isComplete: boolean) => void
}

export const MainBlock: React.FC<propsType> = ({ setIsComplete }) => {

    const [start, setStart] = useState<boolean>(false)

    let initCells: cellType[] = [
        { imageNumber: null, blockNumber: 1, cellIndex: 0 },
        { imageNumber: null, blockNumber: 1, cellIndex: 1 },
        { imageNumber: null, blockNumber: 1, cellIndex: 2 },
        { imageNumber: null, blockNumber: 1, cellIndex: 3 },
        { imageNumber: null, blockNumber: 1, cellIndex: 4 },
        { imageNumber: null, blockNumber: 1, cellIndex: 5 },
        { imageNumber: null, blockNumber: 1, cellIndex: 6 },
        { imageNumber: null, blockNumber: 1, cellIndex: 7 },
        { imageNumber: null, blockNumber: 1, cellIndex: 8 },
    ]
    const initCellsSecondBlock: cellType[] = [
        { imageNumber: null, blockNumber: 2, cellIndex: 0 },
        { imageNumber: null, blockNumber: 2, cellIndex: 1 },
        { imageNumber: null, blockNumber: 2, cellIndex: 2 },
        { imageNumber: null, blockNumber: 2, cellIndex: 3 },
        { imageNumber: null, blockNumber: 2, cellIndex: 4 },
        { imageNumber: null, blockNumber: 2, cellIndex: 5 },
        { imageNumber: null, blockNumber: 2, cellIndex: 6 },
        { imageNumber: null, blockNumber: 2, cellIndex: 7 },
        { imageNumber: null, blockNumber: 2, cellIndex: 8 },
    ]

    const [firstBlockCells, setFirstBlockCells] = useState(initCells)
    const [secondBlockCells, setSecondBlockCells] = useState(initCellsSecondBlock)

    const setFirstBlockRandomCells = () => {
        let newSecondBlockCells: any[] = []
        firstBlockCells.map(() => {
            const randomNumber = Math.floor(Math.random() * 4)
            newSecondBlockCells.push(randomNumber)
        })
        for (let i = 0; i < initCells.length; i++) {
            initCells[i].imageNumber = newSecondBlockCells[i]
        }
        setFirstBlockCells(initCells)
        setSecondBlockCells(initCellsSecondBlock)
    }

    useEffect(() => {
        setFirstBlockRandomCells()
        setStart(true)
    }, [])

    // check is game complete
    useEffect(() => {
        let countEmptyCell = 0
        firstBlockCells.map(cell => {
            if (!cell.imageNumber) {
                countEmptyCell++
            }
        })
        if (countEmptyCell === 9) setIsComplete(true)
    }, [firstBlockCells])

    const [currentCell, setCurrentCell] = useState<cellType>({ blockNumber: 2, imageNumber: 1, cellIndex: 0 })

    return (
        <div className={s.robota__block}>
            <Block
                setAnotherBlockCells={setSecondBlockCells}
                anotherBlockCells={secondBlockCells}
                cells={firstBlockCells}
                setFirstBlockRandomCells={setFirstBlockRandomCells}
                setCellsBlock={setFirstBlockCells}
                currentCell={currentCell}
                setCurrentCell={setCurrentCell} />
            <Block
                setAnotherBlockCells={setFirstBlockCells}
                anotherBlockCells={firstBlockCells}
                cells={secondBlockCells}
                setFirstBlockRandomCells={setFirstBlockRandomCells}
                setCellsBlock={setSecondBlockCells}
                currentCell={currentCell}
                setCurrentCell={setCurrentCell} />
        </div>
    )
}