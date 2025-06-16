// src/utils/dummyData.js
export const dummyStudentData = [
  {
    id: 1,
    name: 'John Mwangi',
    regNo: 'EDU/2023/001',
    school: 'Nairobi High School',
    zone: 'Central',
    status: 'Active',
    lastSubmission: '2023-05-15',

    // 🔽 New additions
    subjects: 'Mathematics & Physics',
    documents: [
      { name: 'Lesson Plan.pdf', url: '/docs/lesson-plan-john.pdf' },
      { name: 'Supervision Log.docx', url: '/docs/supervision-log-john.docx' }
    ],
    scheduleLink: '/schedule/supervision-john'
  },
  {
    id: 2,
    name: 'Grace Akinyi',
    regNo: 'EDU/2023/002',
    school: 'Mombasa Girls',
    zone: 'Coastal',
    status: 'Pending Approval',
    lastSubmission: '2023-05-10',

    subjects: 'English & Literature',
    documents: [
      { name: 'Lesson Plan.pdf', url: '/docs/lesson-plan-grace.pdf' }
    ],
    scheduleLink: '/schedule/supervision-grace'
  },
  {
    id: 3,
    name: 'Peter Kamau',
    regNo: 'EDU/2023/003',
    school: 'Eldoret Academy',
    zone: 'Rift Valley',
    status: 'Inactive',
    lastSubmission: '2023-04-28',

    subjects: 'Biology & Chemistry',
    documents: [],
    scheduleLink: '/schedule/supervision-peter'
  },
];

export const dummyLecturerData = [
  {
    id: 1,
    name: 'Dr. Wanjiku Muthoni',
    department: 'Education',
    assignedZone: 'Central',
    studentsSupervised: 12,
  },
  {
    id: 2,
    name: 'Prof. James Omondi',
    department: 'Mathematics',
    assignedZone: 'Western',
    studentsSupervised: 8,
  },
];

export const dummySupervisionData = [
  {
    id: 1,
    studentName: 'John Mwangi',
    lecturerName: 'Dr. Wanjiku Muthoni',
    date: '2023-05-20',
    status: 'Completed',
    score: 85,
  },
  {
    id: 2,
    studentName: 'Grace Akinyi',
    lecturerName: 'Prof. James Omondi',
    date: '2023-05-18',
    status: 'Pending',
    score: null,
  },
];