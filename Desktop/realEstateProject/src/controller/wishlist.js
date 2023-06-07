const Wishlist = require('../model/wishlist');

// Create a wishlist item
exports.createWishlistItem = async (req, res) => {
  try {
    const { sellerId, userId,wish } = req.body;
    const newWishlistItem = new Wishlist({ sellerId, userId, wish });
    const savedWishlistItem = await newWishlistItem.save();
    res.status(200).json(savedWishlistItem);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create wishlist item', error });
  }
};

// Get all wishlist items
exports.getAllWishlistItems = async (req, res) => {
  try {
    const wishlistItems = await Wishlist.find().populate("sellerId userId")
    res.status(200).json({msg:wishlistItems});
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch wishlist items', error });
  }
};

// Get wishlist item by ID
exports.getWishlistItemById = async (req, res) => {
  try {
    const wishlistItem = await Wishlist.findById(req.params.id).populate("sellerId userId")
    if (!wishlistItem) {
      return res.status(404).json({ message: 'Wishlist item not found' });
    }
    res.status(200).json({msg:wishlistItem});
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch wishlist item', error });
  }
};

// Update wishlist item by ID
exports.updateWishlistItemById = async (req, res) => {
  try {
    const { sellerId, userId,wish } = req.body;
    const updatedWishlistItem = await Wishlist.findByIdAndUpdate(
      req.params.id,
      { sellerId, userId , wish },
      { new: true }
    );
    if (!updatedWishlistItem) {
      return res.status(404).json({ message: 'Wishlist item not found' });
    }
    res.status(200).json(updatedWishlistItem);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update wishlist item', error });
  }
};

// Delete wishlist item by ID
exports.deleteWishlistItemById = async (req, res) => {
  try {
    const deletedWishlistItem = await Wishlist.findByIdAndDelete(req.params.id);
    if (!deletedWishlistItem) {
      return res.status(404).json({ message: 'Wishlist item not found' });
    }
    res.status(200).json({ message: 'Wishlist item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete wishlist item', error });
  }
};
