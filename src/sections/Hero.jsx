const words = [
    { text: 'Idea', imgPath: '/images/idea.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' }
]

const Hero = () => {
  return (
    <section className="relative overflow-hidden" id="hero">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className="hero-layout">
            {/* Left: Hero content */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>Shaping Designs</h1>
                        <h1>Into Real Projects</h1>
                        <h1>That Deliver Results</h1>
                    </div>
                </div>
            </header>
        </div>
    </section>
  );
};

export default Hero;
