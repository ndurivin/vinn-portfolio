import "./services.css";
import Card from "../../components/Card";
import data from './data';

const Services = () => {
  return (
    <section id="services">
      <h2>My Services</h2>
      <p>I offer you the best of quality in the services below.</p>
      <div className="container services__container">
        {data.map(item => (
          <Card key={item.id} className='service light'>
            <div className="service__icon">{item.icon}</div>
            <div className="service__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
