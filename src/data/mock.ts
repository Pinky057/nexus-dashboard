import { ShieldAlert, UserPlus, CreditCard, Star, CheckCheck, DollarSign, Users, Activity } from "lucide-react"

export const REVENUE_DATA = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2400 },
  { name: "May", total: 2800 },
  { name: "Jun", total: 3200 },
  { name: "Jul", total: 2900 },
  { name: "Aug", total: 3800 },
  { name: "Sep", total: 4200 },
  { name: "Oct", total: 3900 },
  { name: "Nov", total: 5100 },
  { name: "Dec", total: 6000 },
]

export const TRANSACTIONS = [
  {
    id: "TRX-8291",
    user: "Ummey Habiba Pinky",
    email: "pinky@example.com",
    amount: "$350.00",
    status: "Completed",
    date: "Today, 10:23 AM",
  },
  {
    id: "TRX-8290",
    user: "John Doe",
    email: "john@acme.com",
    amount: "$1,200.00",
    status: "Completed",
    date: "Today, 09:12 AM",
  },
  {
    id: "TRX-8289",
    user: "Sarah Smith",
    email: "sarah.s@design.co",
    amount: "$85.00",
    status: "Pending",
    date: "Yesterday, 04:45 PM",
  },
  {
    id: "TRX-8288",
    user: "Alex Johnson",
    email: "alex@startup.io",
    amount: "$15.00",
    status: "Failed",
    date: "Yesterday, 02:10 PM",
  },
  {
    id: "TRX-8287",
    user: "Emma Williams",
    email: "emmaw@gmail.com",
    amount: "$450.00",
    status: "Completed",
    date: "Oct 12, 11:30 AM",
  },
]

export const TOP_USERS = [
  { name: "Moshiour Rahman", role: "CEO", revenue: "$4,500" },
  { name: "John Doe", role: "Developer", revenue: "$2,100" },
  { name: "Sarah Smith", role: "Designer", revenue: "$1,850" },
  { name: "Alex Johnson", role: "Marketing", revenue: "$950" },
]

export const NOTIFICATIONS = [
  {
    id: 1,
    type: "alert",
    icon: ShieldAlert,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    title: "Security Alert",
    message: "Unusual login detected from IP 192.168.1.42",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "user",
    icon: UserPlus,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    title: "New User Registered",
    message: "Sarah Connor just signed up for a Pro account",
    time: "14 min ago",
    unread: true,
  },
  {
    id: 3,
    type: "payment",
    icon: CreditCard,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    title: "Payment Received",
    message: "Invoice #1042 for $249.00 was paid successfully",
    time: "1 hr ago",
    unread: true,
  },
  {
    id: 4,
    type: "review",
    icon: Star,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    title: "New 5-Star Review",
    message: "James K. left a review: \"Absolutely love this!\"",
    time: "3 hr ago",
    unread: false,
  },
  {
    id: 5,
    type: "system",
    icon: CheckCheck,
    iconColor: "text-zinc-400",
    iconBg: "bg-zinc-500/10",
    title: "Backup Completed",
    message: "Scheduled database backup finished successfully",
    time: "6 hr ago",
    unread: false,
  },
]

export const STATS = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    trend: "+20.1%",
    isPositive: true,
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "+2350",
    trend: "+180.1%",
    isPositive: true,
    icon: Users,
  },
  {
    title: "Sales",
    value: "+12,234",
    trend: "+19%",
    isPositive: true,
    icon: CreditCard,
  },
  {
    title: "Active Now",
    value: "+573",
    trend: "-201",
    isPositive: false,
    icon: Activity,
  },
]

export const USERS_TABLE_DATA = [
  { id: "#USR-001", name: "Ummey Habiba Pinky", email: "pinky@synthex.io", role: "Admin", status: "Active", joined: "Jan 12, 2025", revenue: "$4,500" },
  { id: "#USR-002", name: "John Doe", email: "john@acme.com", role: "Developer", status: "Active", joined: "Feb 3, 2025", revenue: "$2,100" },
  { id: "#USR-003", name: "Sarah Smith", email: "sarah@design.co", role: "Designer", status: "Pending", joined: "Mar 18, 2025", revenue: "$1,850" },
  { id: "#USR-004", name: "Alex Johnson", email: "alex@startup.io", role: "Manager", status: "Active", joined: "Apr 1, 2025", revenue: "$3,200" },
  { id: "#USR-005", name: "Emma Williams", email: "emma@gmail.com", role: "Developer", status: "Inactive", joined: "Apr 10, 2025", revenue: "$980" },
  { id: "#USR-006", name: "Carlos Rivera", email: "carlos@corp.com", role: "Manager", status: "Active", joined: "May 5, 2025", revenue: "$5,100" },
  { id: "#USR-007", name: "Aisha Patel", email: "aisha@venture.io", role: "Designer", status: "Pending", joined: "Jun 22, 2025", revenue: "$760" },
]

export const SIMPLE_REPORTS_DATA = [
  { month: "January", revenue: "$12,000", orders: 142, growth: "+12%", positive: true },
  { month: "February", revenue: "$18,500", orders: 198, growth: "+54%", positive: true },
  { month: "March", revenue: "$15,200", orders: 165, growth: "-18%", positive: false },
  { month: "April", revenue: "$22,800", orders: 241, growth: "+50%", positive: true },
]

export const MONTHLY_DATA = [
  { name: "Jan", revenue: 4000, users: 240 },
  { name: "Feb", revenue: 3000, users: 139 },
  { name: "Mar", revenue: 5000, users: 380 },
  { name: "Apr", revenue: 4780, users: 390 },
  { name: "May", revenue: 5890, users: 480 },
  { name: "Jun", revenue: 4390, users: 380 },
  { name: "Jul", revenue: 6490, users: 430 },
  { name: "Aug", revenue: 7000, users: 510 },
]

export const PIE_DATA = [
  { name: "Direct", value: 400 },
  { name: "Social", value: 300 },
  { name: "Referral", value: 200 },
  { name: "Organic", value: 100 },
]

export const RADAR_DATA = [
  { subject: "Marketing", A: 120, B: 110 },
  { subject: "Sales", A: 98, B: 130 },
  { subject: "Dev", A: 86, B: 130 },
  { subject: "Support", A: 99, B: 100 },
  { subject: "Design", A: 85, B: 90 },
]
