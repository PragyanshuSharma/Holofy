# testHolofy
Holofy Test API 
Node version v12.13.1
Mongodb version 4.2.2


All APIs except login and signUp are accessible with token only.[i.e Require auth]
[POST]http://localhost:3001/holofy/api/v1/public/user/signUpWithEmail                       User SignUp
[POST]http://localhost:3001/holofy/api/v1/public/user/login                                 Login
[POST]http://localhost:3001/holofy/api/v1/user/book                                         Add book
[PUT]http://localhost:3001/holofy/api/v1/user/book/:bookId                                  Update Book Data
[GET]http://localhost:3001/holofy/api/v1/user/book?bookId=5f033952305716253288043e          GetBook Data (Single)
[GET]http://localhost:3001/holofy/api/v1/user/books?page=1&limit=10                         Books listing pagination
[DELETE]http://localhost:3001/holofy/api/v1/user/books/?bookId=5f033952305716253288043e     Delete a book's details 

Steps to use APIs
1.git clone repository
2.Install pm2 globally  npm i -g pm2
2.pm2 start  server.js -i max or node server.js to start without pm2
 
 APIs started at port 3001 by default