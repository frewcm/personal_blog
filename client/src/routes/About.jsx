import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="w-11/12 mx-auto pt-12">
        <div className="py-8">
          <p className="text-5xl font-montserrat text-primary">About us</p>
        </div>
        <div className="rounded-sm pb-8">
          <img
            className="w-full h-[400px] md:h-[500px] object-cover rounded-sm"
            src="OIP.jpg"
            alt="about-image"
          />
        </div>
        <div className="mt-8 py-8 w-ful h-full md:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="lg:w-9/12 h-[2px] bg-primary rounded"></div>
            <p className="mt-6 mb-8 font-montserrat tracking-wider text-lg">
              ABOUT
            </p>
            <p className="lg:w-10/12 text-primary tracking-wider leading-7">
              Greetings! We're John Doe and Maggie, a dynamic duo of experienced
              full-stack developers and freelancers, bringing you the latest
              insights into the web development realm on our blog. With a
              combined wealth of hands-on experience, we dive deep into coding
              intricacies, share invaluable freelancing wisdom, and highlight
              essential skills for success. Our journey is your journey as we
              unravel the complexities of the ever-evolving tech landscape,
              offering practical advice and real-world perspectives. Join us in
              mastering the art of web development, as we navigate through
              challenges, celebrate triumphs, and empower you to thrive in this
              dynamic field.
            </p>
          </div>
          <div className="q-full lg:col-span-3 text-primary text-xl tracking-wider leading-10">
            <p>
              <span className="lg:w-10/12 text-7xl font-montserrat">W</span>e
              are John Doe and Maggie, dedicated web designers and full stack
              developers with over a decade of experience in the field. Since
              our inception, we've been actively involved in the IT consultancy
              industry, specifically within the Web development ecosystem. You
              can find us at Lime Street, where we assist website users in
              overcoming any challenges they may face. Our extensive background
              includes creating websites and plugins for clients around the
              globe, earning us the titles of Trusted Authors and esteemed
              members of the Theme Review Team at webdev.org. All our creations,
              from free WordPress themes to plugins, are accessible in the
              wordpress.org directory, showcasing our commitment to the
              WordPress community.
            </p>
            <p className="lg:w-10/12 my-6">
              <span className="font-montserrat">
                Our passion for our work is complemented by the independence it
                grants us,
              </span>
              allowing us to align our actions with our beliefs. Ethical design
              is not just a preference but a core principle we uphold.
              Recognizing our responsibility as product creators, we adhere to{" "}
              <span className="underline">best practices</span> in ethical
              design to contribute to a future characterized by transparency and
              honesty.
            </p>
            <p className="lg:w-10/12 my-6">
              To consolidate and share our extensive knowledge on creating
              websites and blogs with WordPress, we founded a small company
              named DK. Our mission is to empower individuals to smoothly run
              their sites, <span className="underline">privacy</span>{" "}
              emphasizing.
            </p>
            <p className="lg:w-10/12 my-6">
              At the heart of our ethos is a commitment to{" "}
              <span className="underline">ethical</span>,{" "}
              <span className="underline">user-friendly </span>design. Our
              website serves as a platform to share insights into WordPress
              website and blog creation. As Trusted Authors on wordpress.org and
              active members of the Theme Review Team, we assure you of
              high-quality code.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
