const path = require("path");
const fs = require("fs");
const venom = require('venom-bot');

let scanRequired = true;
let sessionName = "third-party-customers";

let ukUsed = `
*πUNBEATABLE PRICES ππ..........RUSH HOUR π
PROMOTION   PROMOTION  PROMOTION πππππππ*

Good morning to our loyal costumers of Celebrity Phones π±. These are new models in stock with prices 
Falaaa price π₯π₯π₯π₯π₯π₯π₯
UK π¬π§ USED iPhones
6.            64gb.  -660
6s            32gb     -700
6s            64gb    -770
7              128gb   -950
7plus       32gb    -1350
7plus       128gb  -1500
8              64gb    -1300
8plus       64gb    -1800
8plus       256gb  -2050
X              64gb    -2000
X              256gb  -2300
XR            64gb    -2200
Xs             64gb   -2300
Xs             256gb -2550
Xs  Max.   64gb   -2900
Xs  Max.    256gb -3300
Xs  Max  512gb  -3700
11              64gb.  -3400
11             128gb   -3700
11pro        64gb    -4350
11pro        256gb. -4700
11pro max 64gb   -4800
11pro max 256gb -5200

Contact us on 0540362177 / 0592766862 /  0547370626

NB....*Battery health ranging from 84 to 100*

*QUALITY AND AFFORDABLE*

Please follow this link to my WhatsApp 
β€΅οΈβ€΅οΈβ€΅οΈ
https://wa.me/+233545159463
`;
let brandNew = `
ππ CELEBRITY PHONES  π±π±         
γ°οΈγ°οΈγ°οΈγ°οΈγ°οΈγ°οΈγ°οΈγ°οΈγ°οΈγ°οΈγ°οΈγ°οΈγ°οΈ

π² Get your brand new iPhones and get lots of goodies like airtime , screen protector etc.

π² Brand new πππIphone with 1 year warranty 

πPrice list
βββββββββββ

π¦4s 16g=350π¦
π¦5s 16g=550π¦
π¦5s 32g=700π¦
π¦ip6 16g=800π¦
π¦Ip6 64g=900π¦
π¦Ip6 128g=900π¦
π¦ip6s 16g=980π¦
π¦ip6s 64g=1000π¦
π¦ip6splus 32g....β1200π¦
π¦ip6splus. 64g....1200 π¦ 
π¦iph7plus 32g=1700π¦
π¦ip7plus128g=1850π¦
π¦Ip7 256g=1450π¦
π¦ip8 64g=1700π¦
π¦iph8+ 64GB=2200π¦
π¦Ip8+256g=2600π¦
π¦X 64g=2500π¦
π¦X 256g=2800π¦
π¦XR 128g=3100π¦
π¦XS max64g=3500π¦
π¦XS max 256g=3700π¦
π¦11  64gb = 4200π¦ 
π¦ 11  128gb = 4600 π¦
π¦11pro 64g= 4800π¦
π¦11pro Max 256gb=6600π¦

β±Locate us : @Akuaffo Hall , University of Ghana or Knust Campus 

#cheap and quality phones for you 
Call/WhatsApp:0540362177 / 0592766862

Please follow this link to my WhatsApp 
β€΅οΈβ€΅οΈβ€΅οΈ
https://wa.me/+233545159463
`;
let whatsAppPromo = `
*WHATSAPP BUSINESS PROMOTION - PROMOTE YOUR BUSINESS TO REACH THOUSANDS*
_______

π We know how to make perfect ads that will keep your customers coming back.

π We have over 500+ active whatsapp business groups that gives you access to over 50,000+ audience.

π Our WhatsApp Business Services are designed to help you raise awareness for your company.

π€ΉββοΈLet's start doing business π€

π΄ let's get started
π© wa.me/233592766862

==============
*Marketed by*
Creative Lyfe Advertising
Subscribe to Reach more Customers.
Digital Marketing Experts.
`;
let kumasiX = `
Slightly used iPhone X 
Batter health 91
Back camera glass broken 
A pink line on the screen 
Going for a cool 1800cedis
`;
let kumasiXS = `
Slightly used iPhone XS Max 256
Extremely neat
Battery π:92
True Toneβ
Price: 3000
Location :Kumasi
`;
let newBrandNew = `
ππ*Unbelievable May Promotion* ππ»ππ»

*Original New factory unlocked IPhones *

π²12ProMax 512   8400    π²
π²12 pro max 256  7600   π²
π²12 pro max 128  7200   π²
*
β³Falaaaaaa koraaaaaa*π‘

π²12 pro 256gb  7300  π±
π²12 pro 128gb 6800    π±
π²12 256gb   6300        π±
π²12 128gb  5700          π±
π²11 128gb  4700           π±
π²11 64gb  4400             π±

#*QUALITY AND AFFORDABLE *

Please follow this link to my WhatsApp 
β€΅οΈβ€΅οΈβ€΅οΈ
https://wa.me/+233545159463
`

