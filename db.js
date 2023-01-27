const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/admin", (err) => {
    if (err) console.log(err)
    else console.log("DB Connected")
})
