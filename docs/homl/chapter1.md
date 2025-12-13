# Chapter 1: The Machine Learning Landscape

## Key Concepts
- Definition of Machine Learning
- Types of ML systems
- [Types Of Sets](train/index.md)
- Main challenges

## Code Examples
```python
# Example: Simple linear regression with Scikit-Learn
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn.neighbors import KNeighborsRegressor
# Download and prepare the data
data_root = "https://github.com/ageron/data/raw/main/"
lifesat = pd.read_csv(data_root + "lifesat/lifesat.csv")

X = lifesat[["GDP per capita (USD)"]].values
y = lifesat[["Life satisfaction"]].values
# Visualize the data
lifesat.plot(kind='scatter', grid=True,
x="GDP per capita (USD)", y="Life satisfaction")
for i, row in lifesat.iterrows():
    plt.text(row["GDP per capita (USD)"], row["Life satisfaction"], row["Country"], fontsize=8, alpha=0.7)
plt.axis([23_500, 62_500, 4, 9])
plt.show()
# Select a linear model

model = KNeighborsRegressor(n_neighbors=3)
# Train the model
model.fit(X, y)
# Make a prediction for Cyprus
X_new = [[37_655.2]] # Cyprus' GDP per capita in 2020
print(model.predict(X_new)) # output: [[6.30165767]]
```

## Notes
- *Add your own notes and insights here.*
