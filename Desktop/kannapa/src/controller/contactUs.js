const Contact = require('../model/contactUs');

exports.createContact = async (req, res) => {
  try {
    const { title,desc ,data} = req.body;

    const contact = new Contact({ title,desc ,data });

    await contact.save();

    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};


exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.status(200).json({msg:contacts});
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// GET contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }

    res.status(200).json({  data: contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// UPDATE contact by ID
exports.updateContactById = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }

    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

// DELETE contact by ID
exports.deleteContactById = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ success: false, error: 'Contact not found' });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

