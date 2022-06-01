import DB from "../database";

// models
import ModelBase from "../app/models/ModelBase";

const init = async (sequelize) => {
  try {
    await sequelize.connection.sync({ force: true })
    // create model example

  } catch (error) {
    console.error("Did not sync", error);
  }
};

init(DB);

export default init;
