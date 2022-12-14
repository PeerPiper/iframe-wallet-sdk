import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const buildDir = path.join(__dirname, 'docs');

function main() {
	const headers = `
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: same-origin
  Permissions-Policy: accelerometer=(), autoplay=(), camera=(), document-domain=(), encrypted-media=(), fullscreen=(), gyroscope=(), interest-cohort=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), sync-xhr=(), usb=(), xr-spatial-tracking=(), geolocation=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  Content-Security-Policy-Report-Only: default-src https: 'unsafe-inline' 'unsafe-eval'

/index.webmanifest
  Content-Type: application/manifest+json
/index.xml
  Content-Type: application/rss+xml

`;

	const headersFile = path.join(buildDir, '_headers');
	fs.writeFileSync(headersFile, headers);
}

main();
