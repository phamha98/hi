crack smart-git
```sh
cd ~/Library/Preferences/SmartGit/
sed -i '' '/listx/d' ./*/preferences.yml
rm */license
```


```bash
git config --global user.name <username>
git config --global user.email <mailaddress>


clone folder
git clone https://github.com/phamha98/hi.git/ ./image
https://docs.gitlab.com/ee/ssh/
ssh -T git@gitlab.com


SmartGit__licences
cd ~/Library/Preferences/SmartGit/
sed -i '' '/listx/d' ./*/preferences.yml
rm */license



```sh
git clone folder
git branch
git merge
git pull
git push
git checkout
``` 
 
1. Đổi tên old-name thành new-name trên local

Nếu bạn đang ở branch bạn muốn đổi tên:

git branch -m new-name
Còn nếu bạn đang trên 1 branh khác:

git branch -m old-name new-name
 

2. Xóa branch old-name trên remote và push new-name từ local lên remote:

git push origin :old-name new-name
3. Sửa lại upstream cho new-name trên local để sau này nó push lên new-name trên remote

git push origin -u new-name
//ssh
```sh

https://docs.gitlab.com/ee/ssh/
ssh -T git@gitlab.com
```
