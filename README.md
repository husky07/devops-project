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

# 3. Security & Compliance (ISO, GDPR, SOC 2)

Identified Security Risks & Mitigations

Risk |  Mitigation

Unauthenticated Access | Implemented IAM policies

Data Exposure | Used encryption & HTTPS

Lack of Monitoring | Enabled logging & alerts

# Compliance Alignment

• ISO 27001: Data encryption and access control.

• GDPR: Ensured data protection policies.

• SOC 2: Configured logging and monitoring.

# 4. Monitoring & Logging (Prometheus & Grafana)

4.1 Steps Implemented

4.2 Installed Prometheus on the GCP instance.

4.3 Configured Prometheus by editing prometheus.yml.

4.4 Installed Grafana and set up data visualization.

4.5 Created alerts and dashboards for real-time monitoring.

# Prometheus Configuration (prometheus.yml)

    global:
          scrape_interval: 15s
    scrape_configs:
     - job_name: "prometheus"
      static_configs:
        - targets: ["localhost:9090"]

Running Prometheus:

    cd ~/prometheus-*
     ./prometheus --config.file=prometheus.yml

Running Grafana:

    sudo systemctl start grafana-server

