console.log("js connected")

const names = ["yerbolat", "syrkhan", "yersultan", "yerkebulan", "adil", "inkar", "yerka", "nana"];
// console.log(names[0])

let collections = document.getElementsByClassName("block");
// console.log(collections)
for(let i = 0; i < 8; i++){
    collections[i].innerHTML = names[i];
    // console.log(collections[i])
    // console.log(names[i])
}

var familyy = ["yerbolat", "yerkebulan", "inkar"]
var friendd = ["adil", "syrkhan", "yerka", "yersultan", "nana"]
var twinn = ["yerbolat"]

 

function family(){
    const onlyFamily = names.filter(isFamily);
    for(let i = 0; i < onlyFamily.length; i++){
        collections[i].innerHTML = onlyFamily[i];
    }
    for(let i = onlyFamily.length; i < collections.length; i++){
        collections[i].innerHTML = "";
    }
}
function friends(){
    const onlyFriends = names.filter(isFriend);
    for(let i = 0; i < onlyFriends.length; i++){
        collections[i].innerHTML = onlyFriends[i];
    }
    for(let i = onlyFriends.length; i < collections.length; i++){
        collections[i].innerHTML = "";
    }
}
function twin(){
    const onlyTwin = names.filter(isTwin);
    for(let i = 0; i < onlyTwin.length; i++){
        collections[i].innerHTML = onlyTwin[i];
    }
    for(let i = onlyTwin.length; i < collections.length; i++){
        collections[i].innerHTML = "";
    }
}

function isFamily(name){
    return familyy.includes(name);
}
function isFriend(name){
    return friendd.includes(name);

}
function isTwin(name){
    return twinn.includes(name);

}