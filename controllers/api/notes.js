const Note = require('../../models/note');

module.exports = {
  index,
  create
};

async function create(req, res) {
    try{
        const note = await Note.create(req.body);
        res.json(note);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
  const notes = await Note.find({});
  // re-sort based upon the sortOrder of the populated categories
  res.json(notes);
}

