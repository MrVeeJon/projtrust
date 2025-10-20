import React from 'react';
import './hero.css'; // we'll style below via App.css

export default function Hero(){
  return (
    <section className="section hero">
      <div className="container grid grid-2" style={{alignItems:'center'}}>
        <div className="hero-text">
          <h1 className="h-title" style={{fontSize: '2.4rem', marginBottom:12}}>
            Transparency & Trust for Every Project — Anywhere.
          </h1>
          <p className="lead" style={{marginBottom:20}}>
            ProjTrust gives you verifiable, step-by-step visibility into the execution of your projects.
            Receipts, photos, milestone reports — all delivered to your secure dashboard.
          </p>

          <div style={{display:'flex', gap:12, alignItems:'center'}}>
            <button className="btn btn-primary" onClick={()=> document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>
              Start Your Project
            </button>
            <button className="btn btn-ghost" onClick={()=> document.getElementById('process').scrollIntoView({behavior:'smooth'})}>
              How It Works
            </button>
          </div>

          <div style={{marginTop:20, display:'flex', gap:20}}>
            <div className="card" style={{display:'flex', gap:14, alignItems:'center'}}>
              <div style={{width:12, height:12, borderRadius:4, background:'var(--success)'}}></div>
              <div>
                <div style={{fontWeight:700}}>Verified Receipts</div>
                <div style={{fontSize:13, color:'var(--muted)'}}>Proof for every purchase</div>
              </div>
            </div>
            <div className="card" style={{display:'flex', gap:14, alignItems:'center'}}>
              <div style={{width:12, height:12, borderRadius:4, background:'var(--accent)'}}></div>
              <div>
                <div style={{fontWeight:700}}>Live Progress</div>
                <div style={{fontSize:13, color:'var(--muted)'}}>Photos & reports each milestone</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual card">
          {/* Dashboard mockup - polished static preview */}
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
            <div>
              <div style={{fontSize:12, color:'var(--muted)'}}>Project</div>
              <div style={{fontWeight:700}}>3-Bed Home • Uyo</div>
            </div>
            <div style={{fontSize:12, color:'var(--muted)'}}>Progress <strong>62%</strong></div>
          </div>

          <div style={{height:10, background:'#eef2f7', borderRadius:8, overflow:'hidden', marginBottom:12}}>
            <div style={{width:'62%', height:'100%', background:'linear-gradient(90deg,var(--primary), var(--accent))'}}></div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, marginBottom:12}}>
            <div style={{textAlign:'center'}}><div style={{fontSize:12, color:'var(--muted)'}}>Materials</div><div style={{fontWeight:700}}>₦1.2M</div></div>
            <div style={{textAlign:'center'}}><div style={{fontSize:12, color:'var(--muted)'}}>Labor</div><div style={{fontWeight:700}}>₦420k</div></div>
            <div style={{textAlign:'center'}}><div style={{fontSize:12, color:'var(--muted)'}}>Remaining</div><div style={{fontWeight:700}}>₦680k</div></div>
          </div>

          <div style={{borderTop:'1px solid #eef2f7', paddingTop:10}}>
            <div style={{fontSize:13, fontWeight:600}}>Recent Activity</div>
            <ul style={{marginTop:8, color:'var(--muted)', fontSize:13}}>
              <li>23 Sep 2025 — Plastering complete (photo uploaded)</li>
              <li>20 Sep 2025 — Sand & cement purchased (receipt uploaded)</li>
              <li>15 Sep 2025 — Foundation inspected</li>
            </ul>
          </div>
        </div>

        {/* Background video overlay (commented) - keep for future use */}
        {/*
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/construct-loop.mp4" type="video/mp4" />
        </video>
        */}
      </div>
    </section>
  );
}
