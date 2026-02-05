const https = require('https');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;

// Generar certificados auto-firmados si no existen
const certPath = path.join(__dirname, 'localhost.pem');
const keyPath = path.join(__dirname, 'localhost-key.pem');

// Función para generar certificados con mkcert o auto-firmados
function setupCertificates(callback) {
    if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
        console.log('✅ Certificados existentes encontrados');
        callback();
        return;
    }

    console.log('🔐 Generando certificados auto-firmados...');
    
    // Intentar usar mkcert primero (si está instalado)
    exec('mkcert -install', (error) => {
        if (!error) {
            exec(`mkcert -key-file localhost-key.pem -cert-file localhost.pem localhost 127.0.0.1 ::1`, (err) => {
                if (!err) {
                    console.log('✅ Certificados creados con mkcert');
                    callback();
                } else {
                    generateSelfSignedCert(callback);
                }
            });
        } else {
            generateSelfSignedCert(callback);
        }
    });
}

// Generar certificado auto-firmado con OpenSSL (fallback)
function generateSelfSignedCert(callback) {
    const command = `openssl req -x509 -newkey rsa:4096 -keyout localhost-key.pem -out localhost.pem -days 365 -nodes -subj "/CN=localhost"`;
    
    exec(command, (error) => {
        if (error) {
            console.warn('⚠️  No se pudo generar certificado automáticamente.');
            console.log('📝 Instrucciones manuales:');
            console.log('   1. Instala mkcert: https://github.com/FiloSottile/mkcert');
            console.log('   2. Ejecuta: mkcert -install');
            console.log('   3. Ejecuta: mkcert -key-file localhost-key.pem -cert-file localhost.pem localhost');
            console.log('\n   O usa el servidor sin HTTPS (Web Bluetooth no funcionará)');
            console.log('   Ejecuta: npx http-server -p 3000\n');
            process.exit(1);
        } else {
            console.log('✅ Certificados auto-firmados creados (deberás aceptar la advertencia del navegador)');
            callback();
        }
    });
}

// Tipos MIME
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.md': 'text/markdown'
};

// Iniciar servidor
setupCertificates(() => {
    const options = {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath)
    };

    const server = https.createServer(options, (req, res) => {
        let filePath = '.' + (req.url === '/' ? '/volleyatom-nuevo.html' : req.url);
        const extname = String(path.extname(filePath)).toLowerCase();
        const contentType = mimeTypes[extname] || 'application/octet-stream';

        fs.readFile(filePath, (error, content) => {
            if (error) {
                if (error.code === 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('<h1>404 - Archivo no encontrado</h1>', 'utf-8');
                } else {
                    res.writeHead(500);
                    res.end('Error del servidor: ' + error.code, 'utf-8');
                }
            } else {
                res.writeHead(200, { 
                    'Content-Type': contentType,
                    'Cross-Origin-Embedder-Policy': 'require-corp',
                    'Cross-Origin-Opener-Policy': 'same-origin'
                });
                res.end(content, 'utf-8');
            }
        });
    });

    server.listen(PORT, () => {
        console.log('\n🚀 Servidor HTTPS iniciado correctamente\n');
        console.log(`📱 Abre la aplicación en:`);
        console.log(`   https://localhost:${PORT}\n`);
        console.log(`🖨️  Web Bluetooth habilitado para impresora AGI-PR6000UBT-3748\n`);
        console.log(`⚠️  Si ves advertencia de seguridad, haz clic en "Avanzado" > "Continuar"`);
        console.log(`   (Es seguro, es tu servidor local)\n`);
        console.log(`🛑 Para detener el servidor: Ctrl+C\n`);
    });
});
