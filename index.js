let count=0
let countel=document.getElementById("count-el")
let resultel=document.getElementById("result")
let totalcountel=document.getElementById("total-count")
let total=0
function increment(){
    count+=1
    total+=1
    countel.textContent =count
}
function save(){
    resultel.textContent += count+"-"
    count=0
    countel.textContent=count
    totalcountel.textContent="Total people entered in are:"+total
}
function reset(){
    count=0
    total=0
    totalcountel.textContent=""
    resultel.textContent="Previous Entries:"
    countel.textContent="0"
}