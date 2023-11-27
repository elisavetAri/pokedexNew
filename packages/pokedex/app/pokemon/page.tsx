"use client"
import type { Metadata } from 'next'
import { DataGrid, GridEventListener} from '@mui/x-data-grid';
import { Container } from '@mui/material';;
import { useRouter } from 'next/navigation';
import React from 'react';
import fetchPokemon from '../../lib/fetchPokemon';
export const metaData: Metadata = {
 title: 'Get all Pokemon'
}

const PokemonPage = async () =>{
  // const authState = useSelector(pokemon);
  // const dispatch = useDispatch();
const pokemonData: Promise<Pokemon> = fetchPokemon();
const router = useRouter();
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

const handleRowClick: GridEventListener<'rowClick'> = (
  params, 
  event, 
  details, 
) => {
  router.push('/pokemonDetails')
};
return (
    <>
<div style={{
      backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/440/152/860/pokemon-backgrounds-for-widescreen-wallpaper-preview.jpg")`,
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
  }}
  test-id='pokemonPage'>
    <Container>
      <DataGrid
      test-id="datagrid"
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