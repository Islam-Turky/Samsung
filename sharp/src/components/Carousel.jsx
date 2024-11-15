import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/slider1.jpg'
import img2 from '../assets/slider2.jpg'
import img3 from '../assets/slider3.jpg'
import {TextTyping} from  "../components/TextTyping";


const MyCarousel = () => {
    return(
        <div className='d-flex justify-content-center alignt-items-center align-content-center mt-5 position-relative'>
            <Carousel>
                <Carousel.Item >
                    <img src={img1} style={{ opacity: '0.5' }}/>
                    <div className='position-absolute d-flex justify-content-center align-items-center align-content-center' style={{  width: '100%', top: '40%' }}>
                        <TextTyping text='مرحبا بك في مركز صيانة شارب' />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} style={{ opacity: '0.5' }} />
                    <div className='position-absolute d-flex justify-content-center align-items-center align-content-center' style={{  width: '100%', top: '40%' }}>
                        <TextTyping text='لدينا أفضل الفنيين المتخصصين في صيانة جميع الأجهزه المنزليه' />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} style={{ opacity: '0.5' }} />
                    <div className='position-absolute d-flex justify-content-center align-items-center align-content-center' style={{  width: '100%', top: '40%' }}>
                        <TextTyping text='نمتاز بالسرعه في صيانة الأجهزه المنزليه' />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MyCarousel;