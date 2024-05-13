const router = require("express").Router();

const Booking = require("../models/Booking");

/*GET TRIP LIST */
router.get("/:userId/trips", async (req, res) => {
  try {
    const { userId } = req.params;
    const trips = await Booking.find({ customerId: userId }).populate(
      " customerId hostId listingId"
    );
    res.status(200).json(trips);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Not found", error: err });
  }
});

module.exports = router;
