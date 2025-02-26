// import React, { useState, useEffect } from 'react';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Button from '@mui/joy/Button';
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import CardActions from '@mui/joy/CardActions';
// import Typography from '@mui/joy/Typography';
// import Stack from '@mui/joy/Stack';

// const slides = [
//   {
//     id: 1,
//     date: "20 APR 2023",
//     title: "Google Search Ranks AI Spam Above Original Reporting in News Results",
//     description: "Google adjusted its policies to target AI spam earlier this year, but plagiarizing content still comes up higher in search results months later—and SEO experts aren’t sure why..",
//     image: "./carouselfirst.webp"
//   },
//   {
//     id: 2,
//     date: "21 APR 2023",
//     title: "Wagner Mutiny Puts Russia’s Military Bloggers on a Razor’s Edge",
//     description: "Telegram “war correspondents” have promoted the Kremlin’s invasion of Ukraine, but many have also supported mercenaries who launched a failed coup.",
//     image: "./Carouselsecond.webp"
//   },
//   {
//     id: 3,
//     date: "22 APR 2023",
//     title: "Bangladesh police arrest militant involved in blogger Avijit Roy’s killing",
//     description: "Bangladesh police said on Saturday that they had arrested an Islamist militant wanted in connection with the 2015 killing of a U.S. blogger critical of religious extremism",
//     image: "./Carouselfourth.jpg"
//   },
//   {
//     id: 4,
//     date: "23 APR 2023",
//     title: "Molly White Tracks Crypto Scams. It’s Going Just Great",
//     description: "The software engineer’s cautionary Web3 blog pours cold water on cryptocurrency’s dumpster fires.",
//     image: "./Carorselthird.webp"
//   }
// ];


// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Stack spacing={2} sx={{ width: "100%", maxWidth: "100vw", overflow: "hidden" }}>
//       <Card
//         orientation="horizontal"
//         variant="outlined"
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//           boxShadow: "lg",
//           width: "100%",
//           overflow: "hidden",
//           background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(148,187,233,1) 93%)"

//         }}
//       >
//         {/* Image Section - Full Width */}
//         <AspectRatio ratio="16/9" sx={{ width: "50%", maxHeight: 500 }}>
//           <img src={slides[currentIndex].image} alt={slides[currentIndex].title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//         </AspectRatio>
        
//         {/* Content Section */}
//         <CardContent sx={{ textAlign: "left", padding: 3, width: "50%" }}>
//           <Typography level="body-xs" sx={{ color: "gray" }}>{slides[currentIndex].date}</Typography>
//           <Typography level="h4" sx={{ fontWeight: "bold", mb: 1, color:'white' }}>
//             {slides[currentIndex].title}
//           </Typography>
//           <Typography level="body-lg" sx={{ mb: 2, color:"whitesmoke" }}>{slides[currentIndex].description}</Typography>
//           <CardActions>
//             <Button variant="outlined" sx={{color:"whitesmoke"}} color="neutral" size="md">
//               See details
//             </Button>
//             <Button variant="solid" color="primary" size="md">
//               Learn more
//             </Button>
//           </CardActions>
//         </CardContent>
//       </Card>
//     </Stack>
//   );
// };

// export default Carousel;

import React, { useState, useEffect } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

const slides = [
  {
    id: 1,
    date: "20 APR 2023",
    title: "Google Search Ranks AI Spam Above Original Reporting in News Results",
    description: "Google adjusted its policies to target AI spam earlier this year, but plagiarizing content still comes up higher in search results months later—and SEO experts aren’t sure why..",
    image: "./carouselfirst.webp"
  },
  {
    id: 2,
    date: "21 APR 2023",
    title: "Wagner Mutiny Puts Russia’s Military Bloggers on a Razor’s Edge",
    description: "Telegram “war correspondents” have promoted the Kremlin’s invasion of Ukraine, but many have also supported mercenaries who launched a failed coup.",
    image: "./Carouselsecond.webp"
  },
  {
    id: 3,
    date: "22 APR 2023",
    title: "Bangladesh police arrest militant involved in blogger Avijit Roy’s killing",
    description: "Bangladesh police said on Saturday that they had arrested an Islamist militant wanted in connection with the 2015 killing of a U.S. blogger critical of religious extremism",
    image: "./Carouselfourth.jpg"
  },
  {
    id: 4,
    date: "23 APR 2023",
    title: "Molly White Tracks Crypto Scams. It’s Going Just Great",
    description: "The software engineer’s cautionary Web3 blog pours cold water on cryptocurrency’s dumpster fires.",
    image: "./Carorselthird.webp"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Stack spacing={2} sx={{ width: "100%", maxWidth: "100vw", overflow: "hidden" }}>
      <Card
        orientation="horizontal"
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "lg",
          width: "100%",
          overflow: "hidden",
          background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(148,187,233,1) 93%)"
        }}
      >
        {/* Image Section - Adjusted for Responsiveness */}
        <AspectRatio ratio="16/9" sx={{ width: { xs: "100%", md: "50%" }, maxHeight: { md: 500 } }}>
          <img src={slides[currentIndex].image} alt={slides[currentIndex].title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </AspectRatio>
        
        {/* Content Section - Adjusted for Responsiveness */}
        <CardContent sx={{ textAlign: "left", padding: 3, width: { xs: "100%", md: "50%" } }}>
          <Typography level="body-xs" sx={{ color: "gray" }}>{slides[currentIndex].date}</Typography>
          <Typography level="h4" sx={{ fontWeight: "bold", mb: 1, color:'white' }}>
            {slides[currentIndex].title}
          </Typography>
          <Typography level="body-lg" sx={{ mb: 2, color:"whitesmoke" }}>{slides[currentIndex].description}</Typography>
          <CardActions>
            <Button variant="outlined" sx={{color:"whitesmoke"}} color="neutral" size="md">
              See details
            </Button>
            <Button variant="solid" color="primary" size="md">
              Learn more
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Carousel;

