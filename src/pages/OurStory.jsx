export const OurStory = () => {
  const data = [
    {
      heading: "VISION",
      content:
        "To create the unseen, the unimaginable, and be an unparalleled entity in the world of Architecture and Design.",
    },
    {
      heading: "MISSION",
      content:
        "To increase our global footprint and create towering masterpieces that will be hailed as timeless testimonies to Architecture.",
    },
    {
      heading: "VALUE",
      content:
        "To value Client Satisfaction above all and be original, unique, and innovative always in our journey in time.",
    },
  ];

  return (
    <section className="bg-primary py-16 space-y-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-secondary uppercase tracking-wide">
          About the studio
        </h1>
      </div>
      <div className="container mx-auto px-6 lg:px-32">
        <img
          src="/OurStory/img1.jpg"
          alt="Living Room"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-20 space-y-16">
        <div className="">
          <h2 className="text-5xl font-bold text-secondary mb-4 ">Our Story</h2>
          <p className="text-lg text-secondary leading-relaxed">
            We are passionate about creating beautiful and functional spaces
            that reflect our clients' unique personalities and lifestyles. With
            a keen eye for design and a commitment to exceptional customer
            service, we believe that every project should be contextually
            designed, evolving spaces perceived in new ways. Each design
            considers the climate and integrates sustainability cohesively,
            reflected in the extensive work by our firm.
          </p>
        </div>
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-3">
          {data.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <h3 className="text-3xl font-semibold text-secondary">
                {item.heading}
              </h3>
              <p className="text-lg text-secondary leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
