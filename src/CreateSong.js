import React, {useState} from 'react'

const CreateSong = () => {
    const [songTitle, setSongTitle] = useState("")
    const [songArtist, setSongArtist] = useState("")
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
        </div>
    )
}

export default CreateSong
