import React, { useState } from 'react'
import '../static/style.css'
import axios from 'axios'

export default () => {
    const [batting_team, setBatTeam] = useState(null)
    const [bowling_team, setBowlTeam] = useState(null)
    const [venue, setVenue] = useState(null)
    const [runs, setRuns] = useState(null)
    const [wickets, setWickets] = useState(null)
    const [overs, setOvers] = useState(null)
    const [run5, setRun5] = useState(null)
    const [wicket5, setWicket5] = useState(null)

    const [pred, setPred] = useState("")

    const data = {
        "batting_team": batting_team,
        "bowling_team": bowling_team,
        "venue": venue,
        "runs": runs,
        "wickets": wickets,
        "overs": overs,
        "run5": run5,
        "wicket5": wicket5
    }

    const handleBatTeam = (e) => {
        setBatTeam(e.target.value)
    }

    const handleBowlTeam = (e) => {
        setBowlTeam(e.target.value)
    }

    const handleVenue = (e) => {
        setVenue(e.target.value)
    }

    const handleRuns = (e) => {
        setRuns(e.target.value)
    }

    const handleWickets = (e) => {
        setWickets(e.target.value)
    }

    const handleOvers = (e) => {
        setOvers(e.target.value)
    }

    const handleRun5 = (e) => {
        setRun5(e.target.value)
    }

    const handleWicket5 = (e) => {
        setWicket5(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data)
        axios.post("http://localhost:4257/predict", data).then((response) => {
            console.log(response.data['prediction'])
            setPred(response.data['prediction'])
        })
    }

    const goBack=()=>{
        setPred("")
        setBatTeam(null)
        setBowlTeam(null)
        setVenue(null)
        setRuns(null)
        setWickets(null)
        setOvers(null)
        setRun5(null)
        setWicket5(null)
        
    }

    return (
        pred.length==0?
        <div class="formHolder">
            <form onSubmit={handleSubmit}>
                <select class="mdb-select md-form form-control select_form" value={batting_team} onChange={handleBatTeam} required name="batting_team">
                    <option value="" disabled selected>Select Batting team</option>
                    <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                    <option value="Kings XI Punjab">Kings XI Punjab</option>
                    <option value="Delhi Daredevils">Delhi Daredevils</option>
                    <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
                    <option value="Rajasthan Royals">Rajasthan Royals</option>
                    <option value="Mumbai Indians">Mumbai Indians</option>
                    <option value="Chennai Super Kings">Chennai Super Kings</option>
                    <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
                </select>
                <select class="mdb-select md-form form-control select_form" value={bowling_team} onChange={handleBowlTeam} required name="bowling_team">
                    <option value="" disabled selected>Select Bowling team</option>
                    <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                    <option value="Kings XI Punjab">Kings XI Punjab</option>
                    <option value="Delhi Daredevils">Delhi Daredevils</option>
                    <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
                    <option value="Rajasthan Royals">Rajasthan Royals</option>
                    <option value="Mumbai Indians">Mumbai Indians</option>
                    <option value="Chennai Super Kings">Chennai Super Kings</option>
                    <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
                </select>
                <select class="mdb-select md-form form-control select_form" value={venue} onChange={handleVenue} required name="venue">
                    <option value="" disabled selected>Select Venue</option>
                    <option value="M Chinnaswamy Stadium">M Chinnaswamy Stadium</option>
                    <option value="Punjab Cricket Association Stadium, Mohali">Punjab Cricket Association Stadium, Mohali</option>
                    <option value="Feroz Shah Kotla">Feroz Shah Kotla</option>
                    <option value="Wankhede Stadium">Wankhede Stadium</option>
                    <option value="Sawai Mansingh Stadium">Sawai Mansingh Stadium</option>
                    <option value="MA Chidambaram Stadium, Chepauk">MA Chidambaram Stadium, Chepauk</option>
                    <option value="Eden Gardens">Eden Gardens</option>
                    <option value="Dr DY Patil Sports Academy">Dr DY Patil Sports Academy</option>
                    <option value="Newlands">Newlands</option>
                    <option value="St George's Park">St George's Park</option>
                    <option value="Kingsmead">Kingsmead</option>
                    <option value="SuperSport Park">SuperSport Park</option>
                    <option value="Buffalo Park">Buffalo Park</option>
                    <option value="New Wanderers Stadium">New Wanderers Stadium</option>
                    <option value="De Beers Diamond Oval">De Beers Diamond Oval</option>
                    <option value="OUTsurance Oval">OUTsurance Oval</option>
                    <option value="Brabourne Stadium">Brabourne Stadium</option>
                    <option value="Sardar Patel Stadium, Motera">Sardar Patel Stadium, Motera</option>
                    <option value="Himachal Pradesh Cricket Association Stadium">Himachal Pradesh Cricket Association Stadium</option>
                    <option value="Subrata Roy Sahara Stadium">Subrata Roy Sahara Stadium</option>
                    <option value="Rajiv Gandhi International Stadium, Uppal">Rajiv Gandhi International Stadium, Uppal</option>
                    <option value="Shaheed Veer Narayan Singh International Stadium">Shaheed Veer Narayan Singh International Stadium</option>
                    <option value="JSCA International Stadium Complex">JSCA International Stadium Complex</option>
                    <option value="Sheikh Zayed Stadium">Sheikh Zayed Stadium</option>
                    <option value="Sharjah Cricket Stadium">Sharjah Cricket Stadium</option>
                    <option value="Dubai International Cricket Stadium">Dubai International Cricket Stadium</option>
                    <option value="Barabati Stadium">Barabati Stadium</option>
                    <option value="Maharashtra Cricket Association Stadium">Maharashtra Cricket Association Stadium</option>
                    <option value="Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium">Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium</option>
                    <option value="Punjab Cricket Association IS Bindra Stadium, Mohali">Punjab Cricket Association IS Bindra Stadium, Mohali</option>
                    <option value="Holkar Cricket Stadium">Holkar Cricket Stadium</option>
                </select>
                <div class="form-group">
                    <input type="number" class="form-control" value={runs} onChange={handleRuns} placeholder="Runs (eg: 72)" name="runs" required />
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" value={wickets} onChange={handleWickets} placeholder="Wickets (eg: 3)" name="wickets" min="0" max="10" required />
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" value={overs} onChange={handleOvers} placeholder="Overs (eg: 5.2)" name="overs" step="0.1" min="0" max="20" required />
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" value={run5} onChange={handleRun5} placeholder="Runs in previous 5 overs (eg: 27)" name="runs_in_prev_5" required />
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" value={wicket5} onChange={handleWicket5} placeholder="Wickets in previous 5 overs (eg: 2)" name="wickets_in_prev_5" required />
                </div>
                <button type="submit" class="btn btn-outline-success predictButton">Predict</button>
            </form>
        </div>:
        <div className="text-muted predict_holder">
            <h2>The {batting_team} will score {pred-5}-{pred+5} runs.</h2>
            <button  className="btn btn-default go_back" onClick={goBack}>« Go back</button>
        </div>
    )
}