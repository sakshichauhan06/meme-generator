import React from 'react'

export default function Header() {
    return (
        <header className='header'>
            <img
                src='./image/troll-face.svg'
                className='header--image'
                alt='logo'
            />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>Made with React</h4>
        </header>
    )
}