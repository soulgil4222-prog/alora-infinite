import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Results(){
  const router = useRouter();
  const { id } = router.query;
  const [blueprint, setBlueprint] = useState(null);

  useEffect(()=>{
    if(!id) return;
    fetch(`/api/assessments?id=${id}`).then(r=>r.json()).then(d=>{
      setBlueprint(d.blueprint || 'No blueprint available yet.');
    })
  },[id]);

  return (
    <main className="min-h-screen bg-white text-black p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Your Alora Infinite Intelligence Blueprint</h1>
        <pre className="whitespace-pre-wrap bg-gray-100 p-6 rounded">{blueprint}</pre>
        <div className="mt-6">
          <iframe src="https://calendly.com/your_calendly_url" style={{width:'100%',height:600,border:0}}/>
        </div>
      </div>
    </main>
  )
}
