import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardMedia, Typography } from "../lib/mui";
import { Project } from '../lib/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card sx={{width: 357, borderRadius: 3, boxShadow: 5}} className='flex flex-col project-card'>
      <Link href={project.link}>
        <CardMedia component="img" image={project.image} alt={project.imageAlt}/>
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
          {project.skills.map((skill) => (
            <Typography key={skill} variant='body2' className='skills'>
              {skill}
            </Typography>
          ))}
        </div>
      </CardContent>
      <Link href={project.link} className='mt-auto'>
        <Typography className='view-project'>View Project</Typography>
      </Link>
    </Card>
  );
};

export default ProjectCard;