@echo off
cd /d "%~dp0"
set "HANS_NODE=node"
where node >nul 2>nul
if errorlevel 1 set "HANS_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
echo Open http://127.0.0.1:4173/ after the preview starts.
echo Keep this window open while reviewing the website.
"%HANS_NODE%" scripts\serve.mjs
pause
