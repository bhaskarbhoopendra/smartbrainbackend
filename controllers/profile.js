const profileHandler = (req, res, db) => {
  const { id } = req.params;

  db.select("*")
    .from("people")
    .where({
      id
    })
    .then(users => {
      if (users.length) {
        res.json(users[0]);
      } else {
        res.status(400).json("Not found");
      }
    })
    .catch(err => res.status(400).json("error in finding the user"));
};

module.exports = {
  profileHandler
};
