export const siteConfig = {
  name: 'New Logic Automation',
  shortName: 'New Logic',
  tagline: 'Precision handling. Consistent production.',
  description:
    'Integrated material handling, dosing and preparation systems for food and process industries.',
  email: 'logicequip@gmail.com',
  phoneNumbers: [
    { name: 'Sachin Tamhane', number: '+91 9820646393' },
    { name: 'Sagar Mallah', number: '+91 9223242803' },
  ],
  address: {
    line1: 'Building B2, Gala No. 3, Parasnath Complex',
    line2: 'Anjur Mankoli Road, Village Val',
    city: 'Bhiwandi, Thane',
    state: 'Maharashtra',
    pincode: '421302',
    country: 'India',
  },
  customersDomestic: [
    'Britannia Industries Ltd.',
    'ITC Ltd.',
    'Haldiram Foods International Pvt. Ltd.',
    'Unibic Foods India Pvt. Ltd.',
    'Patanjali Ayurved Ltd.',
    'Anmol Industries Ltd.',
    'Raja Udyog Pvt. Ltd.',
    'Bonn Nutrients Pvt. Ltd.',
    'Dukes Products (India) Ltd.',
    'Bhagwati Foods Pvt. Ltd.',
    'Mrs. Bector Food Specialities Ltd.',
  ],
  customersInternational: [
    'Britannia Nepal Ltd.',
    'Pran Foods Ltd.',
    'Kwality Noodles Industries (P) Ltd.',
    'Asian Biscuit & Confectionery Pvt. Ltd.',
    'Khajurico Nepal Pvt. Ltd.',
    'Ifad Multi Products Ltd.',
    'Lae Biscuit Co. Ltd.',
    'Reedisha Foods Ltd.',
  ],
};

export const processStages = [
  {
    id: 'receive',
    label: 'Receive',
    title: 'Receive Raw Materials',
    description:
      'Raw materials — flour, sugar, liquids, fats — are received from bags, bulk tankers, or drums and unloaded into the system through controlled receiving stations.',
    productSlugs: ['flour-maida-handling', 'bulk-flour-handling', 'bulk-fat-handling'],
  },
  {
    id: 'transfer',
    label: 'Transfer',
    title: 'Transfer to Storage',
    description:
      'Pneumatic conveying or pumped transfer moves materials from the receiving point to storage silos, day bins, or tanks, enclosed and dust-free.',
    productSlugs: ['flour-maida-handling', 'sugar-handling', 'roots-blowers', 'filters'],
  },
  {
    id: 'prepare',
    label: 'Prepare',
    title: 'Prepare Ingredients',
    description:
      'Materials are prepared for production — dissolving sugar, melting fat, preparing cream, mixing emulsions, or screening powders — in controlled, recipe-driven systems.',
    productSlugs: ['sugar-solution-preparation', 'fat-melting', 'cream-preparation', 'sepro-gyroscreen'],
  },
  {
    id: 'dose',
    label: 'Dose',
    title: 'Dose Accurately',
    description:
      'The system doses the correct quantity of each ingredient — by weight or flow — into the mixer or process vessel, following the active recipe with automated control.',
    productSlugs: ['multiple-liquid-dosing', 'water-dosing', 'powder-sugar-handling', 'gms-preparation'],
  },
  {
    id: 'feed',
    label: 'Feed Production',
    title: 'Feed Production',
    description:
      'Prepared and dosed ingredients are delivered to the production line — mixer, kneader, or cooker — for consistent, repeatable production batches.',
    productSlugs: ['cream-preparation', 'invert-syrup-preparation', 'milk-preparation', 'chemical-handling'],
  },
] as const;
