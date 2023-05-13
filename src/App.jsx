import { useState } from 'react'
import './App.css'
import { SoundTrigger, TRACKS } from './components/SoundTrigger/SoundTrigger'

function App() {

  const [track, setTrack] = useState('')
  const arrTrigger = TRACKS.map(({ key, clipName, src }) => (<SoundTrigger key={key} id={key} clip={clipName} source={src} setTrack={setTrack} />))

  return (
    <div id='drum-machine'>
      <div id="display">
        { track }
      </div>
      <div className="pads">
        { arrTrigger }
      </div>
    </div>
  )

}

export default App
