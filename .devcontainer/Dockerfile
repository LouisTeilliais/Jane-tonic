FROM ubuntu:22.04

# Créer un utilisateur non-root
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME \
    && apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

USER $USERNAME

# Préparer l'environnement
RUN sudo apt-get clean \
    && sudo apt-get update --fix-missing \
    && sudo apt-get install -y git curl nano

# Installer Node.js 20.x
RUN sudo apt-get install -y ca-certificates gnupg \
    && sudo mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list \
    && sudo apt-get update \
    && sudo apt-get install -y nodejs

# Définir l'environnement
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Installer NestJS CLI et Prisma
RUN sudo npm install -g @nestjs/cli prisma

# Copier le contenu et définir le répertoire de travail
WORKDIR /workspace
COPY . .

# Installer les dépendances
RUN npm install

# Commande de démarrage par défaut
CMD ["npm", "run", "start"]
