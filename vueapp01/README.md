# devise

> A Vue.js project

## install docker on linux 

<!-- First, add the GPG key for the official Docker repository to the system -->
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

<!-- Add the Docker repository to APT sources -->\
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

<!-- Next, update the package database with the Docker packages from the newly added repo -->
sudo apt-get update

<!-- Make sure you are about to install from the Docker repo instead of the default Ubuntu 16.04 repo -->
apt-cache policy docker-ce

<!-- Finally, install Docker -->
sudo apt-get install -y docker-ce

<!-- Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it's running -->
sudo systemctl status docker

## if Docker is install on your computer (with a linux bash / sudo might be require) you can (in the folder where the Dockerfile is) :

docker build -t vuejs-cookbook/dockerize-vuejs-app .
 <!-- create the docker -->

docker run -it -p 8180:8180 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
<!-- run the docker on 8180 port -->

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
