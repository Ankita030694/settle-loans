import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import * as admin from 'firebase-admin';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const rawPath = body.path || '';

        // Ignore admin, api, or empty paths
        if (!rawPath || rawPath.startsWith('/admin') || rawPath.startsWith('/api') || rawPath.startsWith('/_next')) {
            return NextResponse.json({ success: true, skipped: true });
        }

        // Clean slug for document ID (e.g. /10-lakh-personal-loan-settlement -> 10-lakh-personal-loan-settlement, / -> home)
        const sanitizedPath = rawPath === '/' ? 'home' : rawPath.replace(/^\/+|\/+$/g, '').replace(/\//g, '_');
        const todayDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

        if (adminDb) {
            const docRef = adminDb.collection('page_views').doc(sanitizedPath);
            
            await docRef.set({
                path: rawPath,
                slug: sanitizedPath,
                totalViews: admin.firestore.FieldValue.increment(1),
                lastVisited: Date.now(),
                [`daily_${todayDate}`]: admin.firestore.FieldValue.increment(1),
            }, { merge: true });

            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ success: true, warning: 'Database instance not available' });
    } catch (error) {
        console.error('Track View API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Error' }, { status: 500 });
    }
}
