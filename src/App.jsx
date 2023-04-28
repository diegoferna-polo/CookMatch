import { Outlet } from "react-router-dom"
import Header from "./components/core/Header"
import MenuNavigation from "./components/core/Menu"

const OPEN_API_KEY = "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"

function App() {
  console.log(import.meta.env.VITE_Open_AI_Key)
  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + OPEN_API_KEY
    },
    body: JSON.stringify( {
      model: "text-davinci-003",
      prompt: "Say this is a test",
      max_tokens: 2000,
      temperature: 1,
    })
  }).then(response => console.log(response.json())).then(dados => {console.log(dados)})

  return (

    <div className="h-screen">
      <MenuNavigation />
      <Header />
      <Outlet />
    </div>
  )
}

export default App
