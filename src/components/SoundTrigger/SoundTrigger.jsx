import { useRef } from "react"

export const TRACKS = [{
  id: "Q",
  clipName: "Heater-1",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
},
{
  id: "W",
  clipName: "Heater-2",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
},
{
  id: "E",
  clipName: "Heater-3",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
},
{
  id: "A",
  clipName: "Heater-4",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
},
{
  id: "S",
  clipName: "Heater-6",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
},
{
  id: "D",
  clipName: "Dsc_Oh",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
},
{
  id: "Z",
  clipName: "Kick_n_Hat",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
},
{
  id: "X",
  clipName: "RP4_KICK_1",
  src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
},
{
  id: "C",
  clipName: "Cev_H2",
  src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}]

export const SoundTrigger = ({ id, clip, source }) => {
  const soundRef = useRef()

  const soundOn = () => soundRef.current.play()

  return (
    <button onClick={soundOn} id={clip} className="drum-pad">
      {id}
      <audio ref={soundRef} src={source} type="audio/mp3" id={id} className="clip" />
    </button>
  )
}