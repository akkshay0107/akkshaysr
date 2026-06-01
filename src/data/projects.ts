import type { ImageMetadata } from "astro";
import p0Image from "../assets/projects/p0.png";
import siftImage from "../assets/projects/sift.png";
import glimpseImage from "../assets/projects/glimpse.png";
import tvcLanderImage from "../assets/projects/tvc-lander.png";

export interface Project {
  title: string;
  description: string;
  image: ImageMetadata;
  alt: string;
  tags: string[];
  tools: string[];
  bio?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "P0",
    description: "Self play RL engine for Pokemon VGC",
    image: p0Image,
    alt: "P0",
    tags: ["RL", "SLM"],
    tools: ["PyTorch", "GCP", "Docker"],
    bio: "",
    github: "https://github.com/akkshay0107/p0",
  },
  {
    title: "Sift",
    description: "Multimodal semantic file search tool",
    image: siftImage,
    alt: "Sift",
    tags: ["RAG", "VLM"],
    tools: ["HuggingFace", "Qdrant", "SLURM", "PyTorch"],
    bio: "Sift is a multimodal search tool that enables semantic discovery across local files. By leveraging advanced embeddings, it allows users to search through images, documents, and code using natural language, making file organization and retrieval effortless. It runs locally, ensuring privacy while providing a powerful interface for managing personal data.",
    github: "https://github.com/akkshay0107/sift",
  },
  {
    title: "Glimpse",
    description: "AI powered newsletter automation platform",
    image: glimpseImage,
    alt: "Glimpse",
    tags: ["AI", "SaaS"],
    tools: ["LangChain", "Celery", "Redis", "Next.js", "Supabase", "Gemini"],
    bio: "Glimpse automates the creation and distribution of AI-curated newsletters. It processes vast amounts of information to identify high-signal content, summarizing it into beautiful, readable formats for subscribers. The platform streamlines the editorial workflow, allowing creators to focus on high-level curation while AI handles the heavy lifting.",
    github: "https://github.com/sanjayriram44/glimpse",
  },
  {
    title: "TVC Lander",
    description: "Rust based RL controller for rocket landing",
    image: tvcLanderImage,
    alt: "TVC lander",
    tags: ["Rust", "RL"],
    tools: ["Rayon", "ONNX", "PyO3", "PyTorch", "WASM"],
    bio: "A neural network based controller for landing rockets smoothly. The rocket is controlled using thrust vector controls (TVC) with continuous outputs for thrust and gimbal angles. I also built an efficient, parallelized physics sim environment using rayon and SIMD. PyO3 is used to build FFI bindings to expose the Rust environment to Python with a gym style API. The model is then trained using PPO using curriculum training to speed up convergence. The model is exported and optimized for inference in ONNX for inference on the web using WASM through Rust.",
    github: "https://github.com/akkshay0107/tvc-lander",
    demo: "https://akkshay0107.github.io/tvc-lander/",
  },
];
