import React from 'react';
import { CarCompany } from '../types';
import { X } from 'lucide-react';

interface CompanyDetailsProps {
  company: CarCompany;
  onClose: () => void;
}

export const CompanyDetails: React.FC<CompanyDetailsProps> = ({ company, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <X size={24} />
        </button>

        <div className="flex items-center gap-6 mb-8">
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="w-24 h-24 object-cover rounded-full"
          />
          <div>
            <h2 className="text-3xl font-bold">{company.name}</h2>
            <p className="text-gray-600">Founded in {company.founded} • {company.country}</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Year</th>
                <th className="py-2 text-right">Revenue (B$)</th>
                <th className="py-2 text-right">Profit (B$)</th>
                <th className="py-2 text-right">Units Sold (M)</th>
                <th className="py-2 text-right">Market Share (%)</th>
              </tr>
            </thead>
            <tbody>
              {company.yearlyData.map((data) => (
                <tr key={data.year} className="border-b">
                  <td className="py-3">{data.year}</td>
                  <td className="py-3 text-right">{data.revenue.toFixed(1)}</td>
                  <td className="py-3 text-right">{data.profit.toFixed(1)}</td>
                  <td className="py-3 text-right">{data.unitsSold.toFixed(1)}</td>
                  <td className="py-3 text-right">{data.marketShare.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};