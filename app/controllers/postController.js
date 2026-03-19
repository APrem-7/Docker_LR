//this is going to handel the controller logic for posting in the DB
import { PostData } from "../model/schema.js";

export const postData = async (req, res) => {
    try {
        const { name, title, content } = req.body;
        if (!title || !content || !name) {
            return res.status(400).json({ message: "Title and content are required" });
        }

        const insertDB = new PostData({
            name: name,
            title: title,
            content: content
        })
        const save = await insertDB.save()
        return res.status(200).json({ message: "The message was sent successfully", data: save })

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}   