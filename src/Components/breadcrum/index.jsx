import "./breadcrum.scss";

const Breadcrum = () => {
  return (
    <div className="breadcrum">
      <div className="breadcrum_left">
        <div className="breadcrum_icon">
          <img src="images/menu.png" alt="menu" />
        </div>
        <div className="breadcrum_title">Create slots</div>
      </div>
      <ul className="breadcrum_list">
        <li className="breadcrum_item home">
          <ion-icon name="apps"></ion-icon>
        </li>
        <li className="breadcrum_item">Appointments</li>
        <li className="breadcrum_item active">Create Slots</li>
      </ul>
    </div>
  );
};

export default Breadcrum;
