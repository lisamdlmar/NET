const API = {
    APIV1:null,
    APIV2:null
};
API.APIV1 = (req, res, next) => {
    const respnose = [
        {
            statusCode: 200,
            data:  {
                firstName: "JOHN0000",
                lastName: "MICHAEL000",
                clientId: "9994567"
            }
        }
  ];

    if(req.body.data === "JOHN0000MICHAEL0009994567") return res.send(respnose);

      
 }

 API.APIV2 = (req, res, next) => {
    const respnose = [
        {
            statusCode: 200,
            data:  {
                firstName: "JOHN",
                lastName: "MICHAEL",
                clientId: "999-4567"
            }
        }
  ];

    if(req.body.data === "JOHN0000MICHAEL0009994567") return res.send(respnose);

      
 }




 export default API;