const imageAds = [
  {
    imageUrl: "./images/cracked-x.jpeg",
    name: "cracked-x",
    caption: `
Slightly used iPhone X 
Batter health 91
Back camera glass broken 
A pink line on the screen 
Going for a cool 1300 cedis
Kumasi

https://wa.me/+233545159463
    `.trim()
  },
  {
    imageUrl: "./images/airpods.jpeg",
    name: "airpods",
    caption: `
*May Falaa Promo*
Original and Affordable Airpods*

*Replica/Clone Airpods*
Airpods 2         Ghs 200
Airpods Pro       Ghs 300

*Origianal Airpods*
Airpods 2         Ghs 900
Airpods Pro       Ghs 1250

https://wa.me/+233592766862
    `.trim()
  }
]

// const adsArrayRef = [
//   {
//     customer: {
//       name: "Cephas",
//       phone: "233549401394",
//     },
//     adDetails: {
//       type: "IMAGE",
//       adText: `
// CYPHER GRAPHIX - 3D SMARTPHONE TRAINING
// ___

// Do you want to learn how to design :
// π 3D logo,
// π Flyers
// π Edit pics 

// And a lot more on your own ? 
// Look nor further, this is the opportunity you've been waiting for. 
// Learn how to do more with your smartphone π± in a 5-day intensive training on 3D SMARTPHONE TRAINING

// Get Started With The Traning
// Training cost only GhΒ’15.

// Start Learning today. Click on the link below β¬ to register
// π wa.me/233549401394?text=Hello%20I%20would%20like%20to%20register%20for%20your%203D%20smartphone%20training.%20My%20name%20is...%20
//       `.trim(),
//       adImagePath: "./images/cypher-graphics.jpeg",
//       adImageName: "cypher-graphics"
//     }
//   }
// ]

const ads = [
  // kumasiX,
  // kumasiXS,
  ukUsed,
  newBrandNew,
  // brandNew,
  whatsAppPromo
]

const restrictedGroups = [
  "Celebrity Phones",
  "ITB Developers",
  "ITBPaymentDev",
  "Website reconstruction",
  "Group 19",
  "Akrosystems Software Dep.",
  "Claire Talk am Gimme ππ½",
  "ITB Developers",
  "π¨βπ»π₯οΈπ COMPSSA FRESH_STUDENT",
  "πΎοΈrganizing And Technical TEAM",
  "CPS 1A Announcementsβπ₯β€οΈ",
  "ICode gh",
  "HUAWEI ICT ACAD.-GCTU(G1)",
  "UGBS - MAIN GROUP L400",
  "BSC ADMIN/MAIN GROUP L400",
  "L400 MARKETING",
  "Products and Business π€πΌ",
  "Fire SP's 4 Royalties",
  "Acts to Sustain DLs",
  "WILTMAX VENTURES",
  "CK blessing Phone Dealers",
  "ICE MAN PHONE'S",
  "Company law Group 2",
  "BENTUM FAMILIES",
  "Member:J.Mckeown Assembly",
  "Edrop π₯Ί",
  "CPS1A βπ₯",
  "C++ GROUP 2π»",
  "UI/UX Dev",
  "HUAWEI ICT ACAD.-GCTU(G1)",
  "GCTU HCNA CLASS 3οΈβ£",
];

