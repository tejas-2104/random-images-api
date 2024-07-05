const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;

// Random Image Endpoint
app.get('/api/images/random', async (req, res) => {
    try {
      // Fetch a random image from Lorem Picsum
      const imageResponse = await axios.get('https://picsum.photos/200/300', {
        responseType: 'arraybuffer'
      });
  
      // Get the final image URL
      const imageUrl = imageResponse.request.res.responseUrl;
  
      // Send the image URL as JSON
      res.json({ imageUrl });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching random image' });
    }
});

//start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});