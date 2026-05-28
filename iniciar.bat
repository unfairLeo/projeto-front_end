@echo off
setlocal
cd /d "%~dp0"
title Angular Portable - Sistema Modelo

set "ROOT=%cd%"
set "NODE_VERSION=v24.15.0"
set "NODE_DIR=%ROOT%\tools\node"
set "APP_DIR=%ROOT%\app"
set "NODE_EXE=%NODE_DIR%\node.exe"
set "NPM_CMD=%NODE_DIR%\npm.cmd"
set "LOG_DIR=%ROOT%\logs"

if not exist "%LOG_DIR%" mkdir "%LOG_DIR%" >nul 2>nul

cls
echo ================================================================
echo Angular Portable - Sistema Modelo
echo ================================================================
echo.
echo Folder: %ROOT%
echo.

set "NG_CLI_ANALYTICS=false"
set "CI=1"

rem Avoid common problems with npm/node_modules in synchronized folders.
echo(%ROOT% | findstr /i /c:"OneDrive" /c:"Google Drive" /c:"My Drive" /c:"Dropbox" >nul
if not errorlevel 1 (
  echo WARNING: This folder seems to be inside a synchronized/cloud folder.
  echo NPM can fail when node_modules is created in Google Drive or OneDrive.
  echo Recommended: move this folder to C:\angular-aula-portatil or another local folder.
  echo.
)

echo [1/4] Checking portable Node.js...
if not exist "%NODE_EXE%" (
  echo Portable Node.js was not found.
  echo Downloading and preparing Node.js %NODE_VERSION%...
  powershell -NoProfile -ExecutionPolicy Bypass -File "%ROOT%\scripts\setup-node.ps1"
  if errorlevel 1 (
    echo.
    echo ERROR: Could not prepare portable Node.js.
    echo Check the internet connection and try again.
    pause
    exit /b 1
  )
)

echo Portable Node.js found.
echo.

set "PATH=%NODE_DIR%;%PATH%"

echo [2/4] Checking versions...
"%NODE_EXE%" -v
call "%NPM_CMD%" -v
if errorlevel 1 (
  echo.
  echo ERROR: npm was not found in the portable Node.js folder.
  pause
  exit /b 1
)
echo.

if not exist "%APP_DIR%\package.json" (
  echo ERROR: Angular application was not found.
  echo Expected file: app\package.json
  echo This package is incomplete. Download/extract it again.
  pause
  exit /b 1
)

cd /d "%APP_DIR%"

echo [3/4] Checking project dependencies...
if not exist "%APP_DIR%\node_modules\.bin\ng.cmd" (
  echo Angular dependencies were not found.
  echo Installing dependencies. Internet is required only for this first setup.
  echo This may take a few minutes.
  echo.
  call "%NPM_CMD%" install --no-audit --no-fund
  if errorlevel 1 (
    echo.
    echo ERROR: Could not install Angular dependencies.
    echo Try moving the folder to C:\angular-aula-portatil and run iniciar.bat again.
    pause
    exit /b 1
  )
) else (
  echo Dependencies found.
)
echo.

echo [4/4] Starting Angular application...
echo.
echo Browser address: http://localhost:4200
echo To stop the server, press CTRL + C in this window.
echo.
call "%NPM_CMD%" run start

pause
