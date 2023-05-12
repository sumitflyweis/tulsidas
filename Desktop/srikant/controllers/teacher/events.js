const Event = require('../../models/events');

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).send({msg:events});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get event by ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Create new event
exports.createEvent = async (req, res) => {
  try {
    const { ScheduledDate, data } = req.body;
    const event = new Event({
      ScheduledDate,
      data,
    });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update event by ID
exports.updateEventById = async (req, res) => {
  try {
    const { ScheduledDate, data } = req.body;
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { ScheduledDate, data },
      { new: true }
    );
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete event by ID
exports.deleteEventById = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }
    res.status(200).json({ msg: 'Event deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addDataToEventById = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate({_id:req.params.id},{ $push: { data: req.body.data } },{new:true});
    
    res.status(200).json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.searchEventsByDate = async (req, res) => {
  const searchDate = req.query.date;

  try {
    const events = await Event.find({ ScheduledDate: searchDate });

    if (events.length === 0) {
      return res.status(404).json({ message: 'No events found for the given date' });
    }

    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

