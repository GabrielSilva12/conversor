
function reverter(){
    
    let temp = document.querySelector('#temp')
    let temp2 = document.querySelector('#temp2')
    let temp3
    
    if(temp != temp2){
    temp3 = temp.value
    temp.value = temp2.value
    temp2.value = temp3
  
}

    


}


function Conversor(){
    let temp = document.querySelector('#temp').value
    
    let temp2 = document.querySelector('#temp2').value
    
    let n1 = Number(document.querySelector('.input1').value)
    
    let div = document.querySelector('.result')
    
    if (n1 == 0) {
      
      alert('Digite um numero!')
  
    } else if (temp == 'Celsius' && temp2 == 'Celsius'){
         return div.innerHTML = `<h1><span>${n1} °C</span> é igual a  <span>${n1} °C</span></h1>`
}
      else if(temp == 'Celsius' && temp2 == 'Fahrenheit'){
    
        let resultado = n1 * 1.8 + 32
    
        resultado.toFixed(2)
    
        return div.innerHTML = `<h1><span>${n1} °C</span> é igual a <span>${resultado} °F</span></h1>`
    
      } else if(temp == 'Celsius' && temp2 == 'Kelvin'){
 
        let resultado = n1 + 273.15
 
        resultado.toFixed(2)

        return div.innerHTML = `<h1><span>${n1} °C </span>é igual a <span>${resultado} K</span></h1>`

      }

      else if(temp == 'Fahrenheit' && temp2 == 'Celsius'){
    let resultado = (n1 - 32) * 5 / 9
    resultado.toFixed(2)
    return div.innerHTML = `<h1><span>${n1} °F</span> é igual a <span>${resultado} °C</span></h1>`

   }
  else if(temp == 'Fahrenheit' && temp2 == 'Kelvin'){
    let resultado = (n1 - 32) * 5 / 9 + 273.15
    resultado.toFixed(2)
    return div.innerHTML = `<h1><span>${n1} °F</span> é igual a <span>${resultado} K</span></h1>`
   }
  else if(temp == 'Kelvin' && temp2 == 'Fahrenheit'){
    let resultado = (n1 - 273.15) * 9 / 5 + 32
    resultado.toFixed(2)
    return div.innerHTML = `<h1><span>${n1} K</span> é igual a <span>${resultado} °F</span></h1>`
   
  }
   else if(temp == 'Kelvin' && temp2 == 'Celsius'){
    let resultado = n1 - 273.15
     resultado.toFixed(2)
     return div.innerHTML = `<h1><span>${n1} K</span> é igual a <span>${resultado} °C</span></h1>`
   
  }
    
}




