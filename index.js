const path = require("path");
const fs = require("fs");
const venom = require("venom-bot");

let scanRequired = false;
let nat = "nat-bongo";
let caleb = "carlos";

let ukUsed = `
👀UNBEATABLE PRICES 👀👀..........RUSH HOUR 🚗
PROMOTION   PROMOTION  PROMOTION 🎊🎊🎉🎉🎉🎉🎉

Good Day to our loyal costumers of Celebrity Phones 📱. These are new models in stock with prices 
Falaaa price 🔥🔥🔥🔥🔥🔥🔥
UK 🇬🇧 USED iPhones

6s          32gb  -580
6s          64gb  -620
7           32gb  -700
7           128gb  -850
7plus       32gb  -1200
7plus       128gb -1350
8           64gb  -1050
8plus       64gb  -1600
8plus       256gb -1900
X           64gb  -1900
X           256gb -2200
XR          64gb  -2000
XR          128gb -2300
Xs          64gb  -2200
Xs          256gb -2500
Xs  Max.    64gb  -2800
Xs  Max.    256gb -3100
11          64gb  -3100
11          128gb -3300


Contact us on 0540362177 / 0592766862 / 0558105271
Whatsapp Us: 
https://wa.me/+233271527188

Location : Shop at Legon Campus

NB....Battery health ranging from 84 to 100

QUALITY AND AFFORDABLE
`;
let accessories = `
*CELEBRITY PHONES Falaa Promo*
*Original and Affordable Airpods*

*Replica/Clone Airpods*
Airpods 2         Ghs 250
Airpods Pro       Ghs 300

*Origianal Airpods*
Airpods 2         Ghs 900
Airpods Pro       Ghs 1250

*Original Iphone Chargers*
Regular           Ghs 40
Type C            Ghs 100

Whatsapp Us: 
https://wa.me/+233271527188
`;
let watch = `
Series 6
44mm GPs Cellular 
Broken seal 
2200gh
`;
let mixtape = `
IPhone 11 Pro Max 256gb

BH93%
Factory Unlocked 

True Tone ✅✅

Face ID ✅✅

Screen Glass Crack Not Screen 
Available Now 🙏📱

(4000gh)💰 Negotiable  No ❌ Swap 

Quick Selling DM If Interested  Fast 🔥🔥
https://wa.me/+233272401871
`;
let falaaPromo = `
*Fast Sale*
IPhone 6
64gb 
No hidden faults ✅
Factory Unlocked
95% Bh

Price: 500Ghs
Whatsapp Us: 
https://wa.me/+233592766862
`;
let Joses = `
*QUICK SALES   *
iPhone 7plus 256gb✅
Color: Rose Gold
Factory unlocked ✅
Battery health 100%✅
Finger Print Error
GhS 1200 🔥🔥🔥hmu 

Whatsapp Us: 
https://wa.me/+233592766862
`;
let falaaPromoGyasi = `
*Fast Sale*
IPhone X
64gb 
True Tone and Face ID ✅
Factory Unlocked
95% Bh (Service Mode Battery)

Price: 1600Ghs
Whatsapp Us: 
https://wa.me/+233200787776
Location: Legon Campus
`;
let brandNew = `
🍎🍎 CELEBRITY PHONES  📱📱         
〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

📲 Get your brand new iPhones and get lots of goodies like airtime , screen protector etc.

📲 Brand new 🍎🍎🍎Iphone with 1 year warranty 

🔘Price list
———————————

📦4s 16g=350📦
📦5s 16g=550📦
📦5s 32g=700📦
📦ip6 16g=800📦
📦Ip6 64g=900📦
📦Ip6 128g=900📦
📦ip6s 16g=980📦
📦ip6s 64g=1000📦
📦ip6splus 32g....”1200📦
📦ip6splus. 64g....1200 📦 
📦iph7plus 32g=1700📦
📦ip7plus128g=1850📦
📦Ip7 256g=1450📦
📦ip8 64g=1700📦
📦iph8+ 64GB=2200📦
📦Ip8+256g=2600📦
📦X 64g=2500📦
📦X 256g=2800📦
📦XR 128g=3100📦
📦XS max64g=3500📦
📦XS max 256g=3700📦
📦11  64gb = 4200📦 
📦 11  128gb = 4600 📦
📦11pro 64g= 4800📦
📦11pro Max 256gb=6600📦

⛱Locate us : @Akuaffo Hall , University of Ghana or Knust Campus 

#cheap and quality phones for you 
Call/WhatsApp:0540362177 / 0592766862

Please follow this link to my WhatsApp 
⤵️⤵️⤵️
https://wa.me/+233545159463
`;
let whatsAppPromo = `
*WHATSAPP BUSINESS PROMOTION - PROMOTE YOUR BUSINESS TO REACH THOUSANDS*
_______

🌎 We know how to make perfect ads that will keep your customers coming back.

🌎 We have over 500+ active whatsapp business groups that gives you access to over 50,000+ audience.

🌎 Our WhatsApp Business Services are designed to help you raise awareness for your company.

🤹‍♀️Let's start doing business 🤓

🛴 let's get started
📩 wa.me/233592766862

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
Battery 🔋:92
True Tone❌
Price: 3000
Location :Kumasi
`;
let newBrandNew = `
👀👀*Unbelievable Promotion* 💃🏻💃🏻

*New factory unlocked*

12ProMax 512   7600
12 pro max 256  7000
12 pro max 128  6600
12 pro 256gb   6600
12 pro 128gb 6100
12 256gb   5500
12 128gb  5100
12 64.           4600
11 128gb  4300
11 64gb   3600

#*QUALITY AND AFFORDABLE *

Please follow this link to my WhatsApp 
⤵️⤵️⤵️
https://wa.me/+233545159463
`;

