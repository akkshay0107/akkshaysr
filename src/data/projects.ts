import type { ImageMetadata } from 'astro';
import p0Image from '../assets/projects/p0.png';
import siftImage from '../assets/projects/sift.png';
import glimpseImage from '../assets/projects/glimpse.png';
import tvcLanderImage from '../assets/projects/tvc-lander.png';

export interface Project {
  title: string;
  description: string;
  image: ImageMetadata;
  alt: string;
  bio?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "P0",
    description: "A pure reinforcement learning engine for Pokemon VGC",
    image: p0Image,
    alt: "P0",
    bio: "P0 is a high-performance reinforcement learning engine designed specifically for Pokemon VGC. It implements state-of-the-art RL algorithms to model complex decision-making in competitive environments, providing a framework for training and evaluating agents at scale. Built with a focus on speed and accuracy, P0 enables deep exploration of meta-game strategies and tactical positioning.",
    github: "https://github.com/akkshay0107/p0"
  },
  {
    title: "Sift",
    description: "Multimodal semantic file search tool",
    image: siftImage,
    alt: "Sift",
    bio: "Sift is a multimodal search tool that enables semantic discovery across local files. By leveraging advanced embeddings, it allows users to search through images, documents, and code using natural language, making file organization and retrieval effortless. It runs locally, ensuring privacy while providing a powerful interface for managing personal data.",
    github: "https://github.com/akkshay0107/sift"
  },
  {
    title: "Glimpse",
    description: "AI powered newsletter automation platform",
    image: glimpseImage,
    alt: "Glimpse",
    bio: "Glimpse automates the creation and distribution of AI-curated newsletters. It processes vast amounts of information to identify high-signal content, summarizing it into beautiful, readable formats for subscribers. The platform streamlines the editorial workflow, allowing creators to focus on high-level curation while AI handles the heavy lifting.",
    github: "https://github.com/sanjayriram44/glimpse"
  },
  {
    title: "TVC Lander",
    description: "Rust based RL controller for rocket landing",
    image: tvcLanderImage,
    alt: "TVC lander",
    bio: "A thrust vector control (TVC) simulation and controller implemented in Rust. It utilizes reinforcement learning to stabilize and land model rockets, demonstrating the power of systems programming in real-time control applications. The project includes a high-fidelity physics simulation environment for training agents to handle various atmospheric conditions and landing scenarios.",
    github: "https://github.com/akkshay0107/tvc-lander",
    demo: "https://akkshay0107.github.io/tvc-lander/"
  }
];

