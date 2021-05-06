## Aisle App, Task 3

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Installation](#installation)
- [Running the app](#running-the-app)
- [Making Release App](#managing-releases)

## Installation

Do `npm install` in the root directory

# Running the app

To run the app locally following steps needs to be followed:

#### Running on Android

- Go to Android Studio where you need to install an emulator(recommended `API Level 29`)
- After running the emulator,

###### To run the debug build on device run the following command:

`react-native run-android`

# Managing Releases

-To make the release app, do `cd android && ./gradlew assembleRelease`
-Your apk will be created in `android/app/build/outputs/apk/release/`
-Just install the app-release.apk in your android mobile, then you will be able to run the app
