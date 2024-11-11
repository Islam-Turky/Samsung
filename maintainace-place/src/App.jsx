import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { FaPhone } from "react-icons/fa6";
// 
import img1 from './assets/service-maintenance-worker-repairing.jpg'
import img2 from './assets/high-angle-man-working-as-plumber.jpg'
import img3 from './assets/young-man-working-as-electrician-exposing-back-fridge-check-repair-it.jpg'
// 
import img4 from './assets/r2.jpg'
import img5 from './assets/pc-with-text.webp'
import img6 from './assets/r1.jpg'
// import img7 from './assets/b.jpg'
// import img8 from './assets/young-man-working-as-electrician-exposing-back-fridge-check-repair-it.jpg'
import img9 from './assets/w.jpg'
import vod from './assets/143859_vodafone_icon.png'
import et from './assets/etisalat-seeklogo.svg'
import mob from './assets/Orange_Egypt-Logo.wine.svg'
import loadingSpinner from "./assets/samsung-seeklogo.svg"
import "./App.css"
import { BiBox } from 'react-icons/bi';


const Loading = () => (
  <div className="loading d-flex justify-content-center align-content-center align-items-center vh-100">
    <img src={loadingSpinner} width={200} height={200} alt="logo" className='loading-logo'/>
  </div>
);

