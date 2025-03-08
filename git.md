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

## SSH git
```sh
cd ~/.ssh && ssh-keygen

Generating public/private rsa key pair.
Enter file in which to save the key (/Users/phamha/.ssh/id_rsa):company


ssh-add ~/.ssh/company
cat company.pub | pbcopy

```

## Git admend 
```sh
git log --oneline
git commit --amend -m "Added lines to README.md"

git push -f #push force
```

## Auto pull
```sh

#!/bin/bash

while true; do
    current_date=$(date +"%Y-%m-%d %H:%M:%S")
    echo "**************start***********************************"
    echo "start loop $current_date"
    
    echo "git fetch origin dev"
    git fetch origin dev
    if [[ -n $(git status -s) ]]; then
        echo "==>Changes detected. Committing..."
        git add .
        git commit -m "Merge remote-tracking branch 'origin/dev' into phamha98 $current_date"
       ####### # git push origin phamha98
        echo "==>Changes committed and pushed."
        # Kiểm tra xem có thay đổi nào không
        status=$(git status --porcelain package.json)
        if [[ -n $status ]]; then
            echo "package.json has changed. Running npm install..."
            npm install
            echo "npm install completed."
        else
        echo "package.json has not changed."
        fi
        #########
    else
        echo "==>No changes detected."
    fi
    echo "wait 30s **************end*********************************** "
    sleep 30  # Chờ 15 phút (900 giây)
done
```