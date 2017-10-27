
document.onkeydown = function(e) {
  e = e || event
  if (e.keyCode == 13) {
    var input = document.getElementById('inputShow').value;
    input = input.toLowerCase();
    if(window.name.indexOf('iframe_canvas_fb') != -1){
      // in Facebook

      FB.AppEvents.logEvent('user typed ' + input);
      console.log("I told facebook you typed " + input)
    }
    episodeName = null;
    episodeInfo = null;
    first_three = null;
    output = null;
    recentsLength = recents.length
    var popularText = "<h1>Episódios Recentes</h1>";
    var seenText = "Já viu todos os episódios? Clique aqui para ver séries semelhantes!";
    document.getElementById("recentsT").innerHTML = popularText;
    document.getElementById("seenText").innerHTML = seenText;
    document.getElementById("insInf").innerHTML = "";
    for(var i = 0; i < 6; i++) {
      var u = i + 1;
      document.getElementsByClassName("recent")[i].style.backgroundImage = "";
      var thisId = "recent" + u.toString();
      document.getElementById(thisId).innerHTML = "";
    }


    getSerie(input);



    //popular
    theMovieDb.tv.getPopular({}, function(data){
      var data = JSON.parse(data);
      var length = data.results.length -1
      var results = data.results;
      switch(input){
        case results[0].name.toLowerCase():
        case results[1].name.toLowerCase():
        case results[2].name.toLowerCase():
        case results[3].name.toLowerCase():
        case results[4].name.toLowerCase():
        case results[5].name.toLowerCase():
        case results[6].name.toLowerCase():
        case results[7].name.toLowerCase():
        case results[8].name.toLowerCase():
        case results[9].name.toLowerCase():
        case results[10].name.toLowerCase():
        case results[11].name.toLowerCase():
        case results[12].name.toLowerCase():
        case results[13].name.toLowerCase():
        case results[14].name.toLowerCase():
        case results[15].name.toLowerCase():
        case results[16].name.toLowerCase():
        case results[17].name.toLowerCase():
        case results[18].name.toLowerCase():
        case results[19].name.toLowerCase():
        document.getElementById("featured").innerHTML = "Esta série está em tendência";
        document.getElementById("featured").style.width = "13em";
        break;
        case featuredS[0]:
        case featuredS[1]:
        case featuredS[2]:
        case featuredS[3]:
        case featuredS[4]:
        case featuredS[5]:
        case featuredS[6]:
        case featuredS[7]:
        case featuredS[8]:
        case featuredS[9]:
        document.getElementById("featured").innerHTML = "Está série está em destaque";
        document.getElementById("featured").style.width = "13em";

        break;
        default:
        document.getElementById("featured").innerHTML = "";
        document.getElementById("featured").style.width = "0em";

      }

    }, function(error){})





  }
}
var featuredS = ["Adventure Time", "Sherlock", "Gotham", "American Horror Story", "Under The Dome", "The Flash", "Silicon Valley","Forever","Mr. Robot", "Orphan Black", "Orange Is The New Black"]

//random background
var random = Math.random() * (featuredS.length - 1);
random = Math.floor(random);
randomS = featuredS[random];

document.getElementsByName("inputShow")[0].placeholder = "Ex: " + randomS;
random = featuredS[random];




theMovieDb.search.getTv({"query":random}, function(data) {
  var data = JSON.parse(data);
  var Rid = data.results[0];

  var background = Rid.backdrop_path;
  background = "https://image.tmdb.org/t/p/original" + background;
  background = "url(" + background + ")";
  document.body.style.backgroundImage = background;




}, function(error){})


//similar
function similar(){
  var input = document.getElementById('inputShow').value;
  theMovieDb.search.getTv({"query":input}, function(data) {
    var data = JSON.parse(data);
    var id = data.results[0].id;
    theMovieDb.tv.getSimilar({"id":id}, function(data) {
      var data = JSON.parse(data)
      for(var i = 0; i < 6; i++){
        var u = i + 1;
        var name = data.results[i].name;
        var backdrop_path = data.results[i].backdrop_path;
        var id = data.results[i].id;
        console.log(name);
        console.log(backdrop_path);
        document.getElementById("recent" + u).innerHTML="<center><a style='text-decoration:none' target='_blank' href='https://www.themoviedb.org/tv/" + id + "'><span style='font-family:Arial; color:black; text-decoration: none; background-color: white; width:100%'>" + data.results[i].name + "</span></a></center>";
        var poster = "https://image.tmdb.org/t/p/original/" + backdrop_path;
        var background = "url(" + poster + ")"
        document.getElementsByClassName("recent")[i].style.backgroundImage = background;
      }


    }, function(error){})

  }, function(error){})
}


//popular
var popularText = "<h1>Séries Populares</h1>";
document.getElementById("recentsT").innerHTML = popularText;
theMovieDb.tv.getPopular({}, function(data){
  var data = JSON.parse(data);

  for(var i = 0; i < 7; i++){
    var u = i + 1;
    var id = data.results[i].id;



    if(i < 6){
      document.getElementById("recent" + u).innerHTML="<center><a style='text-decoration:none' target='_blank' href='#'><span style='font-family:Arial; color:black; text-decoration: none; background-color: white; width:100%'>" + data.results[i].name + "</span></a></center>";


      var poster = "https://image.tmdb.org/t/p/original/" + data.results[i].poster_path;
      var background = "url(" + poster + ")"
      document.getElementsByClassName("recent")[i].style.backgroundImage = background;
    }
  }
}, function(error){
  console.log(error)
})
