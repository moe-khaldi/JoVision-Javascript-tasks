const button=document.querySelector(".button");
const output=document.querySelector(".output");


button.addEventListener("click", function() {
    arrayFunction();
});

function arrayFunction(){
    const array=[];
    for(let i=0;i<=100;i++){
    array.push(i);
    sum=0;
    for(let j=0;j<array.length;j++){
        sum+=array[j];
    }
}
    output.textContent = array.join(", ");
    output.textContent += "\nThe sum of the array is: " + sum;
    console.log(array);
    console.log("The sum of the array is: " + sum);

}

