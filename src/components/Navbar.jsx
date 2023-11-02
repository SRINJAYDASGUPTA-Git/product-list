import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../utils/logo.png";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="center"
    p={1}
    sx={{
      position: "sticky",
      background: "#d9b391",
      top: 0,
      justifyContent: "space-between",
      zIndex: 20,
    }}
    className="shadow-md shadow-stone-600"
  >
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}
    >
      <img src={logo} alt="logo" height={60} width={60} />
      <Typography
        sx={{ fontSize: "25px", fontWeight: "bold", color: "#3d3b38" }}
      >
        EnderMart
      </Typography>
    </Link>
  </Stack>
);

export default Navbar;
