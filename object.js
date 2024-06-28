var  cat = {

    name: "Honey Badger",
    age: 3,
    breed:"mix",
    mewo:  function () {
        alert("meeeeoww")
    },

    owner : { name : 'Ajay' , state:"Karnataka"}


}

var catName = cat.name;
var catOwner = cat.owner.name;

console.log(catOwner + " has a cute catnamed "+ catName);
