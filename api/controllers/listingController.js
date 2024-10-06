import Listing from "../models/listingModel.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }

  if (req.user.id !== listing.userRef) {
    return next(
      errorHandler(403, "You do not have permission to delete this listing!")
    );
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    return res.status(200).json("Listing deleted successfully!");
  } catch (error) {
    next(error);
  }
};
