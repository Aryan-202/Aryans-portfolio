import { icons } from '@/assets/assets.ts'

export interface Skills {
  name: String;
  icon: String;
  category: 'languages' | 'frameworks' | 'libraries' | 'Softwares' | 'exploring';
}

export const skills: Skills[] = [
  //languages
  {name: 'Julia', icon: icons.julia , category: 'languages'},
  {name: 'Rust', icon: icons.rust, category: 'languages'},
  {name: 'Go', icon: icons.go, category: 'languages'},
  {name: 'Python', icon: icons.python, category: 'languages'},
  {name: 'Kotlin', icon: icons.kotlin, category: 'languages'},
  {name: 'Typescript', icon: icons.typescript, category: 'languages'},
  {name: 'R', icon: icons.r, category: 'languages'},


  // frameworks
  {name: 'Tauri', icon: icons.tauri, category: 'frameworks' },
  {name: 'SvelteKit', icon: icons.sveltekit, category: 'frameworks'},
  {name: 'Qwik', icon: icons.qwik, category: 'frameworks'},
  {name: 'SolidJs', icon: icons.solidjs, category: 'frameworks'},
  {name: 'Laravel', icon: icons.laravel, category: 'frameworks'},
  {name: '', icon: icons.nextjs, category: 'frameworks'},

]

