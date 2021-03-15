
exports.min = function min (array) {
  var min;
  if (Array.isArray(array) && array.length)
  {
    var min = array[0];
    for (var i=1; i<array.length; i++)
      {
        if (min > array[i])
        {
          min = array[i];
        }
      }
    } 
  else 
  {
    min = 0;
   }
    
  return min;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length)
  { var max = array[0];
    for (var i=1; i<array.length; i++)
      {
        if (max < array[i])
        {
          max = array[i];
        }
      }
  }
  else 
  {
    max = 0;
   }
  return max;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length)
  { 
  var avg = 0, sum = 0;
  for (var i=0; i<array.length; i++)
    {
      sum +=  array[i];
    }
    avg = sum / (array.length);
  }
  else 
  {
    avg = 0;
   }
  return avg;
}
