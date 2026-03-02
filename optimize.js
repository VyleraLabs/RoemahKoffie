const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = path.join(__dirname, 'public', 'roemah_koffie_assets');

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await processDirectory(filePath);
        } else if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
            const ext = path.extname(file);
            const baseName = path.basename(file, ext);
            const webpPath = path.join(dir, `${baseName}.webp`);

            try {
                console.log(`Converting ${filePath} to WebP...`);
                await sharp(filePath)
                    .webp({ quality: 80, effort: 6 }) // Convert to webp with good quality and high compression effort
                    .toFile(webpPath);

                console.log(`Successfully created ${webpPath}. Deleting original...`);
                fs.unlinkSync(filePath); // Delete the original file after successful conversion
            } catch (err) {
                console.error(`Error processing ${filePath}:`, err);
            }
        }
    }
}

processDirectory(directoryPath).then(() => {
    console.log('Finished image optimization.');
});
