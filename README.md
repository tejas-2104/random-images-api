# Random Images API

## Overview

This project is a Node.js API that serves random images. The API uses Express.js for server setup and Axios for making HTTP requests to external APIs.

## Endpoints

### GET /api/images/random

Fetches a random image URL.

#### Response

```json
{
  "imageUrl": "https://picsum.photos/id/237/200/300"
}
```
## Setup and Installation

1.Clone the repository:

```bash
git clone https://github.com/tejas-2104/random-images-api.git
```

2.Install dependencies:

```bash
npm install
```

3.Start the server:

```bash
npm start
```
4.Access the API:

- Random Image: [http://localhost:8080/api/images/random](http://localhost:8080/api/images/random)

## Code Explanation

### Random Image Endpoint

The /api/images/random endpoint fetches a random image from Lorem Picsum and returns its URL.

```Javascript
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

```


## Challenges Faced

### Fetching Random Images

Initially, fetching random images from Unsplash using their `source.unsplash.com/random` endpoint was considered. However, due to complications and potential API key requirements, issues arose with reliable image fetching.

**Solution**: Switched to using the Lorem Picsum API ([https://picsum.photos](https://picsum.photos)), which provides random images without the need for an API key. This approach simplified the process and ensured reliable image retrieval.

### Error Handling

Ensuring robust error handling for image fetching was crucial to provide meaningful feedback to the client in case of failures.

**Solution**: Implemented try-catch blocks in the endpoint to handle potential errors and return appropriate status codes and error messages.

## Conclusion

This project provided valuable experience in setting up a Node.js API and handling external HTTP requests. By overcoming the challenges faced during development, we created a robust and reliable API that serves random images.

## Repository

The project repository is available at [GitHub](https://github.com/tejas-2104/random-images-api.git).
