import { Box, Container, Stack } from "@mui/material"
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'

function HighlightSection() {
    return (                            
        <>
        <Box>

            <Container>
                
                <Stack direction="row">
                    <img src="assets/theboys.jpg"/>

                    <Stack
                        sx={{
                            
                            justifyContent: 'center',
                            paddingLeft: '3rem'
                        }}
                    >
                        <Typography variant="h4">
                            The Boys
                        </Typography>
                        <Typography variant="subtitle2">
                           <span style={{border:'1px', borderStyle:'solid', padding: '0.2rem', marginRight:'0.3rem'}}>
                            16
                           </span>
                            Aventura, Fantasia e Ação
                        </Typography>

                        <Typography variant="subtitle1"
                            sx={{
                                paddingTop: '2rem',
                                marginBottom: '2rem',
                            }}
                        >
                            Sinopse
                        </Typography>

                        <Typography variant="body2">
                            Em The Boys, um grupo de boy bands se junta para destruir um misterioso monstro que criou 007, o Capitão América. Esse filme é baseado na história de The Boys, um grupo de boy bands que se junta para destruir um misterioso monstro que criou 007, o Capitão América.
                        </Typography>

                        <Stack 
                        gap={1}
                        direction="row"
                        sx={{
                            paddingTop: "1rem",
                        }}
                        >

                            <Button
                                variant="outlined"
                            > Assistir </Button>
                            <Button variant="outlined"> Detalhes </Button>

                        
                        </Stack>
                    
                    </Stack>


                </Stack>
                </Container>
              
        </Box>
        </>
    )
}

export default HighlightSection
    