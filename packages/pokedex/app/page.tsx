import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<h1>Welcome to Pokemon World</h1>
<p>
  Please Click
  <Link href='/pokemon'>
   <CatchingPokemonIcon >
    </CatchingPokemonIcon> </Link>n to visit the world!
</p>
    </main>
  )
}