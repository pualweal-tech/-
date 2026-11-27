@echo off
cd /d "%~dp0"
echo Yujian PC preview: http://localhost:4180
node node_modules\vite\bin\vite.js --host 127.0.0.1 --port 4180 --strictPort
pause
