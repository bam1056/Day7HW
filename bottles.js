for(let numBottles = 99; numBottles > 0; numBottles--){
  if(numBottles > 2 || numBottles === 0){
    console.log(numBottles + " bottles of beer on the wall\n" + numBottles + " bottles of beer.\nTake one down,\npass it around,\n" + (numBottles-1) + " bottles of beer on the wall!\n\n");
  }
  else if(numBottles === 2) {
    console.log(numBottles + " bottles of beer on the wall\n" + numBottles + " bottles of beer.\nTake one down,\npass it around,\n" + (numBottles-1) + " bottle of beer on the wall!\n\n");
  }
  else {
    console.log(numBottles + " bottle of beer on the wall\n" + numBottles + " bottle of beer.\nTake one down,\npass it around,\n" + (numBottles-1) + " bottles of beer on the wall!\n\n");
  }
}
