import Container from "../common/Container";

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-100 py-4">
            <Container className="flex justify-between items-center">
                <div className="text-xl font-bold text-gray-800 flex items-center">
                     <svg className="h-6 w-6 text-med-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    MedNeRF Project
                </div>
                <div className="space-x-6 text-sm font-medium text-gray-600">
                    <a href="#results" className="hover:text-med-blue-600">Results</a>
                    <a href="#method" className="hover:text-med-blue-600">Method</a>
                    <a href="#" className="hover:text-med-blue-600">Paper</a>
                </div>
            </Container>
        </nav>
    );
};
export default Navbar;