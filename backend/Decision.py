import pickle
import numpy as np
import pandas as pd

class Decision:
    # takes json and pre-processes - returns data object
    def pre_processing(self, json_input):
        # place reviews in a data frame
        df = pd.DataFrame(json_input['reviews'])

        # set to lowercase & strip punctuation
        df['content'] = df.content.map(lambda x: x.lower())
        df['content'] = df.content.str.replace(r"[^\w\s]",'')
        
        return df['content']

    # takes the array of labels and returns the prevalent response
    def make_decision(self, labels):

        (unique, counts) = np.unique(labels, return_counts=True)
        frequencies = np.asarray((unique, counts)).T

        negative = frequencies[0][1]
        positive = frequencies[1][1]

        if negative > positive:
            return False
        
        return True

    # does pre-processing, loads the saved model and calls it on the data
    def sentiment_analysis(self, data):
        processed = self.pre_processing(data)

        if processed is not None:
            print("Preprocessed \n", processed)

            # load model with pickle
            with open("amazon_naive_bayes.pkl", 'rb') as file:
                pickled_model = pickle.load(file)
            
            sentiment_labels = pickled_model.predict(processed)
            decision = self.make_decision(sentiment_labels)

            return decision

        else:
            return None
