# Docker Getting Started

## Docker Installation

**Download & Install Docker Desktop on your system**

```bash
docker -v
```
*Display the docker version*

## For Running a Container in Docker

```bash
docker run -it image_name // like docker run -it ubuntu
```
- Note
  - *Running Ubuntu Operating System container in interactive mode*
  - *Once you run above command, first it will find ubuntu image from your local machine, If not found then it will download Ubuntu Image from hub.docker.com !*
  - *Basically hub.docker.com having public containers, its like Github for containers*
  - *After Download you can go to images and check your ubuntu image there (In Docker Desktop GUI)*
  - *This command also will you enter insider ubuntu, for exit you can press ctrl + d*
  - *Container works in isolated manners, whatever you do inside that, it will never effect outside*

## What is Images & Containers

  - Images
    **A Docker Image is a read-only template that contains everything needed to run an application.**

      - It includes:
        - Your application code
        - Runtime (Node.js, Python, Java, etc.)
        - Libraries
        - Dependencies
        - Environment configuration
        - Default command to start the application

      ***In Simple Language Images are like as operating system, An Image can run in multiple containers***
    
  - Container
    **A Container is a running instance of an Image. When Docker starts an image, it creates a container.**

      - The container gets:
        - CPU
        - Memory
        - Network
        - Process
        - File system

    ***Containers are like as Laptop in which operating system installs and runs by container, Containers are isolated and does not share          memory unless we want***

    - Custom Image
      - At time of actual development we can create own custom image which will have all required tools (software) which are using in our           app.
      - Suppose in our app below tools needed
        - Ubuntu
        - Node
        - Redis
        - Webpack cli
        - Mongo DB

      - Pros:
      
        - *We can create our custom image in which all tools will be installed. If any new member join then we can ask to get this image and run inside container.*
        - Due to this we can avoid software versioning issue and also operating system mismatch issues.*
        - This Image will also help to configure and create instance on server.*
        - If we have to create any new dev environment like sit1 or Sit2 then we have to run our image there.*


## Useful Commands:

#### For showing running containers
```bash
docker container ls 
```

#### For showing all containers
```bash
docker container ls -a
```

  *Every container has own Name as well as Container Id*

#### For start & stop a container
```bash
docker start container_name
```
```bash
docker stop container_name
```

*Note: If you use docker run then this command will create a new container and then run*

### Execute 

```bash
docker exec container_name  // docker exec container_name ls
```

*Above command will show all folders of a container, after performing task it will exit from container and come to your terminal.*<br/>
*If you Want to not exit from container then run in interactive mode*

### Execute in Interactive Mode

```bash
docker exec -it container_name  // docker exec -it container_name ls
```

### List available images of your system

```bash
docker images  or docker image ls
```

**Note:** *It is good practice to use only "Docker Official Images" and "Verified Publisher"*

## Port Mapping

*As we know containers are isolated so if you run any application on port 8080 inside container then it will not visible on your system.*
*For solving this we do port mapping, we expose container port to own system port by:

```bash
docker run -it -p container_port:machine_port Image_name // docker run -it -p 6000:6000 harsh/myNodeApp
```

## Environment Variables

*For Passing Environment variable to docker*

```bash
docker run -it -p container_port:machine_port -e key=value Image_name // docker run -it -p 6000:6000 harsh/myNodeApp
```

## Dockerization of Node js Application

  *We are going to dockerize our node js application, so our developer can use this image or we can deploy this image on server*

  - Create a sample express js application or use any existing node js application
  - Create a file in root which name will be exact "Dockerfile"

  #### Sample Application Code
```const express = require("express");
const app = express();

const PORT = process.env.port || 8000

app.get('/', (req, res)=>{
    return res.json({message: "Hello Node Js App With Docker"});
});

app.listen(PORT, ()=>{
    console.log('Server started at port:'+PORT );
})
```

#### Docker file
  - Choose a base Image like ubuntu
  - Install Node inside image
  - Install curl inside image for get node js.
  
```
FROM ubuntu:24.04
# Install curl
RUN apt-get update && \
    apt-get install -y curl ca-certificates && \
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "main.js"]
```

