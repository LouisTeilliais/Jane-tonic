# Jane-tonic

Jane-tonic is a web application dedicated to sports and wellness.  
This README provides instructions for deployment, updating the project, and Apache virtual host configuration for domain redirection.

---

## 🔧 Deployment (Ubuntu Server)

Make sure Docker and Docker Compose are installed.  
Then, from the project root directory:

```bash
git clone https://github.com/LouisTeilliais/Jane-tonic
cd JaneTonic
docker compose up -d
```

## 🔁 Updating the Project

```bash
docker compose down
docker rmi $(docker images -q)
docker system prune -f
git pull
docker compose up -d
```

## 🌐 Apache Configuration for Domains

```bash
mv JaneTonic/apache/* /etc/apache2/sites-available
```

## 🔐 SSL Certificates

```bash
sudo certbot certonly --apache -d janetonic.fr -d www.janetonic.fr
sudo certbot certonly --apache -d coach-sportif-capbreton-hossegor.fr -d www.coach-sportif-capbreton-hossegor.fr ...
```

## ✅ Enable Sites & Restart Apache

```bash
sudo a2ensite jane-tonic-front.conf
sudo a2ensite redirect-to-janetonic.conf
 + all necessary files 
sudo systemctl reload apache2
```

## 👥 Author
Louis Teilliais – [key]: http://www.janetonic.fr