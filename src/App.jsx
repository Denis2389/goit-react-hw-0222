import { useState } from "react"
import Description from "./components/Description/Description"
import Options from './Components/Options/Options'
import Feedback from "./Components/Feedback/Feedback"

function App() {

  const [feedback, setFeedback]= useState({ good: 0, neutral: 0, bad: 0  })
  const handleSet = () => setFeedback(feedback + 1)


  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>
  )

}

export default App
