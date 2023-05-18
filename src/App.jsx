import { useState } from 'react'
import './App.css'
import { SoundTrigger } from './components/SoundTrigger/SoundTrigger'
import { trackList } from './tracks.json'

function App() {

  const [track, setTrack] = useState('')
  const arrTrigger = trackList.map(({ key, clipName, src }) => (<SoundTrigger key={key} id={key} clip={clipName} source={src} setTrack={setTrack} />))

  return (
    <div id='drum-machine'>
      <div id="display">
        <h2>
          { track.replace(/[^A-Za-z0-9\s]/g, " ") }
        </h2>
      </div>
      <div className="pad-bank">
        { arrTrigger }
      </div>
    </div>
  )

}

export default App
