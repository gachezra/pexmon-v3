export interface Project {
  id: string;
  name: string;
  liveUrl: string;
  positioning: string;
  metrics: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  accentColor: string;
  tagline: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'eventkick',
    name: 'EventKick',
    liveUrl: 'https://eventkick.ke',
    positioning: 'Event discovery and ticketing infrastructure enabling seamless access and distribution for both attendees and organizers.',
    tagline: 'Infrastructure for discovery.',
    metrics: [
      { label: 'Events Indexed', value: '1,000+' },
      { label: 'Ticket Interactions', value: '10K+' },
      { label: 'Load Time', value: '<1.5s' },
      { label: 'Market', value: 'Kenya' }
    ],
    highlights: [
      'Hybrid SSR/API architecture',
      'Stateless browsing + optional auth flows',
      'Event schema optimized for fast retrieval',
      'Email-triggered engagement loops'
    ],
    accentColor: 'from-cyan-500/20'
  },
  {
    id: 'varsityrank',
    name: 'VarsityRank',
    liveUrl: 'https://varsityrank.pexmon.one',
    positioning: 'A structured decision-support platform for university selection, driven by verified student insights.',
    tagline: 'Decision support for education.',
    metrics: [
      { label: 'Institutions Indexed', value: '50+' },
      { label: 'Reviews Submitted', value: 'Growing' },
      { label: 'API Latency', value: 'Optimized' },
      { label: 'Verification', value: 'High' }
    ],
    highlights: [
      'JWT authentication pipeline',
      'Mailgun-powered verification system',
      'Structured review normalization',
      'Anti-spam and validation layers'
    ],
    accentColor: 'from-blue-500/20'
  },
  {
    id: 'nikokadi',
    name: 'NikoKadi',
    liveUrl: 'https://kadi.pexmon.one',
    positioning: 'A real-time multiplayer poker system engineered for low-latency gameplay and synchronized state management.',
    tagline: 'Real-time state synchronization.',
    metrics: [
      { label: 'Sync Latency', value: 'Low' },
      { label: 'State Transitions', value: 'Deterministic' },
      { label: 'Stability', value: 'High' },
      { label: 'Sessions', value: 'Scaling' }
    ],
    highlights: [
      'Stateful game engine architecture',
      'WebSocket-based synchronization',
      'Game integrity enforcement logic',
      'Session lifecycle management'
    ],
    accentColor: 'from-magenta-500/20'
  },
  {
    id: 'pexpay',
    name: 'PexPay',
    liveUrl: 'https://pay.pexmon.one',
    positioning: 'A direct payment infrastructure enabling SMEs to collect funds instantly into their own accounts.',
    tagline: 'Direct payment infrastructure.',
    metrics: [
      { label: 'Success Rate', value: 'High' },
      { label: 'Confirmation', value: 'Seconds' },
      { label: 'Integration', value: 'M-Pesa' },
      { label: 'Transactions', value: 'Scaling' }
    ],
    highlights: [
      'STK push integration layer',
      'Webhook-based transaction validation',
      'Payment state machine design',
      'Secure, minimal-friction checkout flow'
    ],
    accentColor: 'from-emerald-500/20'
  },
  {
    id: 'rnrsociallab',
    name: 'RnR Social Lab',
    liveUrl: 'https://rnrsociallab.com',
    positioning: 'A hybrid digital-physical event brand delivering curated lifestyle experiences and audience engagement.',
    tagline: 'Hybrid experience orchestration.',
    metrics: [
      { label: 'Attendance', value: 'High' },
      { label: 'Conversion', value: 'Organic' },
      { label: 'Retention', value: 'Strong' },
      { label: 'Activations', value: 'Multiple' }
    ],
    highlights: [
      'Experience-driven product design',
      'Event lifecycle orchestration',
      'Audience engagement loops',
      'Digital-to-physical integration'
    ],
    accentColor: 'from-orange-500/20'
  }
];
