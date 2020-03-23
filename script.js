let baseurl = "https://pokeapi.co/api/v2/pokemon/";
let baseURL = "https://pokeapi.co/api/v2/pokemon-species/";
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let form = document.querySelector("form");
let dexno = 1
let input = document.querySelector("#set-id")


form.addEventListener("submit", function(e) {
    e.preventDefault();
    dexno = input.value.trim();
    let url = baseurl+`${dexno}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        let pic = document.querySelector("img")        
        pic.src= res.sprites.front_default;
    })
    let URL = baseURL+`${dexno}`;   
    fetch(URL)
    .then(res => res.json())
    .then(res => {
    let desc = document.querySelector("p");
    //console.log(res.flavor_text_entries[1].flavor_text)
    desc.innerHTML= res.flavor_text_entries[1].flavor_text;
}) 

    //return dexno;
  });



function getPicl()
{   
    if (dexno>1&&dexno<=802) {
        dexno--;  
      }
    input.setAttribute("value",dexno)
    let url = baseurl+`${dexno}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        let pic = document.querySelector("img")        
        pic.src= res.sprites.front_default;
    })
}
function getPicr()
{   
    if (dexno>=1&&dexno<802) {
        dexno++;  
      }
    input.setAttribute("value",dexno)
    let url = baseurl+`${dexno}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        let pic = document.querySelector("img")        
        pic.src= res.sprites.front_default;
    })

}
function getDescl()
{
    let url = baseURL+`${dexno}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        let desc = document.querySelector("p");
        console.log(res.flavor_text_entries[1].language.name)
        desc.innerHTML= res.flavor_text_entries[1].flavor_text;
    })
}

function getDescr()
{
    let url = baseURL+`${dexno}`;
    fetch(url)
    .then(res => res.json())
    .then(res => {
        let desc = document.querySelector("p");
        console.log(res.flavor_text_entries[1].language.name)
        if (res.flavor_text_entries[1].language.name=='en') {
            desc.innerHTML= res.flavor_text_entries[1].flavor_text;
        } else {
            desc.innerHTML= res.flavor_text_entries[2].flavor_text;
        }
        
    })
}

left.addEventListener("click",  () => {   
    getPicl();
    getDescl();
});
right.addEventListener("click", () => { 
    getPicr();
    getDescr();    
});