// read and a append ads.json
// fs.writeFileSync(path.join(__dirname, "ads.json"), JSON.stringify(adsArrayRef, null, 2));
const adsArrayBuffer = fs.readFileSync(path.join(__dirname, "ads.json"));
const adsArray = JSON.parse(adsArrayBuffer.toString())
// console.log(adsArray);

venom
  .create(
    sessionName,
    (base64Qr, asciiQR, attempts, urlCode) => {
      console.log(asciiQR); // Optional to log the QR in the terminal
      var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

      if (matches.length !== 3) {
        return new Error('Invalid input string');
      }
      response.type = matches[1];
      response.data = new Buffer.from(matches[2], 'base64');

      var imageBuffer = response;
      require('fs').writeFile(
        './qr-code/current-session-qr.png',
        imageBuffer['data'],
        'binary',
        function (err) {
          if (err != null) {
            console.log(err);
          }
        }
      );
    },
    (statusSession, session) => {
      console.log('Status Session: ', statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
      //Create session wss return "serverClose" case server for close
      console.log('Session name: ', session);

      if (statusSession == "notLogged") {
        scanRequired = true;

        // find a way to send qr code to myself
      }
    },
    { logQR: false }
  )
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

async function start(client) {
  const groups = await client.getAllChatsGroups();

  console.log(groups.length);

  function advertiseInGroups(groups) {
    groups.forEach(async group => {
      if (!restrictedGroups.includes(group.name) || !group.isReadOnly) {
        if (group) {
          // adsArray.forEach(async ({ customer, adDetails, isActive }) => {
          //   if (isActive) {
          //     if (adDetails.type == "IMAGE") {
          //       await client.sendImage(
          //         group.id._serialized,
          //         adDetails.adImagePath,
          //         adDetails.adImageName,
          //         adDetails.adText
          //       )
          //         .then((result) => {
          //           console.log('Result: ', result); //return object success
          //         })
          //         .catch((erro) => {
          //           console.error('Error when sending: ', erro); //return object error
          //         });
          //     } else if (adDetails.type == "TEXT") {
          //       await client
          //         .sendText(group.id._serialized, adDetails.adText)
          //         .then((result) => {
          //           console.log('Result: ', result); //return object success
          //         })
          //         .catch((erro) => {
          //           console.error('Error when sending: ', erro); //return object error
          //         });
          //     }
          //   }
          // })

          // celebrity phones ads
          ads.forEach(async ad => {
            await client
              .sendText(group.id._serialized, ad)
              .then((result) => {
                console.log('Result: ', result); //return object success
              })
              .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
              });
          })

          imageAds.forEach(async ({ imageUrl, name, caption }) => {
            await client.sendImage(
              group.id._serialized,
              imageUrl,
              name,
              caption
            )
              .then((result) => {
                console.log('Result: ', result); //return object success
              })
              .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
              });
          })
        }
      }
    });
  }

  function filterGroups(groups) {
    filteredGroups = groups.filter(group => {
      if (!restrictedGroups.includes(group.name)) {
        return true;
      }
      return false;
    });

    // console.log(filteredGroups);
    console.log(`${filteredGroups.length} filtered groups`);
    return filteredGroups;
  }

  const allowedGroups = filterGroups(groups);
  console.log(allowedGroups.length)

  advertiseInGroups(allowedGroups);

  client.onMessage((message) => {
    if (message.body == "Bot paste to all groups") { console.log(message) };
    if (message.body === 'Bot paste to all groups' && message.isGroupMsg === false && (message.from === "233540362177@c.us" || message.from === "233592766862@c.us")) {

      advertiseInGroups(allowedGroups);

    }
  });
}
