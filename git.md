## Licences smart-git
```sh
cd ~/Library/Preferences/SmartGit/
sed -i '' '/listx/d' ./*/preferences.yml
rm */license
```

## Config
```bash
git config --global user.name <username>
git config --global user.email <mailaddress>
```

## clone folder
```sh
git clone https://github.com/phamha98/hi.git/ ./image
https://docs.gitlab.com/ee/ssh/
ssh -T git@gitlab.com
```
 
## rename branch 
```sh
git branch -m new-name #Current 
git branch -m old-name new-name
```

## Xóa branch old-name trên remote và push new-name từ local lên remote:
```sh
git push origin :old-name new-name
```

## Sửa lại upstream cho new-name trên local để sau này nó push lên new-name trên remote
```sh
git push origin -u new-name
```

## ssh
```sh
https://docs.gitlab.com/ee/ssh/
ssh -T git@gitlab.com
```
