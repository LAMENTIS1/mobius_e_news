import { Article } from '../types';

// Mock news articles data
export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'New AI Model Surpasses Human Performance in Medical Diagnostics',
    summary: 'A breakthrough neural network shows unprecedented accuracy in diagnosing rare diseases from medical imagery.',
    content: `Researchers at MIT and Stanford have developed a groundbreaking AI system that can diagnose rare medical conditions with 97% accuracy, outperforming experienced radiologists. The model, trained on over 1.2 million medical images, uses a novel approach to feature extraction that allows it to identify subtle patterns invisible to the human eye.

"This represents a significant leap forward in medical AI," says Dr. Sarah Chen, lead researcher on the project. "While we don't expect this to replace medical professionals, it provides them with an incredibly powerful diagnostic tool that can help catch conditions earlier and with greater accuracy."

The system has been particularly effective at identifying early signs of rare cancers and neurological disorders, potentially allowing for earlier intervention and improved patient outcomes. Clinical trials are expected to begin next year at major teaching hospitals across the country.`,
    author: 'Dr. James Wilson',
    date: '2025-04-15',
    category: 'Technology',
    imageUrl: 'https://images.pexels.com/photos/3912976/pexels-photo-3912976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    source: 'Tech Research Daily',
    tags: ['AI', 'Healthcare', 'Machine Learning', 'Medical Research']
  },
  {
    id: '2',
    title: 'Quantum Computing Breakthrough Promises New Era of Cryptography',
    summary: 'Scientists achieve stable quantum entanglement at room temperature, paving the way for practical quantum applications.',
    content: `In a major scientific breakthrough, researchers at Caltech have demonstrated quantum entanglement that remains stable at room temperature for over 10 minutes - orders of magnitude longer than previous achievements. This development removes one of the biggest obstacles to practical quantum computing applications.

The team, led by quantum physicist Dr. Emily Zhang, used a novel material composed of hexagonal boron nitride to create quantum bits (qubits) that resist decoherence at normal ambient temperatures. Previous systems required cooling to near absolute zero to maintain quantum states.

"This is a game-changer for quantum computing," explained Dr. Zhang. "We can now envision quantum processors that operate in standard environments without elaborate cooling systems."

The implications for cryptography are particularly significant. Quantum-resistant encryption methods can now be practically implemented, addressing concerns about quantum computers eventually breaking current encryption standards.`,
    author: 'Michael Chen',
    date: '2025-04-14',
    category: 'Science',
    imageUrl: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    source: 'Science Today',
    tags: ['Quantum Computing', 'Cryptography', 'Physics', 'Technology']
  },
  {
    id: '3',
    title: 'New Sustainable Building Material Absorbs CO2 Throughout Lifecycle',
    summary: 'Revolutionary concrete alternative captures carbon during manufacturing and continues to absorb greenhouse gases for decades.',
    content: `Engineers at ETH Zurich have developed a revolutionary building material that actively removes carbon dioxide from the atmosphere throughout its lifecycle. The material, named "CarbonCrete," incorporates specially designed porous minerals that chemically bind with CO2 molecules.

Unlike traditional concrete, which is responsible for approximately 8% of global carbon emissions, CarbonCrete actually has a negative carbon footprint. Each cubic meter of the material can absorb up to 120kg of CO2 over its lifetime.

"Buildings made with this material essentially function as passive carbon capture systems," explains Dr. Martina Holzer, who led the research team. "A mid-sized office building constructed with CarbonCrete could offset the carbon emissions of dozens of cars annually."

The material has already passed safety and durability testing, meeting or exceeding all standards for commercial construction. Several pilot projects are underway in Europe, with the first CarbonCrete high-rise scheduled to break ground in Copenhagen next year.`,
    author: 'Thomas Green',
    date: '2025-04-12',
    category: 'Environment',
    imageUrl: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    source: 'Green Building Review',
    tags: ['Climate Change', 'Sustainable Architecture', 'Carbon Capture', 'Materials Science']
  },
  {
    id: '4',
    title: 'Neuralink Completes First Successful Human Trial of Brain-Computer Interface',
    summary: 'Paralyzed patient regains ability to control digital devices through thoughts alone using breakthrough implant technology.',
    content: `In a milestone for neurotechnology, Neuralink has announced the successful completion of its first human clinical trial. A 42-year-old patient with complete spinal cord injury has gained the ability to control computers, smartphones, and other digital devices using only their thoughts.

The patient, whose identity remains confidential at their request, received Neuralink's N1 Implant six months ago. The device, roughly the size of five stacked coins, contains thousands of microscopic threads that connect directly to neurons in the brain's motor cortex.

"After just three weeks of training, the patient was able to browse the web, send text messages, and play simple video games," said Dr. Rachel Martinez, Neuralink's clinical director. "By the two-month mark, they achieved typing speeds comparable to those of non-disabled individuals using a smartphone."

The success of this initial trial has profound implications for people with paralysis, ALS, and other conditions that limit physical movement. Neuralink has received FDA approval to expand the trial to 20 additional patients later this year.`,
    author: 'Dr. Samuel Park',
    date: '2025-04-10',
    category: 'Health',
    imageUrl: 'https://images.pexels.com/photos/8413312/pexels-photo-8413312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    source: 'Medical Innovation Journal',
    tags: ['Neurotechnology', 'Brain-Computer Interface', 'Paralysis Treatment', 'Neuralink']
  },
  {
    id: '5',
    title: 'Fusion Energy Startup Achieves Net Positive Energy Production',
    summary: 'Commonwealth Fusion Systems demonstrates sustained fusion reaction producing more energy than required to maintain it.',
    content: `Commonwealth Fusion Systems (CFS) has announced a historic breakthrough in fusion energy: their experimental SPARC reactor has achieved net energy gain in a sustained fusion reaction lasting over 30 seconds. This marks the first time a private company has demonstrated fusion energy production that outputs more power than is required to maintain the reaction.

The SPARC reactor, located at CFS's facility outside Boston, uses high-temperature superconducting magnets to create the intense magnetic fields necessary to contain plasma at temperatures exceeding 100 million degrees Celsius. During the record-setting test, the reactor produced 1.4 times more energy than was used to heat and confine the fusion fuel.

"This is the inflection point fusion research has been working toward for over 60 years," said Dr. Maria Rodriguez, CFS's chief scientist. "We've now demonstrated that fusion can be a viable energy source, and we have a clear engineering pathway to commercial power plants."

While the company cautions that commercial fusion power is still years away, they've announced plans to begin construction on a demonstration power plant next year, with the goal of feeding fusion-generated electricity into the grid by 2030.`,
    author: 'Robert Johnson',
    date: '2025-04-08',
    category: 'Energy',
    imageUrl: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    source: 'Future Energy Report',
    tags: ['Fusion Energy', 'Clean Power', 'Nuclear Physics', 'Climate Solutions']
  },
  {
    id: '6',
    title: 'Autonomous Drone Network Successfully Delivers Medical Supplies Across Rural Africa',
    summary: 'Innovative air traffic management system enables safe, efficient delivery of vital medicines to remote communities.',
    content: `A groundbreaking network of autonomous delivery drones has completed its first month of operations across rural regions of Rwanda, Tanzania, and Ghana, successfully delivering over 12,000 packages of medical supplies to remote clinics and hospitals. The system, developed by Zipline in partnership with local health ministries, represents the world's first large-scale autonomous aerial logistics network.

What makes this system unique is its advanced air traffic management platform that allows hundreds of drones to operate simultaneously in shared airspace without human operators. The drones navigate changing weather conditions, avoid birds and other aircraft, and can deliver packages with precision to areas without formal addresses or landing pads.

"Each drone can carry up to 4 pounds of cargo – enough for life-saving blood products, vaccines, or over 200 doses of critical medicines," explained Zipline's operations director for Africa, Grace Mwangi. "The median delivery time is just 45 minutes, compared to what might have been several hours or even days with ground transportation."

The system has already been credited with saving dozens of lives by delivering emergency blood supplies and antivenom to facilities that would otherwise have had to transfer patients long distances for treatment.`,
    author: 'Daniel Osei',
    date: '2025-04-05',
    category: 'Technology',
    imageUrl: 'https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    source: 'Global Health Technology',
    tags: ['Drones', 'Healthcare Access', 'Autonomous Systems', 'Africa']
  }
];

// Function to get related articles based on current article
export const getRelatedArticles = (currentArticleId: string): Article[] => {
  // In a real application, this would use ML to find related content
  // For this demo, we'll just select random articles different from the current one
  return mockArticles
    .filter(article => article.id !== currentArticleId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
};

// Function to get articles by category
export const getArticlesByCategory = (category: string): Article[] => {
  return mockArticles.filter(article => article.category === category);
};

// Function to get an article by ID
export const getArticleById = (id: string): Article | undefined => {
  return mockArticles.find(article => article.id === id);
};

// Function to search articles by query
export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockArticles.filter(
    article => 
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.summary.toLowerCase().includes(lowercaseQuery) ||
      article.content.toLowerCase().includes(lowercaseQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Get all unique categories
export const getCategories = (): string[] => {
  return Array.from(new Set(mockArticles.map(article => article.category)));
};