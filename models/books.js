const request = require("request"); //require request

var url = "https://openlibrary.org/subjects/amer.json";
var rawdata;
var books = [];

collectAPIdata = () => {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      rawdata = JSON.parse(body);
      var allworks = rawdata.works;
      var works = [];
      allworks.forEach((element) => {
        var work = {
          title: "",
          authors: [],
          key: "",
          description: "",
          identifier: "",
          cover_id: "",
        };
        if (element.availability.status == "open") {
          element.authors.forEach((author) => {
            work.authors.push(author.name);
          });
          work.title = element.title.toString();
          work.key = element.key.slice(7);
          work.cover_id = element.cover_id;
          work.identifier = element.availability.identifier;
        }
        works.push(work);
      });
      works.forEach((work) => {
        if (work.title !== "") {
          books.push(work);
        }
      });
      console.log("made contact and called data");
    }
  });
};

exports.apiData = collectAPIdata;
