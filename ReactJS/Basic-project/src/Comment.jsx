export default function Comment({ fullName, remarks, rating }) {
  return (
    <div>
      <h3>Submitted Comment:</h3>
      <p><strong>Name:</strong> {fullName}</p>
      <p><strong>Remarks:</strong> {remarks}</p>
      <p><strong>Rating:</strong> {rating}</p>
    </div>
  );
}
