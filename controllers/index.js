const request = require("request");
const fetch = require("node-fetch");

//const getbooks = require("../models/books");

exports.getHomePage = (req, res, next) => {
  res.render("index", {
    pageTitle: "AfroLib",
  });
};

/**
 **The code below aims to implement an async way of getting the data from the api
 **this controllers handles the opperation of searching a book by subject
 */

exports.getBookResults = (req, res, next) => {
  var searchTerm = req.query.searchTerm;
  var url = "https://openlibrary.org/subjects/" + searchTerm + ".json";

  //get data from api asyncally
  (async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  })()
    .then((json) => {
      allworks = json.works;
      extractData();
    })
    .catch((err) => {
      console.log(err);
    });

  //manipulate raw data
  function extractData() {
    var availableBooks = [];
    var extractedWorks = [];
    var books = [];
    for (let i in allworks) {
      if (
        allworks[i].availability &&
        allworks[i].availability.is_readable &&
        allworks[i].availability.status === "open"
      ) {
        availableBooks.push(allworks[i]);
      }
    }
    for (let i in availableBooks) {
      var work = {
        title: "",
        key: "",
        authors: [],
        cover_id: "",
        identifier: "",
      };
      work.authors.push(availableBooks[i].authors[0].name);
      work.title = availableBooks[i].title;
      work.key = availableBooks[i].key;
      work.cover_id = availableBooks[i].cover_id;
      work.identifier = availableBooks[i].availability.identifier;
      extractedWorks.push(work);
    }
    books = extractedWorks;
    res.render("books", {
      pageTitle: "Books",
      books: books,
    });
    console.log(books);
    console.log("query:" + req.query);
  }
};
