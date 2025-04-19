# Microfrontend Platform (MFP)

A modern, modular frontend architecture using microfrontends with mixed framework support (React + Vue).

This project demonstrates a scalable microfrontend (MFE) setup with complete CI/CD pipelines, testing, and linting. It follows industry best practices to enable teams to collaborate effectively, deploy independently, and build maintainable apps using different frameworks.

## Project Structure
packages/
container/ # Host application that integrates all child MFEs (React)
auth/ # Authentication microfrontend (React)
marketing/ # Marketing landing microfrontend (React)
dashboard/ # Dashboard microfrontend (Vue.js)


- `container`: Main shell that loads and connects microfrontends (React)
- `auth`: Handles authentication UI and logic (React)
- `marketing`: Marketing/public-facing pages (React)
- `dashboard`: Main app functionality once a user is logged in (Vue.js)

## Why Microfrontends?

Microfrontends divide a large app into smaller, independent apps that:
- Promote **codebase isolation**
- Enable **independent deployment**
- Allow usage of **different frameworks per sub-app** (React/Vue/etc.)
- Foster **autonomous teams**
- Enable **gradual migration** between frameworks

## Features

- **Module Federation** to dynamically load sub-apps
- **Mixed framework support** (React + Vue.js)
- **Isolated CSS** to prevent styling conflicts
- **Independent deployments** per app
- **CI/CD pipeline** for automated testing, linting, and deployment
- **Super Linter** integration for consistent code quality
- **Framework-agnostic communication** between MFEs

## Live Demo

Check out the deployed app here:

[https://dpvrhhwgmwf0h.cloudfront.net/](https://dpvrhhwgmwf0h.cloudfront.net/)

## CI/CD Pipeline

Each push to `main` triggers:
- Install dependencies
- Run framework-specific tests (Jest for React, Vitest/Jest for Vue)
- Run Super Linter (won't block deployment on failure)
- Build all microfrontends
- Upload to AWS S3
- Invalidate CloudFront cache

## Tech Stack

- **Container**: React + Webpack Module Federation
- **Auth**: React
- **Marketing**: React
- **Dashboard**: Vue.js 3
- **Build**: Webpack 5 with Module Federation
- **Hosting**: AWS S3 + CloudFront
- **CI/CD**: GitHub Actions
- **Testing**: 
  - React: Jest + React Testing Library
  - Vue: Vitest or Jest
- **Linting**: Super Linter (ESLint + Stylelint)

## 🛠Getting Started

```bash
# Install and run container (host app)
cd packages/container
npm install
npm start

# Install and run Vue dashboard
cd ../dashboard
npm install
npm run serve

# Install and run React microfrontends
cd ../auth
npm install
npm start

cd ../marketing
npm install
npm start
