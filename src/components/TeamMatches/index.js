/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const teamBgClassNames = {
  RCB: 'rcb',
  KKR: 'kkr',
  KXP: 'kxip',
  CSK: 'csk',
  RR: 'rr',
  MI: 'mi',
  SH: 'sh',
  DC: 'dc',
}

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatch: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {id} = match.params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedLatestMatch = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const formattedRecentMatches = data.recent_matches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
    }))

    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatch: formattedLatestMatch,
      recentMatches: formattedRecentMatches,
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {teamBannerUrl, latestMatch, recentMatches} = this.state

    return (
      <>
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <LatestMatch matchDetails={latestMatch} />
        <ul className="recent-matches-list">
          {recentMatches.map(match => (
            <MatchCard key={match.id} matchDetails={match} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {id} = match.params
    const bgClassName = teamBgClassNames[id]

    return (
      <div className={`team-matches-container ${bgClassName}`}>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
