'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { 
  collection, 
  query, 
  orderBy, 
  limit, 
  getDocs,
  getCountFromServer
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Image from 'next/image';
import { 
  LayoutDashboard, 
  Users, 
  PhoneCall, 
  BarChart3, 
  TrendingUp, 
  LogOut, 
  RefreshCw, 
  Search, 
  Eye, 
  X, 
  Mail, 
  MapPin, 
  ShieldAlert,
  Loader2,
  ExternalLink,
  Globe,
  Flame,
  Percent,
  Calendar,
  DollarSign
} from 'lucide-react';

interface LeadSubmission {
  id: string;
  name?: string;
  Name?: string;
  mobile?: string;
  'Mobile Number'?: string;
  email?: string;
  Email?: string;
  city?: string;
  City?: string;
  monthlyIncome?: string;
  'Monthly income'?: string;
  totalCreditCardDues?: string;
  'Total credit card dues'?: string;
  totalPersonalLoanDues?: string;
  'Total personal loan amount'?: string;
  queries?: string;
  Queries?: string;
  recoveryPressure?: string;
  question11?: string;
  setupFee?: string;
  'Payment to start settlement'?: string;
  legalNotice?: string;
  'Legal Notice'?: string;
  fullUrl?: string;
  'Full URL'?: string;
  created?: number | any;
  utmSource?: string;
  'UTM Source'?: string;
  'UTM Medium'?: string;
  'UTM Campaign'?: string;
  [key: string]: any;
}

interface PageTrafficRecord {
  id: string;
  path: string;
  slug: string;
  totalViews: number;
  lastVisited: number;
  todayViews?: number;
  [key: string]: any;
}

