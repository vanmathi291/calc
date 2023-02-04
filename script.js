
window.addEventListener('keypress',(e)=>{
    // console.log(e)
    console.log('key is pressed')
})


window.addEventListener('keypress',(event)=>{
    key=event.key
    code=event.code
    if(code.includes('digit')){
        console.log('key is press')
        console.log(event)
    }
    else{
        console.log('error')
    }
})

window.addEventListener('keypress',(event)=>{
    operator=['-','+','/','*']
    key=event.key
    code=event.code
    if(code.includes('digit')||operator.includes(key)){
        parent=document.querySelector('.screen')
        parent.innerText=parent.innerText+key
        console.log('key is press')
        console.log(event)
    }
    else{
        console.log('error');
    }
})