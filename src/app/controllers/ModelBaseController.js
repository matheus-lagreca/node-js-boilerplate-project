import ModelBase from "../models/ModelBase";

// Get One Entry by id
const getOneEntryById = async (req, res) => {
  // Get the id from the param
  const { id } = req.params;

  // Finds a model in the DB where the param id = the id in the table
  await ModelBase.findOne({
    where: { id: id },
  })
    .then(async (model) => {
      // if id does not exist, then send a 404 status and message
      if (!model) {
        return res.status(404).send({ message: `Model ${id} not found` });
      }
      try {
        // try to send the a json of the data in the db
        return res.json(model);
      }
      catch (err) {
        res.status(400).send({ err: "Invalid Model" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const getAllEntries = async (req, res) => {
  await ModelBase.findAll()
    .then(async (models) => {
      return res.json(models);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const postOneEntry = async (req, res) => {
  await ModelBase.create({
    name: req.body.name,
    isConnected: req.body.isConnected,
  })
    .then(async () => {
      res.status(200).send({ message: "ok" })
    })
    .catch(() => {
      res.status(400).send({ message: "Error while creating user" })
    });
}


export {
  getOneEntryById,
  getAllEntries,
  postOneEntry
};
