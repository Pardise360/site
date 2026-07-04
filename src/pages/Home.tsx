import Navbar from "../components/Navbar";
import heroPoster from "../assets/hero-poster.jpg";

const Home = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-red-500">
      {/* vidéo de fond — z-0 explicite pour clarté */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={heroPoster}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />

      <Navbar />

      {/* contenu au premier plan — z-10 au-dessus de la vidéo */}
      <div className="relative z-10 h-full w-full">
        {/* trois mots géants décalés */}
        <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-4 md:left-10 top-[18%]">
          protect
        </h1>
        <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] right-4 md:right-10 top-[38%]">
          your
        </h1>
        <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-[18%] md:left-[28%] top-[58%]">
          data
        </h1>

        {/* paragraphe descriptif */}
        <p className="absolute left-6 md:left-10 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90">
          we can guarding your data with utmost care, empowering you with privacy everywhere
        </p>

        {/* stat haut-droite */}
        <div className="absolute right-6 md:right-24 top-[14%]">
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">+65k</span>
          </div>
          <div className="text-xs md:text-sm text-white/70 mt-1 text-right">startups use</div>
        </div>

        {/* dégradé bas */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />

        {/* stat bas-gauche */}
        <div className="absolute left-6 md:left-20 bottom-20 md:bottom-24">
          <div className="flex items-center gap-3">
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">+1.5b</span>
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
          </div>
          <div className="text-xs md:text-sm text-white/70 mt-1">gb data was protected</div>
        </div>

        {/* stat bas-droite */}
        <div className="absolute right-6 md:right-20 bottom-16 md:bottom-20">
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">+300k</span>
          </div>
          <div className="text-xs md:text-sm text-white/70 mt-1 text-right">downloads</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
