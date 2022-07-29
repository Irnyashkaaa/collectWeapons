import React from 'react'
import s from './button.module.css'

type propsType = {
    isComplete: boolean
}

export const Footer:React.FC<propsType> = ({isComplete}) => {

    const buttonClickEvent = () => {
        alert ('finish')
    }
    return(
        <button className={s.block__button} onClick={buttonClickEvent} disabled={!isComplete}>
            Розпочати процес збирання
        </button>
    )
}