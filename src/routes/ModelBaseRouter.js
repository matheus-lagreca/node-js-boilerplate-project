import {
  getOneEntryById,
  getAllEntries,
  getAllEntriesByParam,
  postOneEntry,
  patchOneEntryById,
  patchAllEntriesByParam,
  deleteOneEntryByID,
  deleteOneEntryByParam,
  deleteAllEntriesByParam
} from '../app/controller/ModelBaseController';
const LoadRouters = (router) => {
  // Get
  router.get("/model/:id", getOneEntryById);
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
