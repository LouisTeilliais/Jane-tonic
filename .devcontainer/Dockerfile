FROM ubuntu:22.04

# This Dockerfile adds a non-root user with sudo access.
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
RUN sudo apt-get install python3-pip -y
RUN sudo apt-get install curl -y
RUN sudo apt-get install unzip -y
RUN sudo apt-get install nano -y
RUN sudo apt-get update --fix-missing
RUN export EDITOR="/usr/bin/nano"

# install nodejs 18.x and stuff
RUN sudo curl -sL https://deb.nodesource.com/setup_18.x | sudo bash -
RUN sudo apt-get install -y nodejs
RUN sudo npm i -g serve@14.2.0
RUN sudo npm i -g gitmoji-cli@8.2.2
# RUN sudo npx playwright install-deps chromium

# install postgresql-client
RUN sudo apt-get install -y postgresql-client

# install nest 😺
RUN sudo npm i -g @nestjs/cli@9.1.4
RUN sudo npm i -g prisma@4.13.0

WORKDIR /jane_tonic