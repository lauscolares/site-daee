import { Box, Button, Card, CardActions, CardContent, Divider, TextField, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Login.css';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const loginContainer = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f1f1f1",
        gap: 2
    };

    const navigate = useNavigate();

    return (
        <Box id="login-container" sx={loginContainer}>
            <Card>
                <CardActions>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={() => navigate('/')}
                    >
                        Voltar à página inicial
                    </Button>
                </CardActions>
                <CardContent>
                    <Typography
                        variant="h4"
                        component="h1"
                        textAlign={"center"}
                        mb={2}
                    >
                        É membro da gestão do DA?<br />Acesse o sistema!
                    </Typography>
                    <Divider flexItem />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <TextField
                            label="Usuário"
                            name="login"
                            margin="normal"
                        />
                        <TextField
                            label="Senha"
                            name="senha"
                            helperText="Esqueceu a senha? Entre em contato com a gestão atual!"
                            margin="normal"
                        />
                    </Box>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="contained">Entrar</Button>
                </CardActions>
            </Card>
        </Box>
    );
}