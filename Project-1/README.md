# 234G1A05B3
AffordMed Assignment
# Campus Notification Prioritization System

## Overview

This project fetches notifications from the Affordmed Notification API, calculates a priority score for each notification, ranks them, and returns the Top 10 highest-priority notifications.

## Features

* Fetch notifications using Bearer Authentication
* Custom Logger Middleware
* Priority Calculation based on notification type and recency
* Sorting notifications by priority
* Returns Top 10 notifications

## Technologies Used

* Node.js
* Express.js
* Axios
* Git
* GitHub

## Project Structure

Project-1/

* app.js
* middleware/logger.js
* services/notificationService.js
* utils/priorityCalculator.js
* package.json

## API Endpoint

GET /priority

Returns the Top 10 prioritized notifications.

## Running the Project

Install dependencies:

npm install

Start server:

node app.js

Open:

http://localhost:3000/priority

## Author

A R Nithin

Roll No: 234G1A05B3
