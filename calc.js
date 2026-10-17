function fun(value){
    let display=document.getElementById("cal");
        if(value=="1/x"){
            display.value=1/Number(display.value);
        }else if(value=="x^2"){
            display.value=1/number**2;
        }else if(value=="%"){
            display.value=number(display.value)/100;
        }else if(display.value=='0'){
            display.value=value;
        }else{
            display.value+=value;
        }
}

function solve(){
    let display=document.getElementById("cal");
    display.value=eval(display.value)
}

function clearDisplay(){
    let display=document.getElementById("cal");
    display.value="0"
}

function deleteLast(){
    let display=document.getElementById("cal");
    display.value=display.value.slice(0,-1)
    if (display.value==""){
        display.value="0";
    }
}