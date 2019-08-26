const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

const name = beatles.members[1].name;
const history = beatles.history.formed;
const history2 = beatles.history.disbanded;
const born = beatles.members[1].birth;
const tour = beatles.albums[3];
console.log(`${name} was in the Beatles from ${history} to ${history2}. He was born in ${born}. He contributed heavily to the ${tour}`);

/* Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. 
He contributed heavily to the Magical Myster Tour Album. */





/* Lightning Exercises Empire State Building
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

dot notation 
console.log(`Dimensions of the Empire State Building
            Stories: ${empireStateBuilding.stories}, 
            Height: ${empireStateBuilding.height}, 
            Square Feet: ${empireStateBuilding.squareFeet}, 
            East West: ${empireStateBuilding.eastWestLength}, 
            North South: ${empireStateBuilding.northSouthLength}`); 

bracket notation 
console.log(`Other Attributes
   Address: ${empireStateBuilding["address"]}
   Construction Date: ${empireStateBuilding["constructionDate"]}
   Cost: ${empireStateBuilding["cost"]}
   Owner: ${empireStateBuilding["owner"]}
   Architect: ${empireStateBuilding["architect"]}`); */

/*
Nashville Software School Arrays
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

const partTeach = nashvilleSoftwareSchool.instructors.partTime;
const fullTeach = nashvilleSoftwareSchool.instructors.fullTime;

for (let i = 0; i < partTeach.length; i++) {
    console.log(partTeach[i])
};

for (let i = 0; i < fullTeach.length; i++) {
    console.log(fullTeach[i])
};

console.log(fullTeach[4], partTeach[0]); 
*/