import { type Goal, type Category } from "../interfaces/GoalsComponents.interface";
import { type GoalsData } from "../interfaces/Goals.interface";

export const goalsData: GoalsData = {
  stats: {
    annualTarget: 85,
    completedGoals: 12,
    totalGoals: 15,
    pendingGoals: 3,
  },
  monthlyProgress: [
    { month: "Jan", percentage: 45 },
    { month: "Feb", percentage: 50 },
    { month: "Mar", percentage: 58 },
    { month: "Apr", percentage: 55 },
    { month: "May", percentage: 68 },
    { month: "Jun", percentage: 72 },
    { month: "Jul", percentage: 78 },
    { month: "Aug", percentage: 75 },
    { month: "Sep", percentage: 82 },
    { month: "Oct", percentage: 88 },
    { month: "Nov", percentage: 85 },
    { month: "Dec", percentage: 92 },
  ],
};

export const completedGoals: Goal[] = [
  { title: "Complete React Certification", date: "2024-03-15", badge: "Frontend" },
  { title: "Java Spring Boot Course", date: "2024-02-28", badge: "Backend" },
  { title: "Complete LMS Application", date: "2024-03-10", badge: "Project" },
  { title: "RRF Project Management", date: "2024-01-20", badge: "Project" },
  { title: "Node.js API Development", date: "2024-03-25", badge: "Backend" }
];

export const pendingGoals: Goal[] = [
  { title: "Complete Angular Certification", date: "2024-04-30", badge: "High", status: "In Progress" },
  { title: "Build E-commerce Platform", date: "2024-06-15", badge: "Medium", status: "Planning" },
  { title: "Learn Docker & Kubernetes", date: "2024-05-20", badge: "High", status: "In Progress" }
];

export const categoryBreakdown: Category[] = [
  { name: "Frontend Development", total: 8, completed: 5, pending: 3, percentage: 62 },
  { name: "Backend Development", total: 6, completed: 4, pending: 2, percentage: 67 },
  { name: "Project Management", total: 4, completed: 3, pending: 1, percentage: 75 },
  { name: "DevOps & Tools", total: 3, completed: 2, pending: 1, percentage: 67 },
  { name: "Database Management", total: 2, completed: 1, pending: 1, percentage: 50 }
];