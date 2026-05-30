const axios = require("axios");

async function test() {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/register",
      {
        email: "a.r.nithin13082005@gmail.com",
        name: "a r nithin",
        rollNo: "234g1a05b3",
        mobileno:"9440166912",
        githubUsername:"Nithin1308",
        accessCode: "SdkjJG"
      }
    );

    console.log(response.data);

  } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
  }
}

test();