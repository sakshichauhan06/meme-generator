import React from "react";
import memesData from "../memesData";

export default function Meme() {
    // const [memeImg, getImg] = React.useState("https://d2v7i6t2.map2.ssl.hwcdn.net/content/quotes/5152_500.jpg")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImg() {
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    return (
        <main>
            <div className="form">
            <input
                type="text" 
                placeholder="Top-text"
                className="form-input"/>
            <input
                type="text" 
                placeholder="Bottom-text"
                className="form-input"/>
                <button className="form-btn" onClick={getMemeImg}>Get a new meme image 🖼️</button>
            </div>
            <div className="img-div">
                <img src={meme.randomImage} alt="memeImage" className="meme-img"></img>
            </div>
        </main>
    )
}