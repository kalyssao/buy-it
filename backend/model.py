# i've decided to use naive bayes here.
# in this file, i will preprocess and create a pipeline to run my inputs into
# then i will split the data into train & test sets,
# then figure out my metrics
# after which i will save the model.
# in decision.py i will load this model to make a prediction on a single item first.
# "2","Great CD","My lovely Pat has one of the GREAT voices of her generation. I have listened to this CD for YEARS and I still LOVE IT. When I'm in a good mood it makes me feel better. 
# A bad mood just evaporates like sugar in the rain. This CD just oozes LIFE. Vocals are jusat STUUNNING and lyrics just kill. One of life's hidden gems. This is a desert isle CD in my book. Why she never made it big is just beyond me. 
# Everytime I play this, no matter black, white, young, old, male, female EVERYBODY says one thing ""Who was that singing ?"""
import pandas as pd

train_data = pd.read_csv("train.csv")

print(train_data.head())