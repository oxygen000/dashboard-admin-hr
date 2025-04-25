export interface Tickets {
    id: number;
    title: string;
    description: string;
    status: 'open' | 'in_progress' | 'completed';
    reply: string;
    name: string;
    date: string;
  }
  
  export const TICKETS: Tickets[] = [
    { id: 1, title: 'Login issue', description: 'User cannot login.', status: 'open', reply: '', name: 'Ali', date: '2025-04-25' },
  { id: 2, title: 'Bug in dashboard', description: 'Graph not loading.', status: 'in_progress', reply: '', name: 'Sara', date: '2025-04-24' },
  { id: 3, title: 'Feature request', description: 'Add dark mode.', status: 'completed', reply: 'Done!', name: 'Hassan', date: '2025-04-23' },
  { id: 4, title: 'Password reset', description: 'User needs to reset password.', status: 'open', reply: '', name: 'Ahmed', date: '2025-04-22' },
  { id: 5, title: 'Mobile app crash', description: 'App crashes on startup.', status: 'in_progress', reply: '', name: 'Mona', date: '2025-04-21' },
  { id: 6, title: 'Website performance', description: 'Site is loading slowly.', status: 'open', reply: '', name: 'Tariq', date: '2025-04-20' },
  { id: 7, title: 'UI issue', description: 'Icons are misaligned.', status: 'completed', reply: 'Fixed!', name: 'Zainab', date: '2025-04-19' },
  { id: 8, title: 'Data export', description: 'Exporting data as CSV fails.', status: 'in_progress', reply: '', name: 'Omar', date: '2025-04-18' },
  { id: 9, title: 'API error', description: 'API returns 500 error.', status: 'completed', reply: 'Resolved the issue.', name: 'Rami', date: '2025-04-17' },
  { id: 10, title: 'New feature suggestion', description: 'Add notification system.', status: 'open', reply: '', name: 'Laila', date: '2025-04-16' },
  { id: 11, title: 'Security patch', description: 'Security vulnerability found.', status: 'in_progress', reply: '', name: 'Khaled', date: '2025-04-15' },
  { id: 12, title: 'Account verification', description: 'User account needs verification.', status: 'open', reply: '', name: 'Noor', date: '2025-04-14' },
  { id: 13, title: 'Email configuration', description: 'Emails are not being sent.', status: 'completed', reply: 'Fixed!', name: 'Yara', date: '2025-04-13' },
  { id: 14, title: 'Database backup', description: 'Backup process fails.', status: 'in_progress', reply: '', name: 'Salim', date: '2025-04-12' },
  { id: 15, title: 'Update notification', description: 'User not receiving updates.', status: 'open', reply: '', name: 'Nora', date: '2025-04-11' }
  ];
  