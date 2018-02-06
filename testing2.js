
function closureOne() {
      var counter = 0;
      alert("first");
      function closureTwo() {
          counter++;
          alert("counter is" + counter);
      }
      closureTwo();

  }
  function getProduct(array){
    //[1,2,3,4] --> [2*3*4,1*3*4,]
    var new_array=[];
    product=1;
    for (var i = 0; i < array.length; i++) {
      product=1;
       for (var j = 0; j < array.length; j++) {
            if (j!=i){
              product*=array[j];
            }
       }
       new_array.push(product);
    }
    return new_array;
  }
  function extendedFunc(a,b,...c){
    console.log(c.length);
  }
  function shiftArray(){
    var array=[16, 2, 77, 40, 120, 3, 22, 3, 5, 11, 26];
    var new_array=[];
    var temp;
    console.log("unshifted array: "+array[1]);
    for (var i = 0; i < array.length; i++) {

     new_array[i+1]=array[i];
    }
    console.log("shifted array: "+new_array[1])
   return new_array; //you cant shift the array by a single array, you have to create a new one.
  }
  function highestProfit(array){
    min=array[0];
    profit=0;
    for (var i = 0; i < array.length; i++) {
      if (array[i]<min){
        min=array[i];
      }
      else if (array[i]-min>profit){
        profit=array[i]-min;
      }
    }
    console.log("profit is:"+profit);
    return profit;
  }
