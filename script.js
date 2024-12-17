////////////////////////////////////////////////////////////////////////////////////////////////////////:
//                                         canvas                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////:


// const moncanvas = document.getElementById('canvas');
// moncanvas.height =window.innerHeight -100;
// moncanvas.width = window.innerWidth -50;
// moncanvas.style.border= "2px solid black ";
// const context = moncanvas.getContext('2d');
// let x = null, y = null;
// context.lineWidth =5; 
// let draw = false ;

// context.strokestyle = "#010600" ;
// window.addEventListener('mousedown',(e)=>(draw=true) )
// window.addEventListener('mouseup',(e)=>(draw=false) )
// window.addEventListener('mousemove',(e)=>{
//     if( ! draw){
// x=e.clientX;
// y=e.clientY;
// return;
//     }
//     let currentX=e.clientX ;
//     let currentY=e.clientY;
//     context.beginPath();
//     context.moveTo(x,y);
//     context.lineTo(currentX,currentY);
//     context.stroke();
// x=currentX;
// y=currentY;
// })
// document.getElementById('clear').onclick=function(){
//     context.clearRect(0, 0, canvas.width, canvas.height);
// };
// document.querySelectorAll('.colorChange').forEach((element) => {
//     element.onclick = function() {
//         context.strokeStyle = element.style.backgroundColor;
//     };
// })


////////////////////////////////////////////////////////////////////////////////////////////////////////:
//                                         ajout de text                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////:



document.getElementById('textInput').onclick= function(){
    const text_input=document.createElement('div');
    text_input.contentEditable=true;
    text_input.style.width='150px';
    text_input.innerText='text ici';
    text_input.style.position='absolute';
    text_input.style.border='none';
    text_input.style.left='50px';
    text_input.style.top='50px';
    document.getElementById('container').appendChild(text_input);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////:
//                                         ajout de images                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////:


document.getElementById('imageInput').onclick= function(){
    const imageLink=prompt("url de l'image :","https://");
    if(imageLink){
        const image_input=document.createElement('img');
        image_input.src=imageLink;
        image_input.className='image_zone';
        image_input.width='100';
        image_input.height='100';
        image_input.style.position='absolute';
        image_input.style.left='50px';
        image_input.style.top='50px';
        document.getElementById('container').appendChild(image_input);

    }
    
}




