let API_Teams = 'https://api.balldontlie.io/v1/teams'

let API_Players = 'https://api.balldontlie.io/v1/players'

let home = document.getElementById("home")

home.addEventListener("click", clearDiv)

let teams = document.getElementById("teams")

teams.addEventListener("click", getTeams)

let players = document.getElementById("players")

players.addEventListener("click", getPlayers)

let div = document.getElementById("root")

function clearDiv() {
    div.innerHTML = "";
}

function getData(data){
    clearDiv()

    let table = document.createElement("table")
    table.setAttribute("class","table")
    table.classList.add('table-striped')
    
    let thead = document.createElement("thead")

    thead.innerHTML = `<tr>
    <th scope="col">S.No</th>
    <th scope="col">Team</th>
    <th scope="col">City</th>
    <th scope="col">Divison</th>
    <th scope="col">Full Name</th>
  </tr>`

   
  let tbody = document.createElement("tbody")

   data.data.forEach((e)=>{
    
    let tr = document.createElement("tr")
    tr.innerHTML = `<th>${e.id}</th>
                    <td>${e.name}</td>
                    <td>${e.city?e.city:"No Data"}</td>
                    <td>${e.division?e.division:"No Data"}</td>
                    <td>${e.full_name}</td>`
    tbody.appendChild(tr)
   })
   
  table.appendChild(thead)
  table.appendChild(tbody)
  div.appendChild(table)

}

async function getTeams() {

    try{
    let response = await fetch(API_Teams, {
        headers: {
            "Authorization": "5dd74ecf-5496-4a9e-959f-80805c8c868e"
        }
    })
    let data = await response.json();
    console.log(data)
    if(response.status ===200)
        getData(data)
    } catch(error) {
        console.log(error)
    }
}

function getPdata(data){
    
    clearDiv()
    
    let table = document.createElement("table")
    table.setAttribute("class","table")
    table.classList.add('table-striped')
    
    let thead = document.createElement("thead")

    thead.innerHTML = `<tr>
    <th scope="col">S.No</th>
    <th scope="col">Player Name</th>
    <th scope="col">Team</th>
    <th scope="col">Country</th>
    <th scope="col">Jersey No.</th>
  </tr>`

   
  let tbody = document.createElement("tbody")

   data.data.forEach((e)=>{
    
    let tr = document.createElement("tr")
    tr.innerHTML = `<th>${e.id}</th>
                    <td>${e.first_name} ${e.last_name}</td>
                    <td>${e.team.full_name}</td>
                    <td>${e.country}</td>
                    <td>${e.jersey_number}</td>`
    tbody.appendChild(tr)
   })
   
  table.appendChild(thead)
  table.appendChild(tbody)
  div.appendChild(table)
}

async function getPlayers() {

    try{
    let response = await fetch(API_Players, {
        headers: {
            "Authorization": "5dd74ecf-5496-4a9e-959f-80805c8c868e"
        }
    })
    let data = await response.json();
    if(response.status ===200)
        getPdata(data)
    console.log(data)
    } catch(error) {
        console.log(error)
    }
}

