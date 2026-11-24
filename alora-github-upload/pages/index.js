import { useState } from 'react';

export default function Home(){
  const [name,setName] = useState('');
  const [company,setCompany] = useState('');
  const [employees,setEmployees] = useState('1-5');
  const [priority,setPriority] = useState('Increase revenue');

  async function submit(e){
    e.preventDefault();
    const res = await fetch('/api/assessments', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ name, company, employees, priority })
    });
    const data = await res.json();
    window.location.href = `/results?id=${data.id}`;
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-semibold mb-6">Alora Infinite — AI Needs Assessment</h1>
        <form onSubmit={submit} className="space-y-4">
          <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="w-full p-3 rounded bg-gray-900"/>
          <input value={company} onChange={e=>setCompany(e.target.value)} placeholder="Company" className="w-full p-3 rounded bg-gray-900"/>
          <select value={employees} onChange={e=>setEmployees(e.target.value)} className="w-full p-3 rounded bg-gray-900">
            <option>1-5</option>
            <option>6-20</option>
            <option>21-100</option>
            <option>100+</option>
          </select>
          <select value={priority} onChange={e=>setPriority(e.target.value)} className="w-full p-3 rounded bg-gray-900">
            <option>Increase revenue</option>
            <option>Reduce overhead</option>
            <option>Improve customer service</option>
            <option>Automate workflows</option>
          </select>
          <button className="w-full py-3 bg-[#D4AF37] text-black rounded">Get My Blueprint</button>
        </form>
      </div>
    </main>
  )
}
