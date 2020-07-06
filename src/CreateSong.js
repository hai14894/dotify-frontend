import React, {useState} from 'react'
import axios from 'axios'

const CreateSong = () => {
    const [songTitle, setSongTitle] = useState("")
    const [songArtist, setSongArtist] = useState("")
    function createSong(){
        axios.post(`http://localhost:3000/songs`, {
        song:{
            title: songTitle,
            artist: songArtist
        }
        })
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
        </div>
    )
}

export default CreateSong
