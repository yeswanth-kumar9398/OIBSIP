function convertTemperature(){
    var temperatureInput=document.getElementById("temperatureInput").value;
    var unitSelect=document.getElementById("unitSelect").value;
    var resultElement=document.getElementById("result");
    var temperature=parseFloat(temperatureInput);
    if(isNaN(temperature)){
        resultElement.innerHTML = "Invalid temperature input";
        return;
    }
    if(unitSelect==="C"){
        var convertedTemperatureF=temperature * 9 / 5 + 32;
        var convertedTemperatureK=temperature + 273.15;
        resultElement.innerHTML=temperature + "°C is " + convertedTemperatureF.toFixed(2) + "°F or " + convertedTemperatureK.toFixed(2) + "K";
    }else if(unitSelect==="F"){
        var convertedTemperatureC=(temperature - 32) * 5 / 9;
        var convertedTemperatureK=(temperature - 32) * 5 / 9 + 273.15;
        resultElement.innerHTML=temperature + "°F is " + convertedTemperatureC.toFixed(2) + "°C or " + convertedTemperatureK.toFixed(2) + "K";
    } else if(unitSelect==="K"){
        var convertedTemperatureC=temperature - 273.15;
        var convertedTemperatureF=(temperature - 273.15) * 9 / 5 + 32;
        resultElement.innerHTML=temperature + "K is " + convertedTemperatureC.toFixed(2) + "°C or " + convertedTemperatureF.toFixed(2) + "°F";
    }
}
