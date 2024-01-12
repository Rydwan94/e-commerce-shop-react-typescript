import React from "react";
import { useParams } from "react-router-dom";
import { documentsConstants } from "../../constants/Documents";
import { RiMessage2Line } from "react-icons/ri"; // Import ikony wiadomości

const SingleDocument: React.FC = () => {
  const { title } = useParams();
  const document = documentsConstants.find(
    (doc) => doc.title.toLowerCase() === title?.toLowerCase()
  );

  if (!document) {
    return (
      <div className="flex justify-center min-h-screen text-2xl font-bold mt-12 animate-fade-right ">
        <RiMessage2Line className="mr-2" />
        Help Center
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mt-8 lg:max-w-7xl lg:mx-auto max-lg:px-10 animate-fade-left">
      <h2 className="text-3xl font-bold mb-4">{document.title}</h2>
      <p className="text-secondTextColor">{document.content}</p>
    </div>
  );
};

export default SingleDocument;