# django_mongodb_react

Django-MongoDB-React Application with docker-compose

## Introduction

A Quick Start Example to run Django-MongoDB-React Application in Docker.

## Requirements

This module requires the following modules/libraries:

* [Docker](https://www.docker.com/get-started)
* Any version of Linux or Unix OS (Recommended and Optional)

## Installation

Install using the following the command,

```docker-compose up -d --build```

## Note

To add test patients to the database use a GET request to the
URL http://locallhost:8000/api/v1/create-patient/secret-code with the params "quantity" = count (without params count of
created patients will be 20)

To delete all patients from database use a GET request to the
URL http://locallhost:8000/api/v1/delete-patient/secret-code