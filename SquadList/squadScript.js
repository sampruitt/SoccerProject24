const teamSquads = {
    premierLeague: {
        team: "Manchester City",
        players: [
            { name: "Ederson", position: "Goalkeeper", nationality: "Brazil" },
            { name: "Kyle Walker", position: "Right Back", nationality: "England" },
            { name: "Rúben Dias", position: "Center Back", nationality: "Portugal" },
            { name: "Nathan Aké", position: "Center Back", nationality: "Netherlands" },
            { name: "João Cancelo", position: "Left Back", nationality: "Portugal" },
            { name: "Rodri", position: "Defensive Midfielder", nationality: "Spain" },
            { name: "Kevin De Bruyne", position: "Central Midfielder", nationality: "Belgium" },
            { name: "Bernardo Silva", position: "Attacking Midfielder", nationality: "Portugal" },
            { name: "Riyad Mahrez", position: "Right Wing", nationality: "Algeria" },
            { name: "Phil Foden", position: "Left Wing", nationality: "England" },
            { name: "Erling Haaland", position: "Striker", nationality: "Norway" },
        ]
    },
    bundesliga: {
        team: "Bayern Munich",
        players: [
            { name: "Manuel Neuer", position: "Goalkeeper", nationality: "Germany" },
            { name: "Benjamin Pavard", position: "Right Back", nationality: "France" },
            { name: "Dayot Upamecano", position: "Center Back", nationality: "France" },
            { name: "Lucas Hernández", position: "Center Back", nationality: "France" },
            { name: "Alphonso Davies", position: "Left Back", nationality: "Canada" },
            { name: "Joshua Kimmich", position: "Defensive Midfielder", nationality: "Germany" },
            { name: "Leon Goretzka", position: "Central Midfielder", nationality: "Germany" },
            { name: "Jamal Musiala", position: "Attacking Midfielder", nationality: "Germany" },
            { name: "Leroy Sané", position: "Right Wing", nationality: "Germany" },
            { name: "Kingsley Coman", position: "Left Wing", nationality: "France" },
            { name: "Thomas Müller", position: "Striker", nationality: "Germany" },
        ]
    },
    serieA: {
        team: "Napoli",
        players: [
            { name: "Alex Meret", position: "Goalkeeper", nationality: "Italy" },
            { name: "Giovanni Di Lorenzo", position: "Right Back", nationality: "Italy" },
            { name: "Amir Rrahmani", position: "Center Back", nationality: "Kosovo" },
            { name: "Kim Min-jae", position: "Center Back", nationality: "South Korea" },
            { name: "Mario Rui", position: "Left Back", nationality: "Portugal" },
            { name: "Stanislav Lobotka", position: "Defensive Midfielder", nationality: "Slovakia" },
            { name: "Piotr Zieliński", position: "Central Midfielder", nationality: "Poland" },
            { name: "Frank Anguissa", position: "Central Midfielder", nationality: "Cameroon" },
            { name: "Hirving Lozano", position: "Right Wing", nationality: "Mexico" },
            { name: "Khvicha Kvaratskhelia", position: "Left Wing", nationality: "Georgia" },
            { name: "Victor Osimhen", position: "Striker", nationality: "Nigeria" },
        ]
    },
    ligue1: {
        team: "Paris Saint-Germain",
        players: [
            { name: "Gianluigi Donnarumma", position: "Goalkeeper", nationality: "Italy" },
            { name: "Achraf Hakimi", position: "Right Back", nationality: "Morocco" },
            { name: "Marquinhos", position: "Center Back", nationality: "Brazil" },
            { name: "Sergio Ramos", position: "Center Back", nationality: "Spain" },
            { name: "Nuno Mendes", position: "Left Back", nationality: "Portugal" },
            { name: "Marco Verratti", position: "Central Midfielder", nationality: "Italy" },
            { name: "Vitinha", position: "Central Midfielder", nationality: "Portugal" },
            { name: "Lionel Messi", position: "Right Wing", nationality: "Argentina" },
            { name: "Neymar", position: "Left Wing", nationality: "Brazil" },
            { name: "Kylian Mbappé", position: "Striker", nationality: "France" },
            { name: "Fabian Ruiz", position: "Attacking Midfielder", nationality: "Spain" },
        ]
    },
    eredivisie: {
        team: "Ajax",
        players: [
            { name: "Gerónimo Rulli", position: "Goalkeeper", nationality: "Argentina" },
            { name: "Jorge Sánchez", position: "Right Back", nationality: "Mexico" },
            { name: "Jurriën Timber", position: "Center Back", nationality: "Netherlands" },
            { name: "Calvin Bassey", position: "Center Back", nationality: "Nigeria" },
            { name: "Owen Wijndal", position: "Left Back", nationality: "Netherlands" },
            { name: "Edson Álvarez", position: "Defensive Midfielder", nationality: "Mexico" },
            { name: "Kenneth Taylor", position: "Central Midfielder", nationality: "Netherlands" },
            { name: "Steven Berghuis", position: "Attacking Midfielder", nationality: "Netherlands" },
            { name: "Dusan Tadic", position: "Right Wing", nationality: "Serbia" },
            { name: "Steven Bergwijn", position: "Left Wing", nationality: "Netherlands" },
            { name: "Brian Brobbey", position: "Striker", nationality: "Netherlands" },
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', () => {
        window.history.back();
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const teamSelect = document.getElementById('teamSelect');
    const squadTableBody = document.querySelector('#squadTable tbody');

    teamSelect.addEventListener('change', function() {
        const selectedTeamKey = this.value;
        const selectedTeam = teamSquads[selectedTeamKey];
        const players = selectedTeam ? selectedTeam.players : [];

        squadTableBody.innerHTML = '';

        players.forEach(player => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.position}</td>
                <td>${player.nationality}</td>
            `;
            squadTableBody.appendChild(row);
        });
    });
});

