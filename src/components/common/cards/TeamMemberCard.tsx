import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { type TeamMemberCardProps } from './interfaces/TeamMemberCard.interface';
import ProfileImage from "@/components/common/cards/ProfileImage";


function TeamMemberCard({
  member,
  delay = 0,
  onEmail,
  onProfile,
}: TeamMemberCardProps) {
  return (
    <motion.div
      className="card bg-base-100 shadow-md border border-base-300 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <div className="card-body p-6 text-center">
        <div className="mb-4 flex justify-center">
          <ProfileImage
            empId={member.id}
            firstName={member.name || member.name?.split(' ')[0]}
            lastName={member.name || member.name?.split(' ')[1]}
            size="md"
            className="mx-auto"
          />
        </div>

        <h3 className="font-semibold text-base-content text-lg">
          {member.name}
        </h3>
        <p className="text-sm text-primary mb-4">{member.role}</p>

        <div className="flex gap-2 justify-center">
          <button
            className="btn btn-outline btn-sm flex-1"
            onClick={() => onEmail(member.email)}
          >
            <Mail size={16} />
            Email
          </button>
          <button
            className="btn btn-primary btn-sm flex-1"
            onClick={() => onProfile(member.id)}
          >
            Profile
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamMemberCard;