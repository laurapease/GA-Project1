const mongoose = require('mongoose');
// const Comment = require('./models/Comment.js');
// const Place = require('./models/Place.js');

//Models have been required into this situation.

const db = require('./models/');

/*Seeder Setup -------------------------------------------------------------------------- */

const { Seeder } = require('mongo-seeding');
const config = {
  database: 'mongodb://localhost:27017/OTBP',
  dropDatabase: true,
};

const seeder = new Seeder(config);

const connectionString = 'mongodb://localhost:27017/OTBP';
mongoose.connect(connectionString, {

    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,

});

mongoose.connection.on('connected', () => {
  console.log('MongoDB has successfully connected.');
});

mongoose.connection.on('error', (error) => {
  console.log(`MongoDB connection error: ${error}`) ;
});




const placeSeed = [
    
    {name: "Tokyo",
     country: "Japan",
     continent: "Asia",
     image: 'https://i.imgur.com/2ELSYFH.jpg',
     comments: [],
     },

       {name: "Barcelona",
     country: "Spain",
     continent: "Europe",
     image: 'https://i.imgur.com/xnnjoy1.jpg',
     comments: [],
     },

       { name: "Paris",
     country: "France",
     continent: "Europe",
     image: 'https://i.imgur.com/w5L2bo8.jpg',
     comments: [],
    },

      { name: "New Orleans, LA",
     country: "United States",
     continent: "North America",
     image: 'https://i.imgur.com/VU2sJbN.jpg',
     comments: [],
     },

      { name: "Hawaii - Big Island",
     country: "United States",
     continent: "North America",
     image: 'https://i.imgur.com/omWct59.jpg',
     comments: [],
     },

      { name: "Rome",
     country: "Italy",
     continent: "Europe",
     image: 'https://i.imgur.com/NkEVP0a.jpg',
     comments: [],
    },

         { name: "Venice",
     country: "Italy",
     continent: "Europe",
     image: 'https://i.imgur.com/ArVxP1p.jpg',
     comments: [],
        },

        {  name: "Amsterdam",
     country: "Netherlands",
     continent: "Europe",
     image: 'https://i.imgur.com/wKZAjOX.jpg',
     comments: [],
      },

           { name: "Nusa Ceningan",
     country: "Indonesia",
     continent: "Asia",
     image: 'https://i.imgur.com/EqgE6Yo.jpg',
     comments: [],
      },

       {    name: "Ischia",
     country: "Italy",
     continent: "Europe",
     image: 'https://i.imgur.com/ran1MKb.jpg',
     comments: [],
    },

    {name: "Pozo de Jacinto",
    country: "Puerto Rico",
    continent: "Caribbean",
    image: "/images/jacinto_vaca.jpg",
    comments: [],
    },

    {name: "Illiers-en-Combray",
    country: "France",
    continent: "Europe",
    image: "/images/proust_house.jpg",
    comments: [],
    },

    {name: "Zillertal",
    country: "Austria",
    continent: "Europe",
    image:"/images/zillertal.jpg",
    comments: [],
    },

    {name: "The Crown",
    country: "USA",
    continent: "North America",
    image: "/images/the_crown.jpg",
    comments: [],
    },

    {name: "Outer Banks",
    country: "USA",
    continent: "North America",
    image: "/images/nags_head.jpg",
    comments: [],
    },

    {name: "Florence",
    country: "Italy",
    continent: "North America",
    image: "/images/florence.jpg",
    comments: [],
  },
    {name: "Seattle",
    country: "PNW",
    continent: "The Woods",
    image: "/images/fremont_troll.jpg",
    comments: [],
  },

    {name: "Elphinstone",
    country: "Australia",
    continent: "Australia",
    image: "/images/elphinstone.png",
    comments: [],
  },

    {name: "Taradale Viaduct",
    country: "Australia",
    continent: "Australia",
    image: "/images/taradale_viaduct.jpg",
    comments: [],
  }
]


