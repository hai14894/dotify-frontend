import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const CreateSong = () => {
    const [songTitle, setSongTitle] = useState("")
    const [songArtist, setSongArtist] = useState("")
    const [isCreated, setisCreated] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    function createSong(){
        if(songTitle && songArtist){
            axios.post(`http://localhost:3000/songs`, {
        song:{
            title: songTitle,
            artist: songArtist
            }
        })
        .then(()=> setisCreated(true))
        }else{
            setErrorMessage("Please fill out the field")
        }
        
    }
    return (
        <div>
            {errorMessage}<br/>
            <input
                placeholder="Song title"
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)}
            />
            <input
                placeholder="Song artist"
                value={songArtist}
                onChange={(e) => setSongArtist(e.target.value)}
            />
            <button onClick={createSong}> 
                Create Song
            </button>
            {isCreated && <Redirect to="/" />}
        </div>
    )
}

export default CreateSong
