if ! jest --version &> /dev/null
then
    echo "Jest is not installed. Are you ok with installing it globally? (y/n)"
    read answer
    if echo "$answer" | grep -iq "^y"
    then
        echo "Installing jest..."
        npm install --global jest
    else
        echo "Aborting."
        exit 1
    fi
fi
export NODE_OPTIONS="--experimental-vm-modules --redirect-warnings=/tmp/node-warnings.log"
jest