const commentSeed = [{

    firstName: "Laura",
    body: "I would venture to say that Tokyo (and Japan in general) is the coolest place on Earth. You can visit cat cafes if you're in need of a snuggle, buy the most amazing ramen you have ever had from a vending machine and even help make your own mochi. Insider tip: It is not easy...think churning butter, but more violent...",      
    place: "Tokyo"
    },

    {
    firstName: "Laura",
    body: "Want to stumble upon bulldings that look like they're melting?  Barelona is the place for you. If you'e lucky, you'll also stumble upon some excellent vintage shops and vibrant outdoor markets hidden thoughout the city.",
    place: "Barcelona"
    }, 

    {
    firstName: "Laura",
    body: "Did you ever wonder why Paris has so few skyscrapers and tall buildings? It's beacuse the ground below the city is literally full of holes and can't support buildings of that weight. It was once mined for construction stone, and tunneled out to be used as catacombs. Aother fun fact, Paris has public water fountains with not only still water, but also sparkling water. That's right. You can fill up your water bottle with sparkling water throughout the public fountains in the city.",
    place: "Paris"
    }, 


    {
    firstName: "Laura",
    body: "New Orleans has perhaps the most distinctive culture of all of the cities in United States. The French inspirations in the arcitecture give the city a much more classical feel than one would expect from it's young age.",
    place: "New Orleans, LA"
    }, 

    {
    firstName: "Laura",
    body: "Ever wonder what it is like to live on an active volcano? We have your answer here. The hype about the Hawaiian islands is true, but you need to venture away from Oahu to truly experience the islands like a local. The Big Island has excellent diving in Kohala, hidden beaches like the black sand 'Mermaid Beach' on the south of the island, and active volcanoes.",
    place: "Hawaii - Big Island"
    },

    {
    firstName: "Laura",
    body: "The path to the modern world started here, and you can feel that history in every step. Walk around a corner and you may find the ruins of structures built centuries ago, or a lovely modern gelato stand. One could walk around this city for days, and still not see everything it has to offer.",
    place: "Rome"
    },

    {
    firstName: "Laura",
    body: "Ahhhhh, Venice. There isn't much else too say about Venice except that it is magic. Cars aren't allowed on the island, but that's ok. I could walk around this city for days.Take a boat ride from the island of Venice to Burano and find a rainbow of buildings in lieu of boring white houses. Take a boat to Murano and discover brilliant hand blown glass sculptures. Venice is a place everyone needs to see in their lifetime.",
    place: "Venice"
    }, 

    {
    firstName: "Laura",
    body: "Another example of a place without cars: welcome to Nusa Ceningan. To reach the island, one must take a ferry from Bali on the mainland, then a van ride across the island of Nusa Lembignan to the Yellow Bridge, then a scooter across the bridge to the island of Nusa Ceningan itself. If you ever want to truly feel off the grid, this is the place for you.",
    place: "Nusa Ceningan"
    },

    {
    firstName: "Laura",
    body: "Another city filled with canals.",
    place: "Amsterdam"
    },

    {
    firstName: 'Laura',
    body: 'You can find he volcanic island of Ischia close to the more touristy island of Capri. Similar experience with far fewer people. Try the thermal spas!',
    place: "Ischia"
    },

    {
      firstName: "Elias",
      body: `Pozo means 'well' in English. This spot belongs to the ghost of Jacinto, a vaquero whose cow, jolted by a storm, dove towards this keyhole of sea. Suddenly, tied to Jacinto from its cow-neck to his man-waist, the cow was swallowed by a wave and fell into the water. If you stand just at the lip of the rock and call out 'Jacinto, dama la vaca!' three times, Jacinto in the frothing water might roar up and pull you in.`,
      place: "Pozo de Jacinto"
    },

    {
      firstName: "Elias",
      body: 'I was in Paris on a travel scholarship, and took a couple trains to go visit Illiers-en-Combray, formerly just Illiers, now -en-Combray to honor Marcel Proust, who wrote about the small town. I had an apricot tart and climbed over some fences. This is his house!',
      place: 'Illiers-en-Combray'
    },

    {
      firstName: "Elias",
      body:"Zillertal is a town in the Austrian Alps. It is super green and looks like where shepherds would have lived. I hiked to a peak here called Hamburg when I was traveling alone. It was 7 hours and I was defs crazy by the end, but it was also my 21st birthday, so that felt cool.",
      place: "Zillertal"
    },

    {
      firstName: "Elias",
      body:`The Crown is one of the best spots in Baltimore. It is the first, the last, the only Crown. I used to host a reading series here called HEY YOU COME BACK before the pandemic </3.`,
      place: "The Crown"
    },

    {
      firstName: "Elias",
      body:`Me and some friends went to the Outer Banks, those barrier islands off the coast of North Carolina, a few years ago. I made up a game called Sandpiper and here's the rules: You have to stand in the wet part of the sand by the tide, bend 90 degrees, and stare down at the sand. When you see the tide coming up at you, run backwards still looking down and try to outpace the wave. When it goes back to the water, you have to chase it back in. And back n forth until forever.`,
      place: "Outer Banks"
    },

    {
      firstName: "Elias",
      body: "Super freakin big and cool.",
      place: "Florence"
    },

    {
      firstName: "Elias",
      body:"Seattle is not, like, a place people ~travel to~ but I like the Fremont troll. When I moved to Seattle, this guy greeted me and I appreciate him for that.",
      place: "Seattle"
    },

    {
      firstName: "Elias",
      body: "The noble Taradale Viaduct! This is only one support of the few necessary to hold the mighty viaduct aloft.",
      place: "Taradale Viaduct"

    },

    { 
      firstName: "Elias",
      body: `My fiance's parents live in Elphinstone. I met them this past November, and spent a lot of time walking around the area.`,
      place: "Elphinstone"
    }
];

// db.Comment.collection.drop();
// db.Place.collection.drop();

// db.Comment.collection.insertMany(commentSeed, (err, data) => {
//   if (err) return console.log(err);
//     console.log(data);
//   });

//   db.Place.collection.insertMany(placeSeed, (err, data) => {
//     if (err) return console.log(err);
//     console.log(data);

//   });


  // db.Comment.find({}, (err, allComments) => {
  //   allComments.forEach(function(comment){
    
  //     db.Place.findOne({name: comment.place}, (err, foundOne) => {
  //       if (err) return console.log(err);
       
  //       foundOne.comments.push(comment._id);
  //       foundOne.save((err, savedPlace) => {
  //         if (err) return console.log(err);
         
  //         console.log(savedPlace);
  //       });

  //       console.log(foundOne.comments);

  //     });
  //   });
  // });



module.exports = {placeSeed, commentSeed}
