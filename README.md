# Vinhomes Grand Park On-demand Local Services (VinGiG)

## 1. Database Generation For VinGiG

Prerequisites: Microsoft SQL Server with username = sa & password = 12345

- **Step 1**: Open [DatabaseScript](https://github.com/huynbgithub/Vinhomes-Service-Booking-Website/tree/master/DatabaseScript) Folder
- **Step 2**: Execute file create.sql -> Execute file data.sql

You have successfully generated data for VinGiG.

## 2. SpringBoot Web Service For VinGiG

### Clone VinGiG_BE_SpringBoot Project

- Link: [https://github.com/mamnamngu/VinGiG_BE_SringBoot](https://github.com/mamnamngu/VinGiG_BE_SringBoot).

### Spring Tool Suite Environment Setup

- This guide will walk you through the installation process of Spring Tool Suite (STS), a popular integrated development environment (IDE) for Spring applications. STS provides powerful tools and features to streamline the development of Spring-based projects.

#### Prerequisites

Before installing Spring Tool Suite, ensure you have the following prerequisites:

- **Java Development Kit (JDK)**: STS requires a JDK to run. Make sure you have JDK 8 or later installed on your system.

- **Operating System**: STS is available for Windows, macOS, and Linux.

#### Download Spring Tool Suite

1. Link: [Drive](https://drive.google.com/file/d/1TDU6szx6U1nIWF6t-SVlUs_cMbqwWijP/view?usp=drive_link).

2. Download the File.

#### Install Lombok into STS

- **Step 1**: Open VinGiG_BE_SpringBoot in STS.
- **Step 2**: Click on VinGiG_BE_SpringBoot in Package Explorer -> Click on Maven Dependencies -> Find lombok-1.18.24.jar and follow the path to this file in File Explorer.
- **Step 3**: Open lombok-1.18.24.jar -> Follow the installation steps -> In the last step, select STS as the installation place -> Click Install. 
- **Step 4**: Close VinGiG in STS -> Close STS -> Restart Computer.

#### Run VinGiG_BE_SringBoot

- **Step 1**: Open VinGiG_BE_SpringBoot in STS.
- **Step 2**: Right Click on VinGiG_BE_SpringBoot in Package Explorer -> Hover `Run as` option -> Select `Spring Boot App`

You have successfully installed & run VinGiG_BE_SringBoot using Spring Tool Suite (STS).

## 3. ReactJS Web Client For VinGiG

### Prerequisites

- **Node.js and npm**: Make sure you have Node.js (which includes npm, the Node Package Manager) installed on your computer. You can download the latest version of Node.js from the official website: https://nodejs.org

### Run VinGiG_FE_ReactJS

In the project directory, Open Terminal and Run:

#### `npm install`

#### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### Login as Admin
- Username: admin123
- Password: admin123

#### Login as Customer
- Username: hoangthiphuongthao91
- Password: thao91103

#### Login as Provider
- Username: linhnguyen2408
- Password: linh2408

Congratulations! You have successfully run ReactJS Web Client For VinGiG. You can now browse VinGiG and explore all the features. 
