let a = new Array(91,7,4,8,3,9,3,83,12,56)
document.getElementById("arr1").innerHTML += a;
a.sort((a,b)=>{
    return b-a;
});
document.getElementById("arr2").innerHTML += a;