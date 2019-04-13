(function(){

    const arya = 'arya';
    const baby = 'baby';
    const beric = 'beric';
    const bran = 'bran';
    const brienne = 'brienne';
    const bronn = 'bronn';
    const cersei = 'cersei';
    const dany = 'dany';
    const davos = 'davos';
    const daario = 'daario';
    const edd = 'edd';
    const ellaria = 'ellaria';
    const euron = 'euron';
    const ghost = 'ghost';
    const hound = 'hound';
    const jaime = 'jaime';
    const jaqen = 'jaqen';
    const jon = 'jon';
    const jorah = 'jorah';
    const meera = 'meera';
    const melisandre = 'melisandre';
    const missandei = 'missandei';
    const mountain = 'mountain';
    const night = 'night';
    const pod = 'pod';
    const qyburn = 'qyburn';
    const rhaegal = 'rhaegal';
    const robin = 'robin';
    const sansa = 'sansa';
    const theon = 'theon';
    const tormund = 'tormund';
    const varys = 'varys';
    const worm = 'worm';
    const yara = 'yara';


    const characters = [
        { name: dany, displayName:'Daenerys Targaryen', alive: true, 
        pic:'https://media.giphy.com/media/59HdZnEvQC6xW/giphy.gif'},
        { name: 'drogon', displayName:'Drogon', alive: true, 
        pic:'https://media.giphy.com/media/26Bnc1dYtp3SvCfDi/giphy.gif'},
        { name: rhaegal, displayName:'Rhaegal', alive: true, 
        pic:'https://media.giphy.com/media/3o7aD7sVU7LEsLBcRO/giphy.gif'},
        { name: missandei, displayName:'Missandei', alive: true, 
        pic:'https://media.giphy.com/media/8diAPjcZ804HC/giphy.gif'},
        { name: worm, displayName:'Grey Worm', alive: true, 
        pic:'https://media.giphy.com/media/vD1N7jAAphkf6/giphy.gif'},
        { name: varys, displayName:'Lord Varys', alive: true, 
        pic:'https://media.giphy.com/media/QnrntWsC4EYwg/giphy.gif'},
        { name: jon, displayName:'Jon Snow', alive: true, 
        pic:'https://media.giphy.com/media/3oEhmNvHo1pNMUIcJa/giphy.gif',
        quote:'The true enemy won\'t wait out the storm. The true enemy brings the storm.'},
        { name: ghost, displayName:'Ghost', alive: true, 
        pic:'https://media.giphy.com/media/rqtC5ziN07fO/giphy.gif'},
        { name: davos, displayName:'Ser Davos Seaworth', alive: true, 
        pic:'https://media.giphy.com/media/HuZJDiljIph3G/giphy.gif'},
        { name: arya, displayName:'Arya Stark', alive: true, 
        pic:'https://media.giphy.com/media/25aH3LlslgXcsO9rMq/giphy.gif',
        quote:'My name is Arya Stark. I want you to know that.'},
        { name: 'nymeria', displayName:'Nymeria', alive: true, 
        pic:'https://media.giphy.com/media/4d4HEGpLiwTQc/giphy.gif'},
        { name: sansa, displayName:'Sansa Stark', alive: true, 
        pic:'https://media.giphy.com/media/kmrlRUii2gKic/giphy.gif'},
        { name: bran, displayName:'Bran Stark', alive: true, 
        pic:'https://media.giphy.com/media/xUA7b4Ma73w36UwsgM/giphy.gif',
        quote:'I\'m the three eyed raven now. I have to be ready.'},
        { name: night, displayName:'Night King', alive: true, 
        pic:'https://media.giphy.com/media/xTiTnATWyYk9ItOLlK/giphy.gif'},
        { name: 'sam', displayName:'Samwell Tarly', alive: true, 
        pic:'https://media.giphy.com/media/iU7QUbHXVsS2s/giphy.gif'},
        { name: brienne, displayName:'Brienne of Tarth', alive: true, 
        pic:'https://media.giphy.com/media/R9B9P4hRMYJr2/giphy.gif'},
        { name: pod, displayName:'Podrick Payne', alive: true, 
        pic:'https://media.giphy.com/media/lgtxDYbF00AIE/giphy.gif'},
        { name: 'tyrion', displayName:'Tyrion Lannister', alive: true, 
        pic:'https://media.giphy.com/media/ZFJYcVE5lYvWE/giphy.gif',
        quote:'I drink and I know things.'},
        { name: jaime, displayName:'Jaime Lannister', alive: true, 
        pic:'https://media.giphy.com/media/3oEjHJi8gFAyxl7rS8/giphy.gif'},
        { name: cersei, displayName:'Cersei Lannister', alive: true, 
        pic:'https://media.giphy.com/media/l41YedIbenuBH6ljO/giphy.gif'},
        { name: qyburn, displayName:'Qyburn', alive: true, 
        pic:'https://media.giphy.com/media/7FBvgMbMuXbcA/giphy.gif'},
        { name: mountain, displayName:'The Mountain | Ser Gregor Clegane', alive: true, 
        pic:'https://media.giphy.com/media/xUPGcwPoY3UVv8CxEs/giphy.gif'},
        { name: theon, displayName:'Theon Greyjoy', alive: true, 
        pic:'https://media.giphy.com/media/HDeftQBY6MCw8/giphy.gif'},
        { name: 'gilly', displayName:'Gilly', alive: true, 
        pic:'https://media.giphy.com/media/3oD3YP9t2vJfQmFK1O/giphy.gif'},
        { name: baby, displayName:'Little Sam', alive: true, 
        pic:'https://media.giphy.com/media/3oD3YP9t2vJfQmFK1O/giphy.gif'},
        { name: jorah, displayName:'Ser Jorah Mormont', alive: true, 
        pic:'https://media.giphy.com/media/McpFk5rscOMuc/giphy.gif'},
        { name: bronn, displayName:'Ser Bronn', alive: true, 
        pic:'https://media.giphy.com/media/VXexNhYpY99NC/giphy.gif'},
        { name: hound, displayName:'The Hound | Ser Sandor Clegane', alive: true, 
        pic:'https://media.giphy.com/media/JMkeqXwdJs90c/giphy.gif'},
        { name: tormund, displayName:'Tormund Giantsbane', alive: true, 
        pic:'https://media.giphy.com/media/12mQimFXxsawgg/giphy.gif'},
        { name: beric, displayName:'Beric Dondarrion', alive: true, 
        pic:'https://media.giphy.com/media/xUA7bgivQXDhokUguY/giphy.gif'},
        { name: melisandre, displayName:'Melisandre', alive: true, 
        pic:'https://media.giphy.com/media/qUXkGxDDSF9CM/giphy.gif'},
        { name: 'gendry', displayName:'Gendry', alive: true, 
        pic:'https://media.giphy.com/media/xCfFTAKlnXYaI/giphy.gif'},
        { name: ellaria, displayName:'Ellaria Sand', alive: true, 
        pic:'https://media.giphy.com/media/3o6ozubtomwzbU6msM/giphy.gif'},
        { name: 'hot', displayName:'Hot Pie', alive: true, 
        pic:'https://media.giphy.com/media/xUPGGvsAOBIISZLGIo/giphy.gif'},
        { name: 'royce', displayName:'Lord Yohn Royce', alive: true, 
        pic:'https://66.media.tumblr.com/abfd4548e6fcf232ee132c299d6c93dd/tumblr_o6w30mAiqF1u671zio2_500.gif'},
        { name: robin, displayName:'Robin Arryn', alive: true, 
        pic:'https://media.giphy.com/media/NZSGzROdHXDBS/giphy.gif'},
        { name: meera, displayName:'Meera Reed', alive: true, 
        pic:'https://media.giphy.com/media/zvGgk4rMCODQY/giphy.gif'},
        { name: 'edmure', displayName:'Edmure Tully', alive: true, 
        pic:'https://media.giphy.com/media/6xiWvAz8eZnwI/giphy.gif'},
        { name: 'lyanna', displayName:'Lyanna Mormont', alive: true, 
        pic:'https://media.giphy.com/media/TLlVi05a0t8Eo/giphy.gif',
        quote:'I don\'t need your permission to defend the North.'},
        { name: 'alys', displayName:'Alys Karstark', alive: true, 
        pic:'https://vignette.wikia.nocookie.net/gameofthrones/images/c/c7/701_Alys_and_Ned.png/revision/latest?cb=20170826013858'},
        { name: 'umber', displayName:'Ned Umber', alive: true, 
        pic:'https://vignette.wikia.nocookie.net/gameofthrones/images/c/c7/701_Alys_and_Ned.png/revision/latest?cb=20170826013858'},
        { name: edd, displayName:'Dolorous Edd', alive: true, 
        pic:'https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2016%2F05%2FDolorous-Edd-Official.jpg&c=sc&w=850&h=560'},
        { name: yara, displayName:'Yara Greyjoy', alive: true, 
        pic:'https://media.giphy.com/media/WTwyyqxj673J6/giphy.gif',
        quote:'I didn\'t demand anything, but I\'m up for anything really.'},
        { name: euron, displayName:'Euron Greyjoy', alive: true, 
        pic:'https://media.giphy.com/media/3o6EhUARFFcxv0LaRq/giphy.gif',
        quote:'So here I am, with a thousand ships and two good hands.'},
        { name: 'aeron', displayName:'Aeron Greyjoy', alive: true, 
        pic:'https://media.giphy.com/media/8dh7Guwlgrp4s/giphy.gif'},
        { name: daario, displayName:'Daario Naharis', alive: true, 
        pic:'https://media.giphy.com/media/EDadrPgXdgXDO/giphy.gif'},
        { name: jaqen, displayName:'Jaqen Hghar', alive: true, 
        pic:'https://media.giphy.com/media/dS2iet9uDklk4/giphy.gif',
        quote:'Finally, a girl is no one.'},
    ];

    const deadpool = [
        { name: 'Kaitlynn Rivera', deadPicks: [cersei, jaime, mountain, hound, rhaegal, edd, night, melisandre, varys, qyburn]},
        { name: 'Larry Rivera', deadPicks: [cersei, ghost, mountain, melisandre, worm, rhaegal, night, qyburn, ellaria, jon]},
        { name: 'Aldene', deadPicks: [dany, missandei, pod, qyburn, theon, jaqen, tormund, mountain, davos, euron]},
        { name: 'Thomas Mcafee', deadPicks: [worm, davos, mountain, hound, tormund, euron, theon, jon, jaime, arya]},
        { name: 'Kamilah Mcafee', deadPicks: [varys, davos, brienne, mountain, melisandre, ellaria, jaime, bronn, edd, euron]},
        { name: 'Ellen', deadPicks: [worm, jaime, cersei, theon, pod, mountain, tormund, edd, bronn, baby]},
        { name: 'Phillip Thomas', deadPicks: [worm, jon, arya, night, cersei, qyburn, mountain, theon, hound, euron]},
        { name: 'Katelyn Thomas', deadPicks: [rhaegal, worm, night, baby, melisandre, robin, euron, hound, cersei, qyburn]},
        { name: 'Rachael', deadPicks: [cersei, jaime, arya, euron, varys, mountain, worm, beric, ellaria, melisandre]},
        { name: 'Swogger', deadPicks: [dany, worm, varys, jaime, cersei, mountain, beric, melisandre, meera, euron]},
        { name: 'Pinizzotto', deadPicks: [mountain, qyburn, robin, meera, jon, cersei, jaime, ghost, beric, euron]},
        { name: 'Kirby', deadPicks: [davos, brienne, pod, jaime, theon, jorah, bronn, yara, euron, daario]},
        { name: 'Michelle', deadPicks: [varys, sansa, cersei, mountain, melisandre, euron, jorah, hound, bran, dany]}
    ];

    function buildCharacterList (){
        return characters.reduce(function(html, character) {
            const deadClass = character.alive ? 'alive' : 'dead';
            const quote = character.quote || '';
            return html + '<div class ="' + deadClass + '"><h4>' 
            + character.displayName + '</h4><div><img src="' + character.pic 
            + '"></div><div class="quote">'+ quote +'</div></div>';
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