import { faqConstants } from "../../constants/Documents"
const Faq = () => {
  return (
    <div>
        <h2>{faqConstants.title}</h2>
        <p>{faqConstants.content}</p>
    </div>
  )
}

export default Faq