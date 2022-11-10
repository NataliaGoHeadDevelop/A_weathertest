const weatherAPI =
"http://api.weatherapi.com/v1/current.json?key=0997c97af4a9469781c60934220711&aqi=no";

const keyword = document.querySelector(".keyword");
const btnSearch= document.querySelector(".btn-search");
const container = document.getElementById('container')

btnSearch.onclick = () =>{
    fetch(`${weatherAPI}&q=${keyword.value}`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        let element =''
        element = showData(data)
        container.innerHTML = element;
 
    });
};
function showData(data)
{
    return`<h3> ${data.location.name}, ${data.location.region}, ${data.location.country} </h3>
    <div  class="box">
    <img src="https:${data.current.condition.icon}" alt="">
        <h1>${data.current.temp_c} ℃</h1>
    </div>
    <p>Last Update :${data.current.last_updated}</p>
    <p>Wind MPH : ${data.current.wind_mph} </p> `;
}

