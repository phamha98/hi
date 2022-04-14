git clone folder
git branch
git merge
git pull
git push
git checkout

https://vietnamtutor.com/doi-ten-local-branch-va-remote-branch-khi-su-dung-git/
1. Đổi tên old-name thành new-name trên local

Nếu bạn đang ở branch bạn muốn đổi tên:

git branch -m new-name
Còn nếu bạn đang trên 1 branh khác:

git branch -m old-name new-name
 

2. Xóa branch old-name trên remote và push new-name từ local lên remote:

git push origin :old-name new-name
3. Sửa lại upstream cho new-name trên local để sau này nó push lên new-name trên remote

git push origin -u new-name