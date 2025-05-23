import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import logoBranca from "../../assets/DABrancoLogo.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const HeaderPrincipal = () => {

    const theme = useTheme();
    const navigate = useNavigate();

    const botaoMenu = {
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
        },
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: theme.palette.secondary.main }}>
                <Toolbar>
                    <img
                        src={logoBranca}
                        alt="Logo"
                        style={{
                            height: "10vh",
                            marginRight: "10px",
                            cursor: "pointer",
                        }}
                        onClick={() => navigate("/")}
                    />
                    <Typography color="#f1f1f1" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Diretório Acadêmico da Escola de Engenharia da UFMG
                    </Typography>
                    <Button sx={botaoMenu} color="inherit" href="/">Início</Button>
                    <Button sx={botaoMenu} color="inherit" >Sobre</Button>
                    <Button sx={botaoMenu} color="inherit" >Mural de Ex-Alunos</Button>
                    <Button sx={botaoMenu} color="inherit" href="/login">Acesso Interno</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderPrincipal;