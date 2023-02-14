import { BsViewList } from 'react-icons/bs';
import { TbBrandAdobe } from 'react-icons/tb';
import { FiServer } from 'react-icons/fi';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';


const data = [
    {
        id: 1, icon: <TbBrandAdobe /> , title: 'UI/UX Design', desc:'I offer modern and intuitive designs. I apply the best industry-standard rules in making sure users have pleasure using the products.'
    },
    {
        id: 2, icon: <BsViewList /> , title: 'Front-end Development', desc: 'I will ensure your final product looks good and is accessible in all devices, including mobiles, tablets, and desktops.'
    },
    {
        id: 3, icon: <FiServer /> , title: 'Back-end Development', desc: 'The logis and seciruty of your business and product must be the priority. We take security seriously from the start of the project to its end. I ensure security and efficiency.'
    },
    {
        id: 4, icon: <MdOutlineMiscellaneousServices /> , title: 'IT Support', desc: 'A good product on a faulty system is not the right approach to follow. I will ensure that your systems are equally in their optimum states of operation, both in software and hardware aspecs.'
    }
]

export default data;