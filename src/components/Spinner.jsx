import SpinnerImg from '../assets/img/spinner.gif';

function Spinner() {
  return (
    <div className="">
      <img className="w-16 md:w-24 mx-auto" src={SpinnerImg} alt="Loading" />
    </div>
  );
}

export default Spinner;
