import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Factory } from 'lucide-react';

export interface ClientItem {
  name: string;
  shortName: string;
  type: 'Domestic' | 'International';
  logoUrl: string;
}

export const domesticClients: ClientItem[] = [
  { name: 'Britannia Industries Ltd.', shortName: 'Britannia', type: 'Domestic', logoUrl: '/clients/britannia-industries.png' },
  { name: 'ITC Ltd.', shortName: 'ITC Limited', type: 'Domestic', logoUrl: '/clients/itc-ltd.png' },
  { name: 'Haldiram Foods International Pvt. Ltd.', shortName: 'Haldiram’s', type: 'Domestic', logoUrl: '/clients/haldiram-foods-international.png' },
  { name: 'Parle Products Pvt. Ltd.', shortName: 'Parle', type: 'Domestic', logoUrl: '/clients/parle.jpg' },
  { name: 'Patanjali Ayurved Ltd.', shortName: 'Patanjali', type: 'Domestic', logoUrl: '/clients/patanjali-ayurved.jpg' },
  { name: 'Unibic Foods India Pvt. Ltd.', shortName: 'Unibic', type: 'Domestic', logoUrl: '/clients/unibic-foods-india.png' },
  { name: 'Bikaji Foods International Ltd.', shortName: 'Bikaji', type: 'Domestic', logoUrl: '/clients/bikaji.jpg' },
  { name: 'Anmol Industries Ltd.', shortName: 'Anmol', type: 'Domestic', logoUrl: '/clients/anmol-industries.png' },
  { name: 'Sobisco (Sona Biscuits)', shortName: 'Sobisco', type: 'Domestic', logoUrl: '/clients/sobisco.jpg' },
  { name: 'Raja Udyog Pvt. Ltd.', shortName: 'Raja Udyog', type: 'Domestic', logoUrl: '/clients/raja-udyog.png' },
  { name: 'Bonn Nutrients Pvt. Ltd.', shortName: 'Bonn', type: 'Domestic', logoUrl: '/clients/bonn-nutrients.jpg' },
  { name: 'Dukes Products (India) Ltd.', shortName: 'Dukes', type: 'Domestic', logoUrl: '/clients/dukes-products.jpg' },
  { name: 'Bhagwati Foods Pvt. Ltd.', shortName: 'Bhagwati', type: 'Domestic', logoUrl: '/clients/bhagwati-foods.jpg' },
  { name: 'Mrs. Bector Food Specialities Ltd', shortName: 'Cremica', type: 'Domestic', logoUrl: '/clients/mrs.-bector-food-specialities.png' },
  { name: 'Sunder Biscuits', shortName: 'Sunder', type: 'Domestic', logoUrl: '/clients/sunder.jpg' },
  { name: 'HF Super (Chanakya Bakery)', shortName: 'HF Super', type: 'Domestic', logoUrl: '/clients/hf-super.jpg' },
];

export const internationalClients: ClientItem[] = [
  { name: 'Britannia Nepal Ltd.', shortName: 'Britannia Nepal', type: 'International', logoUrl: '/clients/britannia-nepal.png' },
  { name: 'Pran Foods Ltd.', shortName: 'PRAN Foods', type: 'International', logoUrl: '/clients/pran-foods-ltd.jpg' },
  { name: 'Kwality Noodles Industries (P) Ltd.', shortName: 'Kwality', type: 'International', logoUrl: '/clients/kwality-noodles-industries.png' },
  { name: 'Asian Biscuit & Confectionery Pvt. Ltd.', shortName: 'Asian Biscuit', type: 'International', logoUrl: '/clients/asian-biscuit-and-confectionery.png' },
  { name: 'Khajurico Nepal Pvt. Ltd.', shortName: 'Khajurico', type: 'International', logoUrl: '/clients/khajurico-nepal.jpg' },
  { name: 'Ifad Multi Products Ltd.', shortName: 'IFAD Group', type: 'International', logoUrl: '/clients/ifad-multi-products.png' },
  { name: 'Lae Biscuit Co. Ltd.', shortName: 'Lae Biscuit', type: 'International', logoUrl: '/clients/lae-biscuit.png' },
  { name: 'Reedisha Foods Ltd.', shortName: 'Reedisha', type: 'International', logoUrl: '/clients/reedisha-foods.jpg' },
  { name: 'Koshambh Multitred Pvt Ltd', shortName: 'Koshambh', type: 'International', logoUrl: '/clients/koshambh.jpg' },
  { name: 'Marino Biscuits', shortName: 'Marino', type: 'International', logoUrl: '/clients/marino.jpg' },
  { name: 'Mio Biscuits', shortName: 'Mio Biscuits', type: 'International', logoUrl: '/clients/mio-biscuits.jpg' },
  { name: 'Gattani’s OPG Group', shortName: 'Gattani’s', type: 'International', logoUrl: '/clients/gattanis.jpg' },
];

export function ClientLogoCard({ client }: { client: ClientItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className="flex-shrink-0 flex items-center justify-between gap-3 px-4 py-2.5 bg-white rounded-xl border border-warm-200/90 shadow-sm hover:shadow-md hover:border-teal-500/50 hover:bg-warm-50/50 transition-all cursor-pointer group"
      style={{ width: '280px', height: '68px' }}
      title={client.name}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="h-10 w-16 flex-shrink-0 flex items-center justify-center rounded bg-white p-1">
          {!imgError ? (
            <img 
              src={client.logoUrl} 
              alt={`${client.name} logo`} 
              className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <Factory className="h-6 w-6 text-warm-400" />
          )}
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="text-xs font-bold text-navy-900 truncate group-hover:text-teal-600 transition-colors">
            {client.shortName}
          </span>
          <span className="text-[11px] text-warm-500 truncate" title={client.name}>
            {client.name}
          </span>
        </div>
      </div>
      <Badge 
        variant="secondary" 
        className={
          client.type === 'International' 
            ? 'text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 shrink-0' 
            : 'text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0'
        }
      >
        {client.type === 'International' ? 'Export' : 'India'}
      </Badge>
    </div>
  );
}

export function ClientLogoGridSection() {
  return (
    <section className="border-b border-warm-200 bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container-page mb-10 text-center">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600">Industrial Track Record</span>
        <h2 className="mt-3 text-h2 font-heading text-navy-700">Partners &amp; clients</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-warm-500">
          Leading commercial food manufacturers across India and internationally rely on New Logic Automation systems for automated material conveying, accurate dosing, and recipe preparation.
        </p>
      </div>

      <div className="relative w-full space-y-4">
        {/* Row 1: Domestic moving left */}
        <div className="mask-marquee overflow-hidden">
          <div className="animate-marquee flex gap-4">
            {[...domesticClients, ...domesticClients].map((client, idx) => (
              <ClientLogoCard key={`${client.name}-d1-${idx}`} client={client} />
            ))}
          </div>
        </div>

        {/* Row 2: International moving right */}
        <div className="mask-marquee overflow-hidden">
          <div className="animate-marquee-reverse flex gap-4">
            {[...internationalClients, ...internationalClients].map((client, idx) => (
              <ClientLogoCard key={`${client.name}-i1-${idx}`} client={client} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-page mt-8 text-center">
        <p className="text-xs text-warm-400">
          Hover over any partner badge to pause. Installed systems operating continuously across India, Nepal, Bangladesh, and Papua New Guinea.
        </p>
      </div>
    </section>
  );
}
