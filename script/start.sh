if [ ! -f '/Users/lvhongbin/Desktop/github/MyBlog/dist/dllFileNames.dll.js' ]; then
    npm run dll;
fi
webpack-dev-server --open --config ./build/webpack_dev.js