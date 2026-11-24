import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res){
  if (req.method === 'GET') {
    const { id } = req.query;
    const { data } = await supabase.from('assessments').select('*').eq('id', id).single();
    return res.json(data || {});
  }
  if (req.method !== 'POST') return res.status(405).end();
  const { name, company, employees, priority } = req.body;

  const { data, error } = await supabase
    .from('assessments')
    .insert([{ name, company, employees, priority }])
    .select().single();

  const prompt = `Create an "AI Intelligence Blueprint" for a company:
Name: ${company}
Contact: ${name}
Employees: ${employees}
Priority: ${priority}
Provide: 1) Readiness score (0-100) 2) Top 3 recommended AI agents and short justification 3) Suggested pricing tier and next step.`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'system', content: 'You are a premium B2B consultant.' },
               { role: 'user', content: prompt }],
    max_tokens: 700
  });

  const blueprint = completion.choices[0].message.content;

  await supabase.from('assessments').update({ blueprint }).eq('id', data.id);

  return res.json({ id: data.id, blueprint });
}
