import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const EditSong = (props) => {
    const [songTitle, setSongTitle] = useState("")
    const [songArtist, setSongArtist] = useState("")

    const [song, setSong] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:3000/songs/${props.songId}`)
            .then(res => {
                setIsLoading(false)
                setSongTitle(res.data.title)
                setSongArtist(res.data.artist)
            })
            .catch(e => {
                setErrorMessage("There was a problem, please refresh and try again")
                setIsLoading(false)
            })
    }, [])

    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {!isLoading ? 
                <div>
                    <input
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)}
            />
            <input
                value={songArtist}
                onChange={(e) => setSongArtist(e.target.value)}
            />
                </div> : 
                <h2>Loading...</h2>
            }
            
        </div>
    )
}

export default EditSong