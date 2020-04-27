FROM ubuntu:18.04

RUN apt update && apt upgrade && \ 
    apt install mongodb-clients --yes --quiet && \ 
    apt install nano --yes --quiet && \
    apt install git --yes --quiet && \
    apt install wget unzip

# add python
RUN apt install python3 --yes --quiet && \
    apt install python3-pip --yes --quiet && \
    pip3 install pymongo

# add node.js 
RUN apt install node.js --yes --quiet && \
    apt install npm --yes --quiet && \
    npm install mongodb

# add .net core
RUN wget https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && \
    dpkg -i packages-microsoft-prod.deb && \
    apt update && \
    apt install dotnet-sdk-3.1 --yes --quiet    

# add java
RUN apt install openjdk-11-jdk --yes --quiet && \
    apt install maven --yes --quiet

WORKDIR /code

ADD ./code /code

# build .net project
RUN   dotnet add cs/code.csproj package MongoDB.Driver && \
      dotnet build cs/code.csproj 

# build java project
# RUN   mvn  compile exec:java -Dexec.mainClass=com.app.PersonList
