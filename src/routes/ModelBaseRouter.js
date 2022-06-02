import {
  getOneEntryById,
  getAllEntries,
  getOneParamFromOneEntryById,
  getAllEntriesByParam,
  postOneEntry,
  patchOneEntryById,
  patchAllEntriesByParam,
  deleteOneEntryByID,
  deleteOneEntryByParam,
  deleteAllEntriesByParam
} from '../app/controllers/ModelBaseController';
const LoadRouters = (router) => {
  // Get
  router.get("/model/:id", getOneEntryById);
  router.get("/model/:id", getOneParamFromOneEntryById);
  router.get("/model", getAllEntries);
  router.get("/model", getAllEntriesByParam);

  // Post
  router.post("/model", postOneEntry);

  // Patch
  router.patch("/model/:id", patchOneEntryById);
  router.patch("/model", patchAllEntriesByParam);

  // Delete
  router.delete("/model/:id", deleteOneEntryByID);
  router.delete("/model", deleteOneEntryByParam);
  router.delete("/model", deleteAllEntriesByParam);
};
export default LoadRouters;
