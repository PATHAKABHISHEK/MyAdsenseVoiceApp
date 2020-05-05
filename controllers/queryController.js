const say = require("say");
const intentAndutterances = require("../intentAndUtterances");
const request = require("request");

let url = "http://localhost:3000/api/v1/newspaper/";

class QueryController {
  constructor(queryRouter) {
    this.queryRouter = queryRouter;
    this.registerRoutes();
  }

  registerRoutes() {
    this.queryRouter.get("/adsense", this.adsenseInvocation.bind(this));
    this.queryRouter.get(
      "/getNewspaperLanguageIntent",
      this.getNewspaperLanguages.bind(this)
    );
    this.queryRouter.post(
      "/getNewspaperAdRateIntent",
      this.getNewspaperAdRate.bind(this)
    );
  }

  adsenseInvocation(req, res, next) {
    let text =
      "Hello, I am Adsense, How Can I Help You ? You Can See Adsense User Guide For What You Can Say To Me...";
    say.speak(text, null, 1, (err) => {
      if (err) {
        return console.error(err);
      }
      res.send("Adsense Invocation Command Said");
    });
  }

  getNewspaperLanguages(req, res, next) {
    let command = req.query.command;
    console.log(command);
    let getData = false;
    for (let i = 0; i < intentAndutterances.getLanguageUtterances.length; i++) {
      if (command == intentAndutterances.getLanguageUtterances[i]) {
        getData = true;
      }
    }
    if (getData) {
      request(`${url}get_newspaper_language`, function (error, response, body) {
        if (error) {
          res.send(error);
        } else if (response.statusCode === 200) {
          let text = "The Newspaper Languages Provided by My Adsense are ";
          for (let j = 0; j < JSON.parse(body)["languages"].length; j++) {
            text += JSON.parse(body)["languages"][j] + ", ";
          }

          say.speak(text, null, 1, (err) => {
            if (err) {
              return console.error(err);
            }
          });
          res.send("Get Newspaper Languages Command Run Sucessfully");
        }
      });
    }
  }

  getNewspaperAdRate(req, res, next) {
    let command = req.query.command;
    let commandArray = command.split(" ");
    let newspaper = commandArray[commandArray.indexOf("newspaper") - 1].trim();
    let language = commandArray[commandArray.indexOf("language") - 1].trim();
    let category = commandArray[commandArray.indexOf("category") - 1].trim();

    let adType = commandArray[commandArray.indexOf("type") - 1].trim();
    let edition = commandArray[commandArray.indexOf("edition") - 1].trim();
    let getRateOfNewspaper = [
      `What are the ad rates for ${newspaper} newspaper in ${language} language and ${category} category and it's type would be ${adType} in ${edition} edition`,
      `ad rates for ${newspaper} newspaper in ${language} language and ${category} category and it's type would be ${adType} in ${edition} edition`,
      `${newspaper} newspaper in ${language} language and ${category} category and it's type would be ${adType} in ${edition} edition ad rates`,
      `tell me ad rates for ${newspaper} newspaper in ${language} language and ${category} category and it's type would be ${adType} in ${edition} edition`,
      `get me ad rates for ${newspaper} newspaper in ${language} language and ${category} category and it's type would be ${adType} in ${edition} edition`,
      `get ad rates for ${newspaper} newspaper in ${language} language and ${category} category and it's type would be ${adType} in ${edition} edition`,
    ];
    console.log(newspaper);
    console.log(language);
    console.log(category);
    console.log(adType);
    console.log(edition);
    request(
      `${url}get_newspaper_ad_rate?newspaper=${newspaper}&language=${language}&category=${category}&adType=${adType}&edition=${edition}`,
      function (error, response, body) {
        if (error) {
          res.send(error);
        } else if (response.statusCode === 200) {
          console.log(body);
          let textPrice;
          let textWord;
          let displayPrice;
          let displaySize;
          let text;
          if (adType == "text") {
            textPrice = JSON.parse(body)["adTextPrice"];
            textWord = JSON.parse(body)["adTextWord"];
            text = `The ${newspaper} ad rates in ${adType} type is rupees ${textPrice} for ${textWord}`;
          } else if (adType == "display") {
            displayPrice = JSON.parse(body)["adDisplayPrice"];
            displaySize = JSON.parse(body)["adDisplaySize"];
            text = `The ${newspaper} ad rates in ${adType} type is rupees ${displayPrice} for ${displaySize}`;
          }

          say.speak(text, null, 1, (err) => {
            if (err) {
              return console.error(err);
            }
          });
          res.send("Get Newspaper Ad Rates Command Run Sucessfully");
        }
      }
    );
  }
}
const queryController = (queryRouter) => {
  return new QueryController(queryRouter);
};

module.exports = {
  queryController,
};
