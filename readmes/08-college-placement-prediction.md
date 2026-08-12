# College Placement Prediction — Streamlit ML Application

## Project Overview
An interactive Streamlit machine-learning application that predicts whether a student is likely to be placed based on academic and student-profile characteristics. The application uses a trained K-Nearest Neighbors (KNN) classifier together with saved categorical encoders for inference.

## Objective
- Build a binary classification model for college placement prediction.
- Provide an interactive interface for entering student information.
- Generate a placement prediction and class-probability confidence.
- Preserve previous prediction inputs and results in a CSV history file.

## Input Features
The application accepts:
- Age
- Gender
- Academic stream
- Number of internships
- CGPA
- Hostel status
- History of backlogs

## Model
**Algorithm:** K-Nearest Neighbors (KNN) classifier  
**Neighbors:** 5  
**Classes:** 0 = Not Placed, 1 = Placed  
**Model persistence:** Joblib

The supplied model expects the following feature order:
`Age, Gender, Stream, Internships, CGPA, Hostel, HistoryOfBacklogs`

## Preprocessing
The application uses two saved `LabelEncoder` artifacts:
- `gender_encoder.pkl`
- `stream_encoder.pkl`

The encoders map the categorical inputs into the numeric representation expected by the trained KNN model.

## Application Workflow
1. User enters student characteristics through the Streamlit interface.
2. Gender and academic stream are transformed with the saved encoders.
3. A model-ready DataFrame is created using the trained model's expected feature order.
4. The KNN model generates a placement prediction and class probabilities.
5. The application displays the prediction and confidence percentage.
6. The result is appended to `user_input_history.csv` for later review.

## Application Features
- Interactive student inputs.
- KNN placement prediction.
- Prediction confidence visualization.
- Persistent prediction history.
- Saved model and preprocessing artifacts included for reproducibility.

## Technology
Python, Pandas, Scikit-learn, K-Nearest Neighbors, Joblib and Streamlit.

## Project Files
- `college_prediction_app.py` — Streamlit application.
- `knn_college_model.pkl` — trained KNN classifier.
- `gender_encoder.pkl` — trained gender encoder.
- `stream_encoder.pkl` — trained academic-stream encoder.
- `collegePlace.csv` — project dataset.
- `requirements.txt` — Python dependencies.

## Running the Application
Create/activate a Python virtual environment, install the requirements, then run:

```bash
pip install -r requirements.txt
streamlit run college_prediction_app.py
```

The three model artifacts must remain in the same project directory as `college_prediction_app.py` unless the code paths are changed.

## Portfolio Note
The model and encoder artifacts are now included with the application source, making the uploaded project package materially more reproducible than the original source-only archive. The application is ready to be run locally; it should only be described as a **live/deployed application** after it has been hosted online.
