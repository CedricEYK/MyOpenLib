/** 
  *TODO: Refactor the 'GET' controller to render the desired collection page with data according to the params by using conditioning (if else) logic 
  **Controller middlewares for managing requests for the different book collection. For now it just renders a view with the two variables changing for every collection
*/

exports.getHistoryCollection = (req, res, next) => {
  res.render("collection", {
    pageTitle: "History Collection",
    collectionName: "history",
  });
};

exports.getScienceCollection = (req, res, next) => {
  res.render("collection", {
    pageTitle: "Science Collection",
    collectionName: "science",
  });
};

exports.getArtCollection = (req, res, next) => {
  res.render("collection", {
    pageTitle: "Art Collection",
    collectionName: "art",
  });
};

exports.getReligionCollection = (req, res, next) => {
  res.render("collection", {
    pageTitle: "Religion Collection",
    collectionName: "religion",
  });
};

exports.getCultureCollection = (req, res, next) => {
  res.render("collection", {
    pageTitle: "Culture Collection",
    collectionName: "culture",
  });
};

exports.getGeographyCollection = (req, res, next) => {
  res.render("collection", {
    pageTitle: "Geography Collection",
    collectionName: "geography",
  });
};
