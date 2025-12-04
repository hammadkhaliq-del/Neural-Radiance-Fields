import { useState } from 'react'
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Abstract from './components/sections/Abstract';
import ResultsDemo from './components/sections/ResultsDemo';
import Methodology from './components/sections/Methodology';
import Footer from './components/layout/Footer';
import MedicalApplications from './components/sections/MedicalApplications';

function App() {

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Simple Navbar placeholder - optional based on reference */}
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Abstract />
        <MedicalApplications />
        <ResultsDemo />
        <Methodology />

        {/* You could add more sections here like "Ablation Studies" or "Datasets" */}
      </main>

      <Footer />
    </div>
  )
}

export default App