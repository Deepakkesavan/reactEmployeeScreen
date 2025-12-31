import { motion } from "motion/react";
import { Target } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { FormField } from "./shared/FormField";
import { type SkillsSectionProps } from './interfaces/SkillsSection.interface';

function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <SectionWrapper
      title="Skill Set"
      icon={Target}
    >
      <div className="space-y-4">
        {data?.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-base-300 rounded-lg bg-base-50"
          >
            <FormField
              label="Skill Name"
              value={skill.skillName}
              disabled
              onChange={() => {}}
            />
            <FormField
              label="Proficiency Level"
              value={skill.proficiencyLevel}
              disabled
              onChange={() => {}}
            />
            <FormField
              label="Years of Experience"
              type="number"
              value={skill.yearsOfExperience}
              disabled
              onChange={() => {}}
            />
          </motion.div>
        ))}
        {(!data || data.length === 0) && (
          <div className="text-center py-8 text-base-content/50">
            <p>No skills information available.</p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

export default SkillsSection;