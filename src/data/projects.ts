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
    tools: ["PyTorch", "poke-env", "GCP", "Docker"],
    bio: "An attempt at making a RL agent that can play Pokemon Champions (on a limited metagame) without using any human replays. The model is trained purely through heuristics and self play. In the process, I've built a custom model involving a tokenizer converting elements of a Pokemon battle into tokens, a SwiGLU based transformer layer, BERT style encoder only stack with CLS, recurrent memory tokens and an autoregressive policy head. The training loop follows a hybrid of league style training and self play, borrowing ideas from the AlphaStar, OpenAI Five and VGC-Bench paper. I've also spent time performance engineering - profiling with cProfile, layer fusion, pinned memory, subproc based async parallel envs to boost throughput in training. More to come.",
    github: "https://github.com/akkshay0107/p0",
  },
  {
    title: "Sift",
    description: "Multimodal semantic file search tool",
    image: siftImage,
    alt: "Sift",
    tools: ["HuggingFace", "Qdrant", "SLURM", "Whisper", "PyTorch"],
    bio: "The idea behind this was to build a more powerful, multimodal, cross platform Spotlight. We use the Qwen3-VL embedding to embed the contents of files into a Qdrant vector database. A daemon (with watchdog) is spawned to index files in the background, incrementally syncing them on file changes. To add support for audio files, we trained an audio embedding model using constrative loss on an HPC cluster using SLURM and Pytorch. The model used a CLAP backbone with projection head to align with Qwen3 embeddings. Retrieval of files used a hybrid approach, mixing vector search, metadata matching and alternate paths (OCR for images and Whisper transcription for audio) to rank results in relevancy. Bonus: it runs entirely locally!",
    github: "https://github.com/akkshay0107/sift",
  },
  {
    title: "Glimpse",
    description: "AI powered newsletter automation platform",
    image: glimpseImage,
    alt: "Glimpse",
    tools: ["LangChain", "Celery", "Redis", "Next.js", "Supabase"],
    bio: "Glimpse was built to declutter the inbox by centralizing newsletter subscriptions into a single platform. The platform itself is built with Next.js, FastAPI and Supabase. A LangChain agent (with Gemini) is used to batch process emails, creating daily summaries and conversational scripts, which are fed to ElevenLabs to deliver newsletter content in a podcast style digest. To make the platform support a larger userbase, we use Celery for async processing and scheduling daily tasks, and Redis as a message broker. We also built a token monitoring pipeline to track LLM operational costs, and used S3 to cache expensive audio generation results.",
    github: "https://github.com/sanjayriram44/glimpse",
  },
  {
    title: "TVC Lander",
    description: "Rust based RL controller for rocket landing",
    image: tvcLanderImage,
    alt: "TVC lander",
    tools: ["rayon", "ONNX", "PyTorch", "WASM"],
    bio: "This project was built so that I could have a playground of sorts to test a bunch of continuous output RL ideas. The physics simulation is built in Rust with rapier-2d, using rayon to distribute computation across multiple threads (which allows for a vectorized environment running multiple sims in parallel). The physics sim is exposed to Python code by building FFI bindings for a gym style API using PyO3. The controller is built in Pytorch and uses curriculum learning and PPO to learn smoother landing trajectories. The model is exported and optimized for inference using ONNX. Using ONNX also allows for inference in Rust which is used in the web demo (by compiling to WASM).",
    github: "https://github.com/akkshay0107/tvc-lander",
    demo: "https://akkshay0107.github.io/tvc-lander/",
  },
];
