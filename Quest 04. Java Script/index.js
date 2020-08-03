'use strict';

let color=["blue", "yellow", "pink"];
let type=["t","p","s"]
let gender=["male", "female"];
let size=["small size", "large size"];

var items=[];


function randomitem(a) {
    return a[Math.floor(Math.random()*a.length)];
}

for (let i=0; i<color.length*type.length*gender.length*size.length; i++){
    items.push({color: randomitem(color), type: randomitem(type), gender:randomitem(gender), size: randomitem(size)});
}
Array.from(new Set(items));

function print(){
    for (i=0; i<items.length; i++){
        document.getElementById("logo").innerHTML = items[i];
        }
    }


function filter(id) {
    return items.filter((item, _index) => 
    ((item.type === id) || (item.color === id)));
}

function displayitems(ids){
    var selecteditems=document.getElementById("items");
    selecteditems.innerHTML="";
    for (let item of ids){
        selecteditems.innerHTML += "<div class = \"item_list\"><img src=\"imgs/" + item.color + "_" + item.type + ".png\" alt=\"t\" class = \"item_img\"><div class = \"item_info\">" +item.gender+", " + item.size + " </div></div>\n";
    }
}


displayitems(items);
  
