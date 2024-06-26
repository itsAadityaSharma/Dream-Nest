const router = require("express").Router();
const multer = require("multer");

const Listing = require("../models/Listing");
const User = require("../models/User");

/*Configuring Multer for file Uploads*/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); //Store uploaded file in the uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); //Use the original file name
  },
});

const upload = multer({ storage });

/*CREATE LISTING  */
router.post("/create", upload.array("listingPhotos"), async (req, res) => {
  try {
    /*Take the information from the form */
    const {
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      title,
      description,
      highlight,
      highlightDesc,
      price,
    } = req.body;

    const listingPhotos = req.files;
    const newAmenities = amenities.split(",");
    if (!listingPhotos) {
      return res.status(400).send("No file uploaded");
    }

    const listingPhotoPaths = listingPhotos.map((file) => file.path);
    const newListing = new Listing({
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities: newAmenities,
      listingPhotoPaths,
      title,
      description,
      highlight,
      highlightDesc,
      price,
    });

    await newListing.save();
    res.status(200).json(newListing);
  } catch (err) {
    res
      .status(409)
      .json({ message: "Fail to create Listing", error: err.message });
  }
});

/*GET LISTING BY CATEGORY */
router.get("/", async (req, res) => {
  const qCategory = req.query.category;
  try {
    let listings;
    if (qCategory) {
      listings = await Listing.find({ category: qCategory }).populate(
        "creator"
      );
    } else {
      listings = await Listing.find().populate("creator");
    }
    res.status(200).json(listings);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Fail to fetch Listing", error: err.message });
  }
});

/*GET LISTING BY SEARCH */
router.get("/search/:search", async (req, res) => {
  const { search } = req.params;
  try {
    let listings = [];
    if (search.toLowerCase() === "all") {
      listings = await Listing.find().populate("creator");
    } else {
      listings = await Listing.find({
        $or: [
          { category: { $regex: search, $options: "i" } },
          { title: { $regex: search, $options: "i" } },
        ],
      }).populate("creator");
    }
    res.status(200).json(listings);
  } catch (err) {
    res
      .status(404)
      .json({ message: "Fail to fetch listings", error: err.message });
  }
});

/* LISTING DETAILS*/

router.get("/:listingId", async (req, res) => {
  try {
    const { listingId } = req.params;
    let listingDetals = await Listing.findById(listingId).populate("creator");
    if (listingDetals) {
      res.status(200).json(listingDetals);
    } else {
      res.status(404).json({ message: "No data found" });
    }
  } catch (err) {
    res.status(400).json({ message: "Error Occured", error: err });
  }
});

module.exports = router;
