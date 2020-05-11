/**
 *TODO: Make every collection render books based on clcName in the url
 **Controller middlewares for managing requests for the different book collection. For now it just renders a view with the two variables changing for every collection
 */
const request = require("request");

exports.getCollection = (req, res, next) => {
  const clcName = req.params.collectionName;
  console.log("the req.params clcName: " + clcName);
  if (
    clcName === "history" ||
    "science" ||
    "art" ||
    "religion" ||
    "culture" ||
    "geography"
  ) {
    var url = "https://openlibrary.org/subjects/" + clcName + ".json";
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

      res.render("collection", {
        pageTitle: clcName + " Collection",
        collectionName: clcName,
        books: books,
      });
    });
  }
};
