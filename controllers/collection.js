/**
 *TODO: Make every collection render books based on clcName in the url
 **Controller middlewares for managing requests for the different book collection.
 **The code has been modified to run asyncally but with a slight difference in how
 **the different actions occur.
 */
const fetch = require("node-fetch");

exports.getCollection = (req, res, next) => {
  var collectionName = req.url;
  var url = "https://openlibrary.org/subjects/" + collectionName + ".json";

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
