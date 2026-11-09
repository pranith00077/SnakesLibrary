
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight } from "lucide-react";
import { snakes } from "../data/snakes";

/* Animated snake */
function Snake({ id, d, width, dur, begin = "0s", opacity = 1 }) {
  const common = { d, pathLength: 1000, fill: "none", strokeWidth: width };
  const t = { dur, begin, repeatCount: "indefinite" };
  const k = width / 44;

  return (
    <g opacity={opacity}>
      <defs>
        <path id={`${id}-path`} d={d} />
        <mask
          id={`${id}-mask`}
          maskUnits="userSpaceOnUse"
          x="-400"
          y="-200"
          width="2000"
          height="1000"
        >
          <path
            {...common}
            stroke="#fff"
            strokeLinecap="round"
            strokeDasharray="300 1000"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="300"
              to="-1000"
              {...t}
            />
          </path>
        </mask>
      </defs>

      {/* Glow */}
      <path
        {...common}
        stroke="#8cb99a"
        strokeOpacity="0.22"
        strokeWidth={width * 1.7}
        strokeLinecap="round"
        strokeDasharray="300 1000"
        filter="url(#snake-blur)"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="300"
          to="-1000"
          {...t}
        />
      </path>

      {/* Body */}
      <path
        {...common}
        stroke="url(#snake-body)"
        strokeLinecap="round"
        strokeDasharray="300 1000"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="300"
          to="-1000"
          {...t}
        />
      </path>

      {/* Body markings */}
      <g mask={`url(#${id}-mask)`}>
        <path
          {...common}
          stroke="#0a120c"
          strokeOpacity="0.55"
          strokeDasharray="4 9"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-1300"
            {...t}
          />
        </path>

        <path
          {...common}
          stroke="#d7f0dd"
          strokeOpacity="0.7"
          strokeWidth={width * 0.16}
          strokeLinecap="round"
          strokeDasharray="0 13"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-1300"
            {...t}
          />
        </path>

        <path
          {...common}
          stroke="#e9c46a"
          strokeOpacity="0.12"
          strokeWidth={width * 0.36}
          strokeDasharray="300 1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="300"
            to="-1000"
            {...t}
          />
        </path>
      </g>

      {/* Head */}
      <g>
        <animateMotion
          dur={dur}
          begin={begin}
          repeatCount="indefinite"
          rotate="auto"
          calcMode="linear"
          keyPoints="0;1;1"
          keyTimes="0;0.77;1"
        >
          <mpath href={`#${id}-path`} />
        </animateMotion>

        <g transform={`scale(${k})`}>
          <path
            d="M -8 -24 C 28 -32 62 -20 82 0 C 62 20 28 32 -8 24 Z"
            fill="url(#snake-head)"
            stroke="#a9d6b7"
            strokeOpacity="0.35"
          />

          {/* Brow ridges */}
          <path
            d="M 24 -17 Q 40 -22 54 -12"
            stroke="#0a120c"
            strokeOpacity="0.5"
            fill="none"
            strokeWidth="2"
          />

          <path
            d="M 24 17 Q 40 22 54 12"
            stroke="#0a120c"
            strokeOpacity="0.5"
            fill="none"
            strokeWidth="2"
          />

          {/* Eyes */}
          {[-13, 13].map((y) => (
            <g key={y}>
              <ellipse
                cx="40"
                cy={y}
                rx="9"
                ry="7"
                fill="#e9c46a"
                opacity="0.25"
                filter="url(#snake-blur-sm)"
              />

              <ellipse
                cx="40"
                cy={y}
                rx="6"
                ry="5.5"
                fill="#f2c14e"
              />

              <ellipse
                cx="41"
                cy={y}
                rx="1.5"
                ry="5"
                fill="#0a0f0b"
              >
                <animate
                  attributeName="ry"
                  values="5;5;5;0.4;5;5"
                  keyTimes="0;0.8;0.9;0.94;0.98;1"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </ellipse>
            </g>
          ))}

          {/* Nostrils */}
          <circle cx="72" cy="-4" r="1.4" fill="#0a120c" />
          <circle cx="72" cy="4" r="1.4" fill="#0a120c" />

          {/* Forked tongue */}
          <g transform="translate(82 0)">
            <animateTransform
              attributeName="transform"
              type="scale"
              additive="sum"
              values="1 1;1 1;0.15 1;1.15 1;1 1;1 1"
              keyTimes="0;0.55;0.62;0.72;0.8;1"
              dur="2.4s"
              repeatCount="indefinite"
            />

            <path
              d="M 0 0 L 26 0 M 26 0 L 40 -8 M 26 0 L 40 8"
              stroke="#e0503f"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </g>
      </g>
    </g>
  );
}

/* Hero section */
function SnakeHero({ count }) {
  const heroRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;

    if (svg && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      svg.pauseAnimations();
      svg.setCurrentTime(7);
    }
  }, []);

  const onMove = (e) => {
    const r = heroRef.current.getBoundingClientRect();

    heroRef.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    heroRef.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const letters = (word, offset) =>
    [...word].map((ch, i) => (
      <span key={i} style={{ "--i": offset + i }}>
        {ch}
      </span>
    ));

  return (
    <section
      className="hero snake-hero"
      ref={heroRef}
      onMouseMove={onMove}
    >
      <div className="hero-scales" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <svg
        ref={svgRef}
        className="snake-art"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="snake-body"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="1200"
            y2="0"
          >
            <stop offset="0" stopColor="#3f6a4a" />
            <stop offset="0.5" stopColor="#7fb08d" />
            <stop offset="1" stopColor="#a9d6b7" />
          </linearGradient>

          <radialGradient id="snake-head" cx="0.55" cy="0.5" r="0.7">
            <stop offset="0" stopColor="#b9e2c6" />
            <stop offset="1" stopColor="#4d7c58" />
          </radialGradient>

          <filter
            id="snake-blur"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="18" />
          </filter>

          <filter id="snake-blur-sm">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Distant snake */}
        <Snake
          id="far"
          d="M 1450 110 C 1200 40, 1100 200, 900 150 S 600 30, 420 120 S 120 210, -250 90"
          width={20}
          dur="26s"
          begin="-9s"
          opacity={0.38}
        />

        {/* Main snake */}
        <Snake
          id="main"
          d="M -250 470 C 50 470, 120 250, 330 300 S 520 570, 720 470 S 900 160, 1110 270 S 1330 430, 1500 340"
          width={44}
          dur="16s"
        />
      </svg>

      <span className="hero-tag">THE SNAKE INDEX</span>

      <h1>
        <span className="line">Discover the</span>

        <span className="wave" aria-label="World of Snakes.">
          <span className="word" aria-hidden="true">
            {letters("World", 0)}
          </span>{" "}

          <span className="word" aria-hidden="true">
            {letters("of", 5)}
          </span>{" "}

          <span className="word" aria-hidden="true">
            {letters("Snakes.", 7)}
          </span>
        </span>
      </h1>

      <p>
        Explore fascinating snake species, their habitats, characteristics
        and the secrets of their natural world.
      </p>

      <a className="hero-cta" href="#collection">
        Browse the species
      </a>

      <div className="hero-stats">
        <div>
          <strong>{String(count).padStart(2, "0")}</strong>
          <span>Species indexed</span>
        </div>

        <div>
          <strong>01</strong>
          <span>Living database</span>
        </div>
      </div>
    </section>
  );
}

/* Reset scroll when opening a snake */
function jumpToTop() {
  const reset = () => {
    const html = document.documentElement;

    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = "";
  };

  setTimeout(reset, 0);
  setTimeout(reset, 80);
}

/* Categories */
const categories = [
  "All Snakes",
  "Venomous",
  "Non-Venomous",
  "Cobras",
  "Vipers",
  "Pythons",
  "Anacondas",
  "Boas",
  "Kraits",
  "Sea Snakes",
  "Mambas",
  "Rat Snakes",
  "Water Snakes",
  "Pit Vipers",
  "Others",
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Snakes");

  /* Search + classification + snake category filtering */
  const filteredSnakes = snakes.filter((snake) => {
    const matchesSearch = `${snake.name} ${snake.scientificName} ${snake.family}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All Snakes" ||
      (category === "Venomous" && snake.venomous === true) ||
      (category === "Non-Venomous" && snake.venomous === false) ||
      snake.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="home-page container">
      <SnakeHero count={snakes.length} />

      <section className="index-section" id="collection">
        <div className="section-heading">
          <div>
            <span className="section-tag">SPECIES DIRECTORY</span>
            <h2>Snake Index</h2>
          </div>

          <span className="species-count">
            {filteredSnakes.length} species
          </span>
        </div>

        {/* Search */}
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search snake species..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category filters */}
        <div className="snake-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Snake cards */}
        <div className="snake-grid">
          {filteredSnakes.map((snake) => (
            <Link
              to={`/snake/${snake.id}`}
              className="snake-card"
              key={snake.id}
              onClick={jumpToTop}
            >
              <div className="card-image">
                <img
                  src={snake.image}
                  alt={snake.name}
                  loading="lazy"
                />

                <span className="venom-badge">
                  {snake.category}
                </span>

                <ArrowUpRight className="card-arrow" size={20} />
              </div>

              <div className="card-content">
                <span className="card-family">
                  {snake.family}
                </span>

                <h3>{snake.name}</h3>

                <p>{snake.scientificName}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filteredSnakes.length === 0 && (
          <div className="empty-state">
            No snake species found. Try a different search or category.
          </div>
        )}
      </section>

      <footer className="site-footer">
        <span>SNAKE INDEX</span>
        <p>A collection of fascinating reptile species.</p>
      </footer>
    </main>
  );
}
