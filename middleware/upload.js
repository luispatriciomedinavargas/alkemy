const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
            cb(null, './storage')
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = `${Date.now() + '-' + Math.round(Math.random() * 1E9)}.png`
            cb(null, file.fieldname + '-' + uniqueSuffix)
        }
    })

const upload = multer({ storage })



module.exports = upload