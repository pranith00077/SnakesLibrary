
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Activity,
  MapPin,
  Ruler,
  Clock,
  Utensils,
  Shield,
  Leaf,
} from "lucide-react";

import { snakes } from "../data/snakes";

export default function SnakeDetails() {
  const { id } = useParams();

  const snake = snakes.find((item) => item.id === id);

  if (!snake) {
    return (
      <main className="container">
        <h2>Snake not found</h2>
        <Link to="/">Back to Snake Index</Link>
      </main>
    );
  }

  const listValue = (value) => {
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return value || "Not available";
  };

  return (
    <main className="snake-profile container">

      <Link to="/" className="profile-back">
        <ArrowLeft size={18} />
        Back to Snake Index
      </Link>

      {/* HERO SECTION */}
      <section className="profile-hero">

        <div className="profile-image">
          <img src={snake.image} alt={snake.name} />
        </div>

        <div className="profile-intro">
          <span className="section-tag">SPECIES PROFILE</span>

          <h1>{snake.name}</h1>

          <p className="profile-scientific">
            {snake.scientificName}
          </p>

          <div className="profile-badges">
            <span className={snake.venomous ? "badge-danger" : "badge-safe"}>
              {snake.venomous ? "VENOMOUS" : "NON-VENOMOUS"}
            </span>

            <span className="badge-category">
              {snake.category || "Other"}
            </span>

            <span className="badge-category">
              {snake.family}
            </span>
          </div>

          <p className="profile-description">
            {snake.description}
          </p>
        </div>

      </section>

      {/* QUICK INFORMATION */}
      <section className="profile-quick-info">

        <div>
          <Ruler />
          <span>Average Length</span>
          <strong>{snake.averageLength || snake.length || "N/A"}</strong>
        </div>

        <div>
          <MapPin />
          <span>Distribution</span>
          <strong>{snake.distribution || "N/A"}</strong>
        </div>

        <div>
          <Clock />
          <span>Lifespan</span>
          <strong>{snake.lifespanWild || snake.lifespan || "N/A"}</strong>
        </div>

        <div>
          <Activity />
          <span>Activity</span>
          <strong>{snake.activity || "N/A"}</strong>
        </div>

      </section>

      {/* SCIENTIFIC CLASSIFICATION */}
      <section className="profile-section">
        <span className="section-tag">TAXONOMY</span>
        <h2>Scientific Classification</h2>

        <div className="taxonomy-list">
          <div><span>Class</span><strong>{snake.class || "N/A"}</strong></div>
          <div><span>Order</span><strong>{snake.order || "N/A"}</strong></div>
          <div><span>Family</span><strong>{snake.family || "N/A"}</strong></div>
          <div><span>Genus</span><strong>{snake.genus || "N/A"}</strong></div>
          <div><span>Species</span><strong>{snake.species || snake.scientificName}</strong></div>
        </div>
      </section>

      {/* PHYSICAL CHARACTERISTICS */}
      <section className="profile-section">
        <span className="section-tag">PHYSICAL DETAILS</span>
        <h2>Physical Characteristics</h2>

        <div className="profile-info-grid">
          <div className="profile-info-card">
            <span>Average Length</span>
            <strong>{snake.averageLength || snake.length || "N/A"}</strong>
          </div>

          <div className="profile-info-card">
            <span>Maximum Length</span>
            <strong>{snake.maximumLength || "N/A"}</strong>
          </div>

          <div className="profile-info-card">
            <span>Average Weight</span>
            <strong>{snake.averageWeight || "N/A"}</strong>
          </div>

          <div className="profile-info-card">
            <span>Lifespan</span>
            <strong>{snake.lifespanWild || snake.lifespan || "N/A"}</strong>
          </div>
        </div>
      </section>

      {/* HABITAT */}
      <section className="profile-section">
        <span className="section-tag">NATURAL ENVIRONMENT</span>
        <h2>Habitat & Distribution</h2>

        <div className="profile-info-card">
          <MapPin />
          <h3>Habitat</h3>
          <p>{listValue(snake.habitat)}</p>
        </div>

        <div className="profile-info-card">
          <h3>Geographical Distribution</h3>
          <p>{snake.distribution || "N/A"}</p>
        </div>
      </section>

      {/* DIET */}
      <section className="profile-section">
        <span className="section-tag">FEEDING BEHAVIOUR</span>
        <h2>Diet & Hunting</h2>

        <div className="profile-info-card">
          <Utensils />
          <h3>Diet</h3>
          <p>{listValue(snake.diet)}</p>
        </div>

        <div className="profile-info-card">
          <h3>Hunting Method</h3>
          <p>{snake.huntingMethod || "N/A"}</p>
        </div>
      </section>

      {/* REPRODUCTION */}
      <section className="profile-section">
        <span className="section-tag">LIFE CYCLE</span>
        <h2>Reproduction</h2>

        <div className="profile-info-grid">
          <div className="profile-info-card">
            <span>Reproduction Type</span>
            <strong>{snake.reproduction || "N/A"}</strong>
          </div>

          <div className="profile-info-card">
            <span>Clutch / Birth Size</span>
            <strong>{snake.clutchSize || "N/A"}</strong>
          </div>
        </div>
      </section>

      {/* VENOM */}
      <section className="profile-section">
        <span className="section-tag">VENOM INFORMATION</span>
        <h2>Venom & Safety</h2>

        <div className="profile-info-card">
          <Shield />
          <h3>Venom Type</h3>
          <p>{snake.venomType || "Non-venomous"}</p>
          <p>{snake.venomDetails || "This species is not venomous."}</p>
        </div>
      </section>

      {/* CONSERVATION */}
      <section className="profile-section">
        <span className="section-tag">WILDLIFE STATUS</span>
        <h2>Conservation</h2>

        <div className="profile-info-grid">
          <div className="profile-info-card">
            <Leaf />
            <span>Conservation Status</span>
            <strong>{snake.conservationStatus || "N/A"}</strong>
          </div>

          <div className="profile-info-card">
            <span>Population Trend</span>
            <strong>{snake.populationTrend || "N/A"}</strong>
          </div>
        </div>

        <div className="profile-info-card">
          <h3>Major Threats</h3>
          <p>{listValue(snake.majorThreats)}</p>
        </div>
      </section>

      {/* INTERESTING FACTS */}
      <section className="profile-section">
        <span className="section-tag">DID YOU KNOW?</span>
        <h2>Interesting Facts</h2>

        <div className="profile-facts">
          {(snake.facts || []).map((fact, index) => (
            <div className="profile-fact" key={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{fact}</p>
            </div>
          ))}
        </div>
      </section>

      <Link to="/" className="profile-back bottom-back">
        <ArrowLeft size={18} />
        Return to Snake Index
      </Link>

    </main>
  );
}
