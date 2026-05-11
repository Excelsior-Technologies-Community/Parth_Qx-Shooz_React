import urllib.request
import os

url = 'https://qx-shooz.myshopify.com/cdn/shop/files/newslatter-image.jpg'
dest_path = r'c:\Users\parth\Desktop\Excelciors\Shooz\src\assets\images\newslatter-image.jpg'
try:
    urllib.request.urlretrieve(url, dest_path)
    print("Downloaded newsletter image")
except Exception as e:
    print(e)
