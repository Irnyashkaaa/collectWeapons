import React, { useEffect, useState } from 'react'
import { Block } from './block/block'
import s from './mainBlock.module.css'

export type cellType = {
    imageNumber: number | null
    blockNumber: 1 | 2
    cellIndex: number
}

export const MainBlock: React.FC = () => {

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

    const checkIsSame = () => {
        for (let i = 0; i < 9; i++) {
            if (firstBlockCells[i].imageNumber && secondBlockCells[i].imageNumber && secondBlockCells[i].imageNumber !== firstBlockCells[i].imageNumber) {
                return setFirstBlockRandomCells()
            } else if (firstBlockCells[i].imageNumber
                && secondBlockCells[i].imageNumber && secondBlockCells[i].imageNumber === firstBlockCells[i].imageNumber) {
                    let newCells = [...firstBlockCells, firstBlockCells[i].imageNumber = null]
                    newCells.length = 9
                    //@ts-ignore
                    return setFirstBlockCells(newCells)
            }
        }
    }

    useEffect(() => {
        checkIsSame()
    }, [secondBlockCells])


    return (
        <div className={s.robota__block}>
            <Block cells={firstBlockCells} setCellsBlock={setFirstBlockCells} />
            <Block cells={secondBlockCells} setCellsBlock={setSecondBlockCells} />
        </div>
    )
}