const str=
'3\n'+
'sam 99912222\n'+
'tom 11122222\n'+
'harry 12299933\n'+
'sam\n'+
'edward\n'+
'harry\n'+
'tom';
const tempArray = str.split("\n");
const entriesLength = tempArray.splice(0, 1);
const queries = tempArray.splice(entriesLength); 
for (let i = 0; i < entriesLength; i++) {
  tempArray[i] = tempArray[i].split(" ");//split the names from the phones to prepare for mapping
};
let phoneBookMap = new Map(tempArray);//turn the array into a map

for (var i = 0; i < queries.length; i++) {
    if (phoneBookMap.has(queries[i])) {//check if the qeury (name) exists in the phone book 
        console.log(queries[i] + "=" + phoneBookMap.get(queries[i]));
    } else {
        console.log("Not found");
    }
};