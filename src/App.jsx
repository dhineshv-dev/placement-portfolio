import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Skills, Projects, Education, Contact } from './components/Sections';
export default function App(){useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));return()=>observer.disconnect()},[]);return <><Navbar/><main><Hero/><About/><Skills/><Projects/><Education/><Contact/></main><footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Dhinesh V · Crafted with React & Tailwind CSS</footer></>}
