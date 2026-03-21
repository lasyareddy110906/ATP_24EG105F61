1. generate package.json(npm init -y)
2. create express server(server.js)
3. install mongoose and connect to mongoDB server(npm install mongoose)

        REST API-- MondoDB native driver--->DB server
        REST API-- Mongoose ODM tool-->DB Server[mongoose is an ODM(Object Document Model) tool]

4. Build USER REST API 
        -Create User
        -Read all Users
        -Read a userid
        -update a user by id
        -delete a user by id

5. Create a Schema(Structure of document--table components) and Model of the Resource(User)
        Schema--> Structure of the document which is used to store a fixed amount of fields strictly
        Model--> sample of schema
6. create userAPI and define routes
--------------------------------------------------------------------------------------
//TCPIP and HTTP relationship?


--------------------------------------------------------------------------------------
new-->operator
an object is necessary for schema creation
string---->datatype
String---->mongoose schema type
required:[true,"message"]--->compulsory field
minLength:[length,"message"]--->minimum length of the field
maxLength:[length,"message"]---->maximum length of the field
pattern:[]---->the required format of the field (ex:password->caps,small,no.,char)
Number--->mongoose schema type




--------------------------------------------------------------------------------------
USER AUTHENTICATION(login)::
        --Submit credentials and get tokens



there are 2 kinds of routes-- public routes and protected routes

        --public routes-- can be used by anyone
        --protected routes-- can be used by authenticated users only


--public route:- req------>public route(by anyone)
--protected route:- req--- middleware---->protected route(by authenticated users only)

xxs,csrf

----------------------------------------------------
cross origin vs same origin::

cross origin request means when the client and server applications are running in different domains.

same origin request means the client also running on the same domain of the server.

cookies will send along with requests automatically in same origin request. But for cross origin request, the token should be explicitly included to the request.