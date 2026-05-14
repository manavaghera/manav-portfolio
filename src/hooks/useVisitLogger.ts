import { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export const useVisitLogger = () => {
  useEffect(() => {
    if (!supabase || process.env.NODE_ENV === 'development') return;

    const logVisit = async () => {
      try {
        // Fetch visitor info from our Vercel Edge API
        const response = await fetch('/api/visitor-info');
        const visitorInfo = await response.json();

        const visitData = {
          path: window.location.pathname,
          referrer: document.referrer || 'direct',
          user_agent: navigator.userAgent,
          ip: visitorInfo.ip,
          country: visitorInfo.country,
          city: visitorInfo.city,
          timestamp: new Date().toISOString()
        };

        // Fire-and-forget insert into Supabase
        supabase
          .from('site_visits')
          .insert([visitData])
          .then(({ error }) => {
            if (error && process.env.NODE_ENV !== 'production') {
              console.error('Supabase logging error:', error);
            }
          });
      } catch (err) {
        // Silent fail
      }
    };

    logVisit();
  }, []); // Only once per mount
};
