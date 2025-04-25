export interface LeaveRequest {
    id: number;
    name: string;
    department: string;
    startDate: string;
    endDate: string;
    leaveType: string;
    status: 'Pending' | 'Approved' | 'Rejected';
    reason: string;
  }
  
  export const LEAVE_REQUESTS: LeaveRequest[] = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      department: 'Engineering',
      startDate: '2024-05-01',
      endDate: '2024-05-10',
      leaveType: 'Annual',
      status: 'Pending',
      reason: 'Family vacation'
    },
    {
      id: 2,
      name: 'Sara Mohamed',
      department: 'Design',
      startDate: '2024-06-15',
      endDate: '2024-06-20',
      leaveType: 'Sick',
      status: 'Approved',
      reason: 'Medical treatment'
    },
    {
      id: 3,
      name: 'Mahmoud Ali',
      department: 'Product',
      startDate: '2024-05-18',
      endDate: '2024-05-25',
      leaveType: 'Annual',
      status: 'Rejected',
      reason: 'Workload during that period'
    },
    {
      id: 4,
      name: 'Fatma Youssef',
      department: 'HR',
      startDate: '2024-07-01',
      endDate: '2024-07-05',
      leaveType: 'Personal',
      status: 'Pending',
      reason: 'Personal matters'
    },
    {
      id: 5,
      name: 'Omar Khaled',
      department: 'Marketing',
      startDate: '2024-06-10',
      endDate: '2024-06-14',
      leaveType: 'Annual',
      status: 'Approved',
      reason: 'Attending a wedding'
    }
  ];
  