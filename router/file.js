const { Router } = require("express");
const { filePutCharacter } = require("../controller/files");
const upload = require("../middleware/upload");



const router = Router();


router.put('/character/:id', [
    upload.single('file'),
], filePutCharacter)
router.put('/id/movie/:id',)
router.put('/id/gender/:id',)



module.exports = router;