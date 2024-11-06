import { Paper } from '@mui/material'
import { IMOVIE } from '../../@libs/axios/typez'

type MovieCardProps = {
   movie: IMOVIE;
}

function MovieCard({
   movie
}: MovieCardProps) {
    
    return (
       <Paper
        component="a"
        elevation={0}
        href={movie.id}
        sx={{

            minWidth:'10rem'
        }}
       > 
        <img src={ 'assets/${movie.poster}' }
             style={{
                width:'100%'
             }}
        >
        
        
        
        </img>
       </Paper>
    )   
}
export default MovieCard