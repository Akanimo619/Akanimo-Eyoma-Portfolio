# Nigeria Crime Risk Classification System

## Project Overview
A K-Means clustering-based crime classification application using Nigeria's 2023 state-level crime statistics. The system scales crime features, predicts a cluster and maps the resulting cluster to a risk level inside a FastAPI application.

## Objective
- Group states with similar crime patterns.
- Use unsupervised learning to identify crime-pattern clusters.
- Translate cluster membership into interpretable risk levels.
- Provide an interactive application for scenario-based assessment.

## Data
The project uses Nigeria 2023 crime statistics with features including Terrorism, Banditry, Murder, Armed Robbery, Kidnapping and Other crime counts.

## Methodology
1. Load the prepared crime dataset.
2. Scale the six crime features with `StandardScaler`.
3. Load the trained K-Means model.
4. Predict cluster membership for a supplied scenario.
5. Map the cluster to the prepared risk level.
6. Store the assessment in a database for authenticated users.

## Technology
Python, Pandas, Scikit-learn, StandardScaler, K-Means, Joblib, FastAPI, Jinja2 and SQLAlchemy.

## Application Features
- User registration and login.
- Crime scenario prediction.
- Risk-level classification.
- Recommended response guidance.
- Prediction history.
- Admin workflow.

## Portfolio Note
This is an applied ML/web application project rather than a claim of production-grade public-safety forecasting. Its value is demonstrating an end-to-end workflow from structured data and clustering to a usable application interface.

## Files
The portfolio package contains the core FastAPI source, trained model/scaler, prepared dataset and requirements file. The original development virtual environment and Git history are intentionally excluded from the portfolio package.
