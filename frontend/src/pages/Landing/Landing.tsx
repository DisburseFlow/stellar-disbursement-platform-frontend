import { motion } from "framer-motion";
import "./landing.scss";

const features = [
  {
    icon: "🌍",
    title: "Cross-Border Payments",
    description:
      "Send humanitarian funds across countries faster with secure blockchain-powered transfers.",
  },
  {
    icon: "📱",
    title: "Mobile Money Integration",
    description:
      "Connect beneficiaries through M-Pesa and local payment channels.",
  },
  {
    icon: "🔗",
    title: "Stellar Blockchain",
    description:
      "Transparent, traceable and secure financial transactions.",
  },
  {
    icon: "📡",
    title: "Offline Accessibility",
    description:
      "Reach beneficiaries without requiring smartphones or bank accounts.",
  },
];


const stats = [
  {
    number: "50K+",
    label: "Beneficiaries Supported",
  },
  {
    number: "15+",
    label: "Countries Connected",
  },
  {
    number: "$10M+",
    label: "Funds Distributed",
  },
];


function Landing() {
  return (
    <div className="landing">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          <span>SAPCONE</span>
          <small>DisburseFlow</small>
        </div>


        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#impact">Impact</a>
          <a href="#security">Security</a>
          <a href="#about">About</a>
        </div>


        <div className="nav-actions">
          <button className="login">
            Login
          </button>

          <button className="primary">
            Get Started
          </button>
        </div>

      </nav>



      {/* HERO */}

      <section className="hero">

        <motion.div
          className="hero-content"
          initial={{
            opacity:0,
            y:40
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:0.8
          }}
        >

          <h1>
            Transparent Humanitarian
            <span>
              Digital Payments
            </span>
          </h1>


          <p>
            DisburseFlow helps humanitarian organizations
            distribute financial assistance securely,
            instantly, and transparently across borders.
          </p>


          <div className="hero-buttons">

            <button className="primary">
              Start Disbursing
            </button>

            <button className="secondary">
              Explore Platform
            </button>

          </div>

        </motion.div>



        {/* DASHBOARD MOCKUP */}

        <motion.div
          className="dashboard-card"
          animate={{
            y:[0,-15,0]
          }}
          transition={{
            duration:4,
            repeat:Infinity
          }}
        >

          <div className="transaction-header">
            Payment Successful
          </div>


          <div className="transaction">

            <p>
              Receiver
            </p>

            <h3>
              Amina Hassan
            </h3>


            <p>
              Transfer
            </p>

            <h2>
              $250.00
            </h2>


            <div className="status">
              ✓ Completed
            </div>


          </div>



          <div className="route">

            Kenya 🇰🇪

            →

            Ethiopia 🇪🇹

          </div>


        </motion.div>


      </section>




      {/* IMPACT */}

      <section
        id="impact"
        className="impact"
      >

        {
          stats.map((item,index)=>(

            <motion.div
              className="stat"
              key={index}

              whileHover={{
                scale:1.05
              }}
            >

              <h2>
                {item.number}
              </h2>

              <p>
                {item.label}
              </p>


            </motion.div>

          ))
        }


      </section>





      {/* FEATURES */}


      <section
        id="features"
        className="features"
      >

        <h2>
          Built For Humanitarian Impact
        </h2>


        <div className="feature-grid">


          {
            features.map((feature,index)=>(

              <motion.div

                className="feature-card"

                key={index}

                whileHover={{
                  y:-10
                }}

              >

                <div className="icon">
                  {feature.icon}
                </div>


                <h3>
                  {feature.title}
                </h3>


                <p>
                  {feature.description}
                </p>


              </motion.div>

            ))
          }


        </div>


      </section>






      {/* SECURITY */}

      <section
        id="security"
        className="security"
      >

        <h2>
          Built On Trust And Transparency
        </h2>


        <p>
          Powered by Stellar blockchain technology,
          every transaction is secure, auditable,
          and visible to authorized partners.
        </p>


      </section>





      {/* CTA */}

      <section className="cta">


        <h2>
          Ready to transform humanitarian payments?
        </h2>


        <button className="primary">
          Launch DisburseFlow
        </button>


      </section>






      {/* FOOTER */}

      <footer>

        <div>
          <h3>
            SAPCONE
          </h3>

          <p>
            Transparent financial inclusion
            powered by technology.
          </p>

        </div>


        <div>
          <p>
            Platform
          </p>

          <p>
            Security
          </p>

          <p>
            Contact
          </p>
        </div>


        <div>
          © 2026 DisburseFlow
        </div>


      </footer>



    </div>
  );
}


export default Landing;