## Web Technologies // accompanying project summer semester 2022

## Assignment:

There is a companion project to the Web Technologies module. As part of this project, we will successively develop a project from event to event and look at the progress, do code reviews and present and discuss development steps as part of the event.

We will use GitHub Classroom as the organizational framework for the project. In terms of content, we are looking at developing a small web application for editing images. Here, the focus is less on a professional conception, design and development process, but rather on successively developing an application, trying it out, comparing, refactoring and enjoying executable code.

## Hosted application (username & password -> as specified in Issue #1):

https://enigmatic-mesa-04037.herokuapp.com/

## Run the project locally via Docker:

1. Docker starten
2. Über das Terminal `docker image build --tag beiboot-alexspdlr .` in der "root-folder" laufen lassen
3. Über das Terminal `docker run --publish 9000:9000 beiboot-alexspdlr` in der "root-folder" laufen lassen
4. Projekt im Browser unter `http://localhost:9000/` aufrufen
5. Docker Container in der Docker App unter dem Reiter `Containers` über den Button `Stop` stoppen oder über den Button `Delete` löschen

6. start Docker
7. run `docker image build --tag beiboot-alexspdlr .` in the root folder via the terminal to create the Docker image
8. run `docker run --publish 9000:9000 beiboot-alexspdlr` in the root folder via the terminal to run the container
9. access th project in the browser under `http://localhost:9000/`
10. stop the Docker container inside the Docker App under the `Containers` tab via the `Stop` button or alternatively kill it it by clicking the `Delete` button

## Team

Author: **Alexander Spindeler**  
Reviewer: **Linnéa Doberstein**

## Other

Current code is located in the "main" branch.
