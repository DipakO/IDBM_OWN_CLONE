// import * as React from "react";
// import Box from "@mui/material/Box";
// import Switch from "@mui/material/Switch";
// import Slide from "@mui/material/Slide";
// import FormControlLabel from "@mui/material/FormControlLabel";

// const icon = (
//   <div style={{ display: "flex", marginRight: "2rem" }}>
//     <div
//       style={{
//         width: "20rem",
//         height: "20rem",
//         backgroundColor: "red",
//         marginRight: "2rem",
//         marginBottom: "2rem",
//       }}
//     >
//       <h1>Hello</h1>
//     </div>
//     <div
//       style={{
//         width: "20rem",
//         height: "20rem",
//         backgroundColor: "red",
//         marginRight: "2rem",
//         marginBottom: "2rem",
//       }}
//     >
//       <h1>Hello</h1>
//     </div>
//     <div style={{ width: "20rem", height: "20rem", backgroundColor: "red" }}>
//       <h1>Hello</h1>
//     </div>
//   </div>
// );

// export default function SimpleSlide() {
//   const [checked, setChecked] = React.useState(false);

//   const handleChange = () => {
//     setChecked((prev) => !prev);
//   };

//   return (
//     // <Box sx={{ height: 580 }}>
//     <div>
//       <FormControlLabel
//         style={{ color: "white" }}
//         control={<Switch checked={checked} onChange={handleChange} />}
//         label="Show"
//       />
//       <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
//         {icon}
//       </Slide>
//     </div>
//     // </Box>
//   );
// }

// import * as React from "react";
// import Rating from "@mui/material/Rating";

// export default function HalfRating() {
//   const [count, setCount] = React.useState(0);

//   let c = count;
//   return (
//     <div>
//       {count === 1 || count === 2 ? (
//         <Rating
//           name="half-rating-read"
//           defaultValue={1}
//           precision={0.5}
//           readOnly
//         />
//       ) : (
//         <Rating
//           name="half-rating-read"
//           defaultValue={+count}
//           precision={2}
//           readOnly
//         />
//       )}
//       {/* {count === 1 ? (
//         <Rating
//           name="half-rating-read"
//           defaultValue={1}
//           precision={0.5}
//           readOnly
//         />
//       ) : (
//         <Rating
//           name="half-rating-read"
//           defaultValue={+count}
//           precision={2}
//           readOnly
//         />
//       )} */}

//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         increment
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         decrement
//       </button>
//     </div>
//   );
// }
