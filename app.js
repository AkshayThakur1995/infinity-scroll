const container = document.querySelector(".container")
const URL = "https://dog.ceo/api/breeds/image/random"

function getRandNum(){
    return Math.floor(Math.random() * 100)
}

function loadImages(numImages = 25){
    let i=0;
    while(i < numImages){
     fetch(URL)
     .then(response => response.json())
     .then(data => {
         const img =  document.createElement('img');
         img.src = `${data.message}`
         container.appendChild(img)
     })   
    i++;
   }   
}

loadImages()

window.addEventListener('scroll',()=>{

    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
    loadImages();
    }
})