function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length + 1} in line`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length = 0){
    return "There is nobody waiting to be served!";
  }
  return katzDeliLine[0];
  katzDeliLine.shift();
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length = 0){
    return "The line is currently empty";
  }
  let printOut = `The line is currently: `;
  for (var i = 0; i < katzDeliLine.length; i++){
    let addOn = `${i + 1}. ${katzDeliLine[i]}, `;
    let returnedString = printOut.concat(addOn);
  }
  return returnedString;
}
