import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent


ua = UserAgent()
header = {
    'User-Agent': ua.random,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
    'Accept-Encoding': 'none',
    'Accept-Language': 'en-US,en;q=0.8',
    'Connection': 'keep-alive'
}


def search(query):
    url = "http://www.amazon.com/s?k=" + query
    res = requests.get(url, headers=header)

    if res.status_code == 200:
        return res
    else:
        print(res.status_code)
        return


def scrape_page(query):
    url = "http://www.amazon.com/s?k=" + query
    res = requests.get(url, headers=header)

    if res.status_code == 200:
        return res
    else:
        print(res.status_code)
        return


def get_product(query):
    product_names = []
    asin_number = []

    response = search(query)
    soup = BeautifulSoup(response.content, features="lxml")

    for i in soup.findAll('div', attrs={'class':['sg-col-20-of-24 s-result-item sg-col-0-of-12 sg-col-28-of-32 '
                                                 'sg-col-16-of-20 sg-col sg-col-32-of-36 sg-col-12-of-16 sg-col-24-of-28',
                                                 'sg-col-20-of-24 s-result-item sg-col-0-of-12 sg-col-28-of-32 sg-col-16-of-20 '
                                                 'AdHolder sg-col sg-col-32-of-36 sg-col-12-of-16 sg-col-24-of-28']}):
        print(i['data-asin'])
        asin_number.append(i['data-asin'])
        print(i['data-asin'])


get_product("iphone")
