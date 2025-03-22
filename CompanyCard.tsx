import React from 'react';
import { CarCompany } from '../types';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';

interface CompanyCardProps {
  company: CarCompany;
  onClick: (company: CarCompany) => void;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company, onClick }) => {
  const latestData = company.yearlyData[0];
  const previousData = company.yearlyData[1];
  const profitChange = ((latestData.profit - previousData.profit) / previousData.profit) * 100;

  return (
    <div 
      onClick={() => onClick(company)}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={company.logo} 
          alt={`${company.name} logo`} 
          className="w-16 h-16 object-cover rounded-full"
        />
        <div>
          <h3 className="text-xl font-bold">{company.name}</h3>
          <p className="text-gray-600">{company.country}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-600 text-sm">Revenue (B$)</p>
          <p className="text-2xl font-bold">{latestData.revenue.toFixed(1)}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-600 text-sm">Profit (B$)</p>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">{latestData.profit.toFixed(1)}</p>
            {profitChange > 0 ? (
              <TrendingUp className="text-green-500" size={20} />
            ) : (
              <TrendingDown className="text-red-500" size={20} />
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">Market Share: {latestData.marketShare}%</p>
        <BarChart3 size={20} className="text-blue-500" />
      </div>
    </div>
  );
};