from flask import Flask, jsonify, request, Response
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
        try:
            json_data = scraper.scrape(url)
        except:
            return 'No reviews found', 404
        
    else:
        # figure out error handling here
        return Response('No url provided', status=400)

    # call sentiment analysis class on the data 
    # received, returns the decision, clean the image url
    decision = analyser.sentiment_analysis(json_data)
    title = json_data['product_title']
    img_url = json_data["product_image"]
    img_url = img_url.rstrip('\n')
    img_url = img_url.lstrip('\n')
    rating = json_data["product_rating"]

    # send back a decision (buy or no buy)
    if decision is not None:
        # return json response (decision, image & notable review) to frontend
        return jsonify(decision=decision, title=title, img=img_url, rating=rating)
    return 'There was a problem. Please refresh & try again', 500
