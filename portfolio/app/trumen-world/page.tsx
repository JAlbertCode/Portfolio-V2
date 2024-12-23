'use client';

import React from 'react';
import Link from 'next/link';
import YouTubeEmbed from '../../components/youtube-embed';
import ProjectCover from '../../components/project-cover';

const TrumenWorldPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <div className="mx-10 max-w-6xl">
        <ProjectCover
          title="Trumen World"
          description="Analysis of Trumen World, an innovative AR geolocation game that combines real-world exploration with NFT collection and blockchain technology."
          date="October 2024"
          skills={[
            'Blockchain Gaming',
            'Augmented Reality',
            'Game Development',
            'Web3',
            'NFTs',
            'Analysis',
            'Research',
            'Geolocation',
          ]}
        />

        <section>
          <h2>Stream Overview</h2>
          <div className="aspect-video w-full">
            <YouTubeEmbed videoId="Y9EHHzF6Rzw" />
          </div>
        </section>

        <section>
          <h2>Game Concept</h2>
          <p>Trumen World represents an evolution in AR geolocation gaming, building on the success of games like Pokémon GO while introducing blockchain technology and NFTs. This innovative approach creates new possibilities for both players and businesses:</p>

          <h3>Key Features</h3>
          <ul>
            <li>Geolocation-based gameplay that encourages real-world exploration</li>
            <li>NFT integration allowing players to truly own their collected assets</li>
            <li>Ability to place and discover digital art and assets in real-world locations</li>
            <li>Potential for location-based partnerships and business integrations</li>
          </ul>
        </section>

        <section>
          <h2>Technological Innovation</h2>
          <p>Trumen World combines several cutting-edge technologies to create a unique gaming experience:</p>
          <ul>
            <li>Advanced AR technology for immersive real-world gameplay</li>
            <li>Blockchain integration for asset ownership and trading</li>
            <li>Geolocation services for precise real-world mapping</li>
            <li>Smart contracts for managing digital asset interactions</li>
          </ul>
        </section>

        <section>
          <h2>Business Impact</h2>
          <p>The platform offers several unique opportunities for businesses and communities:</p>
          <ul>
            <li>Drive foot traffic to specific physical locations</li>
            <li>Create location-based digital experiences</li>
            <li>Enable businesses to participate in the digital economy</li>
            <li>Foster community engagement through shared digital experiences</li>
          </ul>
        </section>

        <section>
          <h2>Web3 Gaming Evolution</h2>
          <p>Trumen World demonstrates how blockchain technology can enhance traditional gaming experiences:</p>
          <ul>
            <li>True ownership of in-game assets through NFTs</li>
            <li>Decentralized marketplace for trading collected items</li>
            <li>Community-driven content creation and curation</li>
            <li>Innovative monetization models for creators and players</li>
          </ul>
        </section>

        <section>
          <h2>Future Potential</h2>
          <p>The platform shows significant potential for future development:</p>
          <ul>
            <li>Integration with other Web3 gaming ecosystems</li>
            <li>Expansion of AR capabilities and interactions</li>
            <li>Development of new location-based gameplay mechanics</li>
            <li>Creation of collaborative community experiences</li>
          </ul>
        </section>

        <section className="mb-20">
          <h2>Impact on Gaming Industry</h2>
          <p>Trumen World represents a significant step forward in demonstrating how Web3 technology can enhance and transform traditional gaming experiences, particularly in the AR and location-based gaming space. By successfully combining blockchain technology with proven gameplay mechanics, it shows that Web3 games can offer unique and engaging experiences beyond simple card games or basic mechanics.</p>
        </section>
      </div>
    </main>
  );
};

export default TrumenWorldPage;