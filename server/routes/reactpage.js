import express from "express";
import {createUser} from "../controllers/reactpage.js";
const router = express.Router()

router.get('/', createUser);
export default router