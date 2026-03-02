const fs = require('fs');
const path = require('path');

function replaceInFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            replaceInFiles(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            let content = fs.readFileSync(filePath, 'utf8');
            let originalContent = content;

            // Replace roemah_koffie_assets/something.png with something.webp
            content = content.replace(/\/roemah_koffie_assets\/([^'"`]+)\.(png|jpe?g)/gi, '/roemah_koffie_assets/$1.webp');

            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log('Updated references in ' + filePath);
            }
        }
    }
}
replaceInFiles(path.join(__dirname, 'src'));
