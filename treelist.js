// function Djikstra(str1,str2){
//   var start_node=str1;
//   var end_node=str2;
//   var graph1={
//     vertex:["A","B","C","D","E","F","G","H"],
//     edge:
//     [
//       ["A","B",8],
//       ["A","D",5],
//       ["A","C",2],
//       ["B","D",2],
//       ["C","D",2],
//       ["C","E",5],
//       ["D","E",1],
//       ["D","G",3],
//       ["D","F",6],
//       ["B","F",13],
//       ["F","G",2],
//       ["G","H",6],
//       ["F","H",3]
//     ]
//
// }
// function giveValue(array, current_node){
//   var obj={};
// for (var i = 0; i < array.length; i++) {
//   var current=array[i];
//   for (var j = 0; j < 3; j++) {
//     if (current[j]==current_node){
//       if(j==0){
//        obj={node_name:current[1], value:current[2]};
//        return obj;
//       }
//       else if (j==1){
//         obj={node_name:current[0], value:current[2]};
//         return obj;
//       }
//     }
//   }
// }
// }
// Djikstra.prototype.findPath=function(val){
//   var min=val;
//   var previous_node="x";
//   var current_node=val;
//   var i=0;
//   var storage_row={
//     x:[0,0,0,0,0,0,0,0],
//     A:[0,0,0,0,0,0,0,0],
//     B:[0,0,0,0,0,0,0,0],
//     C:[0,0,0,0,0,0,0,0],
//     D:[0,0,0,0,0,0,0,0],
//     E:[0,0,0,0,0,0,0,0],
//     F:[0,0,0,0,0,0,0,0],
//     G:[0,0,0,0,0,0,0,0],
//     H:[0,0,0,0,0,0,0,0]
//   };
//   while(true){
//
//     while (i<this.vertex.length){
//       current_node=min;
//       var obj=giveValue(storage_row,current_node);
//       storage_row[this.graph1.vertex[current_node]][i]=storage_row[previous_node][i]+obj.value
//       current_node=obj.current_node;
//       previous_node=current_node;
//       i++;
//
//     }
//     //var min=findMinNode(storage_row);
// }
//
//
//
//
//
//
//
//
//
// }
// //https://www.youtube.com/watch?v=5GT5hYzjNoo&t=83s
// //var djikstra= new Djikstra("A","F");
// //djikstra.findPath();
