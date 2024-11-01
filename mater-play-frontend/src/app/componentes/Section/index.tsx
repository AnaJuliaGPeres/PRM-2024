import { Box, Container, Stack, Typography } from "@mui/material"
import MovieCard from "../MovieCard"
import { useEffect, useState } from "react";
import { ICategory, IMOVIE } from "../../@libs/axios/typez";
import { moviesService } from "../../services/movies-service";



type SectionProps = {
        category : ICategory;
}

function  Section({category} : SectionProps) {

    const  [movies, setMovies] = useState<IMOVIE[]>([])
    
    useEffect(() => {
        //executa o que esta aqui dentro quando carrega componete
        if(category.id) {
        moviesService.getByCategoryId(category.id).then(result=> {
           setMovies(result)
        });
        }

    }, [])

    return (
        <Box>

            <Container>
                <Typography variant="h6"
                    sx={{
                        fontWeight:400,
                        paddingTop: '2rem',
                    }}
                >
                    {category.name}
                </Typography>

                <Stack direction="row"
                  gap={0.5}
                  sx={{
                    overflowY:'hidden',
                    whiteSpace: 'nowrap',
                    paddingY:'1rem',

                  }}
                >
                    {movies.map(item=>  (
                        <MovieCard key ={item.id} poster={'assets/'+ item.poster}/>
                    ))}
                    
                    
                </Stack>
            </Container>
        </Box>
    )   
}
export default Section