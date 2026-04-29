import { Router } from "express";
import { createProject, getDirectoryTree, getProjectPorts } from "../../controllers/project";
import { projectCreationLimiter } from "../../middlewares/rate-limit";

const router = Router();

router.route("/").post(projectCreationLimiter, createProject);
router.route("/:projectId/tree").get(getDirectoryTree);
router.route("/:projectId/ports").get(getProjectPorts);

export default router;
