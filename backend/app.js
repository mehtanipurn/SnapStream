const express = require('express');
const app = express()
const port = 5003;
const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");
const cors = require("cors");
// const Story = require('./models/Story'); // Import your Story model

app.use(cors())
require('./models/model')
require('./models/post')
const Story = require('./models/story')

app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))
app.use(require("./routes/createStory"))

app.use(require("./routes/user"))
mongoose.connect(mongoUrl);


app.get('/checkStory', async (req, res) => {
    try {
      const user = req.user; // Assuming you have user data available after authentication
      const story = await Story.findOne({ storyId: stories._id }); // Adjust the query based on your schema
      if (story) {
        return res.json({ storyExists: true });
      } else {
        return res.json({ storyExists: false });
      }
    } catch (error) {
      console.error('Error checking story:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  });
mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongo")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})


app.listen(port, () => {
    console.log("server is running on port" + " " + port)

})