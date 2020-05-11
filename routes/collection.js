const express = require("express");

const router = express.Router();

const collectionCtrl = require("../controllers/collection");

/**
 *TODO: Find out how Axios can be incorporated to make calls to the API
 **Routes middleware that handles routing to the different collections. For now it uses a
 **static /collection/history or /collection/science route to acces the assigned controller in collectionCtrl
 */

router.get("/:collectionName", collectionCtrl.getCollection);

module.exports = router;
