import React from 'react';

export default function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-2" style={{alignItems:'center'}}>
          <div className="fade-up">
            <h2 className="h-title" style={{fontSize: '1.6rem'}}>Who we are</h2>
            <p className="lead" style={{marginTop:10}}>
              ProjTrust specializes in transparent and verifiable project execution across Nigeria. We provide
              documentation, verified receipts, and regular milestone reporting — giving clients (local and abroad)
              peace of mind while projects are executed.
            </p>
            <ul style={{marginTop:16, color:'var(--muted)'}}>
              <li><strong>Transparency:</strong> Itemized receipts & media for every purchase.</li>
              <li><strong>Accountability:</strong> Dedicated on-site supervisors and inspector reports.</li>
              <li><strong>Cost-efficiency:</strong> Practical recommendations to save cost without sacrificing quality.</li>
            </ul>
          </div>

          <div>
            <div className="card">
              <h4 style={{margin:0}}>Our mission</h4>
              <p style={{color:'var(--muted)'}}>To restore trust in project execution through verifiable processes, clear reporting and professional oversight.</p>
              <div style={{display:'flex', gap:10, marginTop:8}}>
                <div style={{flex:1, padding:8, borderRadius:8, background:'#f8fafc'}}>
                  <div style={{fontWeight:700}}>Verified Team</div>
                  <div style={{fontSize:13, color:'var(--muted)'}}>Inspected & certified professionals</div>
                </div>
                <div style={{flex:1, padding:8, borderRadius:8, background:'#f8fafc'}}>
                  <div style={{fontWeight:700}}>Secure Reporting</div>
                  <div style={{fontSize:13, color:'var(--muted)'}}>Weekly structured reports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
