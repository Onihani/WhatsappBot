const path = require("path");
const fs = require("fs");

const newAddName = "Stephen";

const newAdDetails = {
  customer: {
    name: "Stephen",
    phone: "233544490828",
  },
  adDetails: {
    type: "IMAGE",
    adText: `
I published my new episode OFF THE NORM PODCAST with *Wy-coff SO*, please check it out.
https://www.podbean.com/pi/pbblog-i5msa-aee095

Podcast Flyer

Join Off the Norm podcast

Download Podbean from Playstore or AppStore 

Search for Off the Norm Podcast 

Click on the Follow button
To receive notifications when we are live

You can also listen to previous messages as well.
      `.trim(),
    adImagePath: "./images/wy-coff-so.jpeg",
    adImageName: "wy-coff so"
  },
  isActive: true
}

// read and append newAdDetails to ads.json
const adsArrayBuffer = fs.readFileSync(path.join(__dirname, "ads.json"));
const adsArray = JSON.parse(adsArrayBuffer.toString())

const adExists = adsArray.find(ad => ad.customer.name == newAddName);

if (!adExists) {
  adsArray.push(newAdDetails);
}

fs.writeFileSync(path.join(__dirname, "ads.json"), JSON.stringify(adsArray, null, 2));
console.log(adsArray);