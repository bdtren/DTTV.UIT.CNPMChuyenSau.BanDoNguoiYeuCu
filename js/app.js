const apikey = "";
const main = document.querySelector('a');
window.addEventListener('load', async e=>{
    updatePages();
});

async function updatePages() {
    const resPage = fetch('http://localhost:8080/LoveMarketTest/index.php')
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      console.log(text);
    });

    const resStyle_css = fetch('http://localhost:8080/LoveMarketTest/css/style.css')
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      console.log(text);
    });
}

function getImages(){
    fetch('http://localhost:8080/LoveMarketTest/Images/img.jpg')
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      console.log(text);
    });
}

