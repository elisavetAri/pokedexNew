export default  async function  fetchPokemon () {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    if(!res.ok) throw new Error('failed too fetch data')
        return res.json();


}