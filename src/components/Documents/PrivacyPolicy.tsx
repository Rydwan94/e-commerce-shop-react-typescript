import { privacyPolicyConstants } from "../../constants/Documents"

const PrivacyPolicy = () => {
  return (
    <div>
        <h2>{privacyPolicyConstants.title}</h2>
        <p>{privacyPolicyConstants.content}</p>
    </div>
  )
}

export default PrivacyPolicy