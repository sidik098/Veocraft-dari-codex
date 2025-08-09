import { supabase } from '@/lib/supabaseClient'

export default async function Home() {
  const { data } = await supabase.from('examples').select('*').limit(1)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold">PromptTube</h1>
      <pre className="mt-4 text-left">{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
