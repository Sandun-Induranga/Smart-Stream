import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import numpy as np

def predict_stream(id: int):
    # Read CSV file into a DataFrame
    df = pd.read_csv('results.csv')

    # Choose features (student ID) and target (subject scores)
    features = df[['Student ID']]
    targets = df.iloc[:, 4:]

    # Split the data into training and testing sets
    features_train, features_test, targets_train, targets_test = train_test_split(
        features, targets, test_size=0.2, random_state=42
    )

    # Create a linear regression model
    model = LinearRegression()

    # Fit the model on the training data
    model.fit(features_train, targets_train)

    # Predict subject scores on the test set
    predictions = model.predict(features_test)

    # Evaluate the model
    mse = mean_squared_error(targets_test, predictions)
    rmse = np.sqrt(mse)
    print(f"Root Mean Squared Error: {rmse}")

    # Example: Predict subject scores for a specific student ID
    student_id_to_predict = id
    prediction_input = pd.DataFrame({'Student ID': [student_id_to_predict]})
    predicted_scores = model.predict(prediction_input)

    print(f"\nPredicted subject scores for Student ID {student_id_to_predict}:")
    for i, subject in enumerate(targets.columns):
        print(f"{subject}: {predicted_scores[0][i]:.2f}")

    max_subject = targets.columns[np.argmax(predicted_scores)]
    print(f"\nSubject with the highest predicted score: {max_subject}")

    # Determine the most suitable subject stream
    if max_subject == 'Maths':
        print('The most suitable subject stream: Maths Stream')
    elif max_subject == 'Science':
        print('The most suitable subject stream: Science Stream')
    elif max_subject == 'Commerce':
        print('The most suitable subject stream: Commerce Stream')
    elif max_subject in ['Sinhala', 'English']:
        print('The most suitable subject stream: Arts Stream')
    elif max_subject == 'ICT':
        print('The most suitable subject stream: Technology Stream')

    # Plot bar chart of predicted scores
    plt.figure(figsize=(10, 6))
    plt.bar(targets.columns, predicted_scores[0])
    plt.title(f'Predicted Subject Scores for Student ID {student_id_to_predict}')
    plt.xlabel('Subjects')
    plt.ylabel('Predicted Scores')
    plt.show()
