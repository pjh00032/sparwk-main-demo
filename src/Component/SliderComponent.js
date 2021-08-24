import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player';

const SliderComponent = (props) =>{

    return(
        <Slider
        dots
        infinite
        autoplaySpeed={3000}
        slidesToShow={1}
        slidesToScroll={1}
        
        prevArrow={<FontAwesomeIcon icon={faChevronLeft} size="4x"/>}
        nextArrow={<FontAwesomeIcon icon={faChevronRight} size="4x"/>}
        >
        <div className="slider">
            <ReactPlayer width="100%" 
                         height="100%" 
                         url="./videos/12716.mp4" 
                         className="slider-video" 
                         loop 
                         controls
                         playing
                         muted
                         />
            {/* <button onClick={videoPlayPause} className="slider-btn">
                <FontAwesomeIcon enableBackground={false} icon={faPlayCircle} size="4x"/>
            </button> */}
        </div>
        <div className="slider-img">
          <img src="./images/sparwk2.PNG"></img>
        </div>



        </Slider>
    );

}
export default SliderComponent;