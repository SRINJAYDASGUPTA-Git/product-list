import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Product = ({ product }) => {
  return (
    <Card
      sx={{ maxWidth: 200, background: "#A8A29E" }}
      className="flex flex-wrap w-full items-center justify-center mt-10 shadow-xl shadow-slate-800 bg-stone-400 rounded-xl"
    >
      <CardMedia
        component="img"
        height="50"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
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
