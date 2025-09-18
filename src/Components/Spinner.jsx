import "../Styles/Spinner.css";

function Spinner() {
  return (
    <div className="flex justify-center items-center py-50">
      <div className="lds-ellipsis" bis_skin_checked="1">
        <div bis_skin_checked="1"></div>
        <div bis_skin_checked="1"></div>
        <div bis_skin_checked="1"></div>
        <div bis_skin_checked="1"></div>
      </div>
    </div>
  );
}

export default Spinner;
