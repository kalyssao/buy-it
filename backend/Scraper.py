import requests
from selectorlib import Extractor
from fake_useragent import UserAgent


class Scraper:
    def scrape(self, url):
        # Create an Extractor by reading from the YAML file
        e = Extractor.from_yaml_file('selectors.yml')

        ua = UserAgent(verify_ssl=False)

        header = {
            'User-Agent': ua.random,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
            'Accept-Encoding': 'none',
            'Accept-Language': 'en-US,en;q=0.8',
            'Connection': 'keep-alive'
        }

        # Getting the page using requests package
        res = requests.get(url, headers=header)

        # Check the status
        if res.status_code == 200:
            # Passes the html to the extractor
            data = e.extract(res.text)
            return data
        else:
            raise Exception('Problem with request')
