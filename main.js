var words = {
  enter: "Digite o nome da Série:"
}


var recents = [];
var months = [];
var parentUrl = document.referrer; //get url of shln.ml
if(Boolean(parentUrl)){
  var lastPart = parentUrl.match(/\/\/.*?\/(.*?)\/?(\?.*)?$/)[1]; //get the share-id, if posible
}
if(lastPart == "today"){

}
else if(lastPart == "myshows"){

}
else{

  theMovieDb.tv.getById({"id":lastPart}, function(data) {
    data = JSON.parse(data); // parse the data
    name = data.name; // get the name
    document.getElementsByName("inputShow")[0].placeholder = name; // set the name as placeholder
    getSerie(name); // search for the show
  }, function(error){})
}


function getSerie(serie) {
  var movie = serie; // movie is just a keyword
  function ALLgo() {
    theMovieDb.search.getTv({"query":movie}, function(data) {
      //success callback
      var data = JSON.parse(data);// parse it

      var results = data.results; // get the 'results'
      results = results[0]; // get the first (best) result
      if(results == undefined) { // if it isn't a known show
      window.countDown = "não encontrado"; // say it isn't a show
    }
    id = results.id; // get the show id

    var background = results.backdrop_path; // get the show background
    background = "https://image.tmdb.org/t/p/original" + background; // set the background url
    background = "url(" + background + ")";
    document.body.style.backgroundImage = background; // set the background

    days = 0;
    weeks = 0;
    months = 0;


    theMovieDb.tv.getById({"id":id}, function(data) {
      //success callback
      var data = JSON.parse(data); // parse the data
      var length = data.seasons.length - 1; //get the amount of seasons
      var seasons = data.seasons[length]; // get the last season
      document.getElementById("inputShow").value = data.name;


      showID = data.id;
      var otherSeasons = seasons;
      if(otherSeasons.air_date == null){otherSeasons = data.seasons[length - 1]}
      var DATAID = data.id

      theMovieDb.tvSeasons.getById({"id":data.id, "season_number": otherSeasons.season_number},
      function(data){
        var data = JSON.parse(data);

        if(data.episodes.length < 7){
          otherSeasons.season_number = otherSeasons.season_number - 1;
          theMovieDb.tvSeasons.getById({"id":DATAID, "season_number": (otherSeasons.season_number)},
          function(data){
            var data = JSON.parse(data);
            function giveNames() {
              iF = i;
              u = i + 1
              epLen = data.episodes[data.episodes.length - 1 - i]

              if(Boolean(document.getElementById("recent" + i)) && Boolean(epLen)){

                var sesnen = epLen.season_number
                var epnen = epLen.episode_number
                var sepnen = epLen.name
                var arda = epLen.air_date

                var thies = "<table><td style='height:20%'><center><span style='font-family:Arial; color:black; text-decoration: none; background-color: white; width:100%''>" + sesnen + 'x' + epnen + ": <br>" + sepnen + "<br>"+ arda +"</span></center></td></table>";
                console.log(u.toString())
                var thisId = "recent" + u.toString();
                var text = thies;
                document.getElementById(thisId).innerHTML = text;
                theMovieDb.tvEpisodes.getImages({"id": showID, "season_number": epLen.season_number, "episode_number": epLen.episode_number},
                function(data){
                  var data = JSON.parse(data);
                  if(Boolean(data.stills[0])){
                    still = data.stills[0].file_path;
                    var epStil = "https://image.tmdb.org/t/p/original" + still;
                    var epStil = "url(" + epStil + ")";
                    epStilArray.push(epStil);

                    document.getElementsByClassName("recent")[epStilArray.length - 1].style.backgroundImage = epStil;}

                  }, function(error){})
                }

              }
              for(var i = 0; i < 7; i++) {
                giveNames()
              }
            },
            function(error){})
          }
          epStilArray = [];
          for(var i = 0; i < 6; i++) {
            iF = i;
            u = i + 1
            epLen = data.episodes[data.episodes.length - 1 - i]

            if(Boolean(epLen)){
              var sesnen = epLen.season_number
              var epnen = epLen.episode_number
              var sepnen = epLen.name
              var arda = epLen.air_date

              var thies = "<table><td style='height:20%'><center><span style='font-family:Arial; color:black; text-decoration: none; background-color: white; width:100%''>" + sesnen + 'x' + epnen + ": <br />" + sepnen + "<br />"+ arda +"</span></center></td></table>";
              var thisId = "recent" + u.toString();
              var text = thies;
              document.getElementById(thisId).innerHTML = text;
              theMovieDb.tvEpisodes.getImages({"id": showID, "season_number": epLen.season_number, "episode_number": epLen.episode_number},
              function(data){
                var data = JSON.parse(data);
                if(Boolean(data.stills[0])){
                  still = data.stills[0].file_path;
                  var epStil = "https://image.tmdb.org/t/p/original" + still;
                  var epStil = "url(" + epStil + ")";
                  epStilArray.push(epStil);
                  //console.log(epStilArray);
                  document.getElementsByClassName("recent")[epStilArray.length - 1].style.backgroundImage = epStil;}
                },
                function(error){})
              }
              else{
                console.log(data)

              }
            }
          },
          function(error){}
        )

        var currentTime = formatDate(new Date()) // get current date in proper format
        if(data.status == "Terminou"){countDown = "Terminou"}
        else if(currentTime < seasons.air_date) {


          countDown = seasons.air_date // set the countdown if the next episode is known
        }
        else if(seasons.air_date === null){
          countDown = "Sem próxima temporada conhecida"} // if we know there is a next season but not when display this
          else
          {number = seasons.season_number; // give seasonamount
            theMovieDb.tvSeasons.getById({"id":id, "season_number": number}, // get info about the next season
            function(data) {
              var data = JSON.parse(data); // parse data
              var episodes = data.episodes; // get the episodes-info
              var seLength = episodes.length - 1; // get the amount of episodes
              var count = seLength;
              while(count > -1){
                var curEp = data.episodes[count].air_date // get when the next episode airs
                var episodeName;
                window.episodeName = data.episodes[count].name; // set the next episodename
                window.episodeInfo = data.episodes[count].overview; // set the next episodes info
                var curEp2 = data.episodes[count - 1].air_date // get the next episodes air date
                count-- // count down



                if(curEp2 < currentTime) { // if latest episode has been selected
                  count = -2; // stop counting
                  if(curEp === currentTime) { window.countDown = "Que vai ao ar hoje"} // if the episode airs today
                  else if(curEp < currentTime) {
                    window.countDown = "Nenhum episódio seguinte conhecido"} // if the episode has been aired
                    else if(curEp > currentTime) { window.countDown = curEp; } // if the episode is in the known future

                  }
                }


              }, function(error) {})

            }

          }, function(error) {
            //error callback
          });

        }, function(error) {
          //error callback
        });

      };
      ALLgo();

      setTimeout(function dunno() {countDown = window.countDown;episodeName; episodeName = window.episodeName; episodeInfo = window.episodeInfo; nextStep = countDown}, 1000);
      var episodeName;

      var nextStep = window.nextStep;
      var episodeName = window.episodeName;
      var episodeInfo = window.episodeInfo;
      setTimeout(function dunno() {
        if(nextStep != "Terminou" && nextStep != "Nenhum episódio seguinte conhecido" && nextStep != "Série não encontrada" && nextStep != "Que vai ao ar hoje" && nextStep != "Sem próxima temporada conhecida" && nextStep != undefined){
          var year = nextStep.substring(0, 4);
          var year = year - 1 + 1; // now it isn\'t a string anymore :D
          var month = nextStep.substring(5, 7)
          var month = month - 1 + 1;
          if(month.toString().length == 1){month = 0 + month.toString()}
          var day = nextStep.substring(8, 10);
          var day = day -1 + 1; // make it into a number in stead of string
          if(day.toString().length == 1){day = 0 + day.toString()}
          theDate = year + "-" +month+ "-" +day;

          var until = time.until(theDate)

          difYear = until.years
          difMonth = until.months
          difWeek = until.weeks
          difDay = until.days
          var repText1;
          var repText2
          var repText3;
          var repText4;
          var enter = "<br />"
          if(difYear === 1){repText1 = difYear + " ano" + enter}
          else if(difYear === 0) {repText1 = ""}
          else {repText1 = difYear + " anos" + enter}
          if(difMonth === 1){repText2 = difMonth + " mês" + enter}
          else if(difMonth === 0) {repText2 = ""}
          else {repText2 = difMonth + " meses" + enter}
          if(difWeek === 1) {repText4 = difWeek + " semana" + enter}
          else if(difWeek === 0) {repText4 = ""}
          else {repText4 = difWeek + " semanas" + enter}
          if (difDay === 1) {repText3 = difDay + " dia "}
          else if(difDay === 0) {repText3 = ""}
          else {repText3 = difDay + " dias "}
          if(episodeName == "" || episodeName == undefined) {var after = "para começar"; var pro = ""}
          else {var after = ""; var pro = "'" + episodeName + "'" + " estreia em "}

          var yNan = isNaN(difYear);
          var mNan = isNaN(difMonth);
          var dNan = isNaN(difDay);

          if(yNan || mNan || dNan) {
            if(nextStep != "Vai ao ar hoje!"){
              var replaceText = "Não encontrado!"
            }
          }
          else {var replaceText = pro + repText1 + repText2 + repText4 + repText3 + after;}


          document.getElementById("insert").innerHTML = replaceText;


          if(Boolean(episodeInfo)){
            var first_three = episodeInfo.match(/(\w+\s){3}\w+/);

            regexp = new RegExp('(' + first_three[0] + ')?.*'); //fetches first 3 words and makes regural expression to lookbehind this positively
            var output = episodeInfo.replace(regexp, function($0, $1){     //mimicks positive lookbehind
              return $1 ? $1 + '...' : $0;
            });

            document.getElementById("insInf").innerHTML = output;
          }




        }
        else if(nextStep == "Terminou") {document.getElementById("insert").innerHTML = "Está série terminou.";}
        else if(nextStep == "Nenhum episódio seguinte conhecido") {document.getElementById("insert").innerHTML = "Não sabemos quando o próximo episódio vai ao ar";}
        else if(nextStep == "Série não encontrada") {document.getElementById("insert").innerHTML = "Não podemos encontrar essa série!"}
        else if(nextStep == "Que vai ao ar hoje") {
          document.getElementById("insert").innerHTML = "Que vai ao ar hoje!"

          var first_three = episodeInfo.match(/(\w+\s){3}\w+/);

          regexp = new RegExp('(' + first_three[0] + ')?.*'); //fetches first 3 words and makes regural expression to lookbehind this positively
          var output = episodeInfo.replace(regexp, function($0, $1){     //mimicks positive lookbehind
            return $1 ? $1 + '...' : $0;
          });

          document.getElementById("insInf").innerHTML = output;

        }
        else if(nextStep == "Sem próxima temporada no momento") {document.getElementById("insert").innerHTML = "Não sabemos quando a próxima temporada será exibida";}
        else {document.getElementById("insert").innerHTML = "Algo deu errado. Por favor, tente novamente";}

      }, 1100);

    };
