import React from 'react'

export default function Header() {
    return (
        <div className='header'>
            <div className='left-header'>
                <div className='logo'>
                    <img src='./image/troll-face.svg' alt='logo'></img>
                </div>
                <div className='title-header'>Meme Generator</div>
            </div>

            <div className='right-header'>
                React Course - Project 3
            </div>
        </div>  
    )
}