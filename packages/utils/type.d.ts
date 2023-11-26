type PokemonDetails = {
    next:string,
    count: number,
    previous:string,
    results:[{
        name:string,
        url: string
    }]
}