import Container from "../common/Container";

const Hero = () => {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-med-blue-50/70 to-white text-center">
      <Container>
        {/* Tagline */}
        <p className="text-med-blue-600 font-semibold tracking-wide uppercase text-sm md:text-base">
          Neural Radiance Fields for Medical Imaging
        </p>

        {/* Main Heading */}
        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          <span className="block">MedNeRF</span>
          <span className="block text-med-blue-600">
            High-Fidelity 3D Medical Reconstruction
          </span>
        </h1>

        {/* Sub-description */}
        <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
          Transforming sparse 2D medical imaging slices into accurate volumetric 3D models 
          using a Neural Radiance Fields-based architecture.
        </p>

        {/* Authors */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-med-blue-700 font-medium">
          <span className="px-3 py-1 bg-med-blue-50 rounded-full">
            John Smith*
          </span>
          <span className="px-3 py-1 bg-med-blue-50 rounded-full">
            John Smith
          </span>
          <span className="px-3 py-1 bg-med-blue-50 rounded-full">
            University of Medicine AI Lab
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="px-10 py-4 font-semibold rounded-xl text-black bg-med-blue-600 
                       hover:bg-med-blue-700 shadow-md hover:shadow-lg transition-all"
          >
            Read Paper
          </a>

          <a
            href="https://github.com/hammadkhaliq-del/Neural-Radiance-Fields"
            className="px-10 py-4 font-semibold rounded-xl text-med-blue-700 bg-white 
                       border border-med-blue-200 hover:bg-med-blue-50 
                       shadow-md hover:shadow-lg transition-all"
          >
            View Code
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
