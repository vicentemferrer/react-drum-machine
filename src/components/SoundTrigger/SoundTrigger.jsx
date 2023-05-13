import { useEffect, useRef } from "react"

export const TRACKS = [{
  key: "Q",
  clipName: "Heater-1",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
},
{
  key: "W",
  clipName: "Heater-2",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
},
{
  key: "E",
  clipName: "Heater-3",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
},
{
  key: "A",
  clipName: "Heater-4",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
},
{
  key: "S",
  clipName: "Heater-6",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
},
{
  key: "D",
  clipName: "Dsc_Oh",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
},
{
  key: "Z",
  clipName: "Kick_n_Hat",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
},
{
  key: "X",
  clipName: "RP4_KICK_1",
  src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
},
{
  key: "C",
  clipName: "Cev_H2",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}]

export function SoundTrigger({ id, clip, source, setTrack }) {
  const soundRef = useRef()

  const soundOn = () => {
    setTrack(clip)
    soundRef.current.play()
  }

  useEffect(() => {
  }, [])

  return (
    <button onClick={soundOn} data-key={id} id={clip} className="drum-pad btn btn-lg">
      {id}
      <audio ref={soundRef} src={source} type="audio/mp3" id={id} className="clip" />
    </button>
  )
}