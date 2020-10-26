from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from Scraper import Scraper
from Decision import Decision

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

scraper = Scraper()
analyser = Decision()


# We call scrape after the button has been clicked to check the review
@app.route('/should-i-buy', methods=['GET'])
@cross_origin()
def check_product():
    url = request.args.get('url')
    if url:
        json_data = scraper.scrape(url)
    else:
        raise Exception('No URL provided')
    print('here')
    # call sentiment analysis on the data received (json)
    data = analyser.pre_processing(json_data)
    response = analyser.sentiment_analysis(data)

    # send back a decision (buy or no buy)
    if response:
        # return json response to frontend
        return jsonify(response)
    return jsonify({"message": "il y a un problem"})
