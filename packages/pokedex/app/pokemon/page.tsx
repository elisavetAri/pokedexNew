"use client"
import type { Metadata } from 'next'
import fetchPokemon from '@/lib/fetchPokemon'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { DataGrid, GridEventListener} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import build from 'next/dist/build';
import { redirect } from 'next/dist/server/api-utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
export const metaData: Metadata = {
 title: 'Get all Pokemon'
}

const PokemonPage = async()=>{
const pokemonData: Promise<Pokemon> = fetchPokemon();
const pok = await pokemonData
const columns = [
    {  field: 'name', headerName: 'Name', width: 150, flex: 1  },
    {  field: 'url', headerName:'URL' , width: 150, flex: 1  },
  ];

const rows = pok.results.map((row) => {
    return {
        id: row.url,
        name: row.name,
        url: row.url
    }
})

const paths =  pok.results.map((pokemon) => ({
  params: { url: pokemon.url, name: pokemon.name },
}));


const handleRowClick: GridEventListener<'rowClick'> = (
  params, 
  event, 
  details, 
) => {
  // <Link href='/pokemonDetails'></Link>

  console.log(
    params.row.id)
  // <Link href='/pokemonDetails'></Link>
  // console.log(details);
  // console.log('details', event.target);
  // params.id
  // console.log(`Movie "${params.row.id}" clicked`);
};
return (
    <>

<div style={{
      backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/440/152/860/pokemon-backgrounds-for-widescreen-wallpaper-preview.jpg")`,
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
  }}>
    <Container>
      <DataGrid
      sx={{
        boxShadow: 2,
        border: 2,
        backgroundColor:'white',
        borderColor: 'primary.light',
        '& .MuiDataGrid-cell:hover': {
          color: 'primary.warning',
        },
      }}
        columns={columns} 
        rows={rows}
        onRowClick={handleRowClick}
        initialState={{
            ...pok,
            pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}     
         />
         </Container>
       </div>
    </>
    )
}
export default PokemonPage