import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const EditSong = (props) => {

    const [song, setSong] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:3000/songs/${props.songId}`)
            .then(res => {
                setIsLoading(false)
                setSong(res.data)
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
                {song.title}
                </div> : 
                <h2>Loading...</h2>
            }
            <Link to="/">View all songs</Link>
            
        </div>
    )
}

export default EditSong