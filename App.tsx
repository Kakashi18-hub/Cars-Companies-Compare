import React, { useState } from 'react';
import { Car } from 'lucide-react';
import { carCompanies } from './data';
import { CompanyCard } from './components/CompanyCard';
import { CompanyDetails } from './components/CompanyDetails';
import type { CarCompany } from './types';

function App() {
  const [selectedCompany, setSelectedCompany] = useState<CarCompany | null>(null);
  const [sortBy, setSortBy] = useState<'revenue' | 'profit' | 'marketShare'>('revenue');

  const sortedCompanies = [...carCompanies].sort(
    (a, b) => b.yearlyData[0][sortBy] - a.yearlyData[0][sortBy]
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Car size={32} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Global Automotive Dashboard
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-4 py-2 border rounded-lg shadow-sm bg-white"
          >
            <option value="revenue">Sort by Revenue</option>
            <option value="profit">Sort by Profit</option>
            <option value="marketShare">Sort by Market Share</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              onClick={setSelectedCompany}
            />
          ))}
        </div>
      </main>

      {selectedCompany && (
        <CompanyDetails
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </div>
  );
}

export default App;