const router = require("express").Router();

const Booking = require("../models/Booking");

const User = require("../models/User");

const Listing = require("../models/Listing");

/*GET TRIP LIST */
router.get("/:userId/trips", async (req, res) => {
  try {
    const { userId } = req.params;
    const trips = await Booking.find({ customerId: userId }).populate(
      "customerId hostId listingId"
    );

    res.status(200).json(trips);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Not found", error: err });
  }
});

/*ADD Listing to WISHLIST*/
router.patch("/:userId/:listingId", async (req, res) => {
  try {
    const { userId, listingId } = req.params;
    const user = await User.findById(userId);
    const listing = await Listing.findById(listingId);
    const favouriteListing = user.wishList.find(
      (item) => item._id.toString() === listingId
    );
    if (favouriteListing) {
      user.wishList = user.wishList.filter(
        (item) => item._id.toString() !== listingId
      );
      await user.save();
      res.status(200).json({
        message: "Listing is removed from wish lost",
        wishList: user.wishList,
      });
    } else {
      user.wishList.push(listing);
      await user.save();
      res.status(200).json({
        message: "Listing is added to wishlist ",
        wishlist: user.wishList,
      });
    }
  } catch (err) {
    console.log("Error occur while updating the wishlist", err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
