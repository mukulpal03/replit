import { Router } from "express";
import { createProject, getDirectoryTree } from "../../controllers/project";

const router = Router();

router.route("/").post(createProject);
router.route("/:projectId/tree").get(getDirectoryTree);

export default router;
