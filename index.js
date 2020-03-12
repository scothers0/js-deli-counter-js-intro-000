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
    for (var i = 0; i < katzDeliLine.length; i++){
    return `The line is currently: ${i + 1}. ${katzDeliLine[i].toString()},`;
    }
  }
  return "The line is currently empty.";
}
