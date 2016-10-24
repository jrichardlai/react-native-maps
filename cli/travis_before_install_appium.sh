#!/bin/bash

if [ -z "$TRAVIS_BUILD_DIR" ]; then
  echo 'Not on Travis: not running travis_before_install_appium script'
else
  echo 'Running travis_before_install_appium script'
  brew update
  brew reinstall xctool
  brew reinstall watchman
  gem install xcpretty
  cd example
  npm install
  cd $TRAVIS_BUILD_DIR
fi
