function kiir()
{
fetch("https://catfact.ninja/fact", {
  "headers": {
    "accept": "application/json"
  },
  "referrer": "https://catfact.ninja/",
  "method": "GET",
}).then(adat => adat.json())
.then(res => {
    document.getElementById("teny").innerHTML = res["fact"];
})
}