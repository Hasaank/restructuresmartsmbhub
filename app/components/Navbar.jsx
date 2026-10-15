"use client";
import {useState,useEffect} from "react";
import {getStoredAuthToken,clearStoredAuthSession} from "@/authservice/AuthService";
export default function Navbar({openModal}) {
 const [open,setOpen]=useState(false); const [logged,setLogged]=useState(false);
 useEffect(()=>{const sync=()=>setLogged(Boolean(getStoredAuthToken()));sync();window.addEventListener('auth-state-changed',sync);window.addEventListener('storage',sync);return()=>{window.removeEventListener('auth-state-changed',sync);window.removeEventListener('storage',sync);};},[]);
 useEffect(()=>{if(!open)return;const esc=e=>{if(e.key==='Escape'){setOpen(false);document.getElementById('menu-toggle')?.focus();}};window.addEventListener('keydown',esc);return()=>window.removeEventListener('keydown',esc);},[open]);
 return <header className="hub-header"><nav className="hub-nav hub-container" aria-label="Main navigation">
 <a className="hub-brand" href="/" aria-label="SmartSMBHub home"><span className="hub-mark" aria-hidden="true">S</span>SmartSMB<span>Hub</span></a>
 <button id="menu-toggle" className="hub-menu-toggle" aria-expanded={open} aria-controls="hub-menu" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button>
 <div id="hub-menu" className={`hub-menu ${open?'is-open':''}`} onClick={e=>{if(e.target.closest('a'))setOpen(false);}}>
 <a href="/#features">AI services</a><a href="/products">Digital products</a><a href="/#pricing">Pricing</a><a href="/resources/missed-call-follow-up">Resources</a>
 {logged?<><a href="/dashboard">Dashboard</a><button className="hub-text-button" onClick={()=>{clearStoredAuthSession();setLogged(false);setOpen(false);window.dispatchEvent(new CustomEvent('auth-state-changed'));}}>Sign out</button></>:<button className="hub-text-button" onClick={()=>{setOpen(false);openModal('login');}}>Sign in</button>}
 <a className="hub-button hub-button-small" href="/contact">Get a free AI audit <span aria-hidden="true">↗</span></a>
 </div></nav></header>;
}
