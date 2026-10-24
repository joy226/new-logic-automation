/**
 * Central image asset mapping.
 * Industrial photography sourced from Pexels (license-free).
 * These are illustrative images representing the type of equipment,
 * not actual New Logic Automation installations.
 */

export const images = {
  hero: 'https://images.pexels.com/photos/36823725/pexels-photo-36823725.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroAlt: 'Modern food production plant interior with industrial machinery and processing line',

  // Category images
  categoryDosing: 'https://images.pexels.com/photos/5953729/pexels-photo-5953729.jpeg?auto=compress&cs=tinysrgb&w=940',
  categoryPreparation: 'https://images.pexels.com/photos/5538159/pexels-photo-5538159.jpeg?auto=compress&cs=tinysrgb&w=940',
  categoryAccessories: 'https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg?auto=compress&cs=tinysrgb&w=940',

  // Product images — mapped by slug
  products: {
    'flour-maida-handling': 'https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg?auto=compress&cs=tinysrgb&w=940',
    'sugar-handling': 'https://images.pexels.com/photos/3089681/pexels-photo-3089681.jpeg?auto=compress&cs=tinysrgb&w=940',
    'powder-sugar-handling': 'https://images.pexels.com/photos/17937099/pexels-photo-17937099.jpeg?auto=compress&cs=tinysrgb&w=940',
    'multiple-liquid-dosing': 'https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&w=940',
    'water-dosing': 'https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg?auto=compress&cs=tinysrgb&w=940',
    'bulk-flour-handling': 'https://images.pexels.com/photos/37533379/pexels-photo-37533379.jpeg?auto=compress&cs=tinysrgb&w=940',
    'chemical-handling': 'https://images.pexels.com/photos/19841125/pexels-photo-19841125.jpeg?auto=compress&cs=tinysrgb&w=940',
    'bulk-fat-handling': 'https://images.pexels.com/photos/2760286/pexels-photo-2760286.jpeg?auto=compress&cs=tinysrgb&w=940',
    'cream-preparation': 'https://images.pexels.com/photos/5538159/pexels-photo-5538159.jpeg?auto=compress&cs=tinysrgb&w=940',
    'sandwich-cream-preparation': 'https://images.pexels.com/photos/7598915/pexels-photo-7598915.jpeg?auto=compress&cs=tinysrgb&w=940',
    'sepro-gyroscreen': 'https://images.pexels.com/photos/8865187/pexels-photo-8865187.jpeg?auto=compress&cs=tinysrgb&w=940',
    'butter-handling': 'https://images.pexels.com/photos/10040001/pexels-photo-10040001.jpeg?auto=compress&cs=tinysrgb&w=940',
    'fat-melting': 'https://images.pexels.com/photos/18915643/pexels-photo-18915643.jpeg?auto=compress&cs=tinysrgb&w=940',
    'gms-preparation': 'https://images.pexels.com/photos/10040014/pexels-photo-10040014.jpeg?auto=compress&cs=tinysrgb&w=940',
    'milk-preparation': 'https://images.pexels.com/photos/17765433/pexels-photo-17765433.jpeg?auto=compress&cs=tinysrgb&w=940',
    'invert-syrup-preparation': 'https://images.pexels.com/photos/38336747/pexels-photo-38336747.jpeg?auto=compress&cs=tinysrgb&w=940',
    'sugar-solution-preparation': 'https://images.pexels.com/photos/5532720/pexels-photo-5532720.jpeg?auto=compress&cs=tinysrgb&w=940',
    'reject-biscuit-grinding': 'https://images.pexels.com/photos/8956313/pexels-photo-8956313.jpeg?auto=compress&cs=tinysrgb&w=940',
    'gear-pumps': 'https://images.pexels.com/photos/10290625/pexels-photo-10290625.jpeg?auto=compress&cs=tinysrgb&w=940',
    'roots-blowers': 'https://images.pexels.com/photos/8973680/pexels-photo-8973680.jpeg?auto=compress&cs=tinysrgb&w=940',
    'valves': 'https://images.pexels.com/photos/372796/pexels-photo-372796.jpeg?auto=compress&cs=tinysrgb&w=940',
    'filters': 'https://images.pexels.com/photos/5411674/pexels-photo-5411674.jpeg?auto=compress&cs=tinysrgb&w=940',
    'other-accessories': 'https://images.pexels.com/photos/10579290/pexels-photo-10579290.jpeg?auto=compress&cs=tinysrgb&w=940',
  } as Record<string, string>,

  // About page
  aboutMain: 'https://images.pexels.com/photos/11679691/pexels-photo-11679691.jpeg?auto=compress&cs=tinysrgb&w=940',
  aboutSecondary: 'https://images.pexels.com/photos/36823725/pexels-photo-36823725.jpeg?auto=compress&cs=tinysrgb&w=940',

  // Contact
  contactHeader: 'https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg?auto=compress&cs=tinysrgb&w=1920',

  // Process overview
  processReceive: 'https://images.pexels.com/photos/3089681/pexels-photo-3089681.jpeg?auto=compress&cs=tinysrgb&w=600',
  processTransfer: 'https://images.pexels.com/photos/4440227/pexels-photo-4440227.jpeg?auto=compress&cs=tinysrgb&w=600',
  processPrepare: 'https://images.pexels.com/photos/5538159/pexels-photo-5538159.jpeg?auto=compress&cs=tinysrgb&w=600',
  processDose: 'https://images.pexels.com/photos/33514501/pexels-photo-33514501.jpeg?auto=compress&cs=tinysrgb&w=600',
  processFeed: 'https://images.pexels.com/photos/18631424/pexels-photo-18631424.jpeg?auto=compress&cs=tinysrgb&w=600',
} as const;

export function getProductImage(slug: string): string {
  return images.products[slug] ?? images.categoryDosing;
}