const sent = {
  successfull: 0,
  failed: 0,
};

const ads = [
  // kumasiX,
  // kumasiXS,
  ukUsed,
  // accessories,
  // falaaPromo,
  // falaaPromoGyasi,
  // newBrandNew,
  // brandNew,
  // whatsAppPromo
  // Joses,
];

// const adsArrayBuffer = fs.readFileSync(path.join(__dirname, "ads.json"));
// const adsArray = JSON.parse(adsArrayBuffer.toString());

venom
  .create(
    caleb,
    (base64Qr, asciiQR, attempts, urlCode) => {
      console.log(asciiQR); // Optional to log the QR in the terminal
      var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

      if (matches.length !== 3) {
        return new Error("Invalid input string");
      }
      response.type = matches[1];
      response.data = new Buffer.from(matches[2], "base64");

      var imageBuffer = response;
      require("fs").writeFile(
        "out.png",
        imageBuffer["data"],
        "binary",
        function (err) {
          if (err != null) {
            console.log(err);
          }
        }
      );
    },
    (statusSession, session) => {
      console.log("Status Session: ", statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
      //Create session wss return "serverClose" case server for close
      console.log("Session name: ", session);

      if (statusSession == "notLogged") {
        scanRequired = true;

        // find a way to send qr code to myself
      }
    },
    {
      logQR: true,
      headless: false,
      useChrome: true,
      disableWelcome: true,
      updatesLog: true,
      puppeteerOptions: {
        executablePath:
          "/usr/bin/chromium /usr/lib/chromium /usr/share/man/man1/chromium.1.gz",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    }
  )
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

async function start(client) {
  const groups = await client.getAllChatsGroups();
  const restrictedGroups = [
    "Celebrity Phones",
    "ITB Developers",
    "ITBPaymentDev",
    "Website reconstruction",
    "Group 19",
    "Akrosystems Software Dep.",
    "Claire Talk am Gimme 🙏🏽",
    "ITB Developers",
    "👨‍💻🖥️📝 COMPSSA FRESH_STUDENT",
    "🅾️rganizing And Technical TEAM",
    "CPS 1A Announcements✅🔥❤️",
    "ICode gh",
    "HUAWEI ICT ACAD.-GCTU(G1)",
    "UGBS - MAIN GROUP L400",
    "BSC ADMIN/MAIN GROUP L400",
    "L400 MARKETING",
    "Products and Business 🤝🏼",
    "Fire SP's 4 Royalties",
    "Acts to Sustain DLs",
    "WILTMAX VENTURES",
    "CK blessing Phone Dealers",
    "ICE MAN PHONE'S",
    "Company law Group 2",
    "BENTUM FAMILIES",
    "Member:J.Mckeown Assembly",
    "Edrop 🥺",
    "CPS1A ✅🔥",
    "C++ GROUP 2💻",
    "UI/UX Dev",
    "HUAWEI ICT ACAD.-GCTU(G1)",
    "GCTU HCNA CLASS 3️⃣",
    "GOD'S BETHEL SPECIAL🌟🌟🌟",
    "Celebrity Phones",
    "Celebrity Pioneers",
    "Celebrity Phones 📲",
    "Celebrity Phones Team",
    "Celebrity phones dealers",
    "Ayaresa App",
    "Ayaresa Devs",
    "PINK MEDIA #PINKTEAM",
    "Antusdt🌎group🔥655gg",
  ];

  console.log(groups.length);

  function advertiseInGroups(groups) {
    groups.forEach(async (group) => {
      // third party ads
      // adsArray.forEach(async ({customer, adDetails, isActive}) => {
      //   if (isActive) {
      //     if (adDetails.type == "IMAGE") {
      //       client.sendImage(
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
      //     } else {
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

      /* await client
        .sendImage(
          group.id._serialized,
          "./images/kwame.jpeg",
          "Iphone 6",
          falaaPromo
        )
        // .then((result) => {
        //   return client.sendImage(
        //     group.id._serialized,
        //     "./images/mixtape2.jpeg",
        //     "11 Pro Max",
        //     mixtape
        //   );
        //   // console.log("Result: ", result); //return object success
        // })
        .then((res) => {
          console.log("Result: ", res); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        }); */

      // celebrity phones ads
      ads.forEach(async (ad) => {
        await client
          .sendText(group.id._serialized, ad)
          .then((result) => {
            sent.successfull += 1;
            console.log(`Sent To ${sent.successfull}`); //return object success
          })
          .catch((erro) => {
            sent.failed += 1;
            console.error(`Failed sending to ${sent.failed}`); //return object error
          });
      });
    });
  }

  function filterGroups(groups) {
    filteredGroups = groups.filter((group) => {
      if (
        !restrictedGroups.includes(group.name) &&
        !group.isAnnounceGrpRestrict &&
        !group.isReadOnly
      ) {
        return true;
      }
      return false;
    });

    // console.log(filteredGroups);
    console.log(`${filteredGroups.length} filtered groups`);
    return filteredGroups;
  }

  const allowedGroups = filterGroups(groups);
  console.log(allowedGroups.length);
  fs.writeFileSync(
    path.join(__dirname, "groups.json"),
    JSON.stringify(allowedGroups, null, 2)
  );

  advertiseInGroups(allowedGroups);

  client.onMessage((message) => {
    if (message.body == "Bot paste to all groups") {
      console.log(message);
    }
    if (
      message.body === "Bot paste to all groups" &&
      message.isGroupMsg === false &&
      (message.from === "233540362177@c.us" ||
        message.from === "233592766862@c.us")
    ) {
      advertiseInGroups(allowedGroups);
    }
  });
}
