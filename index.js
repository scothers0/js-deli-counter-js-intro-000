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
  if (katzDeliLine.length > 1){
    let printOut = `The line is currently: `
    for (var i = 0; i < katzDeliLine.length - 1; i++){

      printOut.concat(`${i + 1}. ${katzDeliLine[i].toString()}, `)
    return `The line is currently: ${i + 1}. ${katzDeliLine[i].toString()},`;
    }
  }
  else if (katzDeliLine.length = 1) {
    return `The line is currently: 1. ${katzDeliLine[0].toString()}`;
  }
  return "The line is currently empty.";
}
