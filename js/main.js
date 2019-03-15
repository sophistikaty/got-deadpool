(function(){

    const characters = [
        { name: 'tyrion', displayName:'Tyrion Lannister', alive: true, 
        pic:'https://media.giphy.com/media/2wYYlHuEw1UcsJYgAA/giphy.gif'},
        { name: 'cersei', displayName:'Cersei Lannister', alive: false, 
        pic:'https://media.giphy.com/media/l41YedIbenuBH6ljO/giphy.gif'},
        { name: 'jaime', displayName:'Jaime Lannister', alive: true, 
        pic:'https://media.giphy.com/media/3oEjHJi8gFAyxl7rS8/giphy.gif'},
    ];

    const deadpool = [
        { name: 'Kaitlynn', deadPicks: ['cersei']},
        { name: 'Rachael', deadPicks: ['tyrion']}
    ];

    function buildCharacterList (){
        return characters.reduce(function(html, character) {
            const deadClass = character.alive ? 'alive' : 'dead';
            return html + '<div class ="' + deadClass + '">' 
            + character.displayName + '<div><img src="' + character.pic + '"></div></div>';
        }, '');
    }

    function getCharacterPoints(character, player){
        const picked = player.deadPicks.includes(character.name);
        let points;
        if (picked){
            points = character.alive ? 0 : 4 ;
        } else {
            points = character.alive ? 1 : 0;
        }
        return points;
    }

    function buildLeaderboard(){
        return deadpool.reduce(function(html, player){
            const totalPoints = characters.reduce(function(points, character){
                return points + getCharacterPoints(character, player);
            },0);

            return html + '<div>'+player.name +' '+ totalPoints +'</div>';

        },'');

    }

    function init(){
        document.getElementById('characters').innerHTML = buildCharacterList();
        document.getElementById('leaderboard').innerHTML = buildLeaderboard();
    }

    window.onload = function() { init() };
})();