import './App.css'
import { SoundTrigger, TRACKS } from './components/SoundTrigger/SoundTrigger'

function App() {

  const arrTrigger = TRACKS.map(({ id, clipName, src }) => (<SoundTrigger key={id} id={id} clip={clipName} source={src} />))

  return (
    <>
      { arrTrigger }
      <div id="display"></div>
    </>
  )

}

export default App
