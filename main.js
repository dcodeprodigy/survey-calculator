   const inputFields = document.querySelectorAll('.rating');
   const btnCalc = document.getElementById('btnCalc');
   const btnReset = document.getElementById('btnReset');
   
   
   btnCalc.addEventListener('click', calcRating);
   
   const inputData = {
     baseRating : 11.1,
     totalPercentage : 100,
   }
   
   // Calculation Proper
   function calcFinalRes(j) {
       let finalValue = 0;
       for (let k = inputFields.length; k > 0; k--){
         finalValue += (inputData[`rating${k}`]/inputData["baseRating"]) * inputData[`rating${k}`];
         if (k === 1) alert(finalValue.toFixed(2));
       }
       return finalValue.toFixed(2);
     }
   
   
   function calcRating() {
     let percentComp = 0;
     
     for (let i = 0; i < inputFields.length; i++){
       if (inputFields[i].value=== ""){
       console.log('Empty');
       alert(`Please fill out this field => Rating ${10 - i}`)
       break
     }
     } // End of For Loop 1
     
     
     
     
     // Compiling the percentage Comparison
    for (let i = 0; i < inputFields.length; i++){
       
       percentComp += Number(inputFields[i].value);
       console.log(percentComp, i, inputData['totalPercentage'],inputFields.length - 1);
       
       
       // Checks to see if the fields value is exactly 100 by comparing percentComp with total percentage
       if(i === inputFields.length - 1){
         if(percentComp < inputData['totalPercentage'] - 1){
           console.log('The Combined Values of all fields must not be less than 100');
           alert("The Combined Values of all fields must not be less than 100");
           break
         }else if (percentComp > 100){
           console.log('The Combined Values of all fields must not exceed 100');
           alert("The Combined Values of all fields must not exceed 100");
           break
         }else if (percentComp >= 99 && percentComp <= 100){
           for (let j = 0; j < inputFields.length; j++){
             if (percentComp >= 99 && percentComp <= 100){
             inputData[`rating${10 - j}`] = Number(inputFields[j].value);
             }
             
            if (j === 9) {
              console.log(inputData);
              console.log(calcFinalRes(j));
            }
            }
         }
       }
     }
   }
   
   
   btnReset.addEventListener('click', ()=>{
     for (let i = 0; i < inputFields.length; i++){
        inputFields[i].value = "";
     }
   });
