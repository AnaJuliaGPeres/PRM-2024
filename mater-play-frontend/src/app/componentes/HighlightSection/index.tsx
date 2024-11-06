import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesService } from '../../services/movies-service';
import { IMOVIE } from '../../@libs/axios/typez';
import { Button, Stack, Typography } from '@mui/material';
import { Box, Container } from '@mui/material';





export const HighlightSection = () => {
    
    const params= useParams();

    const [movie, setMovies] = useState<IMOVIE>({} as IMOVIE);

    useEffect(()=>{

        const movieId = (params.id)? params.id : '126a17b6-0c92-42b4-aef9-1cb546b7691f';
        if(params.id){
            moviesService.getMoviesByID(movieId)

            .then(result => {
                if(result) setMovies(result);
            })
            .catch(error => {
                console.log('PAU:', error)
            })
        }
    },[params]);

    return (
        <Box>
            <Container>
                <Stack
                    direction="row"
                >
                    <img src={'assets/${movies.poster}'}></img>
                    
                    < Stack
                        sx={{
                            justifyContent: 'center',
                            paddingLeft: '1rem',
                        }}>
                        <Typography
                            variant="h4"
                        >{movie.title}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                        >
                            <span 
                                style={{
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    padding: '0.2rem',
                                    marginRight: '0.5rem',
                                    marginLeft: '0.2rem',
                                }}>
                                {movie.ageRating}
                            </span>
                            Aventura, Fantasia, Ação</Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    paddingTop: '1rem',
                                    marginBottom: '0.5rem',
                                }}
                                >
                                Sinopse
                            </Typography>
                            <Typography
                                variant="body2"
                            >
                                {movie.decription}
                            </Typography>
                            <Stack
                                direction="row"
                                gap={1}
                                sx={{
                                    paddingY: '1rem',
                                }}
                            >
                                <Button
                                    variant='outlined'
                                >
                                    Assistir
                                </Button>
                                <Button
                                    variant='contained'
                                >
                                    Detalhes
                                </Button>
                            </Stack>
                            
                    </Stack>
                    
                </Stack>
            </Container>
        </Box>
    )
}

export default HighlightSection;