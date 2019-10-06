const express = require("express");
// const upload = require("../middlewares/storage")
const testownikController = require("../controllers/testownikController");
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({
    storage
})
const router = express.Router();

router.post("/testownik",upload.single('file'), testownikController.uploadTestownik);
router.get("/testownik", testownikController.getTestownik)



module.exports = router;