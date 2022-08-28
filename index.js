document.getElementById("button").onclick = function(){
    let temp;
    if(document.getElementById("cButton").checked){
       temp = document.getElementById("textBox").value;
       temp = Number(temp);//convert to a number
       temp = toCelsisus(temp);
       document.getElementById("tempLabel").innerHTML = temp + "°C";
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);//convert to a number
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }

}


function toCelsisus(temp){//To convert to Celsius function
    return (temp - 32) * (5/9);
}
function toFahrenheit(temp){//To convert to Fahrenheit function
    return temp * 9 / 5 + 32;
}