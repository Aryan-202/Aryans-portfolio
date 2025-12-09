import { icons } from "@/assets/assets.ts";

export interface Skill {
  name: string;
  icon: string;
  category:
    | "languages"
    | "frameworks"
    | "libraries"
    | "softwares"
    | "tools"
    | "exploring";
}

export const skills: Skill[] = [
  // Languages
  { name: "Julia", icon: icons.julia, category: "languages" },
  { name: "Lua", icon: icons.lua, category: "languages" },
  { name: "Rust", icon: icons.rust, category: "languages" },
  { name: "Go", icon: icons.go, category: "languages" },
  { name: "Python", icon: icons.python, category: "languages" },
  { name: "Kotlin", icon: icons.kotlin, category: "languages" },
  { name: "TypeScript", icon: icons.typescript, category: "languages" },
  { name: "R", icon: icons.r, category: "languages" },
  { name: "Dart", icon: icons.dart, category: "languages" },
  { name: "Vyper", icon: icons.vyper, category: "languages" },
  { name: "Java", icon: icons.java, category: "languages" },
  { name: "CSharp", icon: icons.csharp, category: "languages" },

  // Frameworks
  { name: "Tauri", icon: icons.tauri, category: "frameworks" },
  { name: "SvelteKit", icon: icons.sveltekit, category: "frameworks" },
  { name: "Qwik", icon: icons.qwik, category: "frameworks" },
  { name: "SolidJs", icon: icons.solidjs, category: "frameworks" },
  { name: "Laravel", icon: icons.laravel, category: "frameworks" },
  { name: "Next.js", icon: icons.nextjs, category: "frameworks" },
  { name: "Flutter", icon: icons.flutter, category: "frameworks" },
  { name: "UnoCSS", icon: icons.unocss, category: "frameworks" },
  { name: "Flask", icon: icons.flask, category: "frameworks" },
  { name: "Django", icon: icons.django, category: "frameworks" },
  { name: "FastAPI", icon: icons.fastapi, category: "frameworks" },
  { name: "PyScript", icon: icons.pyscript, category: "frameworks" },

  // Libraries
  { name: "PyTorch", icon: icons.pytorch, category: "libraries" },
  { name: "TensorFlow", icon: icons.tensorflow, category: "libraries" },
  { name: "Scikit-learn", icon: icons.scikitlearn, category: "libraries" },
  { name: "SQLAlchemy", icon: icons.sqlalchemy, category: "libraries" },
  { name: "OpenCV", icon: icons.opencv, category: "libraries" },
  { name: "Pandas", icon: icons.pandas, category: "libraries" },
  { name: "NumPy", icon: icons.numpy, category: "libraries" },
  { name: "Matplotlib", icon: icons.matplotlib, category: "libraries" },
  { name: "NetworkX", icon: icons.networkx, category: "libraries" },
  { name: "PostgresSQL", icon: icons.postgresql, category: "libraries" },
  { name: "MongoDB", icon: icons.mongodb, category: "libraries" },
  { name: "Express", icon: icons.express, category: "libraries" },

  // Softwares
  { name: "Jupyter", icon: icons.jupyter, category: "softwares" },
  { name: "Anaconda", icon: icons.anaconda, category: "softwares" },
  { name: "MATLAB", icon: icons.matlab, category: "softwares" },
  { name: "PyCharm", icon: icons.pytcharm, category: "softwares" },
  { name: "Eclipse", icon: icons.eclipse, category: "softwares" },
  { name: "Blender", icon: icons.blender, category: "softwares" },
  { name: "Android Studio", icon: icons.androidstudio, category: "softwares" },
  { name: "Unreal Engine", icon: icons.unrealengine, category: "softwares" },
  { name: "Figma", icon: icons.figma, category: "softwares" },
  { name: "vs code", icon: icons.vscode, category: "softwares" },
  { name: "Postman", icon: icons.postman, category: "softwares" },
  { name: "Arduino", icon: icons.arduino, category: "softwares" },

  // Tools
  { name: "Poetry", icon: icons.pythonpoetry, category: "tools" },
  { name: "GitHub", icon: icons.github, category: "tools" },
  { name: "NPM", icon: icons.npm, category: "tools" },
  { name: "Docker", icon: icons.docker, category: "tools" },
  { name: "Yarn", icon: icons.yarn, category: "tools" },
  { name: "Bun", icon: icons.bun, category: "tools" },
  { name: "Firebase", icon: icons.firebase, category: "tools" },
  { name: "Azure", icon: icons.azure, category: "tools" },
  { name: "Google Cloud", icon: icons.googlecloud, category: "tools" },
  { name: "ChatGPT", icon: icons.chatgpt, category: "tools" },
  { name: "Copilot", icon: icons.copilot, category: "tools" },
  { name: "Claude", icon: icons.claude, category: "tools" },

  // exploring
  { name: "Astro", icon: icons.astro, category: "exploring" },
  { name: "AWS", icon: icons.aws, category: "exploring" },
  { name: "CouchDB", icon: icons.couchdb, category: "exploring" },
  { name: "Nest.js", icon: icons.nestjs, category: "exploring" },
  { name: "New4j", icon: icons.new4j, category: "exploring" },
  { name: "NixOS", icon: icons.nixos, category: "exploring" },
  { name: "Phoenix Framework", icon: icons.phoenixframework, category: "exploring" },
  { name: "Three.js", icon: icons.threejs, category: "exploring" },
  { name: "Web Assembly", icon: icons.webassembly, category: "exploring" },
  { name: "Zig", icon: icons.zig, category: "exploring" },
  { name: "Solidity", icon: icons.solidity, category: "exploring" },
  { name: "Liquibase", icon: icons.liquibase, category: "exploring" },
];



