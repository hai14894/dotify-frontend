import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const EditSong = (props) => {
    const [songTitle, setSongTitle] = useState("")
    const [songArtist, setSongArtist] = useState("")

    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")
    const [isEdited , setIsEdited] = useState(false)
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

    function editSong(){
        if(songTitle && songArtist){
            axios.put(`http://localhost:3000/songs/${props.songId}`, {
        song:{
            title: songTitle,
            artist: songArtist
            }
        })
        .then(()=> setIsEdited(true))
        }else{
            setErrorMessage("Please fill out the field")
        }
        
    }
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
            <button onClick={editSong}>
                Edit Song
            </button>
            {isEdited && <Redirect to="/" />}
        </div>
    )
}

export default EditSong