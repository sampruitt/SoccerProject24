document.addEventListener('DOMContentLoaded', () => {
    if (typeof leaguesData !== 'undefined' && typeof teamsData !== 'undefined') {
        populateLeaguesTable(leaguesData);
        populateTeamsTable(teamsData);
    } else {
        console.error('Data is not available. Check to see if reference.js is functioning properly.');
    }
});

function populateLeaguesTable(leagues) {
    const leaguesTableBody = document.getElementById('leaguesTable').querySelector('tbody');
    leaguesTableBody.innerHTML = ''; // to clear any existing data

    leagues.forEach(league => {               //creating a table row for each league
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${league.id}</td>
            <td>${league.name}</td>
        `;
        leaguesTableBody.appendChild(row);
    });
}

function populateTeamsTable(teams) {       //create a table 
    const teamsTableBody = document.getElementById('teamsTable').querySelector('tbody');
    teamsTableBody.innerHTML = ''; // to clear any existing data

    teams.forEach(team => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team.league}</td>
            <td>${team.name}</td>
            <td>${team.goals}</td>
        `;
        teamsTableBody.appendChild(row);
    });
}
