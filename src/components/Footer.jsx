import { Box, Typography, Divider } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return(
        <>
        <Box id="Footer">
            <div className="flogo">
                <img src="/Samsung_Logo.svg" alt="Samsung_Logo" />
                <Typography variant='p'>مجموعة مراكز صيانة سامسونج فى مصر تقدم خدماتها لصيانة أجهزة سامسونج ما بعد فترة الضمان.</Typography>
            </div>
            <div className="tcontent">
                <div className='it'>
                    <Typography variant='h4' sx={{ color: 'white' }}>صيانة سامسونج</Typography>
                    <div className='lis'>
                        <a href="#">الشروط و الأحكام</a>
                        <a href="#">رؤية الشركة</a>
                        <a href="#">شكاوى و مقترحات</a>
                    </div>
                </div>
                <div className='it'>
                    <Typography variant='h4' sx={{ color: 'white' }}>عن الشركة</Typography>
                    <div className='lis'>
                        <a href="#">وظائف</a>
                        <a href="#">طاقم العمل</a>
                        <a href="#">خدمات مميزة</a>
                    </div>
                </div>
                <div className='it'>
                    <Typography variant='h4' sx={{ color: 'white', textAlign: 'right' }}>تابعونا على</Typography>
                    <div className='list'>
                        <FacebookIcon sx={{ fontSize: '50px' }}/>
                        <InstagramIcon sx={{ fontSize: '50px' }}/>
                        <WhatsAppIcon sx={{ fontSize: '50px' }}/>
                        <TwitterIcon sx={{ fontSize: '50px' }}/>
                    </div>
                </div>
            </div>
        </Box>
        <Divider />
        <div className='endF' style={{height:"100%", width: '100%', background: 'GREY', fontSize: '20px', padding: '5px', textAlign: 'center', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>جميع الحقوق محفوظة صيانة سامسونج © 2018</div>
        </>
    )
}

export default Footer;