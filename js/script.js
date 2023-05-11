let numb=false
let play=true
let maxLimit=20
let numbList=[]
let operationList=[]
let output=document.getElementById("screen")
let digit=""
let temp=""
let final=document.getElementById("output-screen")

function reset(){
    console.log("ses")
    maxLimit=20
    numb=false
    digit=""
    temp=""
    numbList=[]
    play=true
    operationList=[]
    output.textContent=""
    final.textContent="Output:"
}   

function one(){
    output.textContent = digit
    if (play==true & maxLimit>0){
        digit+=1
        temp+=1
        maxLimit-=1
        output.textContent = digit
        numb=true
    }
}
function two(){
    if (play==true & maxLimit>0){
        digit+=2
        temp+=2
        maxLimit-=1
        output.textContent = digit
        numb=true    
    }
}

function three(){
    if (play==true & maxLimit>0){
        digit+=3
        temp+=3
        maxLimit-=1
        output.textContent = digit
        numb=true    
    }
}

function four(){
    if (play==true & maxLimit>0){
        digit+=4
        temp+=4
        maxLimit-=1
        output.textContent = digit
        numb=true    
    }
}

function five(){
    if (play==true & maxLimit>0){
        digit+=5
        temp+=5
        maxLimit-=1
        output.textContent = digit
        numb=true    
    }
}

function six(){
    if (play==true & maxLimit>0){
        digit+=6
        temp+=6
        maxLimit-=1
        output.textContent = digit
        numb=true    
    }
}

function seven(){
    if (play==true & maxLimit>0){
        digit+=7
        temp+=7
        maxLimit-=1
        output.textContent = digit
        numb=true    
    }
}

function eight(){
    if (play==true & maxLimit>0){
        digit+=8
        temp+=8
        maxLimit-=1
        output.textContent = digit
        numb=true    
    }
}

function nine(){
    if (play==true & maxLimit>0){
        digit+=9
        temp+=9
        maxLimit-=1
        output.textContent = digit
        numb=true    
    }
}

function zero(){
    if (play==true & maxLimit>0){
        digit+=0
        temp+=0
        maxLimit-=1
        output.textContent = digit
        numb=true    
    }
}

function addition(){
    if (numb==true){
        digit+="+"
        output.textContent = digit
        numbList.push(parseInt(temp))
        operationList.push("add")
        temp=""
        numb=false
    }
}

function subtraction(){
    if (numb==true){
        digit+="-"
        output.textContent = digit
        numbList.push(parseInt(temp))
        operationList.push("sub")
        temp=""
        numb=false
    }
}

function multiplication(){
    if (numb==true){
        digit+="*"
        output.textContent = digit
        numbList.push(parseInt(temp))
        operationList.push("multi")
        temp=""
        numb=false
    }
}


function division(){
    if (numb==true){
        digit+="/"  
        output.textContent = digit
        numbList.push(parseInt(temp))
        operationList.push("divi")
        temp=""
        numb=false
    }
}



function equals(){
    numbList.push(parseInt(temp))
    play=false
    while (operationList.indexOf("divi") !== -1){
        let loc=operationList.indexOf("divi")
        numbList[loc]/=numbList[loc+1]
        operationList.splice(loc,1)
        numbList.splice(loc+1,1)
    }
    while (operationList.indexOf("multi") !== -1){
        let loc=operationList.indexOf("multi")
        numbList[loc]*=numbList[loc+1]
        operationList.splice(loc,1)
        numbList.splice(loc+1,1)
    }
    while (numbList.length>1){
        if (operationList[0]=="add"){
            numbList[0]+=numbList[1]
            numbList.splice(1,1)
            operationList.splice(0,1)
        }
        else if (operationList[0]=="sub"){
            numbList[0]-=numbList[1]
            numbList.splice(1,1)
            operationList.splice(0,1)

        }
    }
    final.textContent=numbList[0]
}
output.textContent = digit





/* 
function equals(){
    numbList.push(parseInt(temp))
    while (operationList.indexOf("add") !== -1){
        let loc=operationList.indexOf("add")
        console.log("sss", numbList, "fff",operationList, "ll", numbList.length)
        numbList[loc+1]+=numbList[loc]
        operationList.splice(loc,1)
        numbList.splice(loc,1)               
    }
    while (operationList.indexOf("sub") !== -1){
        let loc=operationList.indexOf("sub")
        console.log("sss", numbList, "fff",operationList, "ll", numbList.length)
        numbList[loc]-=numbList[loc+1]
        operationList.splice(loc,1)
        numbList.splice(loc+1,1)               
    }
} */