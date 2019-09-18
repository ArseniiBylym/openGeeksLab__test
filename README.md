## Eat and Read (product list tree app)
MERN stack app for read, create, update and delete recipes and articles by related categories

[Live demo](https://opengeeks.herokuapp.com/)

### Run project locally with Docker
1. Install [docker](https://docs.docker.com/install) and [docker-compose](https://docs.docker.com/compose/install), if they already not instaled
2. Create new file config/keys/keys.dev.js and copy content from config/keys/example.keys.dev.js 
> cp config/keys/exmaple.keys.dev.js config/keys/keys.dev.js
3. Run from root folder 
> docker-compose up
4. Open browser on localhost:3000 


### Run project locally
1. Clone the repository
> git clone https://github.com/ArseniiBylym/productCategories__test.git
>
> cd productCategories__test
2. Install project dependencies
> npm install
>
> cd client
>
> npm install
>
> cd ..

3. Create new file config/keys/keys.dev.js and copy content from config/keys/example.keys.dev.js 
> cp config/keys/exmaple.keys.dev.js config/keys/keys.dev.js

4. (optional) Fill config/keys/keys.dev.js with your own values
    
5. Run concurrently dev node server and Create-React-App server
> npm run dev

6. Open browser on localhost:3000

### Get api documentation

1. Go to the root folder

2. Install project dependencies, if they have not been installed already 

>npm install

3. Generate api documetation

>npm run generate-api-docs

4. Open docs/api/index.html