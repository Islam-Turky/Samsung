import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { FaPhone } from "react-icons/fa6";
import img4 from '../assets/3.jpg'
import img5 from '../assets/4.jpg'
import img6 from '../assets/1.jpg'
import img8 from '../assets/5.jpg'
import img9 from '../assets/w.jpg'
import vod from '../assets/143859_vodafone_icon.png'
import et from '../assets/etisalat-seeklogo.svg'
import mob from '../assets/Orange_Egypt-Logo.wine.svg'
import MyCarousel from '../components/Carousel';
import {TextTyping} from  "../components/TextTyping";

const Home = () => {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    return(
        <>
        <MyCarousel />
        <Container id='who' className='mt-4'>
        <h1 className='text-center p-4 bg-danger text-light rounded'>من نحن</h1>
          <TextTyping text="نحن مركز صيانة شارب، نوفر صيانة متكاملة وعالية الجودة لجميع أجهزة شارب المنزلية، مع فريق مهندسين متخصص وضمان على قطع الغيار. نقدم دورات شهرية مجانية وضمان عامًا كاملاً على جميع الإصلاحات، بالإضافة إلى استجابة سريعة من خلال أسطول متحرك للتواصل مع العملاء." />
        <h1 className='text-end'>مركز صيانة شارب</h1>
        <Card.Img variant="top" src={img4} />
          <div className='text-end fs-4 p-4' dir='rtl'>تعد شارب رائدة في بيع وصيانة الأجهزة الكهربائية المنزلية، تقدم خدمات صيانة متميزة بفرق متخصصة وضمان عام على جميع الإصلاحات. حرصها على الابتكار المستمر يلبي احتياجات العملاء ويساعدهم على تحقيق حياة أفضل.</div>
        <h1 className='text-end'>صيانة ثلاجات شارب</h1>
        <Card.Img variant="top" src={img5} />
    
          <div className='text-end fs-4 p-4' dir='rtl'>
          تقدم شارب خدمات صيانة متميزة لثلاجات وديب فريزرات شارب، تشمل صيانة كافة الأعطال واستبدال قطع الغيار بأخرى أصلية. كما توفر خدمة صيانة منزلية لجميع الأجهزة المنزلية، مع فريق دعم فني جاهز لتلقي بلاغات الأعطال والإجابة على الاستفسارات طوال أيام الأسبوع.
          </div>
        <h1 className='text-end'>صيانة غسالات شارب</h1>
        <Card.Img variant="top" src={img6} />
    
          <div className='text-end fs-4 p-4' dir='rtl' >
          تتميز شارب بابتكارات مبهرة في عالم الغسالات وتقدم خدمات مميزة لجميع عملائها، مع تصميمات تناسب كافة الاحتياجات. تقدم صيانة سريعة وفعالة لجميع الأعطال بفريق مهني مدرب وضمان متجدد. توفر توكيل شارب صيانة مجانية للأعطال غير المتوقعة. اتصل بنا على الخط الساخن.
          </div>
        <h1 className='text-end'>صيانة الأجهزة المنزليه</h1>
        <Card.Img variant="top" src={img8} />
    
          <div className='text-end fs-4 p-4' dir='rtl'>صيانة الأجهزة المنزلية بكفاءة عالية، باستخدام قطع غيار أصلية، وضمان شامل على جميع الإصلاحات. فريق فني متخصص يستجيب بسرعة لتلبية احتياجات العملاء وضمان راحتهم.</div>
        </Container>
        <Container id='service'>
          <h1 className='text-center p-4 bg-danger text-light rounded'>خدماتنا</h1>
        </Container>
        <Container className='d-flex justify-content-evenly align-content-center flex-wrap gap-3'>
        <Card style={{ width: '26rem' }}>
          <Card.Img variant="top" src={img4} />
          <Card.Body>
            <Card.Title className='text-end'>صيانة الأجهزه المنزلية</Card.Title>
            <Card.Text className='text-end'>
            <ul dir='rtl'>
              <br />
              <h6 className='text-center text-white p-2 bg-danger' style={{ borderRadius: '6px' }}>خدمات صيانة سامسونج المتكاملة</h6>
              <li>تقديم صيانة متميزة عالية الجودة لجميع أجهزة سامسونج.</li>
              <li>استبدال قطع الغيار بأخرى أصلية وضمان عليها.</li>
              <li>دورات شهرية مجانية وضمان عام كامل.</li>
              <br />
            </ul>
            </Card.Text>
          </Card.Body>
          <Card.Body className='text-center'>
            <Card.Link className='btn btn-danger' href="#contact">إتصل بنا</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '26rem' }}>
          <Card.Img variant="top" src={img8} />
          <Card.Body>
            <Card.Title className='text-end'>صيانة ثلاجة شارب</Card.Title>
            <Card.Text className='text-end'>
            <ul dir='rtl'>
              <br />
              <h6 className='text-center text-white p-2 bg-danger' style={{ borderRadius: '6px' }}>فريق المهندسين المحترفين</h6>
              <li>صيانة كافة الأعطال بما في ذلك تسريب المياه والغاز.</li>
              <li>توفير أفضل الخبرات في الصيانة والدعم الفني.</li>
              <li>الالتزام بإراحة العميل.</li>
              <br />
            </ul>
            </Card.Text>
          </Card.Body>
          <Card.Body className='text-center'>
            <Card.Link className='btn btn-danger' href="#contact">إتصل بنا</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '26rem' }}>
          <Card.Img variant="top" src={img9} />
          <Card.Body>
            <Card.Title className='text-end'>صيانة غسالة شارب</Card.Title>
            <Card.Text className='text-end'>
            <ul dir='rtl'>
              <br />
              <h6 className='text-center text-white p-2 bg-danger' style={{ borderRadius: '6px' }}>الاستجابة السريعة والدعم</h6>
              <li>أسطول متحرك للتواصل مع العملاء بسرعة.</li>
              <li>خدمات صيانة موثوقة وفعالة في جميع أنحاء البلاد.</li>
              <li>تواصل معنا: 01220088558</li>
              <br />
            </ul>
            </Card.Text>
          </Card.Body>
          <Card.Body className='text-center'>
            <Card.Link className='btn btn-danger' href="#contact">إتصل بنا</Card.Link>
          </Card.Body>
        </Card>
        </Container>
        <Container className='p-5' id='contact'>
          <h1 className='text-center p-4 bg-danger text-light rounded'>تواصل معنا</h1>
          <Container>
            <div className='d-flex justify-content-evenly align-content-center align-items-center w-100 gap-1 flex-wrap'>
              <div className='mt-5'>
              <div class="mapswrapper"><iframe width="400" height="300" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=cairo&zoom=10&maptype=roadmap"></iframe></div>
              </div>
              <div className='w-50 h-100'>
                <h1 className='text-end'>فروعنا</h1>
                <ListGroup>
                  <ListGroup.Item className='text-end'>طنطا</ListGroup.Item>
                  <ListGroup.Item className='text-end'>القاهره</ListGroup.Item>
                  <ListGroup.Item className='text-end'>ألإسكندريه</ListGroup.Item>
                  <ListGroup.Item className='text-end'>بورسعيد</ListGroup.Item>
                  <ListGroup.Item className='text-end'>الزقازيق</ListGroup.Item>
                </ListGroup>
              </div>
            </div>
            <h1 className='text-end'>أرقامنا</h1>
            <div className='d-flex justify-content-center align-items-center align-content-center gap-3 p-2 position-fixed bottom-0 end-0 flex-column p-5'>
              <Row>
                <Col md={15}>
                <Button style={{  background: 'green' }} onClick={toggleShowA} className='rounded-circle'>
                <FaPhone fontSize={40}/>
                </Button>
                <Toast show={showA} onClose={toggleShowA}>
                  <Toast.Body className=' d-flex justify-content-evenly align-content-center align-items-center'>
                              <a className='rounded'  href="tel:01002145007"><img src={vod} alt="vodafone" width={80} /></a>
                              <a className='rounded'  href="tel:01220088558"><img src={mob} alt="orange" width={150} /></a>
                              <a className='rounded'  href="tel:01118781896"><img src={et} alt="etisalat" width={100} /></a>
                  </Toast.Body>
                </Toast>
              </Col>
            </Row>
              
            </div>
            <div className='d-flex justify-content-center align-items-center align-content-center gap-2 p-2'>
              <a className='btn btn-danger text-white' style={{ fontWeight: "bold" }} href="tel:01002145007">01002145007</a>
              <a className='btn btn-danger text-white' style={{ fontWeight: "bold" }} href="tel:01220088558">01220088558</a>
              <a className='btn btn-danger text-white' style={{ fontWeight: "bold" }} href="tel:01118781896">01118781896</a>
            </div>
          </Container>
        </Container>
        </>
    )
}

export default Home;

/*

<div class="mapswrapper"><iframe width="600" height="450" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=egypt%2Ccairo&zoom=10&maptype=roadmap"></iframe><a href="https://dodsafe.org">dod safe</a><style>.mapswrapper{background:#fff;position:relative}.mapswrapper iframe{border:0;position:relative;z-index:2}.mapswrapper a{color:rgba(0,0,0,0);position:absolute;left:0;top:0;z-index:0}</style></div>

 */