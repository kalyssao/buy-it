# in here i will make a prediction after loading the saved naive bayes model
# this will be done after doing the same pre-processing i did for the model on the json_input
# i will work with only the first review then figure out the rest


class Decision:
    # takes json file and pre-processes - returns data object
    def pre_processing(self, json_input):
        print(json_input)

    # loads the saved model and calls it on the data object
    def sentiment_analysis(self, data):
        if data:
            # this is where I load the model
            # this is where i call model.fit model.predict(data)
        else:
            return False
