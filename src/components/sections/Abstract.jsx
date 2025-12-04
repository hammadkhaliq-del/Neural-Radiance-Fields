import Container from "../common/Container";

const Abstract = () => {
  return (
    <section className="py-12 border-b border-gray-100">
      <Container className="text-lg text-gray-600 leading-relaxed text-justify">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center sm:text-left">Abstract</h2>
        <p>
          Standard medical imaging techniques like MRI and CT often yield anisotropic 2D slices, making accurate 3D visualization difficult for surgical planning and diagnostic assessment. We present MedNeRF, a novel approach specifically adapted for the medical domain. By leveraging the continuous volumetric representation of Neural Radiance Fields, our model synthesizes high-resolution, view-consistent 3D reconstructions from sparse imaging data, outperforming traditional interpolation methods and handling complex anatomical structures with varied densities.
        </p>
      </Container>
    </section>
  );
};
export default Abstract;