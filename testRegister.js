const axios=require("axios");
async function test(){
    try{
        const response=await axios.post(
            "http://4.224.186.213/evaluation-service/register",
            {
                email: "a.r.nithin13082005@gmail.com",
    name: "a r nithin",
    rollNo: "234g1a05b3",
    accessCode: "SdkjJG",
    mobileNo:"9440166912",
    githubUsername:"Nithin1308",
    clientID: "143c0ad3-485a-4b3e-b2b5-ba33e331b49b",
    clientSecret: "yvuAAztJTGYpaJSh"

            }
        );
        console.log("DATA:");
        console.log(response.data);
        console.log("HEADERS:");
        console.log(response.headers);


    }catch(error){
        console.log("ERROR DATA:");
        console.log(error.response?.data);;
        console.log("ERROR HEADERS:");
        console.log(error.response?.headers);
    }
}
test();