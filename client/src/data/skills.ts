import { icons } from '@/assets/assets.ts';

export interface Skill {
  name: string;
  icon: string;
  category: 'languages' | 'frameworks' | 'libraries' | 'softwares' | 'tools' | 'exploring';
}

export const skills: Skill[] = [
  // Languages
  { name: 'Julia', icon: icons.julia, category: 'languages' },
  { name: 'Rust', icon: icons.rust, category: 'languages' },
  { name: 'Go', icon: icons.go, category: 'languages' },
  { name: 'Python', icon: icons.python, category: 'languages' },
  { name: 'Kotlin', icon: icons.kotlin, category: 'languages' },
  { name: 'TypeScript', icon: icons.typescript, category: 'languages' },
  { name: 'R', icon: icons.r, category: 'languages' },
  { name: 'Dart', icon: icons.dart, category: 'languages' },
  { name: 'Vyper', icon: icons.vyper, category: 'languages' },

  // Frameworks
  { name: 'Tauri', icon: icons.tauri, category: 'frameworks' },
  { name: 'SvelteKit', icon: icons.sveltekit, category: 'frameworks' },
  { name: 'Qwik', icon: icons.qwik, category: 'frameworks' },
  { name: 'SolidJs', icon: icons.solidjs, category: 'frameworks' },
  { name: 'Laravel', icon: icons.laravel, category: 'frameworks' },
  { name: 'Next.js', icon: icons.nextjs, category: 'frameworks' },
  { name: 'Flutter', icon: icons.flutter, category: 'frameworks' },
  { name: 'UnoCSS', icon: icons.unocss, category: 'frameworks' },
  { name: 'Flask', icon: icons.flask, category: 'frameworks' },
  { name: 'Django', icon: icons.django, category: 'frameworks' },
  { name: 'FastAPI', icon: icons.fastapi, category: 'frameworks' },
  { name: 'PyScript', icon: icons.pyscript, category: 'frameworks' },

  // Libraries
  { name: 'PyTorch', icon: icons.pytorch, category: 'libraries' },
  { name: 'TensorFlow', icon: icons.tensorflow, category: 'libraries' },
  { name: 'Scikit-learn', icon: icons.scikitlearn, category: 'libraries' },
  { name: 'SQLAlchemy', icon: icons.sqlalchemy, category: 'libraries' },
  { name: 'OpenCV', icon: icons.opencv, category: 'libraries' },
  { name: 'Pandas', icon: icons.pandas, category: 'libraries' },
  { name: 'NumPy', icon: icons.numpy, category: 'libraries' },
  { name: 'Matplotlib', icon: icons.matplotlib, category: 'libraries' },
  { name: 'NetworkX', icon: icons.networkx, category: 'libraries' },

  // Softwares
  { name: 'Jupyter', icon: icons.jupyter, category: 'softwares' },
  { name: 'Anaconda', icon: icons.anaconda, category: 'softwares' },
  { name: 'MATLAB', icon: icons.matlab, category: 'softwares' },
  { name: 'PyCharm', icon: icons.pytcharm, category: 'softwares' },

  // Tools
  { name: 'Poetry', icon: icons.pythonpoetry, category: 'tools' },
];