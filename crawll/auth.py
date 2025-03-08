import requests
from bs4 import BeautifulSoup

def login_to_website(username, password):
    login_url = 'https://jvbc-001.stalk.jp/login'  # URL của trang đăng nhập
    session = requests.Session()
    
    # Gửi yêu cầu GET để lấy token hoặc các dữ liệu cần thiết
    response = session.get(login_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Giả sử bạn cần một token CSRF để đăng nhập
    csrf_token = soup.find('input', {'name': 'csrf_token'})['value']
    
    login_data = {
        'username': username,
        'password': password,
        'csrf_token': csrf_token  # Thay đổi theo các trường yêu cầu của trang web
    }
    
    # Gửi yêu cầu POST để đăng nhập
    response = session.post(login_url, data=login_data)
    
    # Kiểm tra xem đăng nhập thành công hay không
    if response.ok:
        print("Đăng nhập thành công")
    else:
        print("Đăng nhập không thành công")

    return session

# Sử dụng
username = 'your_username'
password = 'your_password'
session = login_to_website(username, password)
