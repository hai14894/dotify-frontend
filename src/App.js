import React from 'react'
import ViewSongs from './ViewSongs'
import ViewSong from './ViewSong'
import {BrowserRouter, Route} from 'react-router-dom'
import CreateSongs from './CreateSong'
import EditSong from './EditSong'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route exact path="/" component={ViewSongs} />
                <Route exact path="/new" component={CreateSongs} />
                <Route exact path="/songs/:id" render={props => <ViewSong songId={props.match.params.id}/>} />
                <Route exact path="/songs/:id/edit" render={props => <EditSong songId={props.match.params.id}/>} />

            </BrowserRouter>

        </div>
    )
}

export default App