import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails

  return (
    <div className="latest-match-container">
      <div className="latest-match-top">
        <div className="latest-match-info">
          <p className="competing-team">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>

        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>

      <hr className="separator" />

      <div className="latest-match-bottom">
        <p className="label">First Innings</p>
        <p className="value">{firstInnings}</p>

        <p className="label">Second Innings</p>
        <p className="value">{secondInnings}</p>

        <p className="label">Man Of The Match</p>
        <p className="value">{manOfTheMatch}</p>

        <p className="label">Umpires</p>
        <p className="value">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
