import Nav from "../components/core/Nav";
import Sidebar from "../components/core/Sidebar";
import { Link } from "react-router-dom";
import "../css/style.css";

function HowtoUse() {
  return (
    <>
      <Nav></Nav>
      <div className="main-wrapper">
        <Sidebar></Sidebar>
        <div className="main-graph-wrapper">
          <main className="main">
            <h1 clasName="mb-xxl">How to use?</h1>
            <div className="line-graph">
              <p>
                GeekFixx will help you to take care of your health as
                developers.
              </p>

              <h2 className="mt-xl mb-md">Back care</h2>
              <div style={{ maxWidth: "80ch", lineHeight: "2" }}>
                <ol>
                  <li>
                    Teach the app what a good and bad posture is{" "}
                    <Link
                      to="/teachbackcare"
                      style={{
                        color: "var(--clr-primary-500)",
                        fontSize: "1.1rem",
                        borderBottom: "1px solid var(--clr-primary-500)",
                        marginLeft: "0.25rem",
                      }}
                    >
                      Here
                    </Link>
                  </li>
                  <li>Click atleast 5 pictures in good and bad posture is</li>
                  <li>
                    Test the posture detection, click more pics for more
                    accurate results
                  </li>
                  <li>Come back to home and start the timer</li>
                  <li>
                    Every 20 minutes the app will check your posture and will
                    remind you if it is incorrect
                  </li>
                </ol>
              </div>

              <h2 className="mt-xl mb-md">Eye care</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2" }}>
                <ol>
                  <li>Start the timer</li>
                  <li>
                    Every 20 minutes the app will remind you to do an exercise
                  </li>
                  <li>Click on the notification</li>
                  <li>
                    The app will navigate you to an exercise page. Click on Done
                    when u r done doing the exercise
                  </li>
                  <li>
                    The exercise is to look 20 feet away for 20 seconds every 20
                    minutes to relax our eyes.
                  </li>
                </ol>
              </p>

              <h2 className="mt-xl mb-md">Ear care</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2" }}>
                <ol>
                  <li>Click on the toggle button of Ear care on dashboard</li>
                  <li>Start the timer</li>
                  <li>
                    Now after 40 minutes the app will remind you that you are
                    reaching the daily limit of earphone usage time
                  </li>
                  <li>
                    It is advisable to use earphones for maximum 60 minutes a
                    day at a maximum of 60% volume
                  </li>
                </ol>
              </p>

              <h2 className="mt-xl mb-md">Stress care</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2" }}>
                <ol>
                  <li>
                    Click on the toggle button of Stress care on dashboard
                  </li>
                  <li>Start the timer</li>
                  <li>
                    Now after 20 minutes the app will remind you to chill out
                    and also allow you to watch a funny video
                  </li>
                </ol>
              </p>

              <h2 className="mt-xl mb-md">Water Reminders</h2>
              <p style={{ maxWidth: "80ch", lineHeight: "2", marginBottom: "1rem" }}>
                <ol>
                  <li>
                    Click on the toggle button of Water Reminders on dashboard
                  </li>
                  <li>
                    Every 20 minutes the app will remind you stay hydrated and
                    drink water
                  </li>
                  <br /> <br />
                </ol>
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default HowtoUse;
