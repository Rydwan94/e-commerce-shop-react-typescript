// Komponent używający dokumentu
import { RegulationsConstants } from "../../constants/Documents";

const Regulations = () => {
  return (
    <div>
      <h2>{RegulationsConstants.title}</h2>
      <p>{RegulationsConstants.content}</p>
    </div>
  );
};

export default Regulations;
