"use client"
import type { Metadata } from 'next'
import fetchPokemon from '@/lib/fetchPokemon'
import Link from "next/link"
import { DataGrid, GridEventListener} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import React, { MouseEvent } from 'react'
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

// const handleRowClick = (
//   params,
//   event, 
//   details, 
// ) => {
//   console.log(params);
//  <Link href={params.row.id}>
//   </Link>

//   console.log(params.row.id)
// };
const handleRowClick: GridEventListener<'rowClick'> = (
  params, // GridRowParams
  event, // MuiEvent<React.MouseEvent<HTMLElement>>
  details, // GridCallbackDetails
) => {
  console.log(`Movie "${params.row.id}" clicked`);
};
return (
    <>
    <Box  sx={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns} 
        rows={rows}
        onRowClick={handleRowClick}
        initialState={{
            ...pok,
            pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}     
         />
    </Box>
    </>
    )
}
export default PokemonPage