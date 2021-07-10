import React from "react";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import CodeIcon from "@material-ui/icons/Code";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CachedIcon from "@material-ui/icons/Cached";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img
            src="https://landkit.goodthemes.co/assets/img/brand.svg"
            alt="logo"
          />
        </div>
        <div className="menu">
          <h2>landings</h2>
          <h2>pages</h2>
          <h2>accounts</h2>
          <h2>documentation</h2>
        </div>
        <div className="button-div">
          <Link to="/SecondComponent">
            <button className="header-button">Navigate</button>
          </Link>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-left">
          <div>
            <h1>
              Welcome to <span className="landkit">landkit.</span> <br />
              Develop anything.
            </h1>
            <h2>
              Build a beautiful, modern website with flexible <br />
              Bootstrap components built from scratch.
            </h2>
          </div>

          <div className="main-button-div">
            <button className="header-button main-button">
              view all pages
            </button>
            <button className="header-button main-button light-button">
              documentation
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img
            className="hero-image"
            src="https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png"
            alt="hero-image"
          />
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-below">
          <ToggleOffIcon className="icons" style={{ fontSize: 50 }} />

          <h1>Built for developers</h1>
          <h2>
            Landkit is built to make your life easier. Variables, build tooling,
            documentation, and reusable components.
          </h2>
        </div>
        <div className="hero-below">
          <ViewCompactIcon className="icons" style={{ fontSize: 50 }} />
          <h1>Designed to be modern</h1>
          <h2>
            Designed with the latest design trends in mind. Landkit feels
            modern, minimal, and beautiful.
          </h2>
        </div>
        <div className="hero-below">
          <CodeIcon className="icons" style={{ fontSize: 50 }} />
          <h1>Documentation for everything</h1>
          <h2>
            We've written extensive documentation for components and tools, so
            you never have to reverse engineer anything.
          </h2>
        </div>
      </div>
      <div className="svg-row">
        <div>
          <img
            className="svg"
            src="data:image/png;base64,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"
            alt="air bnb"
          />
        </div>
        <div>
          <img
            className="svg"
            src="data:image/png;base64,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"
            alt="air bnb"
          />
        </div>
        <div>
          <img
            className="svg"
            src="https://brandeps.com/logo-download/D/Dribbble-logo-vector-01.svg"
            alt="air bnb"
          />
        </div>
        <div>
          <img
            className="svg"
            src="https://play-lh.googleusercontent.com/9ASiwrVdio0I2i2Sd1UzRczyL81piJoKfKKBoC8PUm2q6565NMQwUJCuNGwH-enhm00"
            alt="air bnb"
          />
        </div>
        <div>
          <img
            className="svg"
            src="https://store-images.s-microsoft.com/image/apps.46851.9007199266246365.1f6d0339-ecce-4fe5-840a-652cd84111ad.ddef6be7-6304-41c0-a347-1d571b66dfb2"
            alt="air bnb"
          />
        </div>
        <div>
          <img
            className="svg"
            src="https://www.managers.org.uk/wp-content/uploads/2020/02/Pinterest.jpg"
            alt="air bnb"
          />
        </div>
      </div>
      <div className="form-div-parent">
        <div className="form-div">
          <div className="form-left">
            <img
              src="https://landkit.goodthemes.co/assets/img/photos/photo-2.jpg"
              alt="form-image"
              className="form-image"
            />

            <form className="form-container">
              <div className="form-input">
                <label className="input_label">Full name</label>
                <input type="text" className="input_field" required />
                <label className="input_label">Email</label>
                <input type="text" className="input_field" required />
                <label className="input_label">Password</label>
                <input type="text" className="input_field" required />
              </div>

              <button type="submit" className="header-button form-btn">
                Download a sample
              </button>
            </form>
          </div>
          <div className="form-right">
            <h1>
              The most useful resource <br />
              <span className="form-span">ever created for designers.</span>
            </h1>
            <h2>
              Using Landkit to build your site means never worrying about
              designing another page or cross browser compatibility. Our
              ever-growing library of components and pre-designed layouts will
              make your life easier.
            </h2>
            <div className="point-div">
              <div className="tick">
                <div className="flex">
                  <CheckCircleIcon />
                  <h3>Lifetime updates</h3>
                </div>
                <div className="flex">
                  <CheckCircleIcon />

                  <h3>Tech support</h3>
                </div>
                <div className="flex">
                  <CheckCircleIcon />

                  <h3>Tons of assets</h3>
                </div>
                <div className="flex">
                  <CheckCircleIcon />

                  <h3>Integration ready</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="photodiv">
        <div className="photodiv-left">
          <div className="left-first">
            <h1>
              We have lots of experience <br />
              <span className="landkit">building Bootstrap themes.</span>
            </h1>
            <h2>
              We've built well over a dozen Bootstrap themes and sold tens of
              thousands of copies.
            </h2>
          </div>

          <div className="left-secondary">
            <div className="flex">
              <div className="last-icon">
                <CachedIcon style={{ fontSize: 40 }} />
              </div>
              <div>
                <h1>Bootstrap users since the beginning</h1>
                <h2>
                  We've been developing with Bootstrap since it was publicly
                  released in 2011.
                </h2>
              </div>
            </div>
          </div>
          <div className="left-secondary">
            <div className="flex">
              <div className="last-icon">
                <CodeIcon style={{ fontSize: 40 }} />
              </div>
              <div>
                <h1>Deep understanding of Bootstrap</h1>
                <h2>
                  We've watched Bootstrap grow up over the years and understand
                  it better than almost anyone.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="photodiv-right">
          <img
            src="https://landkit.goodthemes.co/assets/img/screenshots/desktop/dashkit.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
