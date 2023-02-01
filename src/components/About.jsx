import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div>
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          <div>
            <h2>Sobre mim.</h2>
            <h3>
              Sou Programador FrontEnd com cerca de 2 anos de experiência.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ex eveniet deleniti. Nesciunt ut corporis laboriosam,
              autem consequuntur perspiciatis architecto commodi.
            </p>
            <div>
              <div>
                <div>
                  <CountUp start={0} end={2} duration={3} />
                </div>
                <div>
                  Anos de <br />
                  Experiência
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
