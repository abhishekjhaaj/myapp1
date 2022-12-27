import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Carousel,
	CarouselItem,
	
	CarouselControl,
	
} from 'reactstrap';



	// Sample items for Carousel
	const items = [
		{
			src: 'https://exceptionalpanaceasolutions.com/Exp/images/img9.jpg',
			//altText: 'Slide 1',
			//caption: 'Slide 1',
			key: 1,
		},
		{ src: 'https://exceptionalpanaceasolutions.com/Exp/images/img1.jpg',
		// altText: 'Slide 2',
		// caption: 'Slide 2',
		key: 2 },
		{ src: 'https://exceptionalpanaceasolutions.com/Exp/images/img2.jpg',
		// altText: 'Slide 3',
		// caption: 'Slide 3',
		key:3 },
		{ src: 'https://exceptionalpanaceasolutions.com/Exp/images/img3.png',
		// altText: 'Slide 4',
		// caption: 'Slide 4',
		key: 4 },
		{ src: 'https://exceptionalpanaceasolutions.com/Exp/images/img4.jpg',
		// altText: 'Slide 5',
		// caption: 'Slide 5',
		key: 5 },
		{ src: 'https://exceptionalpanaceasolutions.com/Exp/images/img5.jpg',
		// altText: 'Slide 6',
		// caption: 'Slide 6',
		key: 6, },
		{ src: 'https://exceptionalpanaceasolutions.com/Exp/images/img6.png',
		// altText: 'Slide 7',
		// caption: 'Slide 7',
		key: 7 },
		{ src: 'https://exceptionalpanaceasolutions.com/Exp/images/img7.jpg',
		// altText: 'Slide 8',
		// caption: 'Slide 8',
		key: 8 },
		{ src: 'https://exceptionalpanaceasolutions.com/Exp/images/img8.jpg',
		// altText: 'Slide 9',
		// caption: 'Slide 9',
		key: 9 },

	];
	function HomeCarousel(args) {
		const [activeIndex, setActiveIndex] = useState(0);
		const [animating, setAnimating] = useState(false);
	  
		const next = () => {
		  if (animating) return;
		  const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		  setActiveIndex(nextIndex);
		};
	  
		const previous = () => {
		  if (animating) return;
		  const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		  setActiveIndex(nextIndex);
		};
	  
		// const goToIndex = (newIndex) => {
		//   if (animating) return;
		//   setActiveIndex(newIndex);
		// };
	  
		const slides = items.map((item) => {
		  return (
			
			<CarouselItem
			  onExiting={() => setAnimating(true)}
			  onExited={() => setAnimating(false)}
			  key={item.src}
			>
			  <img src={item.src} alt={item.altText} />
			  {/* <CarouselCaption
				captionText={item.caption}
				captionHeader={item.caption}
			  /> */}
			</CarouselItem>
			
		  );
		});
	  
		return (
		  <Carousel
			activeIndex={activeIndex}
			next={next}
			previous={previous}
			{...args}
		  >
			{/* <CarouselIndicators
			  items={items}
			  activeIndex={activeIndex}
			  onClickHandler={goToIndex}
			/> */}
			{slides}
			<CarouselControl
			  direction="prev"
			  directionText="Previous"
			  onClickHandler={previous}
			/>
			<CarouselControl
			  direction="next"
			  directionText="Next"
			  onClickHandler={next}
			/>
		  </Carousel>
		);
	  }



export default HomeCarousel
