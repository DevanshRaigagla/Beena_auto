# Vercel Deployment Guide - Beena Auto Accessories

Follow these steps to deploy your website to Vercel:

## 1. Prepare Your MongoDB Atlas
- Create a Cluster on MongoDB Atlas.
- Add your IP address to the Network Access whitelist.
- Create a Database User.
- Copy your **Connection String**.

## 2. Push to GitHub
- Initialize git in the root folder: `git init`
- Add files: `git add .`
- Commit: `git commit -m "Initial commit"`
- Create a repository on GitHub and push.

## 3. Deploy to Vercel
- Import your repository to Vercel.
- **Root Directory**: Leave it as the project root.
- **Environment Variables**:
  - `MONGODB_URI`: Your MongoDB connection string.
  - `WHATSAPP_NUMBER`: 918779732651 (without +)
  - `PHONE_NUMBER`: +91 8779732651
  - `EMAIL_ADDRESS`: mj6142@gmail.com
  - `BUSINESS_ADDRESS`: https://share.google/0D2kbmr3nEl9lcG9S
- Click **Deploy**.

## 4. Backend Routing
The `vercel.json` file in the root handles the routing, sending `/api` requests to the serverless function and everything else to the React frontend.
