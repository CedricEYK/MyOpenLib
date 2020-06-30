const express = require("express");

const router = express.Router();

const collectionCtrl = require("../controllers/collection");

/**
 *TODO: find a way to define the endpoint to the collections
 **Routes middleware that handles routing to the different collections. For now it uses a
 **static /collection/history or /collection/science route to acces the assigned controller in collectionCtrl
 */

var collectionEndPoint = [
  "/history",
  "/science",
  "/art",
  "/religion",
  "/culture",
  "/geography",
];

router.get(collectionEndPoint, collectionCtrl.getCollection);

module.exports = router;
