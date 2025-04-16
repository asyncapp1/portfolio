# Deployment Guide

## Railway Deployment

When deploying to Railway:

1. Make sure to connect your GitHub repository
2. Set up the following environment variables:
   - `NODE_ENV=production`
   - `PORT=3000` (or let Railway assign one dynamically)
   - `CI=false`

3. Use the following settings in the Railway dashboard:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start:prod`

## Vercel/Netlify Deployment

For Vercel or Netlify, you can simply connect your GitHub repository and they will automatically detect the React app and deploy it correctly.

## Docker Deployment

If you're using Docker:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
```

Build with: `docker build -t portfolio .`
Run with: `docker run -p 3000:3000 portfolio` 