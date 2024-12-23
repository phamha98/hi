check

```sh
$ swapon -s
$ free -m
```


## Tạo swap file
## Cần tạo 1 swap file thì cách dễ dàng và nhanh nhất là sử dụng command: fallocate

```sh
$ sudo fallocate -l 4G /swapfile
```
## Phân quyền cho nó, chỉ được phép đọc bởi root user
```sh
$ sudo chmod 600 /swapfile
```
## Tạo swap từ swap file
```sh
- $ sudo mkswap /swapfile
```
## Kích hoạt swap
```sh
- sudo swapon /swapfile
```
## Thiết lập swap khởi động cùng HDH
## Nếu khởi động lại HDH, bộ nhớ swap sẽ mất đi. Vì vậy, để kích hoạt swap vĩnh viễn kể cả khi reboot lại OS chúng ta thực hiện bước sau:

##  Sửa file /etc/fstab, và thêm dòng sau:
```sh
/swapfile   swap    swap    sw  0   0
```
## Tùy chỉnh hệ thống sử dụng swap hiệu quả
## Sửa file /etc/sysctl.conf và thêm 2 dòng sau:

```sh
vm.swappiness = 10
vm.vfs_cache_pressure = 50
```

[huong-dan](https://vinasupport.com/huong-dan-them-bo-nho-swap-tren-ubuntu-centos-linux/)
