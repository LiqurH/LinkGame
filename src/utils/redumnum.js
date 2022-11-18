var numArray = [];
  const randomNum = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const setNumberArray =()=>{
      for(var i = 0; i < 50; i++){
          var temp = randomNum(0, 10);
          numArray.push(temp);
          numArray.push(temp);  
      }
      crash(numArray);   
  }
  const crash =(arr)=>{
      for(var i = 0; i < 15; i++){
          var n1 = randomNum(0, 99);
          var n2 = randomNum(0, 99);
          if(n1 != n2){
              var t = arr[n1];
              arr[n1] = arr[n2];
              arr[n2] = t;
          }	
      }
      
  }
  setNumberArray();
  export default numArray;