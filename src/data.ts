export interface ProjectCapability { key:string; label:string; eyebrow:string; title:string; description:string; category:string; capability:string; expertise:string; alt:string }
export const projects:ProjectCapability[] = [
 {key:'residential',label:'Residential',eyebrow:'RESIDENTIAL DEVELOPMENT',title:'Vertical living. Grounded in engineering.',description:'High-rise residential environments shaped by structural discipline, integrated civil works and thoughtful urban planning.',category:'Residential',capability:'Apartment Development',expertise:'High-Rise · Structural · Finishing',alt:'Supplied presentation visual of illuminated apartment towers and landscaped grounds'},
 {key:'residence',label:'Residences',eyebrow:'PREMIUM RESIDENTIAL',title:'Contemporary residences.',description:'Residential construction where structural integrity, precise finishing and connected indoor-outdoor spaces come together.',category:'Residential',capability:'Custom Home Construction',expertise:'Structural · Civil · Finishing',alt:'Supplied presentation visual of a contemporary residence with broad glazing and gardens'},
 {key:'commercial',label:'Commercial',eyebrow:'COMMERCIAL & HOSPITALITY',title:'Commercial infrastructure.',description:'Integrated construction for hospitality and commercial environments where performance, durability and architectural finish work together.',category:'Commercial',capability:'Building Construction',expertise:'Structural · Civil · Finishing',alt:'Supplied presentation visual of a hospitality building; representative capability, not a verified client project'},
 {key:'highways',label:'Highways',eyebrow:'TRANSPORT INFRASTRUCTURE',title:'Highways & road networks.',description:'Transport infrastructure engineered around durability, efficient movement and long-term corridor performance.',category:'Infrastructure',capability:'Highway Construction',expertise:'Roadworks · Pavement · Civil Works',alt:'Supplied presentation visual of a divided highway at sunset'},
 {key:'bridges',label:'Bridges',eyebrow:'STRUCTURAL INFRASTRUCTURE',title:'Road & flyover structures.',description:'Heavy civil and structural infrastructure designed for reliable movement, durability and demanding operational conditions.',category:'Infrastructure',capability:'Bridge & Flyover Works',expertise:'Structural · Civil · Highway',alt:'Supplied presentation visual of a curved elevated concrete road bridge'},
 {key:'pedestrian',label:'Connectivity',eyebrow:'URBAN CONNECTIVITY',title:'Pedestrian infrastructure.',description:'Engineered urban connectivity systems developed for safe movement, accessibility and long-term structural performance.',category:'Infrastructure',capability:'Pedestrian Structures',expertise:'Structural · Civil Works',alt:'Supplied presentation visual of a covered pedestrian bridge over an urban road'},
 {key:'township',label:'Townships',eyebrow:'MASTER PLANNING',title:'Integrated townships.',description:'Large-scale residential environments supported by coordinated civil works, internal infrastructure and community-focused planning.',category:'Residential',capability:'Township Development',expertise:'Planning · Civil · Infrastructure',alt:'Supplied presentation visual of a master-planned residential township'}
];
export const capabilities = [
 ['Civil Construction','Engineering and execution of institutional, commercial and large-scale structural works.'],
 ['Infrastructure Development','Integrated infrastructure planning, construction and project implementation.'],
 ['Highway Construction','Road, highway and connected civil infrastructure execution.'],
 ['Structural Engineering','Engineering-led structural development focused on strength, reliability and longevity.'],
 ['Government Contracting','A corporate execution framework for public-sector and government-related infrastructure works.'],
 ['Industrial & Institutional Works','Civil and infrastructure solutions for complex industrial and institutional environments.']
];
export const regions = [
 {name:'New Delhi',label:'Corporate / NCR hub',detail:'Corporate coordination, urban infrastructure and institutional construction.',x:49,y:59},
 {name:'Jalandhar',label:'Punjab operations',detail:'Regional civil engineering and infrastructure operations.',x:24,y:24},
 {name:'Chandigarh',label:'Tri-City network',detail:'Civil works and multi-unit infrastructure coordination.',x:56,y:29},
 {name:'Panipat',label:'Haryana corridor',detail:'Industrial and infrastructure corridor support.',x:42,y:45},
 {name:'Jaipur',label:'Rajasthan network',detail:'Regional infrastructure and civil works network.',x:22,y:81},
 {name:'Lucknow',label:'Uttar Pradesh expansion',detail:'Strategic expansion and project coordination.',x:83,y:76},
 {name:'Himachal Pradesh',label:'Strategic regional coverage',detail:'Regional coverage for terrain-sensitive infrastructure opportunities; no permanent office is identified.',x:70,y:11}
];
// Activate only after the owner supplies and confirms supporting registrations.
export const additionalApprovals: { name:string; verified:boolean; detail:string }[] = [
 {name:'CPWD',verified:false,detail:''},{name:'RERA',verified:false,detail:''},{name:'CLRA',verified:false,detail:''}
];
