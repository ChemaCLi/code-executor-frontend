# fullstack-next-boilerplate
This is a boilerplate for NextJS Fullstack web app. It has some samples for backend and frontend with recommended practices.

- [x] Frontend
- [x] Backend

## Tools
- NodeJS v16
- Yarn

## Libraries
- Ant Design 4
- NextJS
- React 18
- TypeScript (with JS support)

## How to run
```bash
yarn install
# then
yarn dev
# or
npx yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to customize
- Just clone, download or fork the project
- Add pages in the `pages` directory, and components in the `components` directory
- The persistance logic is encapsulated in the `services` directory
- Backend code is under the `pages/api` directory

## Use a DB
If you want to use the db just fill the the .env vars and run (you need docker)
```
docker-compose up -d
```