```bash
docker build -t my-node-app .
```

 - What does this command mean?
   - docker build -t my-node-app .
   - docker build → Build a Docker image.
   - -t my-node-app → Give the image the name my-node-app.
   - . → Use the current directory as the build context.
   - The . is very important. It tells Docker:
   - *"Everything in this directory can be used by the Dockerfile."*

   - Now Go Into Docker Desktop app and go in Images, you can see your "my-node-app" image is build.
   - This image is currently in your system, not deployed on docker hub.
   - You can run this image in your local by:

      ```bash
        docker run -it -p 8000:8000 my-node-app 
      ```

    - If we have to pass environment variable:
      ```bash
        docker run -it -e PORT=4000 -p 4000:4000 my-node-app 
      ```

    - If you want to see your project files are want to go inside container:
       ```bash
        docker exec -it container_id bash
      ```

#### Caching Layers

  - Docker does cache, so if you again run command for build then it completes in very less time.
  - That is why we should keep installation code or common code at top, so next time when main.js code will change then from first few line will not execute again because it will start from changed code or line.
  - So it is best practice always put such type of code at top.

#### Publishing to Hub

  - Go to gub.docker.com
  - Login with your account
  - Go to repository and create new repository
  - Suppose repository you make like harshapache/my-node-app
  - Now in your system you need to create image from same name: harshapache/my-node-app
  - For creating image you will run.
  - If you have to check image is created or not, go to Docker Desktop and see Images
  - Now you have to push this image to hub.docker
  - open new terminal in your system:
  - Run docker push harshapache/my-node-app
  - If you are not logged in docker in your system, it will ask for login
  - in terminal run docker login
  - then push your image.
  - Once done go to hub.docker and reload, you will see your image is there.

## Docker Compose

*Imagine you have a simple Node.js app Right now, your application only needs Node.js. You run it like this:*
```bash
docker build -t my-node-app .
docker run my-node-app
```
*This is simple because there is only one container.*

#### Now imagine a real-world application

 - Your Node.js application needs:
   - Node.js application
   - MongoDB database
   - Redis cache
   
#### Without Docker Compose

*You would have to start each container manually.*
- Start MongoDB:
```bash
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  mongo
```

- Start Redis:
```bash
  docker run -d \
  --name redis \
  -p 6379:6379 \
  redis
```

- Start Node.js:
```bash
docker run \
  --name node-app \
  -p 3000:3000 \
  --network my-network \
  my-node-app
  ```

#### You also need to:

- Create a Docker network
- Connect containers
- Set environment variables
- Mount volumes
- Expose ports
- Start them in the correct order

*As your application grows, this becomes tedious and error-prone.*

#### Docker Compose to the rescue

- Instead of typing many commands, you describe everything in one file.

##### Example:

```bash
services:
  app:
    build: .
    ports:
      - "3000:3000"

  mongodb:
    image: mongo

  redis:
    image: redis

```
*Save this as:*

```bash
docker-compose.yml
```

Now start everything with one command:

```bash
docker compose up
```

##### Docker automatically:

- Builds your app image
- Starts the Node container
- Starts MongoDB
- Starts Redis
- Creates a network
- Connects all containers

## Docker Networking

### Why do We Need Networking?

Imagine you have two containers:

```text
+----------------+      +----------------+
| Node.js App    | ---> | MongoDB        |
| Port: 3000     |      | Port: 27017    |
+----------------+      +----------------+
```

Your **Node.js application** needs to send queries to **MongoDB**.

Without networking, the containers are isolated and **cannot communicate**.

Docker networking solves this problem.

---

### Every Container Has Its Own Network

When you run a container:

```bash
docker run nginx
```

Docker automatically creates:

- A network interface
- An IP address
- A hostname

Think of a container as a small virtual machine.

```text
+----------------------+
|      Container       |
|----------------------|
| Hostname             |
| IP Address           |
| Network Interface    |
+----------------------+
```

---

### Types of Docker Networks

Docker provides several network drivers.

The most common are:

| Network Type | Purpose |
|--------------|---------|
| **bridge** | Communication between containers on the same host (default) |
| **host** | Container shares the host's network |
| **none** | No networking at all |
| **overlay** | Communication across multiple Docker hosts (Docker Swarm) |

> **For beginners, focus on the `bridge` network.**

---

### Bridge Network (Default)

When Docker is installed, it automatically creates a **bridge network**.

Check it using:

```bash
docker network ls
```

Example output:

```text
NETWORK ID     NAME      DRIVER
abc123         bridge    bridge
def456         host      host
ghi789         none      null
```

The **bridge** network is the default network.

---

#### Running a Container

```bash
docker run -d nginx
```

Docker automatically connects it to the bridge network.

