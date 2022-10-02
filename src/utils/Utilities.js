export function generateRandomNumbers (min,max,numbers) {
  let numbersArray = [];
  for(let i=0;i<numbers;i++){
    let tempNumber = Math.floor(Math.random() * 100) + 1;
    numbersArray.push(tempNumber);
  }

  return numbersArray;
}

export function getListNumbers(data){
  let formattedArray = [];
  data.map((number)=>{
    formattedArray.push({number:number,isFlipped:false});
    formattedArray.push({number:number,isFlipped:false});
  });

  return shuffleArray(formattedArray);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
