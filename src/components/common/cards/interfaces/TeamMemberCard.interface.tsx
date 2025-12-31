import { type TeamMember } from "../../../../pages/my-team/interfaces/MyTeam.interface";

export interface TeamMemberCardProps {
  member: TeamMember;
  delay?: number;
  onEmail: (email: string) => void;
  onProfile: (id: string) => void;
}