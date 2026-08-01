# Docker Getting Started

## Docker Installation

**Download & Install Docker Desktop on your system**

```bash
docker -v
```
*Display the docker version*

## For Running a Container in Docker

```bash
docker run -it ubuntu
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

    ***Containers are like as Laptop in which operating system installs and runs, Containers are isolated and does not share memory unless we want***
        
          



