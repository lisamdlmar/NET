<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="NET_Nodejs__ExpressJS__TypeScript__webApp__0"></a>NET (Nodejs - ExpressJS - TypeScript ) webApp .</h1>
<p class="has-line-data" data-line-start="3" data-line-end="5">#Functionality and Design<br>
A simple application  expose RESTful API  endpoints that do parse data &amp; return an JSON Object back to the client.</p>
<p class="has-line-data" data-line-start="6" data-line-end="9">Endpoints<br>
/api/v1/parse (POST)<br>
/api/v2/parse (POST)</p>
<p class="has-line-data" data-line-start="10" data-line-end="14">Request Body<br>
{<br>
data: “JOHN0000MICHAEL0009994567”<br>
}</p>
<p class="has-line-data" data-line-start="15" data-line-end="25">Expected Results<br>
/api/v1/parse – Response Body<br>
{<br>
statusCode: 200,<br>
data:  {<br>
firstName: “JOHN0000”,<br>
lastName: “MICHAEL000”,<br>
clientId: “9994567”<br>
}<br>
}</p>
<p class="has-line-data" data-line-start="27" data-line-end="36">/api/v2/parse – Response Body<br>
{<br>
statusCode: 200,<br>
data:  {<br>
firstName: “JOHN”,<br>
lastName: “MICHAEL”,<br>
clientId: “999-4567”<br>
}<br>
}</p>
<p class="has-line-data" data-line-start="0" data-line-end="2">![Screenshot 1](./screenshots/Screen Shot 2019-09-14 at 8.37.09 PM.png)<br>
An example request for endpoint /api/v1/parse</p>
<p class="has-line-data" data-line-start="3" data-line-end="5">![Screenshot 2](./screenshots/Screen Shot 2019-09-14 at 8.37.24 PM.png)<br>
An example request for endpoint /api/v2/parse</p>