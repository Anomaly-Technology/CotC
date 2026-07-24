import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contentRouter from "./content";
import storageRouter from "./storage";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contentRouter);
router.use(storageRouter);

export default router;
