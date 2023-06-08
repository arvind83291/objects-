//complex objects
let obj ={
    name:"arvind", age:"25", tech:"JS", laptop:{ram:'2gb',brand:'asus'} 
}
objVal=Object.values(obj.laptop);

delete obj.laptop.brand

//for in loop
for (let i in obj){
     console.log(i,obj[i]);
}

