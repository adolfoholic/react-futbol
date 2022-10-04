import React from 'react'

const CardPlayers = ({player}) => {
  return (
    <article class="card__principal">
        <img src={player.team_badge} alt=""/>
        <h2>{player.home_league_position} °</h2>
        <h2>{player.team_name}</h2>
        <ul className ="card__stadistics">
            <li><span>Wins :</span> {player.home_league_W}</li>
            <li><span>Draws :</span> {player.home_league_D}</li>
            <li><span>Losses :</span> {player.home_league_L}</li>
            <li><span>GF :</span> {player.home_league_GF}</li>
            <li><span>GA :</span> {player.home_league_GA}</li>
            <li><span>Pts :</span> {player.home_league_PTS}</li>
       </ul>
    </article>
  )
}

export default CardPlayers