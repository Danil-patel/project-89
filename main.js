function login() {
    player_1 = document.getElementById("player1input").value;
    player_2 = document.getElementById("player2input").value;
    localStorage.setItem('player1',player_1);
    localStorage.setItem('player2',player_2);
    window.location = 'quiz_game_page.html';
}