import React from "react";
import PropTypes from "prop-types";
import { Card, CardMedia } from "../lib/mui";

const ProjectCover = ({ coverImage, alt }) => (
    <Card sx={{borderRadius: 3}}>
        <CardMedia component="img" image={`/images/${coverImage}`} alt={`${alt}`}></CardMedia>
    </Card>
);

ProjectCover.propTypes = {
  coverImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ProjectCover;