export default function AdminDashboardPage() {
  const { user, loading, logout } = useAdminAuth();
  const router = useRouter();

  // Navigation State
  const [activeTab, setActiveTab] = useState<'overview' | 'traffic' | 'leads'>('overview');

  // Leads State
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [trueTotalLeads, setTrueTotalLeads] = useState<number | null>(null);
  const [fetchingLeads, setFetchingLeads] = useState<boolean>(true);
  const [leadSearchTerm, setLeadSearchTerm] = useState<string>('');
  const [selectedLead, setSelectedLead] = useState<LeadSubmission | null>(null);

  // Traffic State
  const [pageTraffic, setPageTraffic] = useState<PageTrafficRecord[]>([]);
  const [fetchingTraffic, setFetchingTraffic] = useState<boolean>(true);
  const [trafficSearchTerm, setTrafficSearchTerm] = useState<string>('');
  const [trafficSortBy, setTrafficSortBy] = useState<'totalViews' | 'todayViews' | 'lastVisited'>('totalViews');
  const [trafficSortOrder, setTrafficSortOrder] = useState<'desc' | 'asc'>('desc');

  // Auth guard: redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.replace('/admin/login');
    }
  }, [user, loading, router]);

  // Fetch Leads from ContactPageForm
  const fetchLeadsData = async () => {
    if (!db) return;
    setFetchingLeads(true);

    // 1. Fetch exact total collection count
    try {
      const collRef = collection(db, 'ContactPageForm');
      const countSnapshot = await getCountFromServer(collRef);
      setTrueTotalLeads(countSnapshot.data().count);
    } catch (countErr) {
      console.warn('Could not fetch server count, falling back to document array length:', countErr);
    }

    // 2. Fetch recent leads list
    try {
      const q = query(
        collection(db, 'ContactPageForm'),
        orderBy('created', 'desc'),
        limit(200)
      );
      const snapshot = await getDocs(q);
      const data: LeadSubmission[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLeads(data);
    } catch (err: any) {
      console.warn('Fallback leads fetch:', err);
      try {
        const qDirect = query(collection(db, 'ContactPageForm'), limit(200));
        const snapshot = await getDocs(qDirect);
        const data: LeadSubmission[] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        data.sort((a, b) => {
          const timeA = typeof a.created === 'number' ? a.created : (a.created?.toMillis?.() || 0);
          const timeB = typeof b.created === 'number' ? b.created : (b.created?.toMillis?.() || 0);
          return timeB - timeA;
        });
        setLeads(data);
      } catch (innerErr) {
        console.error('Error fetching leads:', innerErr);
      }
    } finally {
      setFetchingLeads(false);
    }
  };

  // Fetch Page Views Traffic from page_views
  const fetchTrafficData = async () => {
    if (!db) return;
    setFetchingTraffic(true);
    const todayKey = `daily_${new Date().toISOString().slice(0, 10)}`;

    try {
      const q = query(
        collection(db, 'page_views'),
        orderBy('totalViews', 'desc'),
        limit(300)
      );
      const snapshot = await getDocs(q);
      const data: PageTrafficRecord[] = snapshot.docs.map(doc => {
        const raw = doc.data();
        return {
          id: doc.id,
          path: raw.path || `/${doc.id.replace(/_/g, '/')}`,
          slug: raw.slug || doc.id,
          totalViews: typeof raw.totalViews === 'number' ? raw.totalViews : 1,
          lastVisited: typeof raw.lastVisited === 'number' ? raw.lastVisited : (raw.lastVisited?.toMillis?.() || Date.now()),
          todayViews: typeof raw[todayKey] === 'number' ? raw[todayKey] : 0,
        };
      });
      setPageTraffic(data);
    } catch (err: any) {
      console.warn('Fallback traffic fetch:', err);
      try {
        const qDirect = query(collection(db, 'page_views'), limit(300));
        const snapshot = await getDocs(qDirect);
        const data: PageTrafficRecord[] = snapshot.docs.map(doc => {
          const raw = doc.data();
          return {
            id: doc.id,
            path: raw.path || `/${doc.id.replace(/_/g, '/')}`,
            slug: raw.slug || doc.id,
            totalViews: typeof raw.totalViews === 'number' ? raw.totalViews : 1,
            lastVisited: typeof raw.lastVisited === 'number' ? raw.lastVisited : (raw.lastVisited?.toMillis?.() || Date.now()),
            todayViews: typeof raw[todayKey] === 'number' ? raw[todayKey] : 0,
          };
        });
        data.sort((a, b) => b.totalViews - a.totalViews);
        setPageTraffic(data);
      } catch (innerErr) {
        console.error('Error fetching traffic:', innerErr);
      }
    } finally {
      setFetchingTraffic(false);
    }
  };

  const refreshAllData = () => {
    fetchLeadsData();
    fetchTrafficData();
  };

  useEffect(() => {
    if (user) {
      refreshAllData();
    }
  }, [user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="flex flex-col items-center gap-3 text-gray-500">
          <Loader2 className="w-8 h-8 animate-spin text-[#1F5EFF]" />
          <p className="text-sm font-semibold">Authenticating admin session...</p>
        </div>
      </div>
    );
  }

  // Calculate Metrics
  const now = Date.now();
  const oneDayAgo = now - 24 * 60 * 60 * 1000;
  
  const totalLeadsCount = trueTotalLeads !== null ? trueTotalLeads : leads.length;
  const todayLeadsCount = leads.filter(lead => {
    const createdTime = typeof lead.created === 'number' ? lead.created : (lead.created?.toMillis?.() || 0);
    return createdTime > oneDayAgo;
  }).length;

  const urgentPressureCount = leads.filter(lead => {
    const pressure = lead.question11 || lead.recoveryPressure || '';
    return pressure.toLowerCase().includes('harass') || pressure.toLowerCase().includes('yes');
  }).length;

  // Traffic Aggregates
  const totalPageViews = pageTraffic.reduce((acc, curr) => acc + curr.totalViews, 0);
  const todayPageViews = pageTraffic.reduce((acc, curr) => acc + (curr.todayViews || 0), 0);
  const topSlug = pageTraffic.length > 0 ? pageTraffic[0] : null;

  // Time-aligned conversion rate for today
  let todayConversionRate = '0.0%';
  let conversionNote = `${todayLeadsCount} leads / ${todayPageViews} views`;

  if (todayPageViews > 0) {
    if (todayLeadsCount <= todayPageViews) {
      const rate = ((todayLeadsCount / todayPageViews) * 100).toFixed(1);
      todayConversionRate = `${rate}%`;
    } else {
      todayConversionRate = 'Calibrating';
      conversionNote = 'Traffic syncing...';
    }
  } else if (todayLeadsCount > 0) {
    todayConversionRate = 'Calibrating';
    conversionNote = 'Awaiting page hits';
  }

  const highestViewsSinglePage = topSlug?.totalViews || 1;

  // Filter & Sort Traffic
  const filteredTraffic = pageTraffic
    .filter(item => {
      const term = trafficSearchTerm.toLowerCase();
      return item.path.toLowerCase().includes(term) || item.slug.toLowerCase().includes(term);
    })
    .sort((a, b) => {
      let valA = a[trafficSortBy] || 0;
      let valB = b[trafficSortBy] || 0;
      return trafficSortOrder === 'desc' ? valB - valA : valA - valB;
    });

  // Filter Leads
  const filteredLeads = leads.filter(lead => {
    const name = (lead.Name || lead.name || '').toLowerCase();
    const phone = (lead['Mobile Number'] || lead.mobile || '').toString().toLowerCase();
    const email = (lead.Email || lead.email || '').toLowerCase();
    const city = (lead.City || lead.city || '').toLowerCase();
    const queryTerm = leadSearchTerm.toLowerCase();

    return name.includes(queryTerm) || phone.includes(queryTerm) || email.includes(queryTerm) || city.includes(queryTerm);
  });

  const formatDate = (val: any) => {
    if (!val) return 'N/A';
    try {
      const timestamp = typeof val === 'number' ? val : (val.toMillis ? val.toMillis() : val);
      return new Date(timestamp).toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch {
      return 'Invalid Date';
    }
  };

  const formatRelativeTime = (timestamp: number) => {
    if (!timestamp) return 'Never';
    const diffSec = Math.floor((Date.now() - timestamp) / 1000);
    if (diffSec < 60) return 'Just now';
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
    return `${Math.floor(diffSec / 86400)}d ago`;
  };

  const toggleTrafficSort = (field: 'totalViews' | 'todayViews' | 'lastVisited') => {
    if (trafficSortBy === field) {
      setTrafficSortOrder(trafficSortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setTrafficSortBy(field);
      setTrafficSortOrder('desc');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#2E2E2E] flex flex-col md:flex-row font-sans">
      {/* Sidebar (Sleek Charcoal Theme from App Hero) */}
      <aside className="w-full md:w-64 bg-[#2E2E2E] text-white flex flex-col shrink-0 shadow-xl border-r border-black/20">
        {/* Brand Header */}
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="relative w-10 h-10 bg-white rounded-2xl p-1.5 shadow-md flex items-center justify-center shrink-0">
            <Image 
              src="/logo/logo.svg" 
              alt="SettleLoans Logo" 
              width={30} 
              height={30} 
              className="object-contain"
            />
          </div>
          <div>
            <span className="text-lg font-black text-white tracking-tight">SettleLoans</span>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-400">
              Admin Portal
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1">
          {/* Tab 1: Overview */}
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#1F5EFF] text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard Overview</span>
          </button>

          {/* Tab 2: Page Traffic & Slugs */}
          <button
            onClick={() => setActiveTab('traffic')}
            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'traffic'
                ? 'bg-[#1F5EFF] text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <BarChart3 className="w-4 h-4" />
              <span>Page Traffic & Slugs</span>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/15 text-white font-semibold">
              {pageTraffic.length}
            </span>
          </button>

          {/* Tab 3: Leads */}
          <button
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'leads'
                ? 'bg-[#1F5EFF] text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4" />
              <span>Lead Submissions</span>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/15 text-white font-semibold">
              {trueTotalLeads !== null ? trueTotalLeads.toLocaleString() : leads.length}
            </span>
          </button>
        </nav>

        {/* User Info & Logout */}
        <div className="p-4 border-t border-white/10 bg-black/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#1F5EFF] text-white font-black text-sm flex items-center justify-center shadow-md">
              {user.email ? user.email.charAt(0).toUpperCase() : 'A'}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">{user.email}</p>
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Active Admin
              </span>
            </div>
          </div>

          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-white/5 hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/30 text-gray-300 rounded-xl text-xs font-bold border border-white/10 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area (Clean White/Slate App Theme) */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Header Bar */}
        <header className="px-8 py-5 bg-white/90 backdrop-blur-md border-b border-gray-200/80 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <div>
            <h1 className="text-2xl font-black text-[#2E2E2E] tracking-tight">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'traffic' && 'Page Traffic & Slug Analytics'}
              {activeTab === 'leads' && 'Lead Inquiries'}
            </h1>
            <p className="text-xs font-medium text-gray-500 mt-0.5">
              Live updates from Firestore &bull; Real-time counters & leads
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={refreshAllData}
              disabled={fetchingLeads || fetchingTraffic}
              className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 active:scale-95 text-[#2E2E2E] rounded-xl text-xs font-bold border border-gray-200 shadow-sm transition-all cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#1F5EFF] ${(fetchingLeads || fetchingTraffic) ? 'animate-spin' : ''}`} />
              <span>Refresh Data</span>
            </button>
          </div>
        </header>

        {/* Dynamic Tab Body */}
        <div className="p-8 space-y-8 max-w-7xl">

          {/* ======================================================== */}
          {/* TAB 1: OVERVIEW */}
          {/* ======================================================== */}
          {activeTab === 'overview' && (
            <>
              {/* Stat Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Total Traffic */}
                <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-[0_4px_25px_rgba(31,94,255,0.05)] hover:shadow-[0_8px_30px_rgba(31,94,255,0.09)] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Page Views</span>
                    <div className="p-3 rounded-2xl bg-blue-50 text-[#1F5EFF] border border-blue-100">
                      <Globe className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#2E2E2E]">{totalPageViews}</span>
                    <span className="text-xs font-medium text-gray-500">across {pageTraffic.length} slugs</span>
                  </div>
                </div>

                {/* Today's Traffic */}
                <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-[0_4px_25px_rgba(31,94,255,0.05)] hover:shadow-[0_8px_30px_rgba(31,94,255,0.09)] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Today&apos;s Views</span>
                    <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#2E2E2E]">{todayPageViews}</span>
                    <span className="text-xs font-semibold text-indigo-600">page visits today</span>
                  </div>
                </div>

                {/* Total Inquiries */}
                <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-[0_4px_25px_rgba(31,94,255,0.05)] hover:shadow-[0_8px_30px_rgba(31,94,255,0.09)] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Inquiries</span>
                    <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#2E2E2E]">{totalLeadsCount.toLocaleString()}</span>
                    <span className="text-xs font-semibold text-emerald-600">+{todayLeadsCount} new today</span>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-[0_4px_25px_rgba(31,94,255,0.05)] hover:shadow-[0_8px_30px_rgba(31,94,255,0.09)] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Today&apos;s Conversion</span>
                    <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
                      <Percent className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#2E2E2E]">{todayConversionRate}</span>
                    <span className="text-xs font-medium text-gray-500">{conversionNote}</span>
                  </div>
                </div>
              </div>

              {/* Two Column Layout: Top Slugs Preview + Recent Leads Preview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Slugs Preview */}
                <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-amber-50 text-amber-600">
                        <Flame className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-black text-[#2E2E2E]">Top Visited Slugs</h3>
                    </div>
                    <button
                      onClick={() => setActiveTab('traffic')}
                      className="text-xs text-[#1F5EFF] hover:underline font-bold cursor-pointer"
                    >
                      View All &rarr;
                    </button>
                  </div>

                  <div className="space-y-3">
                    {fetchingTraffic ? (
                      <div className="py-8 text-center text-gray-400 text-xs">Loading traffic data...</div>
                    ) : pageTraffic.length === 0 ? (
                      <div className="py-8 text-center text-gray-400 text-xs">No page traffic recorded yet. Visit any page to start tracking!</div>
                    ) : (
                      pageTraffic.slice(0, 5).map((page, index) => (
                        <div key={page.id} className="p-3.5 bg-gray-50/70 hover:bg-blue-50/50 rounded-2xl border border-gray-100 flex items-center justify-between gap-3 transition-colors">
                          <div className="flex items-center gap-3 truncate">
                            <span className="w-7 h-7 rounded-xl bg-white text-gray-700 font-bold text-xs flex items-center justify-center shrink-0 border border-gray-200 shadow-xs">
                              #{index + 1}
                            </span>
                            <div className="truncate">
                              <a
                                href={page.path}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-bold text-[#2E2E2E] hover:text-[#1F5EFF] truncate flex items-center gap-1.5"
                              >
                                <span>{page.path}</span>
                                <ExternalLink className="w-3 h-3 text-gray-400 shrink-0" />
                              </a>
                              <span className="text-[11px] text-gray-400 font-medium">Last visited: {formatRelativeTime(page.lastVisited)}</span>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-xs font-black text-[#2E2E2E]">{page.totalViews}</span>
                            <span className="block text-[10px] text-gray-400 font-semibold">views</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Recent Leads Preview */}
                <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                        <Users className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-black text-[#2E2E2E]">Recent Inquiries</h3>
                    </div>
                    <button
                      onClick={() => setActiveTab('leads')}
                      className="text-xs text-[#1F5EFF] hover:underline font-bold cursor-pointer"
                    >
                      View All &rarr;
                    </button>
                  </div>

                  <div className="space-y-3">
                    {fetchingLeads ? (
                      <div className="py-8 text-center text-gray-400 text-xs">Loading leads...</div>
                    ) : leads.length === 0 ? (
                      <div className="py-8 text-center text-gray-400 text-xs">No inquiries submitted yet.</div>
                    ) : (
                      leads.slice(0, 5).map((lead) => (
                        <div key={lead.id} className="p-3.5 bg-gray-50/70 hover:bg-blue-50/50 rounded-2xl border border-gray-100 flex items-center justify-between gap-3 transition-colors">
                          <div>
                            <div className="text-xs font-bold text-[#2E2E2E]">{lead.Name || lead.name || 'Unnamed'}</div>
                            <div className="text-[11px] text-gray-500 font-medium">{lead['Mobile Number'] || lead.mobile || 'N/A'} &bull; {lead.City || lead.city || 'India'}</div>
                          </div>
                          <div className="text-right">
                            <span className="text-[11px] text-gray-400 font-medium">{formatDate(lead.created)}</span>
                            <button
                              onClick={() => setSelectedLead(lead)}
                              className="block ml-auto mt-1 text-[11px] font-bold text-[#1F5EFF] hover:underline cursor-pointer"
                            >
                              View &rarr;
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ======================================================== */}
          {/* TAB 2: PAGE TRAFFIC & SLUGS */}
          {/* ======================================================== */}
          {activeTab === 'traffic' && (
            <div className="space-y-6">
              {/* Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Tracked Slugs</span>
                  <div className="mt-2 text-2xl font-black text-[#2E2E2E]">{pageTraffic.length}</div>
                </div>

                <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Page Views</span>
                  <div className="mt-2 text-2xl font-black text-[#1F5EFF]">{totalPageViews}</div>
                </div>

                <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Views Today</span>
                  <div className="mt-2 text-2xl font-black text-emerald-600">+{todayPageViews}</div>
                </div>
              </div>

              {/* Search & Sort Controls */}
              <div className="bg-white border border-gray-200/80 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={trafficSearchTerm}
                    onChange={(e) => setTrafficSearchTerm(e.target.value)}
                    placeholder="Search by slug or path..."
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#1F5EFF] focus:bg-white transition-all"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                  <span>Sort by:</span>
                  <button
                    onClick={() => toggleTrafficSort('totalViews')}
                    className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      trafficSortBy === 'totalViews'
                        ? 'bg-[#1F5EFF] text-white border-[#1F5EFF] shadow-xs'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Total Views {trafficSortBy === 'totalViews' && (trafficSortOrder === 'desc' ? '↓' : '↑')}
                  </button>

                  <button
                    onClick={() => toggleTrafficSort('todayViews')}
                    className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      trafficSortBy === 'todayViews'
                        ? 'bg-[#1F5EFF] text-white border-[#1F5EFF] shadow-xs'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Today {trafficSortBy === 'todayViews' && (trafficSortOrder === 'desc' ? '↓' : '↑')}
                  </button>

                  <button
                    onClick={() => toggleTrafficSort('lastVisited')}
                    className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      trafficSortBy === 'lastVisited'
                        ? 'bg-[#1F5EFF] text-white border-[#1F5EFF] shadow-xs'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Recent {trafficSortBy === 'lastVisited' && (trafficSortOrder === 'desc' ? '↓' : '↑')}
                  </button>
                </div>
              </div>

              {/* Traffic Table */}
              <div className="bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50/80 text-gray-500 uppercase font-bold tracking-wider border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4">Rank & Slug Path</th>
                        <th className="px-6 py-4">Relative Traffic</th>
                        <th className="px-6 py-4 text-center">Today&apos;s Views</th>
                        <th className="px-6 py-4 text-center">Total Views</th>
                        <th className="px-6 py-4 text-right">Last Visited</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {fetchingTraffic ? (
                        <tr>
                          <td colSpan={6} className="text-center py-12 text-gray-400">
                            <Loader2 className="w-6 h-6 animate-spin text-[#1F5EFF] mx-auto mb-2" />
                            <span>Loading slug traffic from Firestore...</span>
                          </td>
                        </tr>
                      ) : filteredTraffic.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center py-12 text-gray-400">
                            {trafficSearchTerm ? 'No slug matched your search.' : 'No page views recorded yet. Visit any page on the website to see real-time data!'}
                          </td>
                        </tr>
                      ) : (
                        filteredTraffic.map((page, index) => {
                          const percentageOfMax = Math.min(100, Math.round((page.totalViews / highestViewsSinglePage) * 100));

                          return (
                            <tr key={page.id} className="hover:bg-blue-50/40 transition-colors">
                              {/* Slug */}
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <span className="w-7 h-7 rounded-xl bg-gray-100 text-gray-700 font-bold text-xs flex items-center justify-center shrink-0 border border-gray-200">
                                    {index + 1}
                                  </span>
                                  <div>
                                    <div className="font-bold text-[#2E2E2E] truncate max-w-sm sm:max-w-md">
                                      {page.path}
                                    </div>
                                    <span className="text-[10px] text-gray-400 font-mono">{page.slug}</span>
                                  </div>
                                </div>
                              </td>

                              {/* Progress bar */}
                              <td className="px-6 py-4 w-48">
                                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                  <div
                                    className="bg-gradient-to-r from-blue-500 to-[#1F5EFF] h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${percentageOfMax}%` }}
                                  />
                                </div>
                              </td>

                              {/* Today's Views */}
                              <td className="px-6 py-4 text-center whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                  (page.todayViews || 0) > 0 
                                    ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                                    : 'text-gray-400'
                                }`}>
                                  +{page.todayViews || 0}
                                </span>
                              </td>

                              {/* Total Views */}
                              <td className="px-6 py-4 text-center whitespace-nowrap">
                                <span className="text-sm font-black text-[#2E2E2E]">
                                  {page.totalViews}
                                </span>
                              </td>

                              {/* Last Visited */}
                              <td className="px-6 py-4 text-right whitespace-nowrap text-gray-500 font-medium">
                                {formatRelativeTime(page.lastVisited)}
                              </td>

                              {/* Action */}
                              <td className="px-6 py-4 text-right whitespace-nowrap">
                                <a
                                  href={page.path}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-3.5 py-1.5 bg-blue-50 hover:bg-[#1F5EFF] text-[#1F5EFF] hover:text-white rounded-xl border border-blue-200 text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-xs"
                                >
                                  <span>Visit</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* TAB 3: LEADS */}
          {/* ======================================================== */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="bg-white border border-gray-200/80 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={leadSearchTerm}
                    onChange={(e) => setLeadSearchTerm(e.target.value)}
                    placeholder="Search by name, phone, email, city..."
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-[#1F5EFF] focus:bg-white transition-all"
                  />
                </div>
                <div className="text-xs font-bold text-gray-500">
                  Showing <span className="text-[#2E2E2E] font-black">{filteredLeads.length}</span> of {trueTotalLeads !== null ? trueTotalLeads.toLocaleString() : leads.length} total leads (Loaded latest {leads.length})
                </div>
              </div>

              {/* Inquiries Table */}
              <div className="bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50/80 text-gray-500 uppercase font-bold tracking-wider border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4">Submission Date</th>
                        <th className="px-6 py-4">Client Details</th>
                        <th className="px-6 py-4">Location</th>
                        <th className="px-6 py-4">Debt Summary</th>
                        <th className="px-6 py-4">Recovery Status</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {fetchingLeads ? (
                        <tr>
                          <td colSpan={6} className="text-center py-12 text-gray-400">
                            <Loader2 className="w-6 h-6 animate-spin text-[#1F5EFF] mx-auto mb-2" />
                            <span>Loading leads from Firestore...</span>
                          </td>
                        </tr>
                      ) : filteredLeads.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center py-12 text-gray-400">
                            {leadSearchTerm ? 'No leads matched your search query.' : 'No lead submissions found in ContactPageForm yet.'}
                          </td>
                        </tr>
                      ) : (
                        filteredLeads.map((lead) => {
                          const name = lead.Name || lead.name || 'Unnamed';
                          const phone = lead['Mobile Number'] || lead.mobile || 'N/A';
                          const email = lead.Email || lead.email || 'N/A';
                          const city = lead.City || lead.city || 'N/A';
                          const personalLoan = lead['Total personal loan amount'] || lead.totalPersonalLoanDues || '—';
                          const creditCard = lead['Total credit card dues'] || lead.totalCreditCardDues || '—';
                          const pressure = lead.question11 || lead.recoveryPressure || 'No pressure';

                          return (
                            <tr key={lead.id} className="hover:bg-blue-50/40 transition-colors">
                              {/* Date */}
                              <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">
                                {formatDate(lead.created)}
                              </td>

                              {/* Client */}
                              <td className="px-6 py-4">
                                <div className="font-bold text-[#2E2E2E]">{name}</div>
                                <div className="text-gray-500 flex items-center gap-1.5 mt-0.5">
                                  <PhoneCall className="w-3 h-3 text-[#1F5EFF]" />
                                  <a href={`tel:${phone}`} className="hover:underline font-semibold text-gray-700">{phone}</a>
                                </div>
                                {email !== 'N/A' && (
                                  <div className="text-gray-400 flex items-center gap-1 mt-0.5 truncate max-w-[180px]">
                                    <Mail className="w-3 h-3" />
                                    <span>{email}</span>
                                  </div>
                                )}
                              </td>

                              {/* Location */}
                              <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-100 border border-gray-200 text-[11px] font-bold text-gray-700">
                                  <MapPin className="w-3 h-3 text-gray-400" />
                                  {city}
                                </span>
                              </td>

                              {/* Debt Summary */}
                              <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                                <div><span className="text-gray-400 font-semibold">PL:</span> <span className="font-bold">{personalLoan}</span></div>
                                <div><span className="text-gray-400 font-semibold">CC:</span> <span className="font-bold">{creditCard}</span></div>
                              </td>

                              {/* Recovery Status */}
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                                  pressure.toLowerCase().includes('harass') || pressure.toLowerCase().includes('yes')
                                    ? 'bg-red-50 text-red-600 border-red-200'
                                    : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                                }`}>
                                  {pressure}
                                </span>
                              </td>

                              {/* Action */}
                              <td className="px-6 py-4 text-right whitespace-nowrap">
                                <button
                                  onClick={() => setSelectedLead(lead)}
                                  className="px-3.5 py-1.5 bg-blue-50 hover:bg-[#1F5EFF] text-[#1F5EFF] hover:text-white rounded-xl border border-blue-200 text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>View</span>
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-gray-200 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <div>
                <h3 className="text-lg font-black text-[#2E2E2E]">Lead Details</h3>
                <p className="text-xs text-gray-400 mt-0.5 font-medium">Document ID: {selectedLead.id}</p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-sm">
              {/* Grid 1: Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Client Name</span>
                  <p className="text-base font-black text-[#2E2E2E] mt-1">
                    {selectedLead.Name || selectedLead.name || 'N/A'}
                  </p>
                </div>

                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Mobile Number</span>
                  <p className="text-base font-black text-[#1F5EFF] mt-1">
                    {selectedLead['Mobile Number'] || selectedLead.mobile || 'N/A'}
                  </p>
                </div>

                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Email Address</span>
                  <p className="text-sm font-semibold text-gray-700 mt-1">
                    {selectedLead.Email || selectedLead.email || 'N/A'}
                  </p>
                </div>

                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Location / State</span>
                  <p className="text-sm font-semibold text-gray-700 mt-1">
                    {selectedLead.City || selectedLead.city || 'N/A'}
                  </p>
                </div>
              </div>

              {/* Grid 2: Financial & Debt Details */}
              <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 space-y-4">
                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">Financial Overview</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-xs text-gray-400 font-medium">Monthly Income</span>
                    <p className="text-sm font-black text-[#2E2E2E] mt-0.5">
                      {selectedLead['Monthly income'] || selectedLead.monthlyIncome || 'N/A'}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 font-medium">Personal Loan Dues</span>
                    <p className="text-sm font-black text-[#2E2E2E] mt-0.5">
                      {selectedLead['Total personal loan amount'] || selectedLead.totalPersonalLoanDues || 'N/A'}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 font-medium">Credit Card Dues</span>
                    <p className="text-sm font-black text-[#2E2E2E] mt-0.5">
                      {selectedLead['Total credit card dues'] || selectedLead.totalCreditCardDues || 'N/A'}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                  <div>
                    <span className="text-xs text-gray-400 font-medium">Recovery Harassment / Pressure</span>
                    <p className="text-sm font-bold text-red-600 mt-0.5">
                      {selectedLead.question11 || selectedLead.recoveryPressure || 'N/A'}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 font-medium">Payment to Start Settlement</span>
                    <p className="text-sm font-bold text-gray-800 mt-0.5">
                      {selectedLead['Payment to start settlement'] || selectedLead.setupFee || 'N/A'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Inquiries & Queries */}
              {(selectedLead.Queries || selectedLead.queries) && (
                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">User Queries / Notes</span>
                  <p className="text-sm text-gray-700 font-medium mt-1 whitespace-pre-wrap">
                    {selectedLead.Queries || selectedLead.queries}
                  </p>
                </div>
              )}

              {/* Attribution / Technical Meta */}
              <div className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100 space-y-2 text-xs text-gray-500">
                <span className="text-[11px] text-gray-400 uppercase tracking-wider font-bold block">Attribution & Source</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div><span className="text-gray-400 font-medium">Submission Time:</span> {formatDate(selectedLead.created)}</div>
                  <div><span className="text-gray-400 font-medium">Source:</span> {selectedLead['UTM Source'] || 'Organic'}</div>
                  <div><span className="text-gray-400 font-medium">Campaign:</span> {selectedLead['UTM Campaign'] || 'None'}</div>
                  <div className="truncate"><span className="text-gray-400 font-medium">Page URL:</span> {selectedLead['Full URL'] || 'N/A'}</div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex justify-end">
              <button
                onClick={() => setSelectedLead(null)}
                className="px-5 py-2.5 bg-[#2E2E2E] hover:bg-black text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
