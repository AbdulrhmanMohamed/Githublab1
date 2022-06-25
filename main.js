// catch the bars 
let bars=document.querySelector('.bars')
let closeMark=document.querySelector('.fa-xmark')
let list=document.querySelector('.list')
console.log(closeMark)
bars.addEventListener('click',function(){
    console.log('clicked')
    list.style.cssText=`
        right:0px;
    `;
   
    closeMark.style.cssText=`
        display:block;
    `
})

closeMark.addEventListener('click',()=>{
    list.style.cssText=`
        right:-200px;
    `
    closeMark.style.cssText=`
        display:none;
    `
})


// Start The accordion section
let accordions__body=document.querySelectorAll('.accordion__body');
let arrows=document.querySelectorAll('.accordion__title i')


// event to rotate the arrow icon
arrows.forEach((arrow,index)=>{
    arrow.addEventListener('click',()=>{
        console.log('clicked accordiion')
            arrow.classList.toggle('toggled_accordion')
            accordions__body[index].classList.toggle('accordion_body_toggled')
            
    })
})



// create popup alerts 
let btns_wrapper=document.querySelectorAll('.btn_wrapper button')
// create array of alerts 
let alerts=document.querySelectorAll('.alert')
let closeMarks=document.querySelectorAll('.alert i')
let alert_section=document.querySelector('.alert_section')
console.log(alerts)
// console.log(btns_wrapper)
btns_wrapper.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
       
        alerts[index].style.cssText=`
        transform: perspective(400px) translateZ(0px);
        opacity:1;`
    })
})
let countClick=0;
closeMarks.forEach((mark,index)=>{
    mark.addEventListener('click',(eve)=>{
       
       
        alerts[index].style.cssText=`
        transform: perspective(400px) translateZ(-100px);
        opacity:0;`
        console.log(countClick)
       
       
    })
})