import { useParams } from "react-router-dom"
import { documentsConstants } from "../../constants/Documents"

const SingleDocument: React.FC = () => {

    const {title} = useParams()

    const document = documentsConstants.find(doc => doc.title.toLowerCase() === title?.toLocaleLowerCase());

    if(!document){
        return <div>HELP CENTER</div>
    }

  return (
    <div>
        <h2>{document?.title}</h2>
        <p>{document?.content}</p>
    </div>
  )
}

export default SingleDocument