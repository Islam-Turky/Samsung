import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
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
import img4 from './assets/6.jpg'
import img5 from './assets/pc-with-text.webp'
import img6 from './assets/fridge.jpeg'
// import img7 from './assets/b.jpg'
import img8 from './assets/f.jpeg'
import img9 from './assets/w.jpg'
import vod from './assets/143859_vodafone_icon.png'
import et from './assets/etisalat-seeklogo.svg'
import mob from './assets/Orange_Egypt-Logo.wine.svg'

function App() {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  return (
    <>
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
          <img src="/samsung.svg" alt="logo" width={150} height={50} />
        </Navbar.Brand>
        </Navbar>
    <Container id='home'>
    <Carousel autoPlay className='mt-5' >
        <div>
            <img src={img1} />
            <p className="legend">صيانة بوتاجازات</p>
        </div>
        <div>
            <img src={img2} />
            <p className="legend">صيانة غسالات</p>
        </div>
        <div>
            <img src={img3} />
            <p className="legend">صيانة الأحهزه المنزلية</p>
        </div>
    </Carousel>
{/* sdsd */}
    </Container>
    <Container id='who'>
    <h1 className='text-center p-4 bg-primary text-light rounded'>من نحن</h1>
      <div className='text-end fs-4 p-4'>نحن مركز صيانة سامسونج لصيانة جميع أعطال الأجهزه المنزلية         يقدم مركز خدمة صيانة سامسونج صيانة متكاملة من افضل مراكز الصيانة الموجودة في مصر حاليا حيث أنها تقدم صيانة متميزة عالية من الدقة في جميع أجهزة سامسونج ضمن كفاءة عالية من الخبرة والدقة والتميز في صيانات الثلاجات كما نعمل علي بذل الجهد من أجل راحة العميل كما يقدم فريق المهندسين لدينا صيانة لكافة الاعطال الموجودة في الجهاز من اعطال تسريب المياة وتسريب الغاز وكثيرا من الاعطال الاخري كما يوجد لدينا استبدال قطع الغيار بأخري اصلية ومن بلد منشأة ويوجد لدينا ضمان علي قطع الغيار ، كما تقدم صيانة سامسونج فريق دعم متكامل لإصلاح كافة اعطال أجهزة سامسونج المنزلية ، وكما يوجد لدينا دورات شهرية مجانية من أجل راحة عملائنا ، كما نقدم ضمان عام كامل علي كافة الإصلاحات كما يوجد لدينا أسطول متحرك للتواصل مع عملائنا في اسرع وقت ممكن
      </div>
    <h1 className='text-end'>مركز صيانة سامسونج</h1>
    <Card.Img variant="top" src={img4} />
      <div className='text-end fs-4 p-4'>
      تعد واحداً من أكثر التوكيلات نجاحاً ونموّاً في قطاع الأجهزة الكهربائية المنزلية وصيانتها في العالم ومصر ، وتحرص سامسونج كرائد في مجال بيع وصيانة الأجهزة الكهربائية المنزلية المعاصرة بالاهتمام بالعملاء ، والانتماء والحرص على الأصالة.وذلك عن طريق فهم عملائنا واحتياجاتهم، وتقديم الحلول المثلى والتجارب الجديدة لهم من خلال الابتكار المستمر، الذي يساعدهم على الوصول إلى نمط حياةٍ أفضل فى مختلف قطاعات المنزل العصرى من بيع و صيانة الأجهزة الكهربائية كالغسالات والثلاجات والديب فريزر والمجففات والميكرويف.

إضافة إلى ذلك، نحن نسعى في سامسونج للوصول إلى عملاءٍ جدد، آخذين بعين الاعتبارحبهم للاكتشاف والقيام بالأنشطة الجديدة المختلفة وسعيهم الدائم إلى حياةٍ أفضل, ولذلك فقد قمنا بتطوير علامتنا التجارية تدريجياً وبشكل مستمر وذلك فقد قمنا بطرح بموقع صيانة سامسونج جميع المعلومات المتعلقة بمركز صيانة سامسونج ، حيث يعتبر مركز صيانة سامسونج من أفضل المراكز التي تقدم خدمات صيانة لجميع منتجات شركة سامسونج ، فمن خلال خدمة عملاء سامسونج ؛ يمكنك الحصول على أفضل خدمه اصلاح بمصر ، فتوكيل صيانة سامسونج يضم أفضل الخبراء والمتخصصين في صيانة جميع منتجات شركة سامسونج حصرياً ، والمركز معتمد وحاصل على توكيل صيانة من شركة سامسونج الرئيسية ، وحرصا على تقديم أفضل الخدمات وحرصا على العملاء يقدم لهم المركز أفضل الخبرات في الصيانة والدعم الفني والكفاءة العالية وفي نفس الوقت مع أسعار مناسبة لجميع العملاء
      </div>
    <h1 className='text-end'>صيانة ثلاجات سامسونج</h1>
    <Card.Img variant="top" src={img5} />

      <div className='text-end fs-4 p-4'>
      تقدم سامسونج قسم خاص لصيانة ثلاجات وديب فريزرات سامسونج الذى تعد من أفضل الأنواع المتواجدة فى العالم ومصر. حيث يقدم فريق المهندسين المتميز لديها بصيانة كافة الأعطال من اعطال الترموستات, اعطال تسريب المياه وتسريب الغاز من الثلاجة والديب فريزر, اعطال تكوين الثلج فى الفريزر واعطال ماتور الثلاجة والأعطال فى الأجزاء المختلفة للثلاجة والديب فريزر وتغيير قطع الغياربأخرى أصلية من بلد المنشأ أذا لزم الأمر. كما تقدم صيانة سامسونج خدمة الصيانة المنزلية لجميع عملاء سامسونج ( غسالات ملابس – غسالة اطباق – ثلاجات – ديب فريزر – ميكروويف – مجفف ملابس ) وذلك عن طريق فروعنا المتخصصة لخدمة عملائنا بجميع محافظات الجمهورية طوال ايام الاسبوع .كما توفر خدمة عملاء سامسونج فريق من افراد الدعم الفني جاهز دائما لتلقي بلاغات الاعطال والصيانة والاسئلة المتكررة بطريقة تشغيل الجهاز وايضا اسعار قطع الغيار وطريقة ارشاد العميل لاصلاح جهازه بنفسه في حالة الاعطال البسيطة التي لا تستدعي القلق وتذكر دائما ان فريق خدمة عملاء سامسونج مستعد دائما لخدمتك في جميع ايام الاسبوع وطوال ايام السنة على ارقام شركة سامسونج الساخنة
      </div>
    <h1 className='text-end'>صيانة غسالات سامسونج</h1>
    <Card.Img variant="top" src={img6} />

      <div className='text-end fs-4 p-4'>
      تتميز سامسونج في عالم الغسالات بابتكارات خاصة ومبهرة، كما تقدم خدماتها لشرائح واسعة من العملاء، سواء من خلال تصميماتها التي تلبي احتياجات مختلفة من حيث المساحة والجمالية، أو من خلال السعات الكبيرة والمتوسطة والصغيرة، كما تقدم خدمة صيانة متميزة لجميع منتاجاتها من الغسالات الأتوماتيك و الفوق أتوماتيك والمجففات ومعالجة جميع الأعطال بأسرع وقت ممكن من أجل راحة عملائها . لدي مركز صيانة سامسونج من هم علي درجة عاليه من المهارة من مهندسين وفنيين ويدركوا جميع التفاصيل الفنية ومدربين من قبل التوكيل الرسمى للقيام بجميع اعمال الصيانه مع تقديم ضمان متجدد علي جميع الاعطال بالاضافة الى ان توكيل سامسونج يضمن لكم حصولكم علي صيانه مجانية في حالة حدوث اي من الاعطال الغير متوقعة نتيجة الصيانة ومعنا سوف تكون اجهزتكم في امان وسوف تحصل علي صيانه وتغيير لاي من قطع الغيار عند الضرورة اتصل بنا على رقم الخط الساخن.
      </div>
    <h1 className='text-end'>صيانة الأجهزة المنزليه</h1>
    <Card.Img variant="top" src={img8} />

      <div className='text-end fs-4 p-4'>
      تتميز سامسونج في عالم الغسالات بابتكارات خاصة ومبهرة، كما تقدم خدماتها لشرائح واسعة من العملاء، سواء من خلال تصميماتها التي تلبي احتياجات مختلفة من حيث المساحة والجمالية، أو من خلال السعات الكبيرة والمتوسطة والصغيرة، كما تقدم خدمة صيانة متميزة لجميع منتاجاتها من الغسالات الأتوماتيك و الفوق أتوماتيك والمجففات ومعالجة جميع الأعطال بأسرع وقت ممكن من أجل راحة عملائها . لدي مركز صيانة سامسونج من هم علي درجة عاليه من المهارة من مهندسين وفنيين ويدركوا جميع التفاصيل الفنية ومدربين من قبل التوكيل الرسمى للقيام بجميع اعمال الصيانه مع تقديم ضمان متجدد علي جميع الاعطال بالاضافة الى ان توكيل سامسونج يضمن لكم حصولكم علي صيانه مجانية في حالة حدوث اي من الاعطال الغير متوقعة نتيجة الصيانة ومعنا سوف تكون اجهزتكم في امان وسوف تحصل علي صيانه وتغيير لاي من قطع الغيار عند الضرورة اتصل بنا على رقم الخط الساخن.

      </div>
    </Container>
    <Container id='service'>
      <h1 className='text-center p-4 bg-primary text-light rounded'>خدماتنا</h1>
    </Container>
    <Container className='d-flex justify-content-evenly align-items-center align-content-center flex-wrap gap-3'>
    <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title className='text-end'>صيانة الأجهزه المنزلية</Card.Title>
        <Card.Text className='text-end'>
        يقدم مركز خدمة صيانة سامسونج صيانة متكاملة من افضل مراكز الصيانة الموجودة في مصر حاليا حيث أنها تقدم صيانة متميزة عالية من الدقة في جميع أجهزة سامسونج ضمن كفاءة عالية من الخبرة والدقة والتميز في صيانات الثلاجات كما نعمل علي بذل الجهد من أجل راحة العميل كما يقدم فريق المهندسين لدينا صيانة لكافة الاعطال الموجودة في الجهاز من اعطال تسريب المياة وتسريب الغاز وكثيرا من الاعطال الاخري كما يوجد لدينا استبدال قطع الغيار بأخري اصلية ومن بلد منشأة ويوجد لدينا ضمان علي قطع الغيار ، كما تقدم صيانة سامسونج فريق دعم متكامل لإصلاح كافة اعطال أجهزة سامسونج المنزلية ، وكما يوجد لدينا دورات شهرية مجانية من أجل راحة عملائنا ، كما نقدم ضمان عام كامل علي كافة الإصلاحات كما يوجد لدينا أسطول متحرك للتواصل مع عملائنا في اسرع وقت ممكن
        </Card.Text>
      </Card.Body>
      <Card.Body className='text-center'>
        <Card.Link className='btn btn-primary' href="#contact">إتصل بنا</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src={img8} />
      <Card.Body>
        <Card.Title className='text-end'>صيانة ثلاجة سامسونج</Card.Title>
        <Card.Text className='text-end'>
        يقدم مركز خدمة صيانة سامسونج صيانة متكاملة من افضل مراكز الصيانة الموجودة في مصر حاليا حيث أنها تقدم صيانة متميزة عالية من الدقة في جميع أجهزة سامسونج ضمن كفاءة عالية من الخبرة والدقة والتميز في صيانات الثلاجات كما نعمل علي بذل الجهد من أجل راحة العميل كما يقدم فريق المهندسين لدينا صيانة لكافة الاعطال الموجودة في الجهاز من اعطال تسريب المياة وتسريب الغاز وكثيرا من الاعطال الاخري كما يوجد لدينا استبدال قطع الغيار بأخري اصلية ومن بلد منشأة ويوجد لدينا ضمان علي قطع الغيار ، كما تقدم صيانة سامسونج فريق دعم متكامل لإصلاح كافة اعطال أجهزة سامسونج المنزلية ، وكما يوجد لدينا دورات شهرية مجانية من أجل راحة عملائنا ، كما نقدم ضمان عام كامل علي كافة الإصلاحات كما يوجد لدينا أسطول متحرك للتواصل مع عملائنا في اسرع وقت ممكن
        </Card.Text>
      </Card.Body>
      <Card.Body className='text-center'>
        <Card.Link className='btn btn-primary' href="#contact">إتصل بنا</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src={img9} />
      <Card.Body>
        <Card.Title className='text-end'>صيانة عساله سامسونج</Card.Title>
        <Card.Text className='text-end'>
        يقدم مركز خدمة صيانة سامسونج صيانة متكاملة من افضل مراكز الصيانة الموجودة في مصر حاليا حيث أنها تقدم صيانة متميزة عالية من الدقة في جميع أجهزة سامسونج ضمن كفاءة عالية من الخبرة والدقة والتميز في صيانات الثلاجات كما نعمل علي بذل الجهد من أجل راحة العميل كما يقدم فريق المهندسين لدينا صيانة لكافة الاعطال الموجودة في الجهاز من اعطال تسريب المياة وتسريب الغاز وكثيرا من الاعطال الاخري كما يوجد لدينا استبدال قطع الغيار بأخري اصلية ومن بلد منشأة ويوجد لدينا ضمان علي قطع الغيار ، كما تقدم صيانة سامسونج فريق دعم متكامل لإصلاح كافة اعطال أجهزة سامسونج المنزلية ، وكما يوجد لدينا دورات شهرية مجانية من أجل راحة عملائنا ، كما نقدم ضمان عام كامل علي كافة الإصلاحات كما يوجد لدينا أسطول متحرك للتواصل مع عملائنا في اسرع وقت ممكن
        </Card.Text>
      </Card.Body>
      <Card.Body className='text-center'>
        <Card.Link className='btn btn-primary' href="#contact">إتصل بنا</Card.Link>
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
                          <a className='rounded'  href="tel:01002145007"><img src={vod} alt="vodafone" width={80} /></a>
                          <a className='rounded'  href="tel:01220088558"><img src={mob} alt="orange" width={150} /></a>
                          <a className='rounded'  href="tel:01118781896"><img src={et} alt="etisalat" width={100} /></a>
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
    </>
  )
}

export default App
