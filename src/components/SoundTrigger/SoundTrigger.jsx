import { useRef } from "react"

export function SoundTrigger({ id, clip, source, setTrack }) {
  const soundRef = useRef()

  const soundOn = () => {
    setTrack(clip)
    soundRef.current.play()
  }

  return (
    <button onClick={soundOn} id={clip} className="drum-pad btn btn-lg">
      {id}
      <audio ref={soundRef} src={source} type="audio/mp3" id={id} className="clip" />
    </button>
  )
}