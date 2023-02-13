import "./about.css";
import { HiDownload } from 'react-icons/hi';
import Card from '../../components/Card';
import data from './about.js';
import headerpic from '../../assets/headerpic.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={headerpic} alt="about pic" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className="about__card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
            Working on projects and building them to completion in states 
            that my clients love is always my passion. Being in the IT industry for 3+
            years and serving numerous happy clients to satisfaction, I'm always
            motivated to do more and better!
          </p>
          <p>
            Hi, my name is Vinn Nduri from Nairobi, Kenya. I'm a full-stack web
            developer and IT technician. My top priority is to get your business
            and organization online in the right way; giving you
            industry-standard design and all the functionality you need to
            operate smoothly online. Get in touch today with the details of your
            project and let's get started in building the next great solutions.
            I also ensure that your IT systems and applications are optimaly operational
            and up to date with latest trends.
          </p>
          <a href="" download className="btn primary"> Download <HiDownload /></a>
        </div>
      </div>
    </section>
  );
};

export default About;
