# Payment Page with React

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Docker Image for React Application

This Docker image contains a React application along with Node.js to build and serve the app. Use this image to easily deploy and run your React app in a Docker container.

## Prerequisites

- Docker installed on your machine.
- Your React application source code.
## Instructions

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/atorpos/PaymentPage-React.git
   
2. Go to the Project Folder
3. Build the Docker image using the provided Dockerfile:
    ```bash
   docker build -t my-react-app
4. Once the image is build, run a container based on that image:
   ```bash
   docker run -p 3000:3000 my-react-app
