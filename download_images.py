import urllib.request
import os

base_url = 'https:'
urls = [
    '//qx-shooz.myshopify.com/cdn/shop/files/video-pic.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-1.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-2.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-3.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-5.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-6.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-7.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-8.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-9.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-10.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-11.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-12.png',
    '//qx-shooz.myshopify.com/cdn/shop/files/text-logo-13.png',
    '//qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png',
    '//qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png',
    '//qx-shooz.myshopify.com/cdn/shop/articles/blog-3.png',
    '//qx-shooz.myshopify.com/cdn/shop/articles/blog-4.png'
]

dest_dir = r'c:\Users\parth\Desktop\Excelciors\Shooz\src\assets\images'
os.makedirs(dest_dir, exist_ok=True)

for url in urls:
    full_url = base_url + url
    filename = url.split('/')[-1]
    dest_path = os.path.join(dest_dir, filename)
    try:
        urllib.request.urlretrieve(full_url, dest_path)
        print("Downloaded:", filename)
    except Exception as e:
        print("Failed:", filename, e)
