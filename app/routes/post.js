//this is going to handle all the posting stuff in my system like everything that i will be needing to do to post put stuff etc
import { Router } from "express"
import { postData } from "../controllers/postController.js"

const putRouter = Router()

putRouter.post("/", postData)

export default putRouter
