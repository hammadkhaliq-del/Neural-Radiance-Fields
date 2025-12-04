import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-center text-gray-400">
      <Container>
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Medical NeRF Research Group.
        </p>
        <p className="text-sm">
          Website design adapted for medical research visualization.
        </p>
        {/* Add citation block here if needed, matching the reference bottom section */}
      </Container>
    </footer>
  );
};
export default Footer;