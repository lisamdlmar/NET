const API = {
    APIV1:null
};
API.APIV1 = (req, res, next) => {
console.log(req.path)
        const respnose = [
        {data: 'test00000111000'}
      ];
      
return res.send(respnose);
 }

 export default API;