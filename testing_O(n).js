  function sortNumber(a,b) {
      return a - b;
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function int(arg){
    return  parseInt(arg);
  }
  function(){
    var a=5
  }
  function(){
    return nesto:
    if (a=="2"){
      if(a==""){
      }


    }
  }
  if (a=="2"){



  }
  function eliminateDuplicates(){
    arr=[1,2,5,6,2,7,10,23,23,14,23,11,10,1,3]
     var arr_2=[];
     obj={};
     for (var i = 0; i < arr.length; i++) {
       obj[arr[i]]="";
     }
     for (key in obj){
       console.log(key);
     }
  }
  function findAllDuplicates(array){
    var obj={}
    var counter=0;
    var new_arr=[];
    for (var i = 0; i < array.length; i++) {
       if (obj[array[i]]==array[i]){
         new_arr.push(array[i]);
         counter++;
       }
        obj[array[i]]=array[i];
    }
    return {"duplicate_array":new_arr,"counter":counter};
  }

  console.log(findAllDuplicates([1,1,1,14,3,5,5,7,2,5,1,8,9,12]));

  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function mergeSorted(){
    arr2=[4,6, 9,9,9, 20, 56, 120]; arr1=[1, 2, 8, 25, 45, 70];
    arr=[];
    i=0;
    j=0;
    var counter=0;
    temp_arr=[];
    //choosse wihch array goes first

    console.log("array1:"+arr1);
    console.log("array2"+ arr2);

    while (true){

      if (arr1[j]<arr2[i]){
        arr.push(arr1[j]);
        j++;
        if (j == arr1.length){
          arr=arr.concat(arr2.slice(i,arr2.length))
          break;
        }
      }
      else{
        arr.push(arr2[i]);
        i++;
        if (i == arr2.length){
         arr=arr.concat(arr1.slice(j,arr1.length))
          break;
        }
      }
    }
    console.log(arr)
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function ericsson_1_number(bin,dec){
    bin=bin.toString();
    var sum_dec=0, dif=0, hex=0, temp=[];
    for (let i = 0; i < bin.length; i++) {
     if(int(bin[i])!=0){
      sum_dec+=Math.pow(2,i);
      }
    }
    dif=sum_dec-int(dec);

  while (int(dif)!=0){
    hex=int(dif)%16; //1
    temp.push(hex.toString(16));
    dif=int(dif)/16;
    console.log(hex);
  }
  console.log(temp.reverse());

  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function findMax(arr){
    var i=0;
    console.log(arr);
    var max=arr[0];
    var second_max=0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]>max){
        second_max=max;
        max=arr[i];
      }
      else if (arr[i]>second_max && arr[i]!=max){
        second_max=arr[i];
      }
    }
    console.log("max is: "+max);
    console.log("second max is: "+second_max);
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function armstrongNum(num){
  var sum=0;
   for (var i = 0; i < num.length; i++) {
       sum+=Math.pow(parseInt(num[i]),3);

   }
   if (sum===parseInt(num)){
     console.log("Armstrong num");
     return true;
   }
   else{
     console.log(" NOT Armstrong num");
     return false;
   }
  }
  function palindrome(stringy){
    var j=stringy.length-1;
    for (var i = 0; i < stringy.length; i++) {

      if (stringy[i]!=stringy[j]){
         return false;
      }
      j--;
    }
    return true;

  }
  console.log(palindrome("level"));

  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function Palindrome(value){
     var reverse="";
     for (var i = value.length-1; i >=0; i--) {
         reverse+=value[i];
     }
     if (reverse==value){
       console.log("palindrome");
        return true;
     }
     else{
       console.log("Not Palindrome");
       return false;
     }
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function findMissingNum(){
    var arr=[];
    var counter=1;
    //populate array
    for(var value = 1; value <= 100; value++) {
      arr.push(value);
    }
    //remove number 30
    arr.splice(29,1) //30 out
    for (var i = 0; i < arr.length; i++) {
      if (counter!=arr[i]){
         console.log("missing number is: "+counter)
         break;
      }
      counter++;
    }
     return counter;
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function banksoftFirst(num){
     // example: 247521 1-flag
  var sum=0, remainder=0;
     for (var i = 0; i < num.length; i++) {
         //neparan
         if ((i+1)%2!=0){
           sum+=parseInt(num[i]);
         }
         //paran
         else{
            sum+=parseInt(num[i])*2;
         }
     }
     remainder=sum%10;
     return (num+remainder);
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function GetLargestContiguousSum_second(array){
    array=[-10, 2, 3, -2, 0, 5, -15];
    var sum=0;
    var max_sum=0;
    for (var i = 0; i < array.length; i++) {
        sum+=array[i];
        if (sum > max_sum){
          max_sum=sum;
        }
        else if (sum<0){
          sum=0;
        }
    }
    console.log(max_sum)
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function findNearestNumber(input){
    array=[22, 2, 3, 32, 0, 5, 23, 74, 23, 17, 45, 49, 67];
    var obj={}, min=0, new_arr=[], min=10000, index=-1;;
    for (var i = 0; i < array.length; i++) {
      if ((array[i]-input) < 0){
        obj[i]=(array[i]-input)*(-1);
      }
      else{
        obj[i]=(array[i]-input);
      }
    }
    for (var i = 0; i < array.length; i++) {
        if(obj[i]<min){
          min=obj[i];
          index=i
        }
    }
    console.log(array[index]);
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function palindromeQuick(input) {
     return (input.split('').reverse().join('')===input);
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function swapIt(input,i,k){
    string=input.split('');
    temp=string[i];
    string[i]=string[k];
    string[k]=temp;
    return string.join('');
  }
  function permutateNum(result,k){
    //input=abc bac acb,,  bca cab cba , svaka nova napravljena dolazi opet na permutaciu to je cilj!
   if (k==3){
     console.log(result);
     return;
   }
   for (var i = k; i < 3; i++) {
    result=swapIt(result,i,k);
    permutateNum(result,k+1);
    result=swapIt(result,i,k);
   }
  }

  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function reverseString(str){
    return (str?reverseStringRecursion(str.substring(1))+str.charAt(0):str)
  }
    //  if (!str){
    //     return str;
    //  }
    //  else{
    //     return reverseStringRecursion(str.substring(1))+str.charAt(0); //da tu zadnje vraca nejde u base case
    //  }
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
  function addTillNumber(num){
    if (num==10){
      return num;
    }
    else{
      return addTillNumber(num+1)+num;
    }
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function loopArrayInArray(array,cnt){
    for (var i = 0; i < array.length; i++) {

        if (array[i].constructor===Array){
          loopArrayInArray(array[i],cnt)
          ++cnt;

        }
    }
    if (cnt===0)
    return null;
    else{
      return cnt;
    }
  }
  var counter=0;
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function recursionEightBit(array,k){
//do  a for loop and then assign a 1 and then finish it with an if at the begin and then let it enter again the whole for loop
    if (k==array.length){
      console.log(array);
        counter+=1; //ovo mozemo i sa closure rijesiti
      console.log(counter);
      return;
    }
    for (var i = 0; i <= 1; i++) {
        array[k]=i;
        recursionEightBit(array, k+1)
        // console.log(array+ " counter: "+counter);
    }
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function factorialRecursion(num){
    if (num===1){
      return num;
    }
    else{
      return factorialRecursion(num-1)*num;
    }

  }
  //num is the position
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function fibonnaci(num){
    if(num == 0)
      return 0;
    else if(num == 1)
      return 1;
    else{
      return fibonnaci(num-2)+ fibonnaci(num-1);
    }
  }
  //17,8;; 9,4
//27,18
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
  function GCD(m,n,n2){
    if (m%n2==0 && n%n2==0){
      return n2;
    }
    else{
        GCD(m,n,n2-1);
    }
  }
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  function GCD_2(m,n){  //20,4
   if (n==0){
      return m;
   }
   else{

      return GCD_2(n, m%n)  //20,4
   }

  }
  function bubbleOptimized(array){
    var sorted=true, temp=0, counter=0;

     for (var i = 0; i < array.length; i++) {
       sorted=true;
       for (var j = 0; j < array.length; j++) {
          counter++;
         if (array[j]>array[j+1])
            {
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                sorted=false;
            }
       }
       if (sorted){
         break;
       }
     }
     return array;

  }
  function binarySearch(){

  }

  function selectionSort_one(arr,new_arr,min,index){
    get_index=0;
    for (var i = 0; i < arr.length; i++) {
       if (arr[i]<min){
          min=arr[i];
          get_index=i;
       }
    }
    new_arr.push(min);
    arr[get_index]=min=1000;
    if (index<arr.length-1)
    {
      return selectionSort(arr,new_arr,min,index+1);
    }
    return new_arr;

  }
  function selectionSort_two(arr,min,index){
    var temp=0;
    var get_index=0;
    for (var i = index; i < arr.length; i++) {
       if (arr[i]<min){
          min=arr[i];
          get_index=i;
       }
    }
    temp=arr[index];
    arr[index]=min;
    arr[get_index]=temp;
    min=1000;
    if (index<arr.length-1)
    {
      return selectionSort_two(arr,min,index+1);
    }
    return arr;

  }
  function permutateAlphabet(input){
    //[12258] --->  12,2,5,8 ;;; 1,22,5,8 ;;; 1,2,25,8 ;;; 12,2,25,8 ;;; 1,2,2,5,8
    //uzmi uvijek jedan element i onda ostalo iz permutiraj
    //1 2 2 5 8;;; 1 22 5 8;;; 1,2 25,8;;; 1 22 58;;;    122589  12 2 58 9;; 12 22 58
    //  kad si na 25 onda ti je ostalo s lijeva 1,2 a s desna 8 12 sizpermutaraj tak da uzme 1,2 pa nakon toga 12
    for (var i = 0; i < input.length; i++) {

    }

  }
  function insertionSort_one(arr,index){
  //  [7,2,4,1,5,3] 0
  //  [2,7,4,1,5,3] 1
  //  [2,4,7,1,5,3] 2
  //  [1,2,4,7,5,3] 3
    var get_index=0, temp, new_var, counter=0;;
    var new_arr=[];
    while(true){
      new_arr=arr;
     for (let i=index; i>=0; i--) {
         counter++;
        if (arr[index] < arr[i]){
          get_index=i;
          temp=arr[index]; //2
        }

     }
     new_arr.splice(index,1);
     arr.splice(get_index,0,temp);

    index++;
    if (index==arr.length)
    {
      console.log("array is: "+arr)
      console.log("Amount is:"+counter);
      break;
    }
 }

  }
  function insertionSort_two(arr,index){
  //  [7,2,4,1,5,3]
  //  [2,7,4,1,5,3]
  //  [2,4,7,1,5,3]
  //  [1,2,4,7,5,3]
    var get_index=0, temp, new_var, counter=0;
    var new_arr=[];
    var sorted=true;
   while (true){
    for (var i = index; i > 0; i--) {
        counter++;
      if (arr[i]<arr[i-1]){
          temp=arr[i-1];
          arr[i-1]=arr[i]
          arr[i]=temp;
      }
    }
    if (index==arr.length-1){
      console.log("array is: "+ arr);
      console.log("Amount is:"+counter);
      break;
    }
  ++index;
  }

}
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
  function popArray(array){
    var new_array=[];
    temp= array[array.length-1];
    for (var i = 0; i < array.length-1; i++) {
      new_array[i]=array[i];
    }
    array=new_array;
    return temp;
  }
  function unshiftArray(array){
     var new_array=[];
     temp= array[0];
     for (var i = 0; i < array.length-1; i++) {
       new_array[i]=array[i+1];
     }
    array=new_array;
    console.log(array);
    return temp;
  }
  //test for first and last element
  function insertAtIndex(array,index,element){
     var new_array=[];
     for (let i = 0; i < index; i++) {
       new_array[i]=array[i];
       if (i===index-1){
         new_array[index]=element;
       }
     }
     for (let i = index+1; i <= array.length; i++) {
         new_array[i]=array[i-1];
     }
    array=new_array;
    console.log(array);
  }
  function removeAtIndex(array,index){
     var new_array=[];
     for (let i = 0; i < index; i++) {
       new_array[i]=array[i];
     }
     for (let i = index; i < array.length-1; i++) {
       new_array[i]=array[i+1];
     }
     array=new_array;
     console.log(array);
  }
  function pushElement(array,element){
     var new_array=[];
      for (var i = 0; i < array.length; i++) {
        new_array[i]=array[i];
        if (i===array.length-1){
          new_array[i+1]=element;
        }
      }
      array=new_array;
      console.log(array);
  }
  function rightCircular(array,count){
    var new_array=[];
    if (count%array.length!==0)
    {
     count=count%array.length;
    }
    else{
      count=array.length;
    }
    var index=null;
    for (var i = 0; i <array.length; i++) {
      var result=i-count;
      if (result<0){
        index=array.length + (result);
      }
      else{
        index=result;
      }
       new_array[i]=array[index];  //-4,-3,-2,-1,0 ,1
    }
  }
  function leftCircular(array,count){
      //[7,2,4,1,5,3]  //  4,5,0,1,2,3
    var new_array=[];
    var index=count;

    if (index%array.length!==0)
    {
     index=index%array.length;
    }
    else{
      index=0;
    }
    for (var i = 0; i < array.length; i++) {
        new_array[i]=array[index];
      if (index===array.length-1){
        index=-1;
      }
      index++;
    }
    console.log("array is: "+ array);
    array=new_array;
    console.log("array is: "+ array);
  }
  function rightShift(array,count){
    var new_array=[];
    var j=0;
    for (var i = count; i < array.length; i++) {
      new_array[i]=array[j];
      console.log(array[j]);
      j++;
    }
     array=new_array;
  }
  function leftShift(array,count){
    //[7,2,4,1,5,3]
    var new_array=[];
    for (var i = count; i < array.length; i++) {
      new_array[i]=array[i];
    }
     array=new_array;
     console.log("array is: "+ array);
  }
  function mergeArray(arr1,arr2){
    var new_array=[];
    var i=0,j=0,index=0;
    while(new_array.length!=(arr1.length+arr2.length)-1){
      if (arr1[i]<arr2[j]){
        new_array.push(arr1[i]);
        i++;
      }
      else{
        new_array.push(arr2[j]);
        j++;
      }
    }
    return new_array;
  }
  function binarySearch(array,left,right, element){
    var middle=right-left/2;
    var flag=false;

    if (array[middle]===element){
      flag=true;
    }
    else if (element < array[middle]){
       return binarySearch(array,0,middle-1,element);
    }
    else if(element > array[middle]){
       return binarySearch(array,middle+1,array.length-1,element);
    }
    return flag;

  }
  function linearSearch(array,element,index){

     if (index==array.length){
       return false;
     }
     if (array[index]===element){
      return true;
    }
    else {return linearSearch(array,element, index+1);}

  }
  function removeDups(array){
    obj={};
    for (var i = 0; i < array.length; i++) {
      if (i==Object.keys(obj)){counter++}
       obj[array[i]]="1"
       console.log(Object.keys(obj)[i]);
    }
    console.log(counter)
  }
  var add = (function (array,item) {
      var counter = 0;
      function findArray ()
      {
        for (var i = 0; i < array.length; i++) {
           if(array[i]===item){
             counter++;
             console.log(counter);
           }
           if (array[i].constructor===Array){
             findArray(array[i],item);
           }
        }
      }
  });
  function findArray(array, item,counter) {
    var counter=0;
      for (var i = 0; i < array.length; i++) {
          if (array[i] == item){
              counter++;
          }
          else if (array[i].constructor===Array) {

              counter += findArray(array[i], item, counter);
          }
      }
      return counter; 
  }
  function numOccurencesRecursive(arr, val) {
  if(!arr.length) return 0;
  return (arr[0] === val) + numOccurencesRecursive(arr.slice(1), val);
}
