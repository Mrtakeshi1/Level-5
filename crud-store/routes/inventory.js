const express = require('express');
const inventory = express.Router();
const Inventory = require('../models/inventory');

// GET all items
inventory.get('/', async (req, res) => {
  try {
    const items = await Inventory.find().lean(); 
    const formattedItems = items.map(item => ({
      ...item,
      price: `$${item.price.toFixed(2)}`
    }));
    res.json(formattedItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one item by ID
inventory.get('/:id', async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id).lean(); // Use lean() to get plain JavaScript object
    // Check if item exists
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    // Format the price field with "$" sign
    item.price = `$${item.price.toFixed(2)}`;
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST an item
inventory.post('/', async (req, res) => {
  const { name, brand, price } = req.body;
  
  // Ensure the provided price is a number
  if (isNaN(parseFloat(price))) {
    return res.status(400).json({ message: 'Price must be a number' });
  }

  const item = new Inventory({
    name,
    brand,
    price: parseFloat(price) // Parse the price as a number
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) an item
inventory.put('/:id', async (req, res) => {
    try {
      const { name, brand, price } = req.body;
      const itemId = req.params.id;
      const updatedItem = await Inventory.findByIdAndUpdate(itemId, {
        ...(name && { name }),
        ...(brand && { brand }),
        ...(price !== undefined && { price: parseFloat(price) })
      }, { new: true });
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json(updatedItem);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

// DELETE an item
inventory.delete('/:id', async (req, res) => {
    try {
      const itemId = req.params.id;
      const item = await Inventory.findById(itemId);
      
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      
      const itemName = item.name;
      
      await Inventory.deleteOne({ _id: itemId });
      res.json({ message: `Item ${itemName} was successfully deleted from the database` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  
  

module.exports = inventory;
