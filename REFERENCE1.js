const API_KEY = "f9bd1ba697b749e66ba83bdc2d5fb670";
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

  // Step 1: Fetch teams for each league
  let promises = myLeagues.map((league) => {
      return getTeamsList(league.id)
          .then((result) => {
              console.log(`Teams in League ${league.name}:`, result);
              return result;
          })
          .catch((error) => {
              console.error(`Error fetching teams for league ${league.name}:`, error);
              return null; // Returning null in case of an error to continue execution
          });
  });

  // Wait for all teams to be fetched
  let leagues = await Promise.all(promises);
  console.log("Leagues Data:", leagues);

  let teamStats = [];

  // Step 2: Fetch stats for each team in each league
  for (let i in leagues) {
      let league = leagues[i];

      // Skip if fetching teams failed
      if (!league) continue;

      let leagueID = league.parameters.league;
      let season = league.parameters.season;

      for (let j in league.response) {
          let team = league.response[j];
          let teamid = team.team.id;

          try {
              let stats = await getTeamStats(2023, teamid, leagueID);
              console.log(`Stats for Team ID ${teamid} (${team.team.name}):`, stats);

              if (stats && stats.response && stats.response.goals && stats.response.goals.for) {
                  teamStats.push({
                      league: leagueID,
                      team: team.team.name,
                      goals: stats.response.goals.for.total
                  });
              } else {
                  console.warn(`Invalid stats for team ${team.team.name} in league ${leagueID}`);
              }
          } catch (error) {
              console.error(`Error fetching stats for team ${team.team.name}:`, error);
          }
      }
  }

  console.log("Collected Team Stats:", teamStats);

  // Step 3: Determine the top scoring teams
  let maxGoals = Math.max(...teamStats.map(team => team.goals));
  console.log("Max Goals Scored:", maxGoals);

  let topScoringTeams = teamStats.filter(team => team.goals === maxGoals);
  console.log("Top Scoring Teams:", topScoringTeams);

  // Step 4: Final data assignment and optional download
  data = topScoringTeams;
  downloadData(data, 'top_scoring_teams.json'); // If you want to download the data as a JSON file
}

// Call the function
runFBAPI();