```text
Host Machine
-----------------------------

       Bridge Network
              |
              |
         +------------+
         |   Nginx    |
         | 172.17.0.2 |
         +------------+
```

---

### Container Gets an IP Address

Inspect a container:

```bash
docker inspect <container-id>
```

Example:

```json
"IPAddress": "172.17.0.2"
```

Every container gets its own IP address.

---

### Problem with the Default Bridge Network

Suppose you start two containers:

```bash
docker run -d --name app my-node-app
docker run -d --name mongo mongo
```

Both are connected to the default bridge network.

```text
Bridge Network

+-------------+
| App         |
| 172.17.0.2  |
+-------------+

+-------------+
| Mongo       |
| 172.17.0.3  |
+-------------+
```

Can the app connect using:

```text
mongodb://mongo:27017
```

**No.**

On the **default bridge network**, Docker **does not provide automatic DNS-based name resolution** between containers.

You would have to:

- Use the container's IP address, or
- Use the legacy `--link` option (**deprecated**).

Using IP addresses is a bad idea because they can change whenever the container is recreated.

---

### User-Defined Bridge Network

Instead, create your own bridge network:

```bash
docker network create my-network
```

Verify:

```bash
docker network ls
```

Example:

```text
bridge
host
none
my-network
```

---

### Start Containers on the Same Network

Start MongoDB:

```bash
docker run -d \
  --name mongo \
  --network my-network \
  mongo
```

Start the Node.js application:

```bash
docker run -d \
  --name app \
  --network my-network \
  my-node-app
```

Network layout:

```text
      my-network

    +---------+
    |  App    |
    +---------+
         |
         |
    +---------+
    | Mongo   |
    +---------+
```

Docker automatically provides **DNS resolution** for containers on **user-defined bridge networks**.

Your Node.js application can simply connect using:

```text
mongodb://mongo:27017
```

Here, **`mongo`** is the container name.

No IP addresses are required.

---

### Publishing Ports

Inside the container:

```text
Node.js App
Port 3000
```

Can your browser access it?

**No.**

The application is running **inside the container**, so its port is not exposed to your host machine.

You must publish the port.

```bash
docker run -p 3000:3000 my-node-app
```

Meaning:

```text
Host:3000
    |
    |
Container:3000
```

Now you can visit:

```text
http://localhost:3000
```

### Common Docker Network Commands

### Create a Network

```bash
docker network create my-network
```

Creates a new user-defined bridge network.

---

### List Networks

```bash
docker network ls
```

Displays all available Docker networks.

---

### Inspect a Network

```bash
docker network inspect my-network
```

Shows detailed information about the network, including:

- Connected containers
- Network driver
- Subnet
- Gateway
- Configuration details

---

### Connect a Running Container to a Network

```bash
docker network connect my-network app
```

Connects the running container **`app`** to the **`my-network`** network.

---

### Disconnect a Running Container from a Network

```bash
docker network disconnect my-network app
```

Removes the running container **`app`** from the **`my-network`** network.

---

### Remove a Network

```bash
docker network rm my-network
```

Deletes the network named **`my-network`**.

> **Note:** A network can only be removed if no containers are currently connected to it.

## Docker Volume Mounting 

## What is Volume Mounting?

Volume mounting allows you to **share** or **persist data** outside the container.

Containers are **temporary (ephemeral)**. If you remove a container, any data stored **only inside the container** is permanently lost.

---

### Why Do We Need Volume Mounting?

There are two main reasons:

1. **Persist Data**
2. **Share Files with Your Computer (Development)**

---

### 1. Persist Data

Store important data such as:

- Database files
- Uploaded files
- Logs
- Application data

outside the container so it survives even if the container is deleted.

#### Without a Volume

```text
Container
│
└── database.db

docker rm container

database.db ❌ Lost
```

Once the container is removed, the data is gone.

---

#### With a Volume

```text
Container
     │
     ▼
Docker Volume
     │
database.db

docker rm container

Container ❌
Volume ✅
Data ✅
```

Even if the container is deleted, the volume still exists and your data is preserved.

---

### 2. Share Files with Your Computer (Development)

Instead of rebuilding the Docker image after every code change, you can mount your project folder into the container.

```text
Host Machine

main.js
     │
     ▼
Container
/app/main.js
```

Now when you edit **`main.js`** in VS Code (or any editor), the container immediately sees the updated file.

No image rebuild is required.

---

### Two Types of Mounts

#### 1. Bind Mount

