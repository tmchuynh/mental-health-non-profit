import { HelplineList } from "../../components/HelplineList";

export default function Helplines() {
  return (
    <div className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12">
      <h1>Crisis Helplines and Immediate Support</h1>
      <h5>Reach out. Help is always available.</h5>
      <p>
        If you or someone you know is in crisis, you don’t have to face it
        alone. This page provides a list of trusted, confidential helplines
        available 24/7—staffed by trained professionals who are ready to listen,
        support, and help you take the next step. Whether you’re struggling with
        suicidal thoughts, emotional distress, abuse, or overwhelming anxiety,
        there’s someone ready to hear you. Your safety matters. Please reach
        out.
      </p>
      <HelplineList />
    </div>
  );
}
