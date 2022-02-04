# microfrontend with  webpack

>this project is aim to generated a setup for creating microfrontend apps
>its used webpack module federation plugin

## overview
### types of integrations

#### 1. build-time integration
the integration happens before the containers get into the browser
1. easy to setup and understand
2. deploy the container every update in the microfrontend

#### 2. run-time integration
after container get into the browser
1. can deploy microfrontend at any time
2. harder setup

#### 3. server integration

in this repo we use webpack module federation

```
container
  -> cart
  -> products
```

# usage

to run the project and see what is happing
you need to run

```npm i``` and ```npm start```


for every project (cart, container and products)
and then run 


