const mongoose = require('mongoose');
const {Weeb} = require('../database/index.js');

const fetch = require("node-fetch");

let resultData;
let saveCounter = 0;



const url = ["https://ghibliapi.herokuapp.com/films"]


url.map(async (url) => {
  try{
    const response = await fetch(url);
    const json = await response.json();
    resultData = [...json];

    for (let i = 0; i < resultData.length; i++) {

      var Weeb = new Weeb({
        title: resultData[i].title,
        description: resultData[i].description,
        director: resultData[i].director,
        producer: resultData[i].producer
      })

      Weeb.save(() => {
        console.log('saved a film!' + Weeb)
        saveCounter++;

        if (saveCounter === resultData.length) {
          mongoose.disconnect()
          .then(()=> console.log('saved all data successfully and disconnected from mongoDB'))
          .catch(error => console.log(error));
        }
      })
    }
  }
  catch (error) {
    console.log(error);
  }
})

