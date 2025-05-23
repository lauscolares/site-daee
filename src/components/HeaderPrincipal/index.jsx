import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import theme from "../../config/theme";
import logoBranca from "../../assets/DABrancoLogo.png";

const HeaderPrincipal = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: theme.palette.secondary.main }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img
                        src={logoBranca}
                        alt="Logo"
                        style={{
                            height: "10vh",
                            marginRight: "10px",
                        }}
                    />
                    <Typography color="#f1f1f1" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Diretório Acadêmico da Escola de Engenharia da UFMG
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderPrincipal;