import { useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

export default function App() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div>
      <h1>Comment Submission</h1>
      <CommentForm setSubmittedData={setSubmittedData} />

      {submittedData && (
        <Comment
          fullName={submittedData.fullName}
          remarks={submittedData.remarks}
          rating={submittedData.rating}
        />
      )}
    </div>
  );
}
