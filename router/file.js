const { Router } = require("express");
const { filePutCharacter } = require("../controller/files");
const upload = require("../middleware/upload");



const router = Router();


router.put('/character/:id', [
    upload.single('file'),
], filePutCharacter)
router.put('/id',)
router.put('/id',)



module.exports = router;