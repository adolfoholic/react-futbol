import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardPlayers from './components/CardPlayers'

function App() {
  
  const [players, setPlayers] = useState()
  const APIKEY = "8190a989d9dde73ae93988d061a06c9f2f3d1b065c46c953f3f5f978811b2208"

  useEffect(() => {
    const URL = `https://apiv3.apifootball.com/?action=get_standings&league_id=302&APIkey=${APIKEY}`
    axios.get(URL)
      .then(res => setPlayers(res.data))
      .catch(err => console.log(err))
  
  }, [])
  


  return (
    <div className="App">
     <h1><marquee>Liga Española de Fútbol⚽ - Temporada 21/22</marquee></h1>
        <div className="card-container">
          {
            players?.map(player => (
              <CardPlayers 
              key={player.team_id}
              player={player}
              />
            ))
          }
        </div>
    </div>
  )
  
}

export default App
