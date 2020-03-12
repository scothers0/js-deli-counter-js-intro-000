function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`;

  }
  return "There is nobody waiting to be served!";

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0){
    let printOut = `The line is currently: `;
    for (var i = 0; i < katzDeliLine.length; i++){
      let addOn = `${i + 1}. ${katzDeliLine[i]}, `;
      let returnedString = printOut.concat(addOn);
  }
    return returnedString;
  }
  return "The line is currently empty";
}
