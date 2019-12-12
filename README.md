# [CS 690] Meal Planner App - F19
##### Table of Contents  
[Introduction](#intro)  
[Installation](#install)   
[Usage](#usage)   
[API Endpoints](#end)  

<a name="intro"/>

## Introduction
Meal Planner is aimed at helping people live healthier lives. Trying to lose weight or eat healthier can be a real struggle especially when all the foods one usually eats may not always be the healthiest of choices. A lot of times people don’t know where to even begin when it comes to eating better. This application is being developed to help provide these people with a plan that is available right at their fingertips. Many people also don’t have a personal trainer, dietician, or nutritionist, and using this application to get them started on the road to better eating habits may inspire them to take being healthy a step further. 

For a full overview of the project please read: [here](https://docs.google.com/document/d/1sT3XQbnzNzFNtIfEx2oeOl8DsX1Q3Gn98xbiB8Z1bxY/edit)

- [Google Drive](https://drive.google.com/drive/folders/1pFVTUZqyapQQDmyqRgjX5VV8rxc-p6jK)

<a name="install"/>

## Installation

1. Clone Repo
2. >npm install
3. Change directories to /api
	>sequelize db:create 
	>sequelize db:migrate 
	>sequelize db:seed:all 
	>npm start
4. change directories to /client
	>npm start
  
<a name="usage"/>

## Usage

Inside of /api/config you need 2 files:
config.json --> needs to be something like below
```
{
	"development": {
		"username": "postgres",
		"password": 12345678,
		"database": "meal_planner",
		"host": "localhost",
		"port": 5432,
		"dialect": "postgres",
		"operatorsAliases": false
	},
"test": {
	"username": "postgres",
	"password": 12345678,
	"database": "meal_planner",
	"host": "localhost",
	"dialect": "postgres",
	"port": 5432,
	"operatorsAliases": false
},
"production": {
	"username": "postgres",
	"password": 12345678,
	"database": "meal_planner",
	"host": "localhost",
	"port": 5432,
	"dialect": "postgres",
	"operatorsAliases": false
},
"jwt": {
	"jwtSecret": "$eCrEt",
	"jwtDuration": "7 days"
	}
}
```
secret.json
```
{
"secret":"$eCrEt",
"duration": "7 days",
"STRIPE_SECRET_KEY": "will need to get your own stripe secret key",
"STRIPE_PUBLISHABLE_KEY": "need to get your own publishable key",
"email": "for nodemailer, you need to provide your email",
"password": "provide passowrd to email"
}
```

<a name="end"/>

## API Endpoints
**ACCOUNT**

>**GET**        /api/account

**CUISINE**

>**GET**        /api/cuisine?type={:type}

>**GET**        /api/cuisines'

**CUSTOMER_CHARGE**
>**POST**      /api/charge

**CONTACT_US**
>**POST**      /api/contactUs

>**POST** 	   /api/sendIngredient

**FAVORITES**
>**GET**        /api/favorites

>**POST**      /api/favorites

>**GET**        /api/favorites/isfavorite/:mealId

>**DELETE** /api/favorites

**INGREDIENTS**
>**GET**        /api/ingredients/:mealId

**MEALS**
>**GET**        /api/meals

>**POST**      /api/meals/:id

**NUTRITION**
>**GET**        /api/nutrition/:id

**PREFERENCES**
>**GET** /api/preferences

>**POST** /api/preferences

>**PUT** /api/preferences

**RECOMMENDATIONS**
>**GET**        /api/recommendations

>**POST**      /api/recommendations

>**DELETE** /api/recommendations

**USERATE**
>**GET** /api/ates/

>**POST** /api/ate/

>**GET** /api/hasAte/:mealId

>**DELETE** /api/ate

**USERMEALS**
>**GET**        /api/userMeals

>**POST**      /api/userMeals

>**DELETE**  /api/userMeals/:id

**USER AND AUTH**
>**GET**         /api/user/:userId

>**POST**      /api/register

>**POST**      /api/login



