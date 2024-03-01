import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const logo = require("../../images/white_logo.png").default;
import { useNavigate } from "react-router-dom";
import Logout from "../pages/Logout";

interface Props {
  window?: () => Window;
}
interface NavItems {
  menu: string;
  url: string;
}
const Nav: React.FC = (props: Props) => {
  //Function to navigate
  const [activeLink, setActiveLink] = React.useState<string | null>(null);
  const [show, setShow] = React.useState(false)
  const handleButtonClick = (url: string) => {
    if (url === "logout") {
      ShowLogout()
    } else {
      setActiveLink(url);
      navigate(`/${url}`);
    }
  };
  const ShowLogout = () => {
    setShow(!show)
  }
  const drawerWidth = 240;

  const navItems: NavItems[] = [
    {
      menu: "Patient",
      url: "patient",
    },
    {
      menu: "Users",
      url: "users",
    },
    {
      menu: "Test",
      url: "tests",
    },
    {
      menu: "Fields",
      url: "fields",
    },
    {
      menu: "Testfields",
      url: "testfields",
    },
    {
      menu: "Patient Test",
      url: "patienttest",
    },
    {
      menu: "Logout",
      url: "logout",
    },
  ];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img src={logo} alt="white_logo" className="nav-logo" />
      <Typography variant="h6" sx={{ my: 2 }}>
        LMS
      </Typography>
      <Divider />
      <List>
        {navItems.map((item: NavItems, index: number) => (

          <ListItem key={index} disablePadding onClick={() => handleButtonClick(item.url)}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.menu} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (

    <Box sx={{ display: "flex" }}>
      {show ? <Logout ShowLogout={() => ShowLogout()} /> : ""}
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" className="nav-logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LMS
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item: NavItems, index: number) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(item.url)}
                // sx={{ color: "#fff", fontWeight: 600, '&:hover': { color: '#00BFBA', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' } }}
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  "&:hover": {
                    color: "#00BFBA",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                  },
                  backgroundColor:
                    activeLink === item.url ? "#00BFBA" : "inherit",
                }}
              >
                {item.menu}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Nav;
