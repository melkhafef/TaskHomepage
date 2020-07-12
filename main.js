const photos = document.querySelectorAll('#fifth #photos div');
const body = document.querySelector('body')
function myFunction() {
    console.log('dgg')
    body.children[0].remove()
}
for(let i=0;i<photos.length;i++){
    photos[i].onclick=function(e){
        console.log(e)
        body.insertAdjacentHTML('afterbegin', `<div style='background-color:${photos[i].style.backgroundColor}; z-index:99999999999 ; width:80%; height:500px;position: absolute;top:${e.pageY-100}px;left:${e.pagex-100}px ;}'>
        <button onclick="myFunction()">Close</button>
        </div>
`)
    }
}
