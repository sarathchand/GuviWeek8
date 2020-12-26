var countries_data ;
const fetchPromise = fetch("https://restcountries.eu/rest/v2/all");
fetchPromise.then(response => {
  return response.json();
}).then(countries => {
     countries_data = countries;
     populate(countries_data)
  console.log(countries);
  console.log(countries_data.length)
});


function populate(countries_data)
{
    for(var i =0 ; i < countries_data.length ; i++)
{
    var cont = document.createElement('div');
cont.setAttribute('class','container');
var row = document.createElement('div');
row.setAttribute('class','row');
for(var j = 0 ; j < 3 && i < countries_data.length  ;j++)
{
   
    var col = document.createElement('div');
col.setAttribute('class','col-lg-4 col-sm-12');
var div = document.createElement('div');
div.setAttribute('class','card');
div.setAttribute('style',"width: 18rem;");
var img = document.createElement('img');
img.setAttribute('class','card-img-top');
img.setAttribute('src',countries_data[i].flag);
div1 = document.createElement('div');
div1.setAttribute('class','card-body');
var h5 = document.createElement('h5');
h5.setAttribute('class','card-title');
h5.innerHTML=countries_data[i].name;

var para = document.createElement('p');
para.setAttribute('class','card-text');
para.setAttribute('id',i);
para.innerHTML='Capital : '+ countries_data[i].capital +'<br/>'+'Region : ' + countries_data[i].region+'<br/>'+'Country Code :' + countries_data[i].alpha3Code;
var anchor = document.createElement('a');
anchor.setAttribute('class', 'btn btn btn-primary-outline');
anchor.setAttribute('href','#');
var lat = countries_data[i]["latlng"][0];
var long = countries_data[i]["latlng"][1];

var fun = 'myFunction('+"'"+ lat+"'"+','+"'"+long+"'"+','+"'"+i+"'"+')';

anchor.setAttribute('onclick',fun);
//anchor.setAttribute('id',i);
anchor.innerHTML="Click for Weather"
console.log(fun);


div.appendChild(img);
div1.appendChild(h5)
div1.appendChild(para);
div1.appendChild(anchor);
div.appendChild(div1);
col.appendChild(div);
// col.innerHTML=`<div class="card" style="width: 18rem;">
// <img class="card-img-top" src="https://restcountries.eu/data/dza.svg" alt="Card image cap">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>`;
row.appendChild(col);
i++;

}




cont.appendChild(row);
document.body.append(cont);

}


}

function myFunction(lat,long,i) {
    console.log(lat);
    console.log(long);
    console.log(i);
    var link="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=19e606f67b581be1af208a1e64c98589";
    const fetchPromise1 = fetch(link);
fetchPromise1.then(response => {
  return response.json();
}).then(weather => {
     weather_data = weather;
     console.log(weather_data)
     console.log(weather_data.main)
     console.log(weather_data.main.temp)

     var para1 = document.getElementById(i);
     
para1.innerHTML='Temperature : '+ weather_data.main.temp +'<br/>'+'Pressure : ' + weather_data.main.pressure+'<br/>'+'Feels like :' + weather_data.main.feels_like;
});
  }







