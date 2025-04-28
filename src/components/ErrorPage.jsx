import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";

function ErrorPage() {
  return (
    <div className="error-page">
      <PageTitle isErrorPage={true} />
      <p>This is a custom 404 error page.</p>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
}
export default ErrorPage;
