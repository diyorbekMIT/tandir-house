import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export function HomeNavbar() {
  const authMember = null; // Replace with actual authentication logic

  return (
    <div className="home-navbar">
      <Container sx={{ mt: "55px", height: "642px" }}>
        <Stack
          sx={{ height: "50px" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box sx={{ mt: "50px" }}>
            <NavLink to="/">
              <img
                style={{ width: "150px", height: "150px" }}
                src="/icons/tandir.jpeg"
                alt="Logo"
              />
            </NavLink>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            minWidth={"700px"}
            alignItems={"center"}
          >
            <Box className="hover-line">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover-line"
                }
              >
                HOME
              </NavLink>
            </Box>
            <Box className="hover-line">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover-line"
                }
              >
                PRODUCTS
              </NavLink>
            </Box>
            {authMember && (
              <Box className="hover-line">
                <NavLink
                  to="/orders"
                  className={({ isActive }) =>
                    isActive ? "underline" : "hover-line"
                  }
                >
                  ORDERS
                </NavLink>
              </Box>
            )}
            {authMember && (
              <Box className="hover-line">
                <NavLink
                  to="/member-page"
                  className={({ isActive }) =>
                    isActive ? "underline" : "hover-line"
                  }
                >
                  MY PAGE
                </NavLink>
              </Box>
            )}
            <Box className="hover-line">
              <NavLink
                to="/help"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover-line"
                }
              >
                HELP
              </NavLink>
            </Box>
            <Basket />
            {!authMember ? (
              <>
                <Box>
                  <Button
                    variant="contained"
                    style={{ background: "#3776CC", color: "#f8f8ff" }}
                  >
                    LOGIN
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    style={{ background: "#3776CC", color: "#f8f8ff" }}
                  >
                    SIGN UP
                  </Button>
                </Box>
              </>
            ) : (
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "24px",
                  cursor: "pointer",
                }}
                src="/icons/default-user.svg"
                alt="User"
                aria-haspopup="true"
              />
            )}
          </Stack>
        </Stack>
        <Stack className="header-frame">
          <Stack className="detail">
            <Box className="head-main-txt">Тот самый вкус узбекских лепешек</Box>
            
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}