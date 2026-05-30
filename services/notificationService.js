const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhLnIubml0aGluMTMwODIwMDVAZ21haWwuY29tIiwiZXhwIjoxNzgwMTI2NDY0LCJpYXQiOjE3ODAxMjU1NjQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhNGUzY2JjYS1lYmY3LTRmOWEtOTMzNi1iYmYzNzYwYTQzNTYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhIHIgbml0aGluIiwic3ViIjoiMTQzYzBhZDMtNDg1YS00YjNlLWIyYjUtYmEzM2UzMzFiNDliIn0sImVtYWlsIjoiYS5yLm5pdGhpbjEzMDgyMDA1QGdtYWlsLmNvbSIsIm5hbWUiOiJhIHIgbml0aGluIiwicm9sbE5vIjoiMjM0ZzFhMDViMyIsImFjY2Vzc0NvZGUiOiJTZGtqSkciLCJjbGllbnRJRCI6IjE0M2MwYWQzLTQ4NWEtNGIzZS1iMmI1LWJhMzNlMzMxYjQ5YiIsImNsaWVudFNlY3JldCI6Inl2dUFBenRKVEdZcGFKU2gifQ._lluP8IAHDom1-tXsuW-KraTG7Gx492zHvJtea6jmYA";

async function fetchNotifications() {

    try {

        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/notifications",
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }
        );

        console.log("SUCCESS:");
        console.log(response.data);

        return response.data;

    } catch (error) {

        console.log("STATUS:", error.response?.status);
        console.log("DATA:", error.response?.data);

        throw error;
    }
}

module.exports = fetchNotifications;