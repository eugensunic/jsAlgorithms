  function sortNumber(a,b) {
    return a - b;
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function int(arg){
    return  parseInt(arg);
  }
  function findDuplicates(){
    arr=[1,2,5,6,2,7,10,23,23,14,23,11,10,1,3] //dup: 1,2,23,10,
    duplicate_arr=[];
    for (var i = 0; i < arr.length; i++) {
      for (var j = i+1; j < arr.length; j++) {
        if (arr[i]==arr[j]){
          duplicate_arr.push(arr[j]);
          arr.splice(j,1);

        }
      }
    }
    console.log("duplicate array is: "+duplicate_arr);
    console.log("non duplicate array is: "+ arr);
    return arr;
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function ericsson_2_leap_First(year){
    date= new Date(year,2,0).getDate()==29;
    console.log(date);
  }
  function isLeap(year){
    return new Date(year,1,29).getDate()==29;
  }
  function ericsson_2_leap_Second(year){
    date= new Date(year,1,29).getDate()
    if (date=="29"){
      console.log("Leap year exists");
    }
    else{
      console.log("Leap year does not exist");
    }


  }
  function semiPrimeNum(limit){
    var counter=0;
    arr=[];
    for (var i = 1; i < limit; i++) {
      for (var j = 1; j < i; j++) {
        if (i % j==0){
          counter++;
        }
      }
      if (counter==1){
        arr.push(i);
      }
      counter=0;
    }

    var arr_pro=[];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j <arr.length; j++) {
        arr_pro.push(arr[i]*arr[j]); //you need to sort that out but..
      }
    }
    arr_pro=arr_pro.sort(sortNumber);
    console.log(arr_pro);
    for (var i = 1; i < arr_pro.length; i++) {
      if (arr_pro[i]==arr_pro[i-1]){
        arr_pro.splice(i,1);
      }
    }
  }

  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function findMax_rec(arr, i, max, sec_max){
    if (i==0){
      console.log(arr);
    }
    if (i<=arr.length-1){

      if (arr[i]>max){
        max=arr[i];
        findMax_rec(arr,i+1,max,sec_max);
      }
      else if (arr[i]>sec_max && arr[i]!=max){
        sec_max=arr[i];
        findMax_rec(arr,i+1,max,sec_max);
      }
      else{
        findMax_rec(arr,i+1,max,sec_max);
      }
    }
    else{
      console.log(sec_max);
      return;
    }
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function GetLargestContiguousSum(array){
    //array=[-10, 2, 3, 11, 6, 5, -15, 35, -28, 1, 14];
    array=[-10, 2, 3, -2, 0, 5, -15];
    var sum=0;
    var new_arr=[];
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        for (var k = i; k <= j; k++) {
          sum+=array[k];
        }
        new_arr.push(sum);
        sum=0;
      }
    }

    new_arr.sort(function(a,b){ return (a-b)});
    console.log(new_arr);
    console.log("Maximum sum is: "+new_arr[new_arr.length-1]);
  }

  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  //"AAABCABD" //prvi koji se ne ponavlja a to je c
  //“GeeksforGeeks” -->f
  //“GeeksQuiz”--> G
  function findFirstUnique(input){
    flag=false;
    for (var i = 0; i < input.length; i++) {
      for (var j = i+1; j < input.length; j++) {
        if (input[i]==input[j+1]){
          flag=true;
          break;
        }
      }
      if (flag==false){
        console.log(input[i]);
        break;
      }
      flag=false;
    }
  }
  function bubbleSort(){
   array=[16, 2, 77, 40, 12071, 3, 22, 3, 5, 11, 26];
   counter=0;
   console.log("unsorted array is:"+ array);
   for (var i = 0; i < array.length; i++) {
     for (var j = 0; j < array.length-1; j++) {
       counter++;
       if (array[i] > array[j+1]){
           temp=array[i];
           array[i]=array[j+1];
           array[j+1]=temp;
       }
     }
   }
   console.log("Sorted array is: "+array);
   console.log("Counter is: "+counter);
  }
  
  
  
  function getOccurenceFrom1To1000(array)
  {
	  
 // input paramlet array = [1,2,3,4,5,6,7,8,9];
let j = 0;
let counter = 0;
array_occurence = [];

while (j <= 8) {
  for (let i = 0; i < 1000; i++) {
    if (i.toString().indexOf(array[j]) > -1) {
      for (let z = 0; z < i.toString().length; z++) {
        if (array[j] == i.toString()[z]) {
          counter++;
        }
      }

    }
  }
  array_occurence.push(counter);
  counter = 0;
  j++;
}
 return array_occurence;
  }
