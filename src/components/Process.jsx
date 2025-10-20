import React from 'react';

const steps = [
  {title:'Consultation', desc:'We assess scope, location, and budget.'},
  {title:'Planning & Costing', desc:'Itemized estimate and optimization plan.'},
  {title:'Execution & Verification', desc:'Procurement, verification and progress reporting.'},
  {title:'Completion & Handover', desc:'Final report, receipts & sign-off.'},
];

export default function Process(){
  return (
    <section id="process" className="section" style={{background:'#fff'}}>
      <div className="container">
        <h3 className="h-title">How it works</h3>
        <p className="lead" style={{marginTop:6}}>A simple, transparent 4-step process.</p>

        <div className="grid" style={{marginTop:20, gridTemplateColumns:'repeat(4,1fr)', gap:16}}>
          {steps.map((s, i) => (
            <div key={i} className="card fade-up" style={{textAlign:'center', padding:20}}>
              <div style={{width:48, height:48, borderRadius:12, margin:'0 auto 10px', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(90deg,var(--primary), var(--accent))', color:'#fff', fontWeight:700}}>{i+1}</div>
              <h4 style={{margin:'8px 0'}}>{s.title}</h4>
              <p style={{color:'var(--muted)', fontSize:13}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
