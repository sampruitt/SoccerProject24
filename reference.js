/*const API_KEY = "f9bd1ba697b749e66ba83bdc2d5fb670";
const HOST = "v3.football.api-sports.io";
const ROOT_URL = "https://v3.football.api-sports.io";

async function getLeagueList() {
  let resp = await fetch(ROOT_URL + "/leagues/?season=2023", {
    method: "GET",
    headers: {
      "x-rapidapi-host": HOST,
      "x-rapidapi-key": API_KEY,
    },
  });

  return await resp.json();
}

let myLeagues = [
  { id: 78, name: "Bundesliga" },
  { id: 135, name: "Serie A" },
  { id: 39, name: "Premier League" },
  { id: 61, name: "Ligue 1" },
  { id: 88, name: "Eredivisie" },
];

async function getTeamsList(leagueID) {
  let resp = await fetch(
    ROOT_URL + `/teams/?league=${leagueID}&season=${new Date().getFullYear()}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": HOST,
        "x-rapidapi-key": API_KEY,
      },
    }
  );

  return await resp.json();
}

async function getTeamStats(season, teamID, leagueID) {
  console.log(`getting stats for: \t${season}\t${leagueID}\t${teamID}`);
  let resp = await fetch(
    ROOT_URL +
      `/teams/statistics?season=${
        season ?? (new Date().getFullYear() - 1)
      }&team=${teamID}&league=${leagueID}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": HOST,
        "x-rapidapi-key": API_KEY,
      },
    }
  );

  return await resp.json();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function runFBAPI() {
  let data = [];

  let teamStats = [];

  for (let i = 0; i < myLeagues.length; i++) {
      let league = myLeagues[i];

      // fetch teams for the current league with a delay between each request
      let leagueData;
      try {
          leagueData = await getTeamsList(league.id);
          console.log(`Teams in League ${league.name}:`, leagueData);
      } catch (error) {
          console.error(`Error fetching teams for league ${league.name}:`, error);
          continue; // skip to the next league on error
      }

      await sleep(6000); // delay for 6 seconds to avoid rate limit (10 requests per minute)

      if (leagueData && leagueData.response) {
          for (let j = 0; j < leagueData.response.length; j++) {
              let team = leagueData.response[j];
              let teamid = team.team.id;

              try {
                  let stats = await getTeamStats(2023, teamid, league.id);
                  console.log(`Stats for Team ID ${teamid} (${team.team.name}):`, stats);

                  if (stats && stats.response && stats.response.goals && stats.response.goals.for) {
                      teamStats.push({
                          league: league.id,
                          team: team.team.name,
                          goals: stats.response.goals.for.total
                      });
                  } else {
                      console.warn(`Invalid stats for team ${team.team.name} in league ${league.id}`);
                  }
              } catch (error) {
                  console.error(`Error fetching stats for team ${team.team.name}:`, error);
              }

              await sleep(6000); // delay for 6 seconds to avoid rate limit (10 requests per minute)
          }
      }
  }

  console.log("Collected Team Stats:", teamStats);

  // determine the top scoring teams
  let maxGoals = Math.max(...teamStats.map(team => team.goals));
  console.log("Max Goals Scored:", maxGoals);

  let topScoringTeams = teamStats.filter(team => team.goals === maxGoals);
  console.log("Top Scoring Teams:", topScoringTeams);

 
  data = topScoringTeams;
  downloadData(data, 'top_scoring_teams.json'); 
}

function downloadData(data, filename = 'data.json') {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); 
  a.href = url;
  a.download = filename; 
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
*/
const leaguesData = [
    { id: 78, name: 'Bundesliga' },
    { id: 135, name: 'Serie A' },
    { id: 39, name: 'Premier League' },
    { id: 61, name: 'Ligue 1' },
    { id: 88, name: 'Eredivisie' }
];

const teamsData = [
    { league: 'Bundesliga', name: 'Bayern Munich', goals: 92 },
    { league: 'Serie A', name: 'Napoli', goals: 77 },
    { league: 'Premier League', name: 'Manchester City', goals: 94 },
    { league: 'Ligue 1', name: 'paris Saint-Germain', goals: 89 },
    { league: 'Eredivisie', name: 'PSV Eindhoven', goals: 111 }
];
