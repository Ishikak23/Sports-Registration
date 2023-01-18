const ShowAlert = (props) => {
    const {
        title,
        description,
    }=props
  return (
    <div
      style={{
        width: "30%%",
        position: "fixed",
        top: 20,
        right: 10,
      }}
    >
      <div
        style={{
          backgroundColor: "#FDEDED",
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <i
          class="fas fa-exclamation-circle"
          style={{ fontSize: "20px", color: "#d32f2f", margin: "auto" }}
        ></i>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FDEDED",
              color: "#5F2120",
              size: "15px",
            }}
          >
          <strong>{title}</strong>
            
          </div>

          <div
            style={{
              backgroundColor: "#FDEDED",
              color: "#5F2120",
              size: "13px",
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAlert;
