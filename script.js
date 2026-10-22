let cards = document.querySelectorAll(".card");
let input = document.querySelector("input")
let string = ""
let firstValue = "";
let operator = "";
let lastValue = "";


const calFunction = (firstValue,operator,lastValue)=>{
    firstValue = Number(firstValue);
    lastValue = Number(lastValue);
    if(operator == "+"){
        return firstValue + lastValue;
    }
    else if(operator == "-"){
        return firstValue - lastValue;
    }
    else if(operator == "*"){
        return firstValue * lastValue;
    }
    else if(operator == "**"){
        return firstValue**lastValue;
    }
    else if(operator == "^"){
        return firstValue ^ lastValue;
    }
    else if(operator == "%"){
        return firstValue % lastValue;
    }
    else if(operator == "/"){
        return firstValue / lastValue;
    }
    else{
        return 0;
    }

}


cards.forEach(card => {
    card.addEventListener("click",(event)=>{
       let value = event.target.innerText;

       if(value == "C"){
        firstValue = "";
        lastValue = "";
        string = '';
        input.value = ""
       }
       else if(value == "+" || value == "-" || value == "*" || value =="**"|| value=="/" || value == "%" || value=="^"){
        firstValue = string;
        operator = value;
        string = ''
        input.value = operator;

       }
       else if(value == "="){
        lastValue = string;

        let result = calFunction(firstValue,operator,lastValue)
        input.value = result;
        string = result

       }
    
        
       else{
       string = string + event.target.innerText;
       input.value = string

       }
    })
    
});