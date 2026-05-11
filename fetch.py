import urllib.request
import urllib.parse
from http.cookiejar import CookieJar

cj = CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))

url = 'https://qx-shooz.myshopify.com/password'
data = urllib.parse.urlencode({'form_type': 'storefront_password', 'password': '1'}).encode('utf-8')

try:
    resp = opener.open(url, data=data)
    
    # Now fetch the homepage
    resp = opener.open('https://qx-shooz.myshopify.com/')
    html = resp.read().decode('utf-8')
    
    with open('homepage_logged_in.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Success")
except Exception as e:
    print(e)
