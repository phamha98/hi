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