import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const links = ['About', 'Skills', 'Projects', 'Education', 'Contact'];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl"><nav className="container-width flex h-20 items-center justify-between"><a href="#home" className="text-xl font-black tracking-tight text-white">DV<span className="text-violet">.</span></a><div className="hidden items-center gap-8 md:flex">{links.map(x => <a key={x} className="nav-link" href={`#${x.toLowerCase()}`}>{x}</a>)}<a href="/resume.pdf" download className="btn-outline text-sm">Resume ↓</a></div><button className="md:hidden text-white" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></nav>{open && <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden">{links.map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setOpen(false)} className="nav-link">{x}</a>)}<a href="/resume.pdf" download className="nav-link">Download Resume</a></div>}</header>;
}
