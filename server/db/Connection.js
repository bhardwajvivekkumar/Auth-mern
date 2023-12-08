const mongoose = require("mongoose");

const DB = "mongodb+srv://vk3411389:Sonu2111@cluster0.x05xk3z.mongodb.net/Authusers?retryWrites=true&w=majority"

mongoose.connect(DB, {
    // useUnifiedTopology: true,
    // useUrlParser: true
}).then(() => console.log("Database Connected")).catch((errr) => {
    console.log(errr);
})