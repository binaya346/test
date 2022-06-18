import "./breadcrum.scss";

const Breadcrum = (props) => {
  return (
    <div className="breadcrum">
      <div className="breadcrum_left">
        <div className="breadcrum_icon">
          <img src="images/menu.png" alt="menu" />
        </div>
        <div className="breadcrum_title">{props.title}</div>
      </div>
      <ul className="breadcrum_list">
        <li className="breadcrum_item home">
          <ion-icon name="apps"></ion-icon>
        </li>
        {props.breadcrum.map((item) => (
          <li className="breadcrum_item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrum;
