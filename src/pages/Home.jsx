export default function Home({ setCurrentPage }) {
  return (
    <div className="home-page">
      <h1> Welcome to HearthGreen </h1>
      <p>
        HearthGreen brings the calm of living greenery into your home with
        plants selected for their resilience, beauty, and easy of care. Whether
        you're starting your first indoor jungle or adding a finishing touch to
        a room, each plant is matched with clear guidance so you know exactly
        how to help it thrive. Transform your space with pieces of nature that
        grow with you.
      </p>
      <button onClick={() => setCurrentPage("product")}>Get Started</button>
    </div>
  );
}
