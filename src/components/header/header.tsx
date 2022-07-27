import React from 'react'
import s from './header.module.css'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header__flex}>
                <div className={s.flex__block_1}>Збирання зброї</div>
                <div className={s.flex__block_2}>
                    <img src="/img/x-close-delete.svg" alt="" />
                </div>
            </div>
        </div>
    )
}