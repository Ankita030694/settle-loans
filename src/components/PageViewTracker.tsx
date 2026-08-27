'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { doc, setDoc, increment } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function PageViewTracker() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string>('');

  useEffect(() => {
    if (!pathname) return;

    // Ignore admin, api, internal routes
    if (
      pathname.startsWith('/admin') || 
      pathname.startsWith('/api') || 
      pathname.startsWith('/_next') ||
      pathname.includes('favicon')
    ) {
      return;
    }

    // Prevent duplicate tracking for identical page in immediate succession
    if (lastTrackedPath.current === pathname) {
      return;
    }
    lastTrackedPath.current = pathname;

    const trackView = async () => {
      const sanitizedPath = pathname === '/' ? 'home' : pathname.replace(/^\/+|\/+$/g, '').replace(/\//g, '_');
      const todayDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

      // 1. Send to server tracking endpoint
      try {
        fetch('/api/track-view', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path: pathname, timestamp: Date.now() }),
        }).catch(() => {});
      } catch {}

      // 2. Direct Firestore update for real-time sync
      try {
        if (db) {
          const docRef = doc(db, 'page_views', sanitizedPath);
          await setDoc(docRef, {
            path: pathname,
            slug: sanitizedPath,
            totalViews: increment(1),
            lastVisited: Date.now(),
            [`daily_${todayDate}`]: increment(1),
          }, { merge: true });
        }
      } catch (err) {
        // Silently catch tracking errors so page navigation is never interrupted
        console.debug('Page view tracking note:', err);
      }
    };

    // Small delay to ensure client navigation has settled
    const timeoutId = setTimeout(trackView, 400);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
