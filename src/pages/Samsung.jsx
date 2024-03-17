import { Container, Typography } from "@mui/material";

const kiriazi = () => {
    return(
        <Container sx={{ marginTop: '50px' }}>
            <Typography variant="h5" sx={{ textAlign: 'center', fontWeight:"bold" }}>سامسونج مركز الدعم</Typography>
            <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '20px' }}>
            سواء كان ذلك إصلاح المنتج أو بعض المساعدة والمشورة فقط. يوجد أكثر من راكز دعم معتمدة عبر يمكنها مساعدتك. جميعهم مدربون بشكل كامل ويستخدمون قطع غيار أصلية من سامسونج في جميع الإصلاحات. ابحث عن نوع منتجك أدناه لترى كيف يمكنك الحصول على الدعم الشخصي الذي تحتاجه.
            </Typography>
        </Container>
    )
};

export default kiriazi;