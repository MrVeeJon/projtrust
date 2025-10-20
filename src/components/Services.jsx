import React from 'react';

const services = [
  {title:'Project Supervision', desc:'Full on-site supervision and milestone reporting.'},
  {title:'Cost Evaluation', desc:'Detailed budgeting and cost optimization suggestions.'},
  {title:'Vendor Verification', desc:'We verify suppliers and contractors before engagement.'},
  {title:'Documentation', desc:'Receipts, photos, and inspection notes uploaded regularly.'},
  {title:'Remote Monitoring', desc:'Clients can follow progress from anywhere.'},
];

export default function Services(){
  return (
    <section id="services" className="section">
      <div className="container">
        <h3 className="h-title">Services</h3>
        <p className="lead" style={{marginTop:8}}>We tailor our services to the scale of your project.</p>

        <div className="grid grid-3" style={{marginTop:20}}>
          {services.map((s, i) => (
            <div className="card fade-up" style={{padding:18}} key={i}>
              <h4 style={{margin:0}}>{s.title}</h4>
              <p style={{marginTop:8, color:'var(--muted)'}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
