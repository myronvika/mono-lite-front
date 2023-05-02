import Simulator from "./Simulator";
import Transactions from "./Transactions";
import "../../styles/user-page/Op_Container.css";

const Operations = function () {
  return (
    <div className="coop-container">
      <div className="transactions-container">
      <Transactions />
      </div>
      <div className="simulator-container">
      <Simulator />
      </div>
    </div>
  );
};

export default Operations;
