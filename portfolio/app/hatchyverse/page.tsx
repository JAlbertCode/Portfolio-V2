'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import YouTubeEmbed from '../../components/youtube-embed';
import ProjectCover from '../../components/project-cover';

const HatchyversePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <div className="mx-10 max-w-6xl">
        <ProjectCover
          title="Hatchyverse"
          description="A thought-provoking analysis of Hatchyverse, a decentralized IP ecosystem where community members can build games using shared assets."
          date="October 2024"
          skills={[
            'Blockchain Gaming',
            'Game Development',
            'Web3',
            'Content Creation',
            'Analysis',
            'Research',
            'DAO',
            'NFTs',
          ]}
        />

        <section>
          <h2>Stream Overview</h2>
          <div className="aspect-video w-full">
            <YouTubeEmbed videoId="QNr3moS0B3o" />
          </div>
        </section>

        <section>
          <h2>Key Features</h2>
          <p>Hatchyverse represents an innovative approach to game development and IP management through decentralization. The platform introduces several groundbreaking concepts:</p>
          
          <h3>Decentralized IP</h3>
          <p>At its core, Hatchyverse is pioneering the concept of decentralized intellectual property. The IP is owned by a DAO (Decentralized Autonomous Organization), allowing community members to utilize the assets for creating their own games and experiences. This approach democratizes game development and fosters a collaborative creative ecosystem.</p>

          <h3>$HATCHY Token</h3>
          <p>The ecosystem is powered by the $HATCHY token, which serves multiple purposes:</p>
          <ul>
            <li>Collecting unique Hatchies NFTs</li>
            <li>Staking for rewards</li>
            <li>Enhancing gaming experiences</li>
            <li>Participating in ecosystem governance</li>
          </ul>

          <h3>Game Portfolio</h3>
          <p>The Hatchyverse ecosystem features three distinct games showcasing the versatility of the platform:</p>
          <ul>
            <li><strong>Hatchy Rumble:</strong> A strategic grid-based battle game</li>
            <li><strong>Hatchy Rampage:</strong> A roguelite survival RPG with bullet-hell mechanics, available on Android</li>
            <li><strong>Hatchy Arcania:</strong> A multiplayer online battler focusing on skill-based combat and strategic spell usage, available for Windows 10</li>
          </ul>
        </section>

        <section>
          <h2>Community Governance</h2>
          <p>The platform utilizes Snapshot for decentralized decision-making, allowing token holders to participate in crucial ecosystem decisions. Community members can vote on various proposals affecting the development and direction of the Hatchyverse ecosystem.</p>
          
          <p>View governance proposals at: <Link href="https://snapshot.org/#/hatchypocket.eth" target="_blank" className="text-blue-500 hover:text-blue-700">snapshot.org/#/hatchypocket.eth</Link></p>
        </section>

        <section>
          <h2>Development Team</h2>
          <p>The Hatchyverse team consists of experienced game developers with decades of industry experience. They understand the challenges of game development, including:</p>
          <ul>
            <li>Content creation at scale</li>
            <li>Marketing in a competitive global market</li>
            <li>Resource allocation and management</li>
            <li>Community building and engagement</li>
          </ul>
        </section>

        <section>
          <h2>Vision and Impact</h2>
          <p>Hatchyverse aims to revolutionize game development by:</p>
          <ul>
            <li>Reducing initial production costs</li>
            <li>Providing easy access to resources</li>
            <li>Building a supportive community</li>
            <li>Enabling collaborative development</li>
            <li>Creating new opportunities for independent developers</li>
          </ul>
          
          <p>This innovative approach could potentially reshape how games are created and monetized in the future, opening new possibilities for both developers and players.</p>
        </section>

        <section className="mb-20">
          <h2>Resources</h2>
          <p>For more information about Hatchyverse, visit their official website: <Link href="https://hatchyverse.com" target="_blank" className="text-blue-500 hover:text-blue-700">hatchyverse.com</Link></p>
        </section>
      </div>
    </main>
  );
};

export default HatchyversePage;