@echo off
echo Instalacja bibliotek Reacta...

REM Instalacja axios
call npm install axios
if %errorlevel% neq 0 goto error

REM Instalacja react-awesome-button
call npm install react-awesome-button
if %errorlevel% neq 0 goto error

REM Instalacja react-bootstrap
call npm install react-bootstrap
if %errorlevel% neq 0 goto error

REM Instalacja react-helmet
call npm install react-helmet
if %errorlevel% neq 0 goto error

REM Instalacja react-pro-sidebar
call npm install react-pro-sidebar
if %errorlevel% neq 0 goto error

REM Instalacja react-router-dom
call npm install react-router-dom
if %errorlevel% neq 0 goto error

REM Instalacja devextreme i devextreme-react
call npm install devextreme@23.2 devextreme-react@23.2 --save --save-exact
if %errorlevel% neq 0 goto error

REM Instalacja js-cookie
call npm install js-cookie
if %errorlevel% neq 0 goto error

echo Instalacja zakonczona!
pause
exit /b 0

:error
echo Wystapil blad podczas instalacji jednej z bibliotek!
pause
exit /b 1