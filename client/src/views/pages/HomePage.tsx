import { useSelector } from "react-redux";
import { RootState } from "../../store";
const patient = require("../../images/patient-gif.gif").default;
const earning = require("../../images/earning-gif.gif").default;
const appointment = require("../../images/appointment-gif.gif").default;
const operation = require("../../images/user-gif.gif").default;

const HomePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="homepage-container">
      <h1>DASHBOARD</h1>
      <div className="homepage-menu">
        <div className="hpmenu">
          <p>Manage</p>
        </div>
        <div className="hpmenu">
          <p>Doctors</p>
        </div>
        <div className="hpmenu">
          <p>Forms</p>
        </div>
      </div>
      <div className="homepage-graphs">
        <div className="hpgraphs">
          <h3>Patients</h3>
          <p>643</p>
          <div className="img-wrap">
            <img src={patient} alt="patient" />
          </div>
        </div>
        <div className="hpgraphs">
          <h3>Appointments</h3>
          <p>520</p>
          <div className="img-wrap">
            <img src={appointment} alt="appointment" />
          </div>
        </div>
        <div className="hpgraphs">
          <h3>Operations</h3>
          <p>270</p>
          <div className="img-wrap">
            <img src={operation} alt="operation" />
          </div>
        </div>
        <div className="hpgraphs">
          <h3>Total Earnings</h3>
          <p>5600</p>
          <div className="img-wrap">
            <img src={earning} alt="earning" />
          </div>
        </div>
      </div>
      <div className="homepage-fields">
        <div className="hpfields">
          <h3>Statistic Summary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet
            laboriosam dolore sed asperiores enim perferendis fugit saepe,
            itaque illo dolores similique eum nisi, repellat consequuntur
            provident beatae. Tempora, ipsum.
          </p>
        </div>
        <div className="hpfields">
          <h3>Statistic Summary</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            earum est ad animi debitis non commodi soluta cupiditate. Sed rerum
            a sapiente iusto eos, molestiae assumenda cupiditate alias magnam
            quisquam nostrum, esse unde placeat, ducimus ipsam! Quis, vero
            delectus nihil excepturi ipsam minus consequatur voluptatibus vitae
            quo, repudiandae possimus doloremque sunt voluptate ullam reiciendis
            quod unde quas obcaecati exercitationem error!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
