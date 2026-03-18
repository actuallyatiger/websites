export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  projectUrl?: string;
  isWIP?: boolean;
};

export const projects: Project[] = [
  {
    title: "KeySafe",
    description: "Password manager built with AES-encryption, Argon2 hashing, and a serverless architecture.",
    technologies: ["Next.js", "Flask", "Google Cloud"],
    githubUrl: "https://github.com/actuallyatiger/keysafe",
    projectUrl: "https://keysafe.tigertaylor.xyz",
  },
  {
    title: "Beat Bot",
    description: "Discord music bot with YouTube integration, slash commands, and a custom queue interface.",
    technologies: ["Discord.js", "YouTube API", "Google Cloud"],
    githubUrl: "https://github.com/actuallyatiger/discord-beat-bot",
  },
  {
    title: "Rebar VCS",
    description: "Git-like version control in Rust with updated hashing algorithms and compression optimisations.",
    technologies: ["Rust"],
    githubUrl: "https://github.com/actuallyatiger/rebar",
    isWIP: true,
  },
];
