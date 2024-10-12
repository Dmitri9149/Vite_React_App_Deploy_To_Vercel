*** Settings ***
Documentation     Simple example using SeleniumLibrary.
Library           SeleniumLibrary


*** Test Cases ***
Valid Login
    Open Browser     http://inv.beaufortfairmont.com/     headlesschrome
    Maximize Browser Window
    Set Selenium Implicit Wait    5
    Close Browser

#   to be running https://vite-to-vercel.vercel.app/
Valid Login to Own App 
    Open Browser     https://vite-to-vercel.vercel.app/     headlesschrome
    Maximize Browser Window
    Set Selenium Implicit Wait    5
    Close Browser