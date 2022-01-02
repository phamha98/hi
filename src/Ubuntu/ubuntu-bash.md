PS1='\[\033[01;33m\]\t:\[\033[01;34m\]\W\[\033[00m\]\$ '

\d: Ngày tháng năm

\j: Số lượng jobs mà được quản lý bởi shell

\n: Dòng mới

\s: Loại shell đang sử dụng (bash, zsh, ...)

\t: Thời gian (giờ:phút:giây)

\@: Giờ với định dạng 12-hour (AM/PM)

\A: Giờ với định dạng 24-hour

\v: BASH version

\w: Đường dẫn tới thư mục làm việc hiện tại. (Nếu là $HOME thì sẽ hiển thị ~)

\W: Tên của thư mục làm việc hiện tại. (Nếu là $HOME thì sẽ hiển thị ~)

\$: Nếu người dùng là root thì dấu nhắc lệnh sẽ hiển thị là #, còn không thì $

Chỉnh màu:

export PS1="\e[0;36m\u@\h \W\$\e[0m"

Trong đó:

\e[: Bắt đầu sử dụng tùy chỉnh màu từ đây

0;36m: Mã màu, trong đó:

Trước dấu phẩy

0 – Bình thường
1 – In đậm
2 – Làm mờ
4 – Gạch chân
Sau dấu phẩy

30 – Black
31 – Red
32 – Green
33 – Brown
34 – Blue
35 – Purple
36 – Cyan
37 – Light gray