function App() {
  const [showA, setShowA] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state


  const toggleShowA = () => setShowA(!showA);
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <>
    {loading ? (<Loading />) : (<>
        <Navbar expand="lg" bg="white" className='d-flex justify-content-evenly position-fixed z-3 w-100 top-0' data-bs-theme="dark">
        <Nav dir='rtl'>
          <Nav.Link className='text-dark fw-bold' href="#service">الدعم</Nav.Link>
          <Nav.Link className='text-dark fw-bold' href="#service">أعمال</Nav.Link>
        </Nav>
        <Nav dir='rtl'>
          <Nav.Link className='text-dark fw-bold' href="#who">من نحن</Nav.Link>
          <Nav.Link className='text-dark fw-bold' href="#service">خدمتنا</Nav.Link>
          <Nav.Link className='text-dark fw-bold' href="#contact">تواصل معنا</Nav.Link>
        </Nav>
        <Navbar.Brand href="#home">
          <img src="/samsung.svg" loading='lazy' alt="logo" width={150} height={50} />
        </Navbar.Brand>
        </Navbar>
    // {/* < id='home'> */}
    <div id='home'>
    <Carousel>
        <Carousel.Item>
            <img loading="lazy" src={img1} />
        </Carousel.Item>
        <Carousel.Item>
            <img loading="lazy" src={img2} />
        </Carousel.Item>
        <Carousel.Item>
            <img loading="lazy" src={img3} />
        </Carousel.Item>
    </Carousel>
    </div>

    <Container id='who' className='mt-4'>
    <h1 className='text-center p-4 bg-primary text-light rounded'>من نحن</h1>
      <h1 className='text-center'>مرحبا بكم في مركز صيانة سامسونج</h1>
      <div className='text-end fs-4 p-4' dir='rtl'>نحن رواد في بيع وصيانة الأجهزة الكهربائية. نقدم خدمات صيانة عالية الجودة لجميع أجهزة سامسونج المنزلية مع فريق متخصص وقطع غيار أصلية. ضمان لمدة عام على جميع الإصلاحات واستجابة سريعة من خلال أسطول متحرك. اتصل بنا الآن.</div>
    <h1 className='text-end'>صيانة ثلاجات سامسونج</h1>
    <Card.Img variant="top" src={img5} />

      <div className='text-end fs-4 p-4'>
      سامسونج تقدم خدمة صيانة متكاملة للثلاجات والديب فريزرات، بالإضافة إلى الأجهزة المنزلية الأخرى مثل الغسالات، غسالات الأطباق، الميكروويف، ومجففات الملابس. يشمل الدعم الفني إصلاح كافة الأعطال وتوفير قطع غيار أصلية عند الحاجة، مع خدمة عملاء متاحة لجميع المحافظات طوال الأسبوع لتلقي بلاغات الأعطال والإستفسارات.
      </div>
    <h1 className='text-end'>صيانة غسالات سامسونج</h1>
    <Card.Img variant="top" src={img6} />

      <div className='text-end fs-4 p-4'>
      تقدم سامسونج غسالات مبتكرة بتصميمات متعددة تناسب مختلف الاحتياجات والمساحات. كما توفر خدمة صيانة مميزة لجميع أنواع الغسالات، مع فريق مهني مدرب وضمان متجدد وصيانة مجانية للأعطال غير المتوقعة.
      </div>
    <h1 className='text-end'>صيانة الأجهزة المنزليه</h1>
    <Card.Img variant="top" src={img4} />

      <div className='text-end fs-4 p-4'>
      سامسونج تميزت بابتكاراتها في الغسالات بتصاميم متنوعة وسعات مختلفة تلبي احتياجات العملاء. تقدم خدمة صيانة سريعة ومتميزة عبر فريق مدرب من التوكيل الرسمي، مع ضمان متجدد وصيانة مجانية للأعطال غير المتوقعة، مما يضمن أمان الأجهزة وراحة العملاء.
      </div>
    </Container>
    <Container id='service'>
      <h1 className='text-center p-4 bg-primary text-light rounded'>خدماتنا</h1>
    </Container>
    <Container className='d-flex justify-content-evenly align-content-center flex-wrap gap-3'>
    <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title className='text-end'>صيانة الأجهزه المنزلية</Card.Title>
        <Card.Text className='text-end'>
        <ul dir='rtl'>
          <br />
          <h6 className='text-center text-white p-2 bg-primary' style={{ borderRadius: '6px' }}>خدمات صيانة سامسونج المتكاملة</h6>
          <li>تقديم صيانة متميزة عالية الجودة لجميع أجهزة سامسونج.</li>
          <li>استبدال قطع الغيار بأخرى أصلية وضمان عليها.</li>
          <li>دورات شهرية مجانية وضمان عام كامل.</li>
          <br />
        </ul>
        </Card.Text>
      </Card.Body>
      <Card.Body className='text-center'>
        <Card.Link className='btn btn-primary' href="tel:01220088558">إتصل بنا</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title className='text-end'>صيانة ثلاجة سامسونج</Card.Title>
        <Card.Text className='text-end'>
        <ul dir='rtl'>
          <br />
          <h6 className='text-center text-white p-2 bg-primary' style={{ borderRadius: '6px' }}>فريق المهندسين المحترفين</h6>
          <li>صيانة كافة الأعطال بما في ذلك تسريب المياه والغاز.</li>
          <li>توفير أفضل الخبرات في الصيانة والدعم الفني.</li>
          <li>الالتزام بإراحة العميل.</li>
          <br />
        </ul>
        </Card.Text>
      </Card.Body>
      <Card.Body className='text-center'>
        <Card.Link className='btn btn-primary' href="tel:01220088558">إتصل بنا</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src={img9} />
      <Card.Body>
        <Card.Title className='text-end'>صيانة غسالة سامسونج</Card.Title>
        <Card.Text className='text-end'>
        <ul dir='rtl'>
          <br />
          <h6 className='text-center text-white p-2 bg-primary' style={{ borderRadius: '6px' }}>الاستجابة السريعة والدعم</h6>
          <li>أسطول متحرك للتواصل مع العملاء بسرعة.</li>
          <li>خدمات صيانة موثوقة وفعالة في جميع أنحاء البلاد.</li>
          <li>تواصل معنا: 01119711606</li>
          <br />
        </ul>
        </Card.Text>
      </Card.Body>
      <Card.Body className='text-center'>
        <Card.Link className='btn btn-primary' href="tel:01220088558">إتصل بنا</Card.Link>
      </Card.Body>
    </Card>
    </Container>
    <Container className='p-5' id='contact'>
      <h1 className='text-center p-4 bg-primary text-light rounded'>تواصل معنا</h1>
      <Container>
        <h1 className='text-end'>فروعنا</h1>
        <ListGroup>
          <ListGroup.Item className='text-end'>طنطا</ListGroup.Item>
          <ListGroup.Item className='text-end'>القاهره</ListGroup.Item>
          <ListGroup.Item className='text-end'>ألإسكندريه</ListGroup.Item>
          <ListGroup.Item className='text-end'>بورسعيد</ListGroup.Item>
          <ListGroup.Item className='text-end'>الزقازيق</ListGroup.Item>
        </ListGroup>
        <h1 className='text-end'>أرقامنا</h1>
        <div className='d-flex justify-content-center align-items-center align-content-center gap-3 p-2 position-fixed bottom-0 end-0 flex-column p-5'>
          <Row>
            <Col md={15}>
            <Button style={{  background: 'green' }} onClick={toggleShowA} className='rounded-circle'>
            <FaPhone fontSize={40}/>
            </Button>
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Body className=' d-flex justify-content-evenly align-content-center align-items-center'>
                          <a className='rounded'  href="tel:01002145007"><img loading='lazy' src={vod} alt="vodafone" width={80} /></a>
                          <a className='rounded'  href="tel:01220088558"><img loading='lazy' src={mob} alt="orange" width={150} /></a>
                          <a className='rounded'  href="tel:01118781896"><img loading='lazy' src={et} alt="etisalat" width={100} /></a>
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
          
        </div>
        <div className='d-flex justify-content-center align-items-center align-content-center gap-3 p-2'>
          <a className='btn btn-outline-primary' href="tel:01002145007">01002145007</a>
          <a className='btn btn-outline-primary' href="tel:01220088558">01220088558</a>
          <a className='btn btn-outline-primary' href="tel:01118781896">01118781896</a>
        </div>
      </Container>
    </Container>
    <div className='bg-primary text-white p-5 text-center'>
    هام جدا لجميع زوار موقعنا برجاء العلم اننا نقوم بصيانة جميع ماركات الاجهزة المنزلية الكهربائية ولا نتبع اي توكيلات تجارية او شركات مصنعة ولا ندعي ذلك وجميع ما تم ذكره في هذا الموقع من كلمات او عبارات مثل توكيل أو مركز أو خدمة عملاء أو شركة او وكيل معتمد او رسمي ما هي إلا كلمات دلالية لمحرك البحث لمساعدتكم في الوصول الينا .. وهذا إخلاء مسؤولية منا تجاه زوار الموقع وحرصا على عدم خداعكم .. شكرا لتفهمكم
    </div>
    </>)}
    </>
  )
}

export default App
