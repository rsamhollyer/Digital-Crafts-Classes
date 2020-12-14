//MODEL

/* const db = require("./pets")
    This code grabs the data (json in this case)
    and stores it in a variable for use later

    pets = [
        {
            name:"fido",
            owner:"blah",
            uuid:1
        },
        {
            name:"bido",
            owner:"glah",
            uuid:2
        },
        {
            name:"hido",
            owner:"clah",
            uuid:3
        }
    ]
*/

//VIEW

/*
THis is how the data is presented to the client, usually through a broweser. It gets piped in from the controller.

${allPets.map(p =>`<div><a href="/pets/details/${p.uuid}/><h2>${p.name}</h2></a><h3>${p.owner}</h3> </div>`).join("")}

Simple logic is done on this level and it should only include stuff that is organized to be viewed, nothing else.

*/

//Controller
/* 
This level handles the inbetween handoff of the models logic to the views presentation. It does some simpler logic to show the data and render it in a way that can be used.

const viewPets = (req,res)=>{
res.render("pets", {
    partials:{magic stuff},
    locals:{
        allPets:pets,
    }
})
}

This is how the data is further piped from the render function to the view components.
app.get("/pets",controllers.pets)


*/
