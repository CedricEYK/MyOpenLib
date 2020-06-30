const request = require("request");

//const getbooks = require("../models/books");

exports.getHomePage = (req, res, next) => {
  res.render("index", {
    pageTitle: "AfroLib",
  });
};

//testing endpoints
exports.getBookResults = (req, res, next) => {
  var searchTerm = req.query.search;
  var url = "https://openlibrary.org/subjects/" + searchTerm + ".json";
  var rawdata;
  var books = [];

  request(url, function (error, response, body) {
    var works = [];
    if (!error && response.statusCode == 200) {
      rawdata = JSON.parse(body);
      allworks = rawdata.works;

      allworks.forEach((element) => {
        var work = {
          title: "",
          key: "",
          authors: [],
          cover_id: "",
          description: "",
          identifier: "",
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
      console.log(books);
    }

    res.render("books", {
      pageTitle: "Books",
      books: books,
    });
  });
};
