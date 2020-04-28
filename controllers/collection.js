/**
 *TODO: Refactor the 'GET' controller to render the desired collection page with data according to the params by using conditioning (if else) logic
 **Controller middlewares for managing requests for the different book collection. For now it just renders a view with the two variables changing for every collection
 */

exports.getCollection = (req, res, next) => {
  const clcName = req.params.collectionName;
  console.log("the req.params clcName: " + clcName);
  if (clcName === "history") {
    res.render("collection", {
      pageTitle: "History Collection",
      collectionName: "history",
    });
  } else if (clcName === "science") {
    res.render("collection", {
      pageTitle: "Science Collection",
      collectionName: "science",
    });
  } else if (clcName === "art") {
    res.render("collection", {
      pageTitle: "Art Collection",
      collectionName: "art",
    });
  } else if (clcName === "religion") {
    res.render("collection", {
      pageTitle: "Religion Collection",
      collectionName: "religion",
    });
  } else if (clcName === "culture") {
    res.render("collection", {
      pageTitle: "Culture Collection",
      collectionName: "culture",
    });
  } else if (clcName === "geography") {
    res.render("collection", {
      pageTitle: "Geography Collection",
      collectionName: "geography",
    });
  }
};
