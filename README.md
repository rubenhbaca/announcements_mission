<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## OS Requirements
Please have the following installed on your system.
1. PHP v8.2.15
1. Composer v2.7.2
1. Node.js v18.19.1
1. Git v2.29.2

## Setup
Install all required packages using composer using the following command.

```
> composer install
```

Install required packages using NPM using the following command.
```
> npm install
```

Update the local database by running the migration with the following command.
```
> php artisan migrate
```

Make a local enviornment variable file
```
> cp .env.example .env
```

Generate a local environment key with the following command
```
> php artisan key:generate
```

## Starting the project
### Backend
Start Laravel using the following command.
```
> php artisan serve
```
With your web browser you can view http://localhost:8000

### Frontend
Start React frontend using the following command. This allows front-end instant hot-module.
```
> npm run dev
```

## Getting Started
1. You can create an account by registering (This will give you access to the platform).

1. After registering you can log into the platform and review the announcements.