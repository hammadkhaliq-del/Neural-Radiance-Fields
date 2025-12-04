import Container from "../common/Container";
import SectionHeader from "../common/SectionHeader";

const ApplicationCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-med-blue-50 text-med-blue-600 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const MedicalApplications = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <Container>
        <SectionHeader
          title="Clinical Applications"
          subtitle="Bridging the gap between 2D radiology and 3D reality."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <ApplicationCard
            title="Pre-operative Planning"
            description="Surgeons can navigate a patient-specific 3D model to understand complex vascular structures and tumor boundaries before entering the operating room."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            }
          />
          <ApplicationCard
            title="Enhanced Diagnostics"
            description="Overcomes the limitations of slice-interpolation by providing continuous volumetric views, aiding in the detection of micro-fractures and small lesions."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            }
          />
          <ApplicationCard
            title="Medical Education"
            description="Provides medical students with interactive, realistic anatomical models derived from real patient data rather than stylized artistic approximations."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.216 50.59 50.59 0 00-2.658.812m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default MedicalApplications;