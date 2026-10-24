export type ProductCategory = 'dosing-handling' | 'preparation' | 'accessories';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  purpose: string;
  benefits: string[];
  howItWorks: string[];
  components: string[];
  technicalInfo: string[];
  synonyms: string[];
  relatedSlugs: string[];
}

export const categoryLabels: Record<ProductCategory, string> = {
  'dosing-handling': 'Dosing & Material Handling',
  'preparation': 'Preparation Systems',
  'accessories': 'Accessories',
};

export const categoryDescriptions: Record<ProductCategory, string> = {
  'dosing-handling':
    'Automated conveying, storage, and precise dosing of dry and liquid ingredients for consistent production lines.',
  'preparation':
    'Integrated mixing, melting, screening, and preparation systems that deliver uniform recipes to your process.',
  'accessories':
    'Pumps, blowers, valves, filters, and complementary equipment that keep your material handling system running reliably.',
};

export const products: Product[] = [
  {
    slug: 'flour-maida-handling',
    name: 'Flour / Maida Handling',
    category: 'dosing-handling',
    categoryLabel: 'Dosing & Material Handling',
    shortDescription: 'Dust-free pneumatic conveying and dosing of flour and maida from bulk delivery to production.',
    purpose:
      'The Flour / Maida Handling System transports flour (maida) from bulk delivery — bags, tankers, or silos — to your mixing or kneading stations with minimal spillage, dust, and manual effort.',
    benefits: [
      'Minimised flour spillage and material loss during transfer',
      'Dust-free working environment for operator safety and hygiene',
      'Hygienic, easy-to-use, and easy-to-clean system design',
    ],
    howItWorks: [
      'Flour is received from bags or bulk tanker and unloaded into a receiving station.',
      'A pneumatic conveying system transfers the flour through sealed piping to storage silos or day bins.',
      'On demand, the system doses the required quantity of flour to the downstream mixer or kneader using weighing and control instrumentation.',
    ],
    components: [
      'Receiving station with bag dump or tanker connection',
      'Pneumatic conveying piping (pressure or vacuum system)',
      'Storage silos or day bins',
      'Rotary valves or feeders',
      'Weighing hopper with load cells',
      'Dust filtration unit',
      'Control panel with PLC',
    ],
    technicalInfo: [
      'Conveying method: pneumatic (pressure or vacuum)',
      'Dosing: by weight using load-cell-based weighing hopper',
      'Construction: food-grade contact parts',
      'Control: PLC-based automated system',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['maida', 'atta', 'wheat flour', 'refined flour', 'flour dosing', 'flour conveying'],
    relatedSlugs: ['bulk-flour-handling', 'sugar-handling', 'powder-sugar-handling'],
  },
  {
    slug: 'sugar-handling',
    name: 'Sugar Handling',
    category: 'dosing-handling',
    categoryLabel: 'Dosing & Material Handling',
    shortDescription: 'Pneumatic conveying and weighed dosing of granular sugar from storage to process.',
    purpose:
      'The Sugar Handling System conveys granular sugar from bulk storage to your preparation or mixing stations with accurate weighing and hygienic, enclosed transfer.',
    benefits: [
      'Enclosed, hygienic transfer that reduces contamination risk',
      'Accurate weighed dosing for consistent recipes',
      'Reduced manual handling and material waste',
    ],
    howItWorks: [
      'Sugar is received in bags or bulk and loaded into a receiving hopper.',
      'A pneumatic conveying system moves sugar through sealed piping to storage silos.',
      'The system automatically doses the required weight of sugar to downstream equipment such as sugar solution preparation or mixing stations.',
    ],
    components: [
      'Receiving hopper with bag dump station',
      'Pneumatic conveying piping',
      'Storage silo',
      'Rotary valve / feeder',
      'Weighing hopper with load cells',
      'Dust filter',
      'PLC control panel',
    ],
    technicalInfo: [
      'Conveying method: pneumatic (pressure or vacuum)',
      'Dosing: by weight using load-cell-based weighing hopper',
      'Construction: food-grade contact parts',
      'Control: PLC-based automated system',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['granulated sugar', 'sugar dosing', 'sugar conveying', 'sugar transfer'],
    relatedSlugs: ['powder-sugar-handling', 'sugar-solution-preparation', 'flour-maida-handling'],
  },
  {
    slug: 'powder-sugar-handling',
    name: 'Powder Sugar Handling',
    category: 'dosing-handling',
    categoryLabel: 'Dosing & Material Handling',
    shortDescription: 'Handling and dosing of powdered (icing) sugar with enclosed transfer and accurate weighing.',
    purpose:
      'The Powder Sugar Handling System conveys fine powdered (icing) sugar from storage to your process with enclosed, dust-controlled transfer and precise weighed dosing.',
    benefits: [
      'Dust-controlled enclosed transfer for a cleaner environment',
      'Accurate weighed dosing of fine powder',
      'Reduced manual handling of a difficult, free-flowing powder',
    ],
    howItWorks: [
      'Powdered sugar is received in bags and unloaded into a receiving station.',
      'The system conveys the fine powder through enclosed piping to storage or directly to the dosing point.',
      'A weighing hopper doses the required quantity to downstream equipment.',
    ],
    components: [
      'Receiving station with bag dump',
      'Enclosed pneumatic conveying piping',
      'Storage bin',
      'Rotary valve / feeder',
      'Weighing hopper with load cells',
      'Dust filtration unit',
      'PLC control panel',
    ],
    technicalInfo: [
      'Conveying method: pneumatic with dust filtration',
      'Dosing: by weight using load-cell-based weighing hopper',
      'Construction: food-grade contact parts',
      'Control: PLC-based automated system',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['icing sugar', 'powdered sugar', 'confectioners sugar', 'powder sugar dosing'],
    relatedSlugs: ['sugar-handling', 'flour-maida-handling', 'cream-preparation'],
  },
  {
    slug: 'multiple-liquid-dosing',
    name: 'Multiple Liquid Dosing',
    category: 'dosing-handling',
    categoryLabel: 'Dosing & Material Handling',
    shortDescription: 'Simultaneous, accurately weighed dosing of multiple liquid ingredients into your process.',
    purpose:
      'The Multiple Liquid Dosing System doses several liquid ingredients — such as water, oil, invert syrup, and other liquids — simultaneously or sequentially into your mixer or process vessel, each with accurate weight or flow control.',
    benefits: [
      'High dosing accuracy for consistent product quality',
      'Simultaneous dosing of multiple liquids reduces cycle time',
      'Fully automated recipe management',
    ],
    howItWorks: [
      'Liquid ingredients are stored in individual tanks or day tanks.',
      'The system selects and doses each liquid according to the active recipe, using flow meters or weighing.',
      'Liquids are delivered to the mixer or process vessel through pipework with controlled valves.',
    ],
    components: [
      'Liquid storage / day tanks',
      'Piping with sanitary valves',
      'Flow meters or weighing system',
      'Pumps (gear or sanitary)',
      'PLC control panel with recipe management',
    ],
    technicalInfo: [
      'Dosing method: by weight (load cells) or by flow (flow meters)',
      'Number of liquids: configurable to project requirements',
      'Construction: food-grade / sanitary contact parts',
      'Control: PLC-based with recipe management',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['liquid dosing', 'multi-liquid dosing', 'liquid ingredient dosing', 'oil dosing'],
    relatedSlugs: ['water-dosing', 'invert-syrup-preparation', 'gms-preparation'],
  },
  {
    slug: 'water-dosing',
    name: 'Water Dosing',
    category: 'dosing-handling',
    categoryLabel: 'Dosing & Material Handling',
    shortDescription: 'Accurate, controlled dosing of water into mixing and preparation processes.',
    purpose:
      'The Water Dosing System delivers a precisely measured quantity of water into your mixer, dough kneader, or preparation vessel, supporting consistent hydration and recipe accuracy.',
    benefits: [
      'Accurate water quantity for consistent dough or batter hydration',
      'Automated dosing reduces manual measurement errors',
      'Integration with recipe management systems',
    ],
    howItWorks: [
      'Water is supplied from the facility line or a storage tank.',
      'The system measures the required volume or weight of water according to the recipe.',
      'Water is delivered to the process equipment through controlled pipework and valves.',
    ],
    components: [
      'Water supply connection or storage tank',
      'Flow meter or weighing hopper',
      'Sanitary piping and valves',
      'Pump (where required)',
      'PLC control panel',
    ],
    technicalInfo: [
      'Dosing method: by volume (flow meter) or by weight',
      'Construction: food-grade / sanitary contact parts',
      'Control: PLC-based automated dosing',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['water measurement', 'water dosing system', 'process water', 'water ingredient dosing'],
    relatedSlugs: ['multiple-liquid-dosing', 'milk-preparation', 'sugar-solution-preparation'],
  },
  {
    slug: 'bulk-flour-handling',
    name: 'Bulk Flour Handling',
    category: 'dosing-handling',
    categoryLabel: 'Dosing & Material Handling',
    shortDescription: 'Large-capacity receiving, storage, and dosing of flour from bulk tanker delivery.',
    purpose:
      'The Bulk Flour Handling System is designed for high-volume flour receiving from bulk tankers, storage in large silos, and automated dosing to downstream production equipment.',
    benefits: [
      'High-capacity receiving from bulk tanker reduces bag handling',
      'Large silo storage for uninterrupted production supply',
      'Automated dosing with accurate weighing',
    ],
    howItWorks: [
      'Flour is delivered by bulk tanker and pneumatically unloaded into storage silos.',
      'The system stores flour in silos with level monitoring and aeration where needed.',
      'On demand, flour is conveyed and weighed into the production process.',
    ],
    components: [
      'Tanker unloading connection',
      'Large-capacity storage silos',
      'Silo aeration / fluidisation system',
      'Pneumatic conveying piping',
      'Weighing hopper with load cells',
      'Level sensors and dust filtration',
      'PLC control panel',
    ],
    technicalInfo: [
      'Receiving: bulk tanker pneumatic unloading',
      'Storage: large-capacity silos',
      'Dosing: by weight using load-cell-based weighing hopper',
      'Control: PLC-based automated system',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['bulk flour', 'silo flour handling', 'tanker flour unloading', 'bulk maida'],
    relatedSlugs: ['flour-maida-handling', 'sugar-handling'],
  },
  {
    slug: 'chemical-handling',
    name: 'Chemical Handling',
    category: 'dosing-handling',
    categoryLabel: 'Dosing & Material Handling',
    shortDescription: 'Preparation and controlled dispensing of process chemicals into cookers or mixers.',
    purpose:
      'The Chemical Handling System prepares and dispenses process chemicals — measuring the correct quantity of water, stirring the solution, and delivering it to cookers or mixers using air pressure or gravity.',
    benefits: [
      'Proper dilution and preparation of process chemicals',
      'Controlled, safe dispensing using air pressure or gravity',
      'Reduced manual handling of chemicals',
    ],
    howItWorks: [
      'The required quantity of water is measured and added to the preparation vessel.',
      'Chemicals are added and stirred to form a uniform solution.',
      'The prepared solution is dispensed into the cooker or mixer using air pressure or gravity.',
    ],
    components: [
      'Preparation vessel with stirring',
      'Water dosing connection',
      'Air pressure or gravity dispensing system',
      'Piping and valves',
      'Control panel',
    ],
    technicalInfo: [
      'Preparation: stirred solution with measured water addition',
      'Dispensing: by air pressure or gravity',
      'Control: automated or semi-automated',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['chemical preparation', 'chemical dosing', 'process chemical handling'],
    relatedSlugs: ['water-dosing', 'multiple-liquid-dosing'],
  },
  {
    slug: 'bulk-fat-handling',
    name: 'Bulk Fat Handling',
    category: 'dosing-handling',
    categoryLabel: 'Dosing & Material Handling',
    shortDescription: 'Receiving, melting, storage, and dosed transfer of bulk fats for production lines.',
    purpose:
      'The Bulk Fat Handling System receives solid or semi-solid fats in bulk, melts and stores them in liquid form, and doses the required quantity to your mixer or process equipment.',
    benefits: [
      'Bulk receiving reduces individual-packaging handling',
      'Liquid storage with temperature control for ready use',
      'Accurate dosing of fat into the production process',
    ],
    howItWorks: [
      'Bulk fat is received and loaded into a melting tank.',
      'The system melts the fat and maintains it at the required temperature in a jacketed storage tank.',
      'On demand, liquid fat is dosed by weight or flow to the downstream mixer or process equipment.',
    ],
    components: [
      'Melting tank with heating',
      'Jacketed storage tank with temperature control',
      'Heated piping and sanitary valves',
      'Pump',
      'Weighing or flow measurement',
      'PLC control panel',
    ],
    technicalInfo: [
      'Receiving: bulk fat blocks or drums',
      'Storage: jacketed tank with temperature control',
      'Dosing: by weight or flow measurement',
      'Construction: food-grade heated contact parts',
      'Control: PLC-based automated system',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['bulk fat', 'fat handling', 'fat dosing', 'shortening handling', 'oil handling'],
    relatedSlugs: ['fat-melting', 'cream-preparation', 'gms-preparation'],
  },
  {
    slug: 'cream-preparation',
    name: 'Cream Preparation',
    category: 'preparation',
    categoryLabel: 'Preparation Systems',
    shortDescription: 'Consistent, automated preparation of cream filling with controlled ingredient mixing.',
    purpose:
      'The Cream Preparation System produces consistent cream filling by automatically mixing powdered sugar, fat, and other ingredients in controlled proportions, delivering a uniform product for sandwiching or filling.',
    benefits: [
      'Consistent cream quality batch after batch',
      'Automated ingredient dosing reduces recipe variation',
      'Hygienic preparation with food-grade construction',
    ],
    howItWorks: [
      'Powdered sugar, fat, and other ingredients are dosed into the mixing vessel according to the recipe.',
      'The system mixes the ingredients to a uniform cream consistency.',
      'Prepared cream is transferred to the filling or sandwiching equipment.',
    ],
    components: [
      'Mixing vessel with agitator',
      'Ingredient dosing connections (powder sugar, fat, etc.)',
      'Piping and transfer pump',
      'Control panel with recipe management',
    ],
    technicalInfo: [
      'Mixing: agitator-based mixing vessel',
      'Ingredient dosing: integrated with powder and liquid dosing systems',
      'Construction: food-grade contact parts',
      'Control: PLC-based with recipe management',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['cream filler', 'cream mixing', 'cream filling preparation', 'biscuit cream'],
    relatedSlugs: ['sandwich-cream-preparation', 'powder-sugar-handling', 'bulk-fat-handling'],
  },
  {
    slug: 'sandwich-cream-preparation',
    name: 'Sandwich Cream Preparation',
    category: 'preparation',
    categoryLabel: 'Preparation Systems',
    shortDescription: 'Preparation of sandwich cream filling with consistent texture and ingredient blend.',
    purpose:
      'The Sandwich Cream Preparation System is designed specifically for producing the cream filling used in sandwich biscuits, combining ingredients in the correct proportions and texture for a consistent filling.',
    benefits: [
      'Consistent cream texture for uniform sandwich biscuit quality',
      'Controlled ingredient blending for repeatable recipes',
      'Hygienic, food-grade preparation system',
    ],
    howItWorks: [
      'Ingredients — powdered sugar, fat, flavours, and other components — are dosed into the mixing vessel.',
      'The system blends the ingredients to the target cream texture and consistency.',
      'Prepared cream is transferred to the sandwiching machine.',
    ],
    components: [
      'Mixing vessel with agitator',
      'Ingredient dosing connections',
      'Transfer piping and pump',
      'Control panel with recipe management',
    ],
    technicalInfo: [
      'Mixing: agitator-based mixing vessel',
      'Ingredient dosing: integrated with upstream dosing systems',
      'Construction: food-grade contact parts',
      'Control: PLC-based with recipe management',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['sandwich biscuit cream', 'cream filling', 'biscuit filling cream'],
    relatedSlugs: ['cream-preparation', 'powder-sugar-handling', 'bulk-fat-handling'],
  },
  {
    slug: 'sepro-gyroscreen',
    name: 'Sepro Gyroscreen',
    category: 'preparation',
    categoryLabel: 'Preparation Systems',
    shortDescription: 'Vibrating screening machine for efficient wet and dry separation of powders and slurries.',
    purpose:
      'The Sepro Gyroscreen is a vibrating screening machine used for efficient wet and dry screening of powders, granules, and slurries, removing oversize particles and ensuring uniform material before processing.',
    benefits: [
      'Efficient vibrating screen for wet and dry screening',
      'Removes oversize particles and foreign matter',
      'Improves downstream product uniformity',
    ],
    howItWorks: [
      'Material is fed onto the screening surface.',
      'The gyratory vibration motion separates particles by size — oversize material is retained on the screen, while undersize material passes through.',
      'Screened material is discharged to the next process stage.',
    ],
    components: [
      'Screening deck with mesh',
      'Vibration motor / gyratory drive',
      'Feed inlet and oversize / undersize outlets',
      'Dust cover (where applicable)',
      'Support frame',
    ],
    technicalInfo: [
      'Screening type: gyratory vibrating screen',
      'Application: wet and dry screening',
      'Construction: food-grade contact parts',
      'Drive: vibration motor',
      'Capacity and mesh size: configured to project requirements',
    ],
    synonyms: ['gyroscreen', 'vibrating screen', 'sieve', 'vibro sifter', 'powder screen'],
    relatedSlugs: ['flour-maida-handling', 'powder-sugar-handling', 'sugar-handling'],
  },
  {
    slug: 'butter-handling',
    name: 'Butter Handling',
    category: 'preparation',
    categoryLabel: 'Preparation Systems',
    shortDescription: 'Receiving, melting, and dosed transfer of butter for production processes.',
    purpose:
      'The Butter Handling System receives butter in blocks or bulk, melts it to liquid form, and doses the required quantity to your mixer or process equipment.',
    benefits: [
      'Controlled melting for ready-to-use liquid butter',
      'Accurate dosing into the production process',
      'Hygienic handling with food-grade, heated construction',
    ],
    howItWorks: [
      'Butter is received in blocks or bulk and loaded into a melting tank.',
      'The system melts the butter and holds it at the required temperature.',
      'Liquid butter is dosed by weight or flow to the downstream equipment.',
    ],
    components: [
      'Melting tank with heating',
      'Jacketed holding tank with temperature control',
      'Heated piping and sanitary valves',
      'Pump',
      'Weighing or flow measurement',
      'Control panel',
    ],
    technicalInfo: [
      'Receiving: butter blocks or bulk',
      'Storage: jacketed tank with temperature control',
      'Dosing: by weight or flow measurement',
      'Construction: food-grade heated contact parts',
      'Control: PLC-based or semi-automated',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['butter melting', 'butter dosing', 'liquid butter', 'butter transfer'],
    relatedSlugs: ['fat-melting', 'bulk-fat-handling', 'cream-preparation'],
  },
  {
    slug: 'fat-melting',
    name: 'Fat Melting',
    category: 'preparation',
    categoryLabel: 'Preparation Systems',
    shortDescription: 'Controlled melting of solid fats into liquid form for dosing and process use.',
    purpose:
      'The Fat Melting System melts solid fats — such as bakery shortening or palm oil — into liquid form, holding the melted fat at a controlled temperature for transfer to downstream dosing or mixing equipment.',
    benefits: [
      'Controlled, even melting of solid fats',
      'Temperature-maintained storage for consistent liquid fat',
      'Hygienic, heated construction with food-grade parts',
    ],
    howItWorks: [
      'Solid fat is loaded into the melting tank.',
      'Heating elements or jacketed heating melt the fat evenly.',
      'Melted fat is held at a controlled temperature and transferred to storage or dosing equipment.',
    ],
    components: [
      'Melting tank with jacketed heating or heating elements',
      'Temperature control system',
      'Heated piping and valves',
      'Transfer pump',
      'Control panel',
    ],
    technicalInfo: [
      'Melting: jacketed tank or heating element based',
      'Temperature: controlled holding temperature',
      'Construction: food-grade heated contact parts',
      'Control: PLC-based or semi-automated temperature control',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['fat melter', 'shortening melter', 'fat melting tank', 'oil melting'],
    relatedSlugs: ['bulk-fat-handling', 'butter-handling', 'gms-preparation'],
  },
  {
    slug: 'gms-preparation',
    name: 'GMS Preparation',
    category: 'preparation',
    categoryLabel: 'Preparation Systems',
    shortDescription: 'Preparation and dosing of GMS (glyceryl monostearate) emulsion for dough and batter systems.',
    purpose:
      'The GMS Preparation System prepares a GMS (glyceryl monostearate) emulsion by combining GMS with water and heating, producing a uniform emulsion that is dosed into dough or batter for improved texture and softness.',
    benefits: [
      'Uniform GMS emulsion for consistent dough conditioning',
      'Automated preparation and dosing',
      'Hygienic, food-grade construction',
    ],
    howItWorks: [
      'GMS and water are measured into the preparation vessel.',
      'The system heats and mixes the combination to form a uniform emulsion.',
      'The prepared emulsion is dosed into the mixer or kneader as required by the recipe.',
    ],
    components: [
      'Preparation vessel with heating and agitator',
      'Water dosing connection',
      'Heated piping and valves',
      'Transfer pump',
      'Control panel with recipe management',
    ],
    technicalInfo: [
      'Preparation: heated mixing vessel',
      'Dosing: by weight or volume',
      'Construction: food-grade heated contact parts',
      'Control: PLC-based with recipe management',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['glyceryl monostearate', 'gms emulsion', 'dough conditioner preparation', 'emulsifier preparation'],
    relatedSlugs: ['multiple-liquid-dosing', 'water-dosing', 'fat-melting'],
  },
  {
    slug: 'milk-preparation',
    name: 'Milk Preparation',
    category: 'preparation',
    categoryLabel: 'Preparation Systems',
    shortDescription: 'Preparation, temperature control, and dosing of milk for production processes.',
    purpose:
      'The Milk Preparation System handles the storage, temperature control, and accurate dosing of milk into your mixing or preparation process.',
    benefits: [
      'Temperature-controlled milk storage for consistent quality',
      'Accurate dosing into the production process',
      'Hygienic, sanitary construction for dairy handling',
    ],
    howItWorks: [
      'Milk is received into a jacketed storage tank.',
      'The system maintains the milk at the required temperature.',
      'On demand, milk is dosed by weight or flow to the downstream mixer or process vessel.',
    ],
    components: [
      'Jacketed storage tank with temperature control',
      'Sanitary piping and valves',
      'Pump',
      'Weighing or flow measurement',
      'Control panel',
    ],
    technicalInfo: [
      'Storage: jacketed tank with temperature control',
      'Dosing: by weight or flow measurement',
      'Construction: sanitary / dairy-grade contact parts',
      'Control: PLC-based automated dosing',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['milk dosing', 'milk handling', 'liquid milk preparation', 'dairy handling'],
    relatedSlugs: ['water-dosing', 'multiple-liquid-dosing', 'sugar-solution-preparation'],
  },
  {
    slug: 'invert-syrup-preparation',
    name: 'Invert Syrup Preparation',
    category: 'preparation',
    categoryLabel: 'Preparation Systems',
    shortDescription: 'Automated preparation of invert syrup from sugar, water, and acid with controlled heating.',
    purpose:
      'The Invert Syrup Preparation System produces invert syrup by dissolving sugar in water, adding acid, and heating the mixture to achieve inversion, then cooling and storing the finished syrup for dosing.',
    benefits: [
      'Consistent invert syrup quality through controlled inversion',
      'Automated recipe control for sugar, water, acid, and temperature',
      'Hygienic, food-grade construction',
    ],
    howItWorks: [
      'Sugar and water are dosed into the preparation vessel in the correct proportions.',
      'Acid is added and the mixture is heated to the inversion temperature.',
      'The system controls the inversion process, then cools and stores the finished invert syrup.',
    ],
    components: [
      'Preparation vessel with heating and agitator',
      'Sugar and water dosing connections',
      'Acid dosing',
      'Cooling system',
      'Storage tank',
      'Control panel with recipe management',
    ],
    technicalInfo: [
      'Preparation: heated mixing vessel with controlled inversion',
      'Dosing: sugar, water, and acid by weight or volume',
      'Construction: food-grade contact parts',
      'Control: PLC-based with recipe management',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['invert sugar', 'inverted syrup', 'syrup preparation', 'sugar inversion'],
    relatedSlugs: ['sugar-solution-preparation', 'sugar-handling', 'multiple-liquid-dosing'],
  },
  {
    slug: 'sugar-solution-preparation',
    name: 'Sugar Solution Preparation',
    category: 'preparation',
    categoryLabel: 'Preparation Systems',
    shortDescription: 'Automated preparation of sugar solution (syrup) with accurate concentration and hygienic handling.',
    purpose:
      'The Sugar Solution Preparation System dissolves sugar in water to produce a sugar solution (syrup) at the required concentration, with accurate ingredient dosing, hygienic preparation, and automated control.',
    benefits: [
      'Accurate and hygienic charging of sugar and water',
      'Fully automated preparation with controlled concentration',
      'Consistent sugar solution quality for downstream use',
    ],
    howItWorks: [
      'Sugar and water are dosed into the preparation vessel in the correct proportions.',
      'The system heats and stirs the mixture until the sugar is fully dissolved.',
      'The finished sugar solution is filtered, cooled if required, and transferred to storage or dosing.',
    ],
    components: [
      'Preparation vessel with heating and agitator',
      'Sugar and water dosing connections',
      'Filter',
      'Transfer pump and piping',
      'Storage tank',
      'Control panel with recipe management',
    ],
    technicalInfo: [
      'Preparation: heated mixing vessel',
      'Dosing: sugar and water by weight',
      'Filtration: inline filter for solution clarity',
      'Construction: food-grade contact parts',
      'Control: PLC-based, fully automated',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['sugar syrup', 'syrup preparation', 'sugar dissolving', 'liquid sugar', 'sugar solution'],
    relatedSlugs: ['invert-syrup-preparation', 'sugar-handling', 'water-dosing'],
  },
  {
    slug: 'reject-biscuit-grinding',
    name: 'Reject Biscuit Grinding',
    category: 'preparation',
    categoryLabel: 'Preparation Systems',
    shortDescription: 'Grinding of reject biscuits into reusable material for reincorporation into production.',
    purpose:
      'The Reject Biscuit Grinding System grinds rejected or broken biscuits into a fine, uniform particle size, allowing the material to be reincorporated into dough or other processes, reducing waste.',
    benefits: [
      'Reduces product waste by enabling reuse of reject biscuits',
      'Uniform grinding for consistent reincorporation',
      'Hygienic, enclosed grinding system',
    ],
    howItWorks: [
      'Reject or broken biscuits are fed into the grinding machine.',
      'The grinder reduces the biscuits to the target particle size.',
      'Ground material is collected and conveyed for reincorporation into the production process.',
    ],
    components: [
      'Grinding mill / pulveriser',
      'Feed hopper',
      'Collection and conveying system',
      'Dust filtration',
      'Control panel',
    ],
    technicalInfo: [
      'Grinding: mill or pulveriser',
      'Particle size: configurable to process requirements',
      'Construction: food-grade contact parts',
      'Control: semi-automated or automated',
      'Capacity: configured to project requirements',
    ],
    synonyms: ['biscuit grinder', 'reject grinding', 'biscuit waste', 'biscuit recycling', 'cookie grinding'],
    relatedSlugs: ['flour-maida-handling', 'cream-preparation', 'sepro-gyroscreen'],
  },
  {
    slug: 'gear-pumps',
    name: 'Gear Pumps',
    category: 'accessories',
    categoryLabel: 'Accessories',
    shortDescription: 'Sanitary gear pumps for transfer and dosing of liquids in material handling systems.',
    purpose:
      'Gear pumps are used for the transfer and dosed delivery of liquids — such as fat, oil, syrup, and other process liquids — within material handling and preparation systems.',
    benefits: [
      'Reliable liquid transfer and dosing',
      'Sanitary construction for food-grade applications',
      'Available in sizes matched to system requirements',
    ],
    howItWorks: [
      'The gear pump uses intermeshing gears to move liquid through the pump body.',
      'Liquid is drawn in on the suction side and discharged on the pressure side.',
      'Flow rate is determined by pump size and drive speed.',
    ],
    components: [
      'Pump body with gears',
      'Drive motor',
      'Inlet and outlet connections',
      'Seals and bearings',
    ],
    technicalInfo: [
      'Type: positive displacement gear pump',
      'Construction: sanitary / food-grade',
      'Drive: electric motor',
      'Sizes and flow rates: configured to system requirements',
    ],
    synonyms: ['pump', 'liquid pump', 'sanitary pump', 'positive displacement pump'],
    relatedSlugs: ['roots-blowers', 'valves', 'bulk-fat-handling'],
  },
  {
    slug: 'roots-blowers',
    name: 'Roots Blowers',
    category: 'accessories',
    categoryLabel: 'Accessories',
    shortDescription: 'Roots blowers providing the air flow for pneumatic conveying of dry materials.',
    purpose:
      'Roots blowers provide the positive or negative air flow that drives pneumatic conveying of dry bulk materials such as flour, sugar, and powders through the conveying piping.',
    benefits: [
      'Reliable air flow for pneumatic conveying systems',
      'Available in sizes matched to conveying capacity',
      'Robust construction for continuous industrial duty',
    ],
    howItWorks: [
      'The roots blower uses two counter-rotating lobed rotors to move air through the blower housing.',
      'The generated air flow is used to convey material through sealed piping.',
      'Blower size and pressure rating are selected based on the conveying distance and material.',
    ],
    components: [
      'Blower housing with rotors',
      'Drive motor',
      'Inlet and outlet connections',
      'Silencer (where applicable)',
    ],
    technicalInfo: [
      'Type: positive displacement roots blower',
      'Application: pneumatic conveying air source',
      'Drive: electric motor',
      'Sizes and capacities: configured to system requirements',
    ],
    synonyms: ['blower', 'roots pump', 'conveying blower', 'pneumatic blower'],
    relatedSlugs: ['gear-pumps', 'filters', 'flour-maida-handling'],
  },
  {
    slug: 'valves',
    name: 'Valves',
    category: 'accessories',
    categoryLabel: 'Accessories',
    shortDescription: 'Sanitary and process valves for controlling flow in material handling systems.',
    purpose:
      'A range of sanitary and process valves — including rotary valves, butterfly valves, and divert valves — controls the flow of dry and liquid materials throughout the handling and preparation system.',
    benefits: [
      'Controlled flow direction and quantity for system operation',
      'Sanitary construction for food-grade applications',
      'Available in sizes and types matched to system requirements',
    ],
    howItWorks: [
      'Valves are installed at key points in the piping and conveying system.',
      'The control system opens, closes, or modulates valves to direct material flow.',
      'Valve type is selected based on the material, pressure, and application.',
    ],
    components: [
      'Valve body',
      'Actuator (manual, pneumatic, or electric)',
      'Seals and seats',
    ],
    technicalInfo: [
      'Types: rotary, butterfly, divert, and other process valves',
      'Construction: sanitary / food-grade',
      'Actuation: manual, pneumatic, or electric',
      'Sizes: configured to system requirements',
    ],
    synonyms: ['rotary valve', 'butterfly valve', 'divert valve', 'flow control valve', 'feeder valve'],
    relatedSlugs: ['gear-pumps', 'roots-blowers', 'filters'],
  },
  {
    slug: 'filters',
    name: 'Filters',
    category: 'accessories',
    categoryLabel: 'Accessories',
    shortDescription: 'Dust filtration and separation units for clean, dust-free material handling operations.',
    purpose:
      'Dust filtration units remove airborne dust from conveying air and vent points, maintaining a dust-free working environment and preventing material loss.',
    benefits: [
      'Dust-free working environment for operator safety and hygiene',
      'Prevents material loss through airborne dust',
      'Configured to match conveying system capacity',
    ],
    howItWorks: [
      'Dust-laden air from the conveying system is directed into the filter unit.',
      'Filter media captures dust particles while clean air is vented.',
      'Collected dust is returned to the process or collected for disposal.',
    ],
    components: [
      'Filter housing with filter media',
      'Pulse-jet or mechanical cleaning system',
      'Dust collection hopper',
      'Inlet and clean air outlet',
    ],
    technicalInfo: [
      'Type: cartridge or bag dust filter',
      'Cleaning: pulse-jet or mechanical',
      'Construction: food-grade suitable',
      'Sizes: configured to system air volume',
    ],
    synonyms: ['dust filter', 'dust collector', 'filtration unit', 'air filter', 'bag filter'],
    relatedSlugs: ['roots-blowers', 'valves', 'flour-maida-handling'],
  },
  {
    slug: 'other-accessories',
    name: 'Other Accessories',
    category: 'accessories',
    categoryLabel: 'Accessories',
    shortDescription: 'Supporting equipment and components for material handling systems.',
    purpose:
      'A range of supporting accessories — including piping, sensors, level indicators, control panels, and other components — completes the material handling and preparation system.',
    benefits: [
      'Complete system integration with matched components',
      'Sensors and controls for automated operation',
      'Components selected to suit the specific system configuration',
    ],
    howItWorks: [
      'Accessories are selected based on the system design and material requirements.',
      'Components are integrated into the overall system for monitoring, control, and operation.',
      'Each accessory serves its specific function within the complete system.',
    ],
    components: [
      'Conveying and process piping',
      'Level sensors and indicators',
      'Pressure and temperature sensors',
      'Control panels and instrumentation',
      'Flexible connections and couplings',
    ],
    technicalInfo: [
      'Range: piping, sensors, controls, and system components',
      'Construction: food-grade where in material contact',
      'Selection: based on system design requirements',
    ],
    synonyms: ['accessories', 'spares', 'components', 'system parts', 'instrumentation'],
    relatedSlugs: ['gear-pumps', 'valves', 'filters'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(slug: string): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return product.relatedSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => p !== undefined);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.synonyms.some((s) => s.toLowerCase().includes(q)) ||
      p.categoryLabel.toLowerCase().includes(q)
  );
}
