const transpose = function(matrix) {
  const result = [];
  for (let indexOfElemt in matrix[0]) { 
    const col = [];
    for (let eachArray of matrix) { 
      col.push(eachArray[indexOfElemt]);
    }
  result.push(col);
  
}
  return result;
};