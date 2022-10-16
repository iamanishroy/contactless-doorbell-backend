const path = require("path");

const uploadImage = (req, res) => {
    const files = req.files;
    const id = req.params.id;

    Object.keys(files).forEach(key => {
        const filepath = path.join(__dirname, '../', 'captured-images', id + '.' + files[key].name.split('.')[1])
        files[key].mv(filepath, (err) => {
            if (err) return res.status(500).json({ status: "error", message: err })
        })
    })

    return res.status(201).json(
        {
            status: 'success',
            message: Object.keys(files).toString()
        }
    );
}

module.exports = uploadImage;