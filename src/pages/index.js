import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import supabase from '../../config/supabaseClient'

const Home = () => {
  const session = useSession()

  return (
    <div className='container' style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme='dark'
        />
      ) : (
        <p>Account page will go here.</p>
      )}
    </div>
  )
}

export default Home
