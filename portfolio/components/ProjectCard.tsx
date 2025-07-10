import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardMedia, Typography } from "../lib/mui";
import { Project } from '../lib/types';

interface ProjectCardProps {
  project: Project;
}

// Helper function to estimate maximum skills that fit in 3 lines
const getMaxSkillsForThreeLines = (skills: string[]): number => {
  // Aggressive line filling - maximize skills within 3 lines
  // Card content width: 325px (357px - 32px padding)
  
  const availableWidth = 325;
  const baseCharWidth = 7.8; // Back to previous working value
  const skillPadding = 7; // Back to previous working value
  const skillMargin = 3; // Back to previous working value
  
  // Track each line separately
  const lineWidths = [0, 0, 0];
  let skillCount = 0;
  
  for (let i = 0; i < skills.length; i++) {
    const skill = skills[i];
    const estimatedWidth = Math.ceil(skill.length * baseCharWidth) + skillPadding;
    
    let placed = false;
    
    // Try to place on existing lines, preferring earlier lines
    for (let lineIndex = 0; lineIndex < 3; lineIndex++) {
      const marginWidth = lineWidths[lineIndex] > 0 ? skillMargin : 0;
      const neededWidth = lineWidths[lineIndex] + marginWidth + estimatedWidth;
      
      // For the third line, only reserve minimal space for +X if we're at the very end
      let availableForThisLine = availableWidth;
      if (lineIndex === 2 && i === skills.length - 2) {
        // Only reserve space for +X when placing the second-to-last skill
        availableForThisLine = availableWidth - 22; // Minimal +X space
      }
      
      if (neededWidth <= availableForThisLine) {
        lineWidths[lineIndex] += marginWidth + estimatedWidth;
        skillCount++;
        placed = true;
        break;
      }
    }
    
    if (!placed) {
      // Skill doesn't fit in any of the 3 lines
      break;
    }
  }
  
  return skillCount;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col project-card'>
      <Link href={project.link} className="linked-image" {...(project.target && { target: project.target, rel: 'noopener noreferrer' })}>
        {project.image.endsWith('.mp4') ? (
          <div className="video-container">
            <video autoPlay loop muted playsInline className="card-video">
              <source src={project.image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <CardMedia component="img" image={project.image} alt={project.imageAlt}/>
        )}
      </Link>
      <CardContent>
        <Typography variant='h6'>
          {project.title}
        </Typography>
        <Typography>
          {project.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.date}
        </Typography>
        <div className='gap-1 flex flex-wrap mt-1'>
          {project.skills.slice(0, getMaxSkillsForThreeLines(project.skills)).map((skill) => (
            <Typography key={skill} variant='body2' className='skills'>
              {skill}
            </Typography>
          ))}
          {project.skills.length > getMaxSkillsForThreeLines(project.skills) && (
            <Typography variant='body2' className='skills skills-overflow'>
              +{project.skills.length - getMaxSkillsForThreeLines(project.skills)}
            </Typography>
          )}
        </div>
      </CardContent>
      <Link href={project.link} className='mt-auto' {...(project.target && { target: project.target, rel: 'noopener noreferrer' })}>
        <Typography className='view-project'>View Project</Typography>
      </Link>
    </Card>
  );
};

export default ProjectCard;