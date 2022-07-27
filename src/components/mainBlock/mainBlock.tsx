import React, { useState } from 'react'
import { Block } from './block/block'
import s from './mainBlock.module.css'

export const MainBlock: React.FC = () => {

    const initCells = [null, null, null, null, null, null, null, null, null]

    const [firstBlockCells, setFirstBlockCells] = useState(initCells)
    const [secondBlockCells, setSecondBlockCells] = useState(initCells)

    return (
        <div className={s.robota__block}>
            <Block cells={firstBlockCells} />
            <Block cells={secondBlockCells}/>
        </div>
    )
}