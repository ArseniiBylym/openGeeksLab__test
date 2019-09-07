## Eat and Read (openGeeksLab test)
MERN stack app for read, create, update and delete recipes and articles by related categories

[Live demo](https://opengeeks.herokuapp.com/)

### Run project locally
1. Clone the repository
> git clone https://github.com/ArseniiBylym/openGeeksLab__test.git
>
> cd openGeeksLab__test
2. Install project dependencies
> npm install
>
> cd client
>
> npm install
>
> cd ..

3. Rename .expample.env file to .env in the root directory
4. (optional) Run app with [redis](https://redis.io/) caching
    1. Checkout to "redis" branch
    >   git checkout redis
    >
    >   npm install

    2. Install and run [redis](https://redis.io/)
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