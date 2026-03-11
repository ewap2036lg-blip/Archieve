import React, { useState } from 'react';
import { Search, Archive, MapPin, Download, Share2, Info, ChevronRight } from 'lucide-react';
import { steps, inventoryData } from './data'; // This pulls from the other file!

const ArchieveApp = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getIcon = (name) => {
    switch(name) {
      case 'Download': return <Download className="w-5 h-5 text-blue-600" />;
      case 'Archive': return <Archive className="w-5 h-5 text-amber-600" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-emerald-600" />;
      default: return <Info className="w-5 h-5" />;
    }
  };

  const filteredData = inventoryData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-white border-b sticky top-0 z-10 p-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Archive className="text-blue-600" /> Archieve
          </h1>
          <Info className="w-5 h-5 text-slate-400" />
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 pb-24">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm"
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Steps from Data.js */}
        <div className="bg-white rounded-2xl p-5 mb-6 border border-slate-100 shadow-sm">
          <h2 className="text-xs font-bold text-slate-400 uppercase mb-4">Quick Start Guide</h2>
          <div className="space-y-4">
            {steps.map(step => (
              <div key={step.id} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center">
                  {getIcon(step.iconName)}
                </div>
                <p className="text-sm font-medium text-slate-700 pt-2">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory List */}
        <div className="space-y-3">
          {filteredData.map(item => (
            <div key={item.id} className="p-4 bg-white rounded-xl border border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-800">{item.name}</h3>
                <p className="text-xs text-slate-500">{item.category} • {item.count} items</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </div>
          ))}
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 max-w-md mx-auto flex justify-around">
        <Archive className="text-blue-600" />
        <MapPin className="text-slate-400" />
        <Share2 className="text-slate-400" />
      </footer>
    </div>
  );
};

export default ArchieveApp;
