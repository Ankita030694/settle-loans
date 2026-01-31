import * as admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

if (!admin.apps.length) {
    try {
        const projectId = process.env.FIREBASE_PROJECT_ID;
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
        const privateKey = process.env.FIREBASE_PRIVATE_KEY;

        if (projectId && clientEmail && privateKey) {
            // Production path (Vercel)
            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId,
                    clientEmail,
                    privateKey: privateKey.replace(/\\n/g, '\n'), // Handle newline characters in env string
                }),
            });
            console.log('Firebase Admin initialized with environment variables');
        } else {
            // Local development fallback
            const envPath = path.resolve(process.cwd(), '../.env');
            if (fs.existsSync(envPath)) {
                const serviceAccount = JSON.parse(fs.readFileSync(envPath, 'utf8'));
                admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount)
                });
                console.log('Firebase Admin initialized with local JSON file');
            } else {
                throw new Error('No Firebase credentials found in environment or local file');
            }
        }
    } catch (error) {
        console.error('Firebase Admin initialization error:', error);
    }
}

export const adminDb = admin.firestore();
