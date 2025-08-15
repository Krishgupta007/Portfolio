import { Briefcase, Code, User } from "lucide-react";

export const Aboutme = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              aperiam architecto deserunt placeat dignissimos neque. Praesentium
              quae explicabo ut, vero error aut illum minus dolor sit quis. Iste
              voluptas ad voluptatem officiis! Incidunt, tenetur doloribus.{" "}
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              voluptates sequi nesciunt accusamus assumenda dolores cum nemo,
              impedit porro ullam sunt dicta suscipit itaque pariatur modi
              consequuntur, magni animi ut?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button pt-3">
                Contact Me
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>

                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem?
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>

                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem?
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>

                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
