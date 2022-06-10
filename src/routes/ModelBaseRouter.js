import {
  getOneEntryById,
  getAllEntries,
  postOneEntry,
  /*
  getOneParamFromOneEntryById,
  getAllEntriesByParam,
  patchOneEntryById,
  patchAllEntriesByParam,
  deleteOneEntryByID,
  deleteOneEntryByParam,
  deleteAllEntriesByParam
*/
} from '../app/controllers/ModelBaseController';
const LoadRouters = (router) => {
  // Get
  router.get("/model/:id", (req, res) => getOneEntryById(req, res));
  // router.get("/model/:id", getOneParamFromOneEntryById);

  router.get("/model", (req, res) => getAllEntries(req, res));
  // Post
  router.post("/model", (req, res) => postOneEntry(req, res));

  /*
  router.get("/model", getAllEntriesByParam);

  // Patch
  router.patch("/model/:id", patchOneEntryById);
  router.patch("/model", patchAllEntriesByParam);

  // Delete
  router.delete("/model/:id", deleteOneEntryByID);
  router.delete("/model", deleteOneEntryByParam);
  router.delete("/model", deleteAllEntriesByParam);
  */
};
export default LoadRouters;
