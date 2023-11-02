import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Product = ({ product }) => {
  return (
    <Card
      raised
      sx={{
        borderRadius: 7,
        ":hover": {},
      }}
      className="xs:w-[75%] sm:w-[358px] md:w-[320px] flex flex-wrap w-full items-center justify-center mt-10 shadow-xl shadow-slate-800 bg-stone-400 rounded-xl hover:scale-105  transform transition-all duration-1000 ease-in"
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{
          width: { xs: "100%", sm: "358px", md: "320px" },
          height: 180,
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle1"
          fontWeight="bold"
          component="div"
        >
          {product.title.slice(0, 20)}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Price: ${product.price}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default Product;
