import "./table.scss";

const Table = () => {
  const tableData = [
    {
      id: "1",
      timing: "11:00 - 11:15",
      capacity: "1",
    },
    {
      id: "2",
      timing: "11:15 - 11:30",
      capacity: "1",
    },
    {
      id: "3",
      timing: "11:30 - 11:45",
      capacity: "2",
    },
    {
      id: "4",
      timing: "11:45 - 12:00",
      capacity: "2",
    },
  ];

  return (
    <div className="table">
      <div className="table_header table_row">
        <div className="table_item">
          <div className="sn"></div>
          Slot Timing
        </div>
        <div className="table_item">Seating Capacity</div>
        <div className="table_item">Manage</div>
      </div>
      {tableData.map((item) => (
        <div className="table_row table_body" key={item.id}>
          <div className="table_item">
            <div className="sn">
              <input type="checkbox" />
            </div>
            {item.timing}
          </div>
          <div className="table_item">{item.capacity}</div>
          <div className="table_item icon">
            <ion-icon name="pencil"></ion-icon>
            <ion-icon name="trash"></ion-icon>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
