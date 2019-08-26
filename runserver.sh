#!/bin/bash
SRC_DIR=/zserver/html-projects/gt-framework-projects/gt-landingpage/development/gt-landingpage-html
function build-mainsite {
    echo DEVELOPMENT
    build-mainsite-env development true
    echo SANDBOX
    build-mainsite-env sandbox false
    echo STAGING
    build-mainsite-env staging false
    echo PRODUCTION
    build-mainsite-env production false
}

function build-mainsite-env {
    yarn build:$1
    if [ $2 = true ] ; then
        echo RSYNC
        rsync -arv --delete $SRC_DIR/dist/$1/* zdeploy@10.10.36.5:/zserver/html-projects/pay.zing.vn/mainsite
    fi
}

function start {
    echo "1. build MAINSITE ALL ENV"
    echo "2. build MAINSITE then deploy to server 10.10.36.5"
    read task
    echo "Chọn=> $task"
    case "$task" in
    1)  build-mainsite;;
    2)  build-mainsite-env development true;;
    *) echo "Usage: 1 | 2";;
    esac
}

cd $SRC_DIR
yarn lint:fix
start
