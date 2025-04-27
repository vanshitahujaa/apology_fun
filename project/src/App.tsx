import React from 'react';
import { ApologyCard } from './components/ApologyCard';
import { CatAnimation } from './components/CatAnimation';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-indigo-50 flex flex-col items-center justify-center p-6">
      <main className="w-full max-w-3xl">
        <ApologyCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;