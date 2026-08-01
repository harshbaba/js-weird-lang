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






        
          



