import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      backgroundImage: `url("https://i.pinimg.com/736x/69/68/1e/69681ef4639fa37d34c05f824a597cb3.jpg")`,
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
  }}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<h1>Welcome to Pokedex</h1>
<p>
  Click
  <Link href='/pokemon'>
   <CatchingPokemonIcon >
    </CatchingPokemonIcon> </Link>n!
</p>
    </main>
    </div>
  )
}