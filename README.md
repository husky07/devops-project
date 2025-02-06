# devops-project
Project Overview

This project covers four key areas of DevOps:

1.Cloud Infrastructure & Deployment

2. CI/CD Pipeline Implementation

3. Security & Compliance (ISO, GDPR, SOC 2)

4. Monitoring & Logging

[Each section provides a step-by-step implementation process along with configurations and learnings.]

# 1. Cloud Infrastructure & Deployment

1.1 Steps Implemented

1.2 Set up a Virtual Machine (VM) on GCP.

1.3 Deployed a Node.js web application on the instance.

1.4 Configured a firewall to allow necessary ports.

1.5 Enabled automatic startup of the application.

* Key-Commands to Deploy application- node app.js &

# 2. CI/CD Pipeline Implementation

2.1 Steps Implemented

2.2 Configured GitHub Actions for automated builds and deployments.

2.3 Set up a CI/CD pipeline using GitHub Actions and GitLab CI.

2.4 Integrated Docker for containerized deployment.

2.5 Automated tests before deployment.

Actions Workflow:

name: CI/CD Pipeline
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Run Tests
        run: npm test

