
import React, { useState, useEffect, useCallback } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import { keyframes } from '@mui/system';


const slides = [
  {
    id: 1,
    date: "20 APR 2023",
    title: "Google Search Ranks AI Spam Above Original Reporting in News Results",
    description: "Google adjusted its policies to target AI spam earlier this year, but plagiarizing content still comes up higher in search results months later—and SEO experts aren't sure why..",
    image: "./carouselfirst.webp"
  },
  {
    id: 2,
    date: "21 APR 2023",
    title: "Wagner Mutiny Puts Russia's Military Bloggers on a Razor's Edge",
    description: "Telegram war correspondents have promoted the Kremlin's invasion of Ukraine, but many have also supported mercenaries who launched a failed coup.",
    image: "./Carouselsecond.webp"
  },
  {
    id: 3,
    date: "22 APR 2023",
    title: "Bangladesh police arrest militant involved in blogger Avijit Roy's killing",
    description: "Bangladesh police said on Saturday that they had arrested an Islamist militant wanted in connection with the 2015 killing of a U.S. blogger critical of religious extremism",
    image: "./Carouselfourth.jpg"
  },
  {
    id: 4,
    date: "23 APR 2023",
    title: "Molly White Tracks Crypto Scams. It's Going Just Great",
    description: "The software engineer's cautionary Web3 blog pours cold water on cryptocurrency's dumpster fires.",
    image: "./Carorselthird.webp"
  }
];

// Fade-in animation for smoother transitions
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);
  
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, []);
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  // Toggle auto-play
  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
   
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
    
      prevSlide();
    }
  };
  
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); 
    }
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <Stack spacing={2} sx={{ width: "100%", maxWidth: "100vw", position: "relative" }}>
  
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
          background: "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,26,60,0.95) 100%)",
          position: "relative",
          minHeight: { xs: "auto", md: "500px" },
          transition: "transform 0.3s ease-in-out",
          borderRadius: "12px",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AspectRatio 
          ratio="16/9" 
          sx={{ 
            width: { xs: "100%", md: "50%" }, 
            maxHeight: { md: 500 },
            transition: "all 0.5s ease",
            overflow: "hidden",
            borderRadius: { xs: "12px 12px 0 0", md: "12px 0 0 12px" }
          }}
        >
          <img 
            src={slides[currentIndex].image} 
            alt={slides[currentIndex].title} 
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              transition: "transform 0.5s ease",
              transform: "scale(1.02)", // Slight zoom for more dynamic feel
            }} 
          />
          <Box sx={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            background: "linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%)",
            zIndex: 1
          }} />
        </AspectRatio>
        
        <CardContent 
          sx={{ 
            textAlign: "left", 
            padding: 4, 
            width: { xs: "100%", md: "50%" },
            animation: `${fadeIn} 0.5s ease forwards`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%"
          }}
        >
          <Typography level="body-xs" sx={{ color: "rgba(255,255,255,0.7)", fontWeight: "bold", letterSpacing: "1px", mb: 1 }}>
            {slides[currentIndex].date}
          </Typography>
          <Typography 
            level="h4" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2, 
              color: 'white',
              lineHeight: 1.3,
              fontSize: { xs: "1.5rem", md: "1.75rem" }
            }}
          >
            {slides[currentIndex].title}
          </Typography>
          <Typography 
            level="body-lg" 
            sx={{ 
              mb: 3, 
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.6
            }}
          >
            {slides[currentIndex].description}
          </Typography>
          <CardActions sx={{ mt: "auto", gap: 2 }}>
            <Button 
              variant="outlined" 
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.3)",
                '&:hover': {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)"
                }
              }} 
              size="md"
            >
              See details
            </Button>
            <Button 
              variant="solid" 
              color="primary" 
              size="md"
              sx={{
                boxShadow: "0 4px 12px rgba(0,114,255,0.3)",
                '&:hover': {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 16px rgba(0,114,255,0.4)",
                }
              }}
            >
              Learn more
            </Button>
          </CardActions>
        </CardContent>
        
        <IconButton
          onClick={prevSlide}
          size="lg"
          variant="soft"
          color="neutral"
          sx={{
            position: "absolute",
            left: { xs: "10px", md: "20px" },
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.15)",
            color: "white",
            zIndex: 10,
            '&:hover': {
              backgroundColor: "rgba(255,255,255,0.3)",
            },
            display: { xs: "none", sm: "flex" }
          }}
        >
          &#8592; 
        </IconButton>
        
        <IconButton
          onClick={nextSlide}
          size="lg"
          variant="soft"
          color="neutral"
          sx={{
            position: "absolute",
            right: { xs: "10px", md: "20px" },
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.15)",
            color: "white",
            zIndex: 10,
            '&:hover': {
              backgroundColor: "rgba(255,255,255,0.3)",
            },
            display: { xs: "none", sm: "flex" }
          }}
        >
          &#8594; 
        </IconButton>
        
      
        <IconButton
          onClick={togglePause}
          size="sm"
          variant="soft"
          color="neutral"
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "rgba(255,255,255,0.15)",
            color: "white",
            zIndex: 10,
            '&:hover': {
              backgroundColor: "rgba(255,255,255,0.3)",
            }
          }}
        >
          {isPaused ? "▶" : "❚❚"}
        </IconButton>
      </Card>
      
    
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          gap: 1,
          mt: 2
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "primary.main" : "grey.300",
              cursor: "pointer",
              transition: "all 0.3s ease",
              '&:hover': {
                transform: "scale(1.2)",
              },
              ...(index === currentIndex && {
                width: "24px",
                borderRadius: "4px",
              })
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default Carousel;