@echo off
echo.
echo ========================================
echo    VolleyAtom - Servidor Local
echo ========================================
echo.
echo Iniciando servidor HTTP en localhost...
echo Web Bluetooth habilitado para impresora
echo.
echo Abre en tu navegador:
echo    http://localhost:8000/volleyatom-nuevo.html
echo.
echo Presiona Ctrl+C para detener
echo.
echo ========================================
echo.

python -m http.server 8000

pause
