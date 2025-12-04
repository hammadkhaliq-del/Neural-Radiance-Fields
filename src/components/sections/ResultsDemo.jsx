import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";
import MediaCard from "../common/MediaCard";

const ResultsDemo = () => {
  // Placeholder URLs
  const PLACEHOLDER_MRI_2D = "https://placehold.co/600x400/1e293b/ffffff/png?text=Input+MRI+Slice+(Axial)";
  const PLACEHOLDER_CT_2D = "https://placehold.co/600x400/334155/ffffff/png?text=Input+CT+Slice+(Coronal)";
  
  // Using a tech-abstract video loop to simulate 3D rendering
  const PLACEHOLDER_VIDEO = "https://cdn.pixabay.com/video/2016/09/21/5398-183786499_tiny.mp4";

  return (
    <section id="results" className="py-16 bg-gray-50">
      <Container>
        <SectionHeader
          title="Volumetric Reconstruction Results"
          subtitle="Comparison between input sparse 2D slices and our synthesized 3D NeRF output."
        />

        {/* Dataset 1: Brain MRI */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <span className="h-px bg-gray-300 flex-1"></span>
            <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wider">Brain MRI Dataset</h3>
            <span className="h-px bg-gray-300 flex-1"></span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MediaCard 
              type="image" 
              src={PLACEHOLDER_MRI_2D} 
              caption="Input: Sparse 2D Slice (T1-Weighted)" 
            />
            <MediaCard 
              type="video" 
              src={PLACEHOLDER_VIDEO} 
              caption="Output: Continuous Volumetric Rendering" 
            />
          </div>
        </div>

        {/* Dataset 2: Chest CT */}
        <div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="h-px bg-gray-300 flex-1"></span>
            <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wider">Thoracic CT Dataset</h3>
            <span className="h-px bg-gray-300 flex-1"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <MediaCard 
              type="image" 
              src={PLACEHOLDER_CT_2D} 
              caption="Input: Sparse 2D Slice (Lung Window)" 
            />
             <MediaCard 
              type="video" 
              src={PLACEHOLDER_VIDEO} 
              caption="Output: High-Fidelity 3D Reconstruction" 
            />
          </div>
        </div>

      </Container>
    </section>
  );
};
export default ResultsDemo;