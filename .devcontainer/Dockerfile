FROM ubuntu:22.04

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set the default user
USER $USERNAME

RUN sudo apt-get clean
RUN sudo apt-get update --fix-missing
RUN sudo apt-get install git -y
RUN sudo apt-get install curl -y
RUN sudo apt-get install nano -y
RUN sudo apt-get update --fix-missing
RUN export EDITOR="/usr/bin/nano"

WORKDIR /app_jane_tonic

## Install NodeJs 20.x
RUN sudo apt-get install -y ca-certificates gnupg
RUN sudo mkdir -p /etc/apt/keyrings  
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
RUN sudo apt-get update 
RUN sudo apt-get install nodejs -y

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

COPY .env.${NODE_ENV} .env

# Install nest & prisma
RUN sudo npm install -g @nestjs/cli
RUN sudo npm install -g prisma