A **Bind Mount** shares a folder from your computer with the container.

Example:

```bash
docker run -v $(pwd):/app my-node-app
```

### Best For

- Development
- Live code changes
- Working with source code

---

#### 2. Named Volume

A **Named Volume** is managed entirely by Docker.

Create a volume:

```bash
docker volume create my-volume
```

Use it:

```bash
docker run -v my-volume:/app/data my-node-app
```

#### Best For

- Databases
- Uploaded files
- Persistent application data
- Logs and backups

---

### Bind Mount vs Named Volume

| Bind Mount | Named Volume |
|------------|--------------|
| Uses your local folder | Managed by Docker |
| Great for source code | Great for persistent data |
| Edit files directly from VS Code | Data survives container recreation |
| Ideal for development | Ideal for production data |

---

#### When Should You Use Which?

| Scenario | Recommended |
|----------|-------------|
| Developing a Node.js application | **Bind Mount** |
| MongoDB / PostgreSQL data | **Named Volume** |
| Uploads, logs, backups | **Named Volume** |
| Live code editing | **Bind Mount** |

---

### Easy Way to Remember

> **Bind Mount = Share my local folder with the container.**

> **Named Volume = Give the container permanent storage.**

---

### Summary

Docker volume mounting helps you:

- Persist important data outside containers
- Share files between your computer and containers
- Develop faster with live code updates
- Keep databases and uploads safe even after containers are removed

That's the core idea behind **Docker Volume Mounting**.

## Docker Layer Caching

 - Docker builds images layer by layer and caches each layer. If a layer hasn't changed, Docker reuses it. Once a layer changes, that layer and every layer after it must be rebuilt.

 - That's why a well-structured Dockerfile can make builds dramatically faster, especially for applications where source code changes frequently but dependencies change infrequently.

## Docker Multi-Stage Builds

### Why Do We Need Multi-Stage Builds?

Suppose you're building a **Node.js application**.

During the build process, you need:

- Node.js
- npm
- Development dependencies
- Build tools

However, when running the application, you only need:

- Node.js
- Your compiled application

You **don't need the build tools anymore**.

Without multi-stage builds, everything remains in the final Docker image.

```text
Final Image

Ubuntu
├── Node.js
├── npm
├── Build tools
├── Source code
├── node_modules
└── Application
```

As a result, the image becomes much larger than necessary.

---

# Real-Life Analogy

Imagine you're building a house.

During construction, you use:

- Cement mixer
- Crane
- Scaffolding
- Drilling machine

Once the house is finished, do you leave all those machines inside?

**No.**

You remove them and keep only the finished house.

Docker **Multi-Stage Builds** follow the same idea.

---

# Without Multi-Stage Build

```dockerfile
FROM ubuntu:24.04

RUN apt-get update
RUN apt-get install -y nodejs npm

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

CMD ["node", "dist/main.js"]
```

After building, the final image contains everything:

```text
Image

Ubuntu
├── Node.js
├── npm
├── Source Code
├── Build Tools
├── node_modules
└── dist/
```

Everything stays in the image, including files that are no longer needed.

---

## With Multi-Stage Build

```dockerfile
# ---------- Stage 1 ----------
FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# ---------- Stage 2 ----------
FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .

RUN npm install --omit=dev

CMD ["node", "dist/main.js"]
```

Notice that there are **two `FROM` instructions**.

Each `FROM` starts a completely new build stage.

---

### Stage 1 – Builder

```dockerfile
FROM node:22 AS builder
```

This stage exists **only to build the application**.

```text
Builder Stage

Node.js
npm
Source Code
Build Tools
```

It runs:

```dockerfile
RUN npm install
RUN npm run build
```

The result is a compiled application:

```text
dist/
```

---

### Stage 2 – Production

The second stage starts from a fresh image.

```dockerfile
FROM node:22-slim
```

This image knows **nothing about Stage 1**.

Initially, it contains only:

```text
Production Stage

Node.js
```

There is:

- No source code
- No build tools
- No development dependencies

---

### Copy Only What You Need

```dockerfile
COPY --from=builder /app/dist ./dist
```

This means:

```text
Builder Stage
-----------------
/app/dist
      │
      ▼
Production Stage
-----------------
/app/dist
```

Only the compiled application (`dist/`) is copied into the final image.

The source code, build tools, and other unnecessary files are left behind in the builder stage, resulting in a **smaller, cleaner, and more secure production image**.
  






        
          



