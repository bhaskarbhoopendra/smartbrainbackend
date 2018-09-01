const imageShow = (req, res, db) => {
  const { id } = req.body;
  db("people")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then(entries => {
      res.json(entries[0]);
    })
    .catch(err => res.status(400).json("unable to locate the image"));
};

module.exports = {
  imageShow
};
