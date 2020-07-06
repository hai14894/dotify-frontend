import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const CreateSong = () => {
    const [songTitle, setSongTitle] = useState("")
    const [songArtist, setSongArtist] = useState("")
    const [isCreated, setisCreated] = useState(false)
    function createSong(){
        axios.post(`http://localhost:3000/songs`, {
        song:{
            title: songTitle,
            artist: songArtist
            }
        })
        .then(()=> setisCreated(true))
    }
    return (
        <div>
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
