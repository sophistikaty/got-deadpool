(function(){

    const characters = [
        { name: 'cersei', displayName:'Cersei Lannister', alive: true, 
        pic:'https://media.giphy.com/media/l41YedIbenuBH6ljO/giphy.gif'},
        { name: 'jaime', displayName:'Jaime Lannister', alive: true, 
        pic:'https://media.giphy.com/media/3oEjHJi8gFAyxl7rS8/giphy.gif'},
        { name: 'dany', displayName:'Daenerys Targaryen', alive: true, 
        pic:'https://media.giphy.com/media/FeCnyfbplY3uw/giphy.gif'},
        { name: 'jon', displayName:'Jon Snow', alive: true, 
        pic:'https://media.giphy.com/media/3oEhmNvHo1pNMUIcJa/giphy.gif'},
        { name: 'tyrion', displayName:'Tyrion Lannister', alive: true, 
        pic:'https://media.giphy.com/media/2wYYlHuEw1UcsJYgAA/giphy.gif'},
    ];

    const deadpool = [
        { name: 'Kaitlynn', deadPicks: ['cersei']},
        { name: 'Rachael', deadPicks: []}
    ];

    function buildCharacterList (){
        return characters.reduce(function(html, character) {
            const deadClass = character.alive ? 'alive' : 'dead';
            return html + '<div class ="' + deadClass + '">' 
            + character.displayName + '<div><img src="' + character.pic + '"></div></div>';
        }, '');
    }

    function getPointsForCharacter(character, player){
        const picked = player.deadPicks.includes(character.name);
        let points;
        if (picked){
            points = character.alive ? 0 : 4 ;
        } else {
            points = character.alive ? 1 : 0;
        }
        return points;
    }

    function getPlayerPoints(player){
        player.points = characters.reduce(function(points, character){
            return points + getPointsForCharacter(character, player);
        },0);
        return player;
    }

    function winOrDie(a, b){
        if (a.points < b.points) {
            return 1;
          }
          if (a.points > b.points) {
            return -1;
          }
          // tied
          return 0;
    }

    function buildLeaderboard(){
        return deadpool.map(getPlayerPoints).sort(winOrDie).reduce(function(html, player){
            return html + '<div>'+player.name +' '+ player.points +'</div>';

        },'');

    }

    function init(){
        document.getElementById('characters').innerHTML = buildCharacterList();
        document.getElementById('leaderboard').innerHTML = buildLeaderboard();
    }

    window.onload = function() { init() };
})();