import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <h1 className="app-title">This is simple react app</h1>
      </div>
      <div style={{ padding: "40px" }}>
        <section className="react-newsletter-section">
          <div className="react-newsletter-container">
            <div className="react-content-column">
              <h2>Herb Insider</h2>
              <p>
                Subscribe to Herb’s bi-weekly and monthly dose of cannabis
                updates and stay informed with the latest news, top strains,
                hottest products, and unbeatable deals.{" "}
              </p>
            </div>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="react-newsletter-input"
            ></input>
            <a className="react-subscribe-button" href="#">
              Subscribe
            </a>
          </div>
        </section>
        <div className="react-featured-article-container">
          <div className="react-featured-article">
            <div className="react-featured-article-image">
              <img src="src\assets\article 7.png"></img>
              <p className="featured-article-date-format">May 5th, 2025</p>
              <div className="featured-article-title-div">
                <h2 className="featured-article-title">
                  Cannabis Marketing <br /> Agencies Vs. General Digital <br />{" "}
                  Or Advertising Agencies
                </h2>
              </div>
            </div>
          </div>
          <div class="react-featuredright-column">
            <h2>Featured articles</h2>
            <div class="react-featured-article-right-column">
              <div class="react-flex-column">
                <div class="react-featured-article-right-column-image">
                  <img src="src\assets\Featured-articles-1.png"></img>
                </div>
                <div class="react-featured-article-right-content-column">
                  <p>June 20th, 2025</p>
                  <h3>
                    The Evolution of <br />
                    Stoner Games: From <br />
                    High School Classics to Modern Party Rituals
                  </h3>
                </div>
              </div>
              <div class="react-flex-column">
                <div class="react-featured-article-right-column-image">
                  <img src="src\assets\Featured-articles-2.png"></img>
                </div>
                <div class="react-featured-article-right-content-column">
                  <p>June 18th, 2025</p>
                  <h3>
                    How to Use a One-Hitter <br /> Like a Pro: Packing Tips,
                    <br /> Cleaning Tricks, and <br /> Stealth Strategies
                  </h3>
                </div>
              </div>
              <div class="react-flex-column">
                <div class="react-featured-article-right-column-image">
                  <img src="src\assets\Featured-articles-3.png"></img>
                </div>
                <div class="react-featured-article-right-content-column">
                  <p>June 13th, 2025</p>
                  <h3>
                    Why Does Weed Make <br /> Food Taste Better? The <br />{" "}
                    Science of the Munchies
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="react-latest-article-section-header">
          <h2>Latest articles</h2>
        </div>
        <div className="react-latest-article-section-content">
          <div className="react-latest-article-card">
            <div clasName="react-latest-article-card-image">
              <img src="src\assets\article 8.png"></img>
            </div>
            <div className="react-latest-article-card-title">
              <p>June 17th, 2025</p>
              <h3>
                How Different
                <br />
                Consumption Methods
                <br />
                Affect Your High
              </h3>
            </div>
          </div>
          <div className="react-latest-article-card">
            <div clasName="react-latest-article-card-image">
              <img src="src\article 10.png"></img>
            </div>
            <div className="react-latest-article-card-title">
              <p>June 13th, 2025</p>
              <h3>
                The Ultimate Chill Kit: <br />
                Everything You Need for <br /> the Perfect Smoke Sesh
              </h3>
            </div>
          </div>
        </div>
        <section className="react-learning-carrousel">
          <div class="swiper custom-react-swiper">
            <div className="react-learning-carrousel-header">
              <h2 className="react-learning-carrousel-header-heading">LEARN</h2>
              <div class="nav-buttons">
                <div class="nav-previous-button">
                  <svg
                    width="53px"
                    height="53px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-258.000000, -1089.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M281,1106 L270.414,1106 L274.536,1110.12 C274.926,1110.51 274.926,1111.15 274.536,1111.54 C274.145,1111.93 273.512,1111.93 273.121,1111.54 L267.464,1105.88 C267.225,1105.64 267.15,1105.31 267.205,1105 C267.15,1104.69 267.225,1104.36 267.464,1104.12 L273.121,1098.46 C273.512,1098.07 274.145,1098.07 274.536,1098.46 C274.926,1098.86 274.926,1099.49 274.536,1099.88 L270.414,1104 L281,1104 C281.552,1104 282,1104.45 282,1105 C282,1105.55 281.552,1106 281,1106 L281,1106 Z M274,1089 C265.164,1089 258,1096.16 258,1105 C258,1113.84 265.164,1121 274,1121 C282.836,1121 290,1113.84 290,1105 C290,1096.16 282.836,1089 274,1089 L274,1089 Z"
                          id="arrow-left-circle"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="nav-next-button">
                  <svg
                    width="53px"
                    height="53px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-310.000000, -1089.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z"
                          id="arrow-right-circle"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\image.png"></img>
                    <p>June 19th, 2025</p>
                    <h3>
                      {" "}
                      Does THC Sparkling
                      <br /> Water Work? Here’s <br /> What It Feels Like{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\image (2).png"></img>
                    <p>June 17th, 2025</p>
                    <h3>
                      {" "}
                      Dry Herb Vaporizer vs.
                      <br /> Oil Carts: Which Is
                      <br /> Healthier in 2025?
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\image (1).png"></img>
                    <p>June 16th, 2025</p>
                    <h3>
                      {" "}
                      High Standards: 7 Cannabis <br /> Products the Herb Team{" "}
                      <br /> Can’t Live Without{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\image (3).png"></img>
                    <p>June 19th, 2025</p>
                    <h3>
                      {" "}
                      5 LGBTQ+ Owned
                      <br />
                      Cannabis Brands To Support <br /> During Pride Month
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="react-learning-carrousel">
          <div class="swiper custom-react-swiper">
            <div className="react-learning-carrousel-header">
              <h2 className="react-learning-carrousel-header-heading">NEWS</h2>
              <div class="nav-buttons">
                <div class="nav-previous-button">
                  <svg
                    width="53px"
                    height="53px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-258.000000, -1089.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M281,1106 L270.414,1106 L274.536,1110.12 C274.926,1110.51 274.926,1111.15 274.536,1111.54 C274.145,1111.93 273.512,1111.93 273.121,1111.54 L267.464,1105.88 C267.225,1105.64 267.15,1105.31 267.205,1105 C267.15,1104.69 267.225,1104.36 267.464,1104.12 L273.121,1098.46 C273.512,1098.07 274.145,1098.07 274.536,1098.46 C274.926,1098.86 274.926,1099.49 274.536,1099.88 L270.414,1104 L281,1104 C281.552,1104 282,1104.45 282,1105 C282,1105.55 281.552,1106 281,1106 L281,1106 Z M274,1089 C265.164,1089 258,1096.16 258,1105 C258,1113.84 265.164,1121 274,1121 C282.836,1121 290,1113.84 290,1105 C290,1096.16 282.836,1089 274,1089 L274,1089 Z"
                          id="arrow-left-circle"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="nav-next-button">
                  <svg
                    width="53px"
                    height="53px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-310.000000, -1089.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z"
                          id="arrow-right-circle"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\news-image-1.png"></img>
                    <p>May 13th, 2025</p>
                    <h3>
                      {" "}
                      Will Trump Legalize Weed <br />
                      Federally? Analyzing the <br /> Possibilities Ahead{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\image 1.png"></img>
                    <p>May 7th, 2025</p>
                    <h3>
                      {" "}
                      Marc Emery: A Cannabis <br /> Activist’s Journey Through{" "}
                      <br />
                      Trials and Triumphs
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\news-image3.png"></img>
                    <p>April 14th, 2025</p>
                    <h3>
                      {" "}
                      Herb’s Digital 4/20 Scavenger <br /> Hunt Makes Cannabis
                      History <br /> With Massive Prize Pool
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\news-image4.png"></img>
                    <p>May 15th, 2025</p>
                    <h3>
                      {" "}
                      EdiblesExpress: Chicago’s <br />
                      Go-To Online Edible Store
                      <br />
                      Has Officially Launched
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="react-learning-carrousel">
          <div class="swiper custom-react-swiper">
            <div className="react-learning-carrousel-header">
              <h2 className="react-learning-carrousel-header-heading">
                CULTURE
              </h2>
              <div class="nav-buttons">
                <div class="nav-previous-button">
                  <svg
                    width="53px"
                    height="53px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-258.000000, -1089.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M281,1106 L270.414,1106 L274.536,1110.12 C274.926,1110.51 274.926,1111.15 274.536,1111.54 C274.145,1111.93 273.512,1111.93 273.121,1111.54 L267.464,1105.88 C267.225,1105.64 267.15,1105.31 267.205,1105 C267.15,1104.69 267.225,1104.36 267.464,1104.12 L273.121,1098.46 C273.512,1098.07 274.145,1098.07 274.536,1098.46 C274.926,1098.86 274.926,1099.49 274.536,1099.88 L270.414,1104 L281,1104 C281.552,1104 282,1104.45 282,1105 C282,1105.55 281.552,1106 281,1106 L281,1106 Z M274,1089 C265.164,1089 258,1096.16 258,1105 C258,1113.84 265.164,1121 274,1121 C282.836,1121 290,1113.84 290,1105 C290,1096.16 282.836,1089 274,1089 L274,1089 Z"
                          id="arrow-left-circle"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="nav-next-button">
                  <svg
                    width="53px"
                    height="53px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-310.000000, -1089.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z"
                          id="arrow-right-circle"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\Culture-image-1.png"></img>
                    <p>January 8th, 2025</p>
                    <h3>
                      {" "}
                      Say Hello To 2025
                      <br />
                      With These 5 Strains{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\Culture-image-2.png"></img>
                    <p>November 11th, 2025</p>
                    <h3>
                      {" "}
                      What It’s Like To <br />
                      Smoke Weed In China
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\Culture-image-3.png"></img>
                    <p>November 23rd, 2025</p>
                    <h3>
                      {" "}
                      10 Biggest Celebrity <br />
                      Stoners You Should Know{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\Culture-image-4.png"></img>
                    <p>August 11th, 2025</p>
                    <h3>
                      {" "}
                      This Is Why Making Out <br />
                      While High Is So Hot{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="react-learning-carrousel">
          <div class="swiper custom-react-swiper">
            <div className="react-learning-carrousel-header">
              <h2 className="react-learning-carrousel-header-heading">
                REVIEWS
              </h2>
              <div class="nav-buttons">
                <div class="nav-previous-button">
                  <svg
                    width="53px"
                    height="53px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-258.000000, -1089.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M281,1106 L270.414,1106 L274.536,1110.12 C274.926,1110.51 274.926,1111.15 274.536,1111.54 C274.145,1111.93 273.512,1111.93 273.121,1111.54 L267.464,1105.88 C267.225,1105.64 267.15,1105.31 267.205,1105 C267.15,1104.69 267.225,1104.36 267.464,1104.12 L273.121,1098.46 C273.512,1098.07 274.145,1098.07 274.536,1098.46 C274.926,1098.86 274.926,1099.49 274.536,1099.88 L270.414,1104 L281,1104 C281.552,1104 282,1104.45 282,1105 C282,1105.55 281.552,1106 281,1106 L281,1106 Z M274,1089 C265.164,1089 258,1096.16 258,1105 C258,1113.84 265.164,1121 274,1121 C282.836,1121 290,1113.84 290,1105 C290,1096.16 282.836,1089 274,1089 L274,1089 Z"
                          id="arrow-left-circle"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="nav-next-button">
                  <svg
                    width="53px"
                    height="53px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-310.000000, -1089.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z"
                          id="arrow-right-circle"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\review-image-1.png"></img>
                    <p>April 10th, 2025</p>
                    <h3>
                      {" "}
                      Tested & Reviewed: <br />
                      Bloomz AAA Exotic Flower
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\review-image-2.png"></img>
                    <p>April 17th, 2025</p>
                    <h3>
                      {" "}
                      Tested & Reviewed: <br /> HempLucid’s New D9 THC <br />&
                      CBD Gummies
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\review-image-3.png"></img>
                    <p>April 15th, 2025</p>
                    <h3>
                      {" "}
                      Galaxy Treats Reviews:
                      <br />
                      Orbital Gummies{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="react-slide-card">
                  <div class="slide-card-image">
                    <img src="src\assets\review-image-4.png"></img>
                    <p>March 26th, 2025</p>
                    <h3>
                      {" "}
                      Soul CBD Reviews:
                      <br />
                      Out Of Office Drink{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
