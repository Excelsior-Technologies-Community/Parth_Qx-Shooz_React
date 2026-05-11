import re
html=open('homepage_logged_in.html', encoding='utf-8').read()
matches = set(re.findall(r'//qx-shooz.myshopify.com/[^\s\'"<>]*\.(?:png|jpg|jpeg)', html))
for m in matches:
    print(m)
