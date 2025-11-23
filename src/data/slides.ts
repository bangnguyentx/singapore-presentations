// Comprehensive slide data for Singapore presentation
// All content is bilingual (English primary + Vietnamese overlay)

export interface SlideContent {
  id: string;
  slug: string;
  category: string;
  title: string;
  titleVi: string;
  subtitle?: string;
  subtitleVi?: string;
  content: ContentBlock[];
  speakerNotes: string;
  backgroundColor?: string;
  textColor?: string;
  image?: string;
  chart?: ChartConfig;
  map?: MapConfig;
  timeline?: TimelineConfig;
  facts?: KeyFact[];
}

export interface ContentBlock {
  type: 'paragraph' | 'list' | 'quote' | 'statistic';
  text: string;
  textVi: string;
  items?: { text: string; textVi: string }[];
}

export interface KeyFact {
  icon: string;
  label: string;
  labelVi: string;
  value: string;
  valueVi?: string;
  source?: string;
  year?: string;
}

export interface ChartConfig {
  type: 'bar' | 'line' | 'pie' | 'area';
  title: string;
  data: any[];
  dataKey?: string;
  xAxisKey?: string;
}

export interface MapConfig {
  center: [number, number];
  zoom: number;
  markers: MapMarker[];
}

export interface MapMarker {
  position: [number, number];
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
}

export interface TimelineConfig {
  events: TimelineEvent[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
}

export const slides: SlideContent[] = [
  // Slide 1: Title/Intro
  {
    id: '1',
    slug: 'welcome',
    category: 'Introduction',
    title: 'Singapore',
    titleVi: 'Singapore - Quốc gia đảo thịnh vượng',
    subtitle: 'A Global City-State at the Crossroads of Asia',
    subtitleVi: 'Thành phố quốc gia toàn cầu tại ngã tư châu Á',
    content: [
      {
        type: 'paragraph',
        text: 'Welcome to an interactive presentation exploring Singapore—a remarkable nation that transformed from a developing country to one of the world\'s most prosperous and innovative economies in just six decades.',
        textVi: 'Chào mừng đến với bài thuyết trình về Singapore—quốc gia phi thường chuyển đổi từ nước đang phát triển thành một trong những nền kinh tế thịnh vượng và sáng tạo nhất thế giới chỉ trong sáu thập kỷ.',
      },
    ],
    speakerNotes: 'Introduce Singapore as a unique success story. Emphasize its rapid development and strategic importance. Engage audience with the transformation narrative.',
    backgroundColor: '#EF3340',
    textColor: '#FFFFFF',
    image: '/images/singapore-skyline.jpg',
  },

  // Slide 2: Quick Facts
  {
    id: '2',
    slug: 'quick-facts',
    category: 'Overview',
    title: 'Quick Facts About Singapore',
    titleVi: 'Thông tin cơ bản về Singapore',
    content: [
      {
        type: 'paragraph',
        text: 'Singapore is a sovereign city-state and island country in Southeast Asia, located at the southern tip of the Malay Peninsula.',
        textVi: 'Singapore là quốc gia thành phố chủ quyền ở Đông Nam Á, nằm ở cực nam bán đảo Mã Lai.',
      },
    ],
    speakerNotes: 'Present key statistics. Highlight Singapore\'s small size but massive global impact. Note the multicultural composition and linguistic diversity.',
    facts: [
      {
        icon: 'MapPin',
        label: 'Capital',
        labelVi: 'Thủ đô',
        value: 'Singapore',
        source: 'Government of Singapore',
      },
      {
        icon: 'Users',
        label: 'Population',
        labelVi: 'Dân số',
        value: '5.92 million',
        valueVi: '5,92 triệu người',
        year: '2024',
        source: 'Singapore Department of Statistics',
      },
      {
        icon: 'Globe',
        label: 'Area',
        labelVi: 'Diện tích',
        value: '733.1 km²',
        valueVi: '733,1 km²',
        year: '2024',
        source: 'Singapore Land Authority',
      },
      {
        icon: 'DollarSign',
        label: 'GDP',
        labelVi: 'GDP',
        value: '$525 billion USD',
        valueVi: '525 tỷ đô la Mỹ',
        year: '2024 est.',
        source: 'IMF World Economic Outlook',
      },
      {
        icon: 'Coins',
        label: 'GDP per Capita',
        labelVi: 'GDP bình quân',
        value: '$88,447 USD',
        valueVi: '88.447 đô la Mỹ',
        year: '2024 est.',
        source: 'IMF',
      },
      {
        icon: 'Banknote',
        label: 'Currency',
        labelVi: 'Tiền tệ',
        value: 'Singapore Dollar (SGD)',
        valueVi: 'Đô la Singapore (SGD)',
      },
      {
        icon: 'Languages',
        label: 'Official Languages',
        labelVi: 'Ngôn ngữ chính thức',
        value: 'English, Malay, Mandarin, Tamil',
        valueVi: 'Tiếng Anh, Mã Lai, Quan Thoại, Tamil',
      },
      {
        icon: 'Calendar',
        label: 'Independence',
        labelVi: 'Độc lập',
        value: 'August 9, 1965',
        valueVi: '9 tháng 8, 1965',
      },
    ],
  },

  // Slide 3: Geography & Climate
  {
    id: '3',
    slug: 'geography-climate',
    category: 'Overview',
    title: 'Geography & Climate',
    titleVi: 'Địa lý & Khí hậu',
    subtitle: 'A Tropical Island at the Equator',
    subtitleVi: 'Đảo nhiệt đới ở xích đạo',
    content: [
      {
        type: 'paragraph',
        text: 'Singapore consists of the main island and 63 smaller islets. The country is situated 137 kilometers north of the equator, giving it a tropical rainforest climate with no distinctive seasons, consistent temperatures, and high humidity year-round.',
        textVi: 'Singapore gồm đảo chính và 63 đảo nhỏ. Quốc gia nằm 137 km về phía bắc xích đạo với khí hậu rừng mưa nhiệt đới.',
      },
      {
        type: 'list',
        text: 'Key geographic features:',
        textVi: 'Đặc điểm địa lý chính:',
        items: [
          {
            text: 'Lowest point: Sea level at the Singapore Strait',
            textVi: 'Điểm thấp nhất: mực nước biển tại eo biển Singapore',
          },
          {
            text: 'Highest point: Bukit Timah Hill at 163.63 meters',
            textVi: 'Điểm cao nhất: đồi Bukit Timah cao 163,63 mét',
          },
          {
            text: 'Average temperature: 27°C year-round',
            textVi: 'Nhiệt độ trung bình: 27°C quanh năm',
          },
          {
            text: 'Annual rainfall: Approximately 2,400mm',
            textVi: 'Lượng mưa hàng năm: khoảng 2.400mm',
          },
        ],
      },
    ],
    speakerNotes: 'Explain Singapore\'s strategic location at maritime crossroads. Discuss the land reclamation efforts that have increased the country\'s area by 25% since independence. Mention the challenges and innovations related to water resources.',
    map: {
      center: [1.3521, 103.8198],
      zoom: 11,
      markers: [
        {
          position: [1.3521, 103.8198],
          title: 'Singapore City Center',
          titleVi: 'Trung tâm Singapore',
          description: 'Central Business District and Marina Bay',
          descriptionVi: 'Khu kinh doanh trung tâm và Vịnh Marina',
        },
        {
          position: [1.3438, 103.6839],
          title: 'Jurong Island',
          titleVi: 'Đảo Jurong',
          description: 'Major petrochemical and energy hub',
          descriptionVi: 'Trung tâm hóa dầu và năng lượng lớn',
        },
        {
          position: [1.2494, 103.8303],
          title: 'Sentosa Island',
          titleVi: 'Đảo Sentosa',
          description: 'Popular resort destination',
          descriptionVi: 'Điểm du lịch nghỉ dưỡng nổi tiếng',
        },
      ],
    },
  },

  // Slide 4: Flag & National Symbols
  {
    id: '4',
    slug: 'flag-symbols',
    category: 'Overview',
    title: 'National Flag & Symbols',
    titleVi: 'Quốc kỳ & Biểu tượng quốc gia',
    content: [
      {
        type: 'paragraph',
        text: 'The Singapore flag features a horizontal bicolor of red above white. The red represents universal brotherhood and equality, while white symbolizes pervading and everlasting purity and virtue. A white crescent moon and five white stars form a circle in the top left corner.',
        textVi: 'Quốc kỳ Singapore có hai màu ngang đỏ trên trắng. Đỏ tượng trưng tình huynh đệ và bình đẳng, trắng tượng trưng sự thuần khiết.',
      },
      {
        type: 'list',
        text: 'Symbol meanings:',
        textVi: 'Ý nghĩa biểu tượng:',
        items: [
          {
            text: 'Crescent moon: A young nation on the ascent',
            textVi: 'Trăng lưỡi liềm: quốc gia trẻ đang vươn lên',
          },
          {
            text: 'Five stars: Democracy, Peace, Progress, Justice, and Equality',
            textVi: 'Năm ngôi sao: Dân chủ, Hòa bình, Tiến bộ, Công lý và Bình đẳng',
          },
          {
            text: 'National anthem: "Majulah Singapura" (Onward Singapore)',
            textVi: 'Quốc ca: "Majulah Singapura" (Tiến lên Singapore)',
          },
          {
            text: 'National flower: Vanda Miss Joaquim (orchid hybrid)',
            textVi: 'Quốc hoa: Vanda Miss Joaquim (lan lai)',
          },
        ],
      },
    ],
    speakerNotes: 'Describe the flag design and its adoption in 1959. Explain the symbolism deeply rooted in Singapore\'s values. Mention the national anthem composed in Malay, reflecting the multicultural foundation.',
    image: '/images/singapore-flag.jpg',
  },

  // Slide 5: History - Early Period
  {
    id: '5',
    slug: 'history-early',
    category: 'History',
    title: 'Early History: From Temasek to Colonial Port',
    titleVi: 'Lịch sử ban đầu: Từ Temasek đến cảng thuộc địa',
    content: [
      {
        type: 'paragraph',
        text: 'Singapore\'s recorded history dates back to the 3rd century when Chinese records mentioned the island as "Pulau Ujong" (island at the end). In the 14th century, it was known as Temasek ("Sea Town" in Javanese) and briefly flourished as a trading post.',
        textVi: 'Lịch sử Singapore ghi nhận từ thế kỷ 3. Thế kỷ 14 được gọi là Temasek và phát triển như trạm thương mại.',
      },
      {
        type: 'paragraph',
        text: 'Modern Singapore was founded in 1819 when Sir Stamford Raffles, on behalf of the British East India Company, established a trading post. Its strategic location at the southern tip of the Malay Peninsula made it an ideal entrepôt for trade between Europe, China, India, and the Malay Archipelago.',
        textVi: 'Singapore hiện đại được thành lập năm 1819 bởi Sir Stamford Raffles, trở thành trung tâm thương mại chiến lược.',
      },
    ],
    speakerNotes: 'Contextualize Singapore\'s early history within regional trade networks. Emphasize Raffles\' vision for a free port. Mention the rapid growth in the 19th century as immigrants arrived from across Asia.',
    timeline: {
      events: [
        {
          year: '1299',
          title: 'Temasek Founded',
          titleVi: 'Thành lập Temasek',
          description: 'Settlement established, mentioned in Malay Annals',
          descriptionVi: 'Định cư được thành lập, nhắc đến trong Biên niên sử Mã Lai',
        },
        {
          year: '1819',
          title: 'British Founding',
          titleVi: 'Người Anh thành lập',
          description: 'Stamford Raffles establishes British trading post',
          descriptionVi: 'Stamford Raffles thành lập trạm thương mại Anh',
        },
        {
          year: '1867',
          title: 'Crown Colony',
          titleVi: 'Thuộc địa trực thuộc',
          description: 'Singapore becomes a Crown Colony of Britain',
          descriptionVi: 'Singapore trở thành thuộc địa trực thuộc của Anh',
        },
        {
          year: '1942-1945',
          title: 'Japanese Occupation',
          titleVi: 'Chiếm đóng của Nhật',
          description: 'Singapore occupied during World War II, renamed Syonan-to',
          descriptionVi: 'Singapore bị chiếm trong Thế chiến II, đổi tên thành Syonan-to',
        },
      ],
    },
  },

  // Slide 6: Path to Independence
  {
    id: '6',
    slug: 'independence',
    category: 'History',
    title: 'Path to Independence',
    titleVi: 'Con đường độc lập',
    subtitle: 'From Self-Government to Sovereign Nation',
    subtitleVi: 'Từ tự trị đến quốc gia chủ quyền',
    content: [
      {
        type: 'paragraph',
        text: 'After World War II, Singapore gained self-governance in 1959 with Lee Kuan Yew becoming the first Prime Minister. In 1963, Singapore joined the Federation of Malaysia, but ideological and political differences led to separation.',
        textVi: 'Sau Thế chiến II, Singapore tự trị năm 1959 với Lee Kuan Yew là Thủ tướng đầu tiên. Năm 1963 gia nhập Malaysia nhưng tách ra do bất đồng.',
      },
      {
        type: 'quote',
        text: 'On August 9, 1965, Singapore became a fully independent republic. Despite lacking natural resources and a small territory, the nation embarked on an extraordinary transformation under Lee Kuan Yew\'s leadership, focusing on economic development, education, public housing, and anti-corruption measures.',
        textVi: 'Ngày 9/8/1965, Singapore trở thành nước cộng hòa độc lập. Dù thiếu tài nguyên, quốc gia chuyển đổi mạnh mẽ dưới lãnh đạo Lee Kuan Yew.',
      },
    ],
    speakerNotes: 'Emphasize the challenges Singapore faced: no natural resources, limited land, unemployment, housing crisis, and need for national identity. Highlight Lee Kuan Yew\'s pragmatic policies and long-term vision. The "survival" narrative is central to understanding Singapore\'s development ethos.',
    timeline: {
      events: [
        {
          year: '1959',
          title: 'Self-Government',
          titleVi: 'Tự trị',
          description: 'Singapore gains internal self-government; Lee Kuan Yew becomes PM',
          descriptionVi: 'Singapore được tự trị nội bộ; Lee Kuan Yew làm Thủ tướng',
        },
        {
          year: '1963',
          title: 'Joins Malaysia',
          titleVi: 'Gia nhập Malaysia',
          description: 'Merges with Malaya, Sabah, and Sarawak to form Malaysia',
          descriptionVi: 'Sáp nhập với Malaya, Sabah và Sarawak thành Malaysia',
        },
        {
          year: '1965',
          title: 'Independence',
          titleVi: 'Độc lập',
          description: 'Singapore separates from Malaysia, becomes sovereign republic',
          descriptionVi: 'Singapore tách khỏi Malaysia, trở thành cộng hòa chủ quyền',
        },
        {
          year: '1965-1990',
          title: 'Rapid Development',
          titleVi: 'Phát triển nhanh',
          description: 'Industrialization, HDB housing, education reform, GDP growth',
          descriptionVi: 'Công nghiệp hóa, nhà HDB, cải cách giáo dục, tăng trưởng GDP',
        },
      ],
    },
  },

  // Slide 7: Modern History
  {
    id: '7',
    slug: 'modern-history',
    category: 'History',
    title: 'Modern Era: From Third World to First',
    titleVi: 'Thời hiện đại: Từ thế giới thứ ba đến thứ nhất',
    content: [
      {
        type: 'paragraph',
        text: 'In just five decades, Singapore transformed from a developing nation to a high-income economy. Key milestones include becoming a global financial center, establishing world-class infrastructure, achieving full employment, and maintaining political stability.',
        textVi: 'Chỉ năm thập kỷ, Singapore chuyển từ nước đang phát triển thành nền kinh tế thu nhập cao với trung tâm tài chính toàn cầu.',
      },
      {
        type: 'list',
        text: 'Key achievements (1965-2024):',
        textVi: 'Thành tựu chính (1965-2024):',
        items: [
          {
            text: 'GDP per capita rose from $500 (1965) to over $88,000 (2024)',
            textVi: 'GDP bình quân tăng từ $500 (1965) lên $88.000 (2024)',
          },
          {
            text: 'Literacy rate increased from 50% to 97%+',
            textVi: 'Tỷ lệ biết chữ tăng từ 50% lên 97%+',
          },
          {
            text: 'Life expectancy grew from 65 to 83+ years',
            textVi: 'Tuổi thọ trung bình tăng từ 65 lên 83+ tuổi',
          },
          {
            text: 'Became one of the world\'s busiest ports and aviation hubs',
            textVi: 'Trở thành cảng và trung tâm hàng không bận rộn nhất thế giới',
          },
        ],
      },
    ],
    speakerNotes: 'Use the "Third World to First" framing from Lee Kuan Yew\'s memoirs. Discuss the pragmatic, results-oriented governance model. Mention key leaders: Lee Kuan Yew (1959-1990), Goh Chok Tong (1990-2004), Lee Hsien Loong (2004-2024), and Lawrence Wong (2024-present).',
  },

  // Continue with remaining slides in next artifact...
];

// Continuation of slides array...

  // Slide 8: Government & Politics
  {
    id: '8',
    slug: 'government',
    category: 'Government',
    title: 'Government & Political System',
    titleVi: 'Chính phủ & Hệ thống chính trị',
    subtitle: 'Parliamentary Republic with Westminster Traditions',
    subtitleVi: 'Cộng hòa nghị viện theo truyền thống Westminster',
    content: [
      {
        type: 'paragraph',
        text: 'Singapore is a parliamentary republic with a Westminster system of unicameral parliamentary government. The President is the head of state with largely ceremonial duties, while executive power rests with the Cabinet led by the Prime Minister.',
        textVi: 'Singapore là cộng hòa nghị viện theo hệ thống Westminster. Tổng thống là nguyên thủ quốc gia nghi lễ, quyền hành pháp thuộc Nội các do Thủ tướng đứng đầu.',
      },
      {
        type: 'list',
        text: 'Key governmental features:',
        textVi: 'Đặc điểm chính phủ:',
        items: [
          {
            text: 'Unicameral Parliament with elected Members of Parliament (MPs)',
            textVi: 'Quốc hội một viện với các nghị sĩ được bầu',
          },
          {
            text: 'People\'s Action Party (PAP) has governed since 1959',
            textVi: 'Đảng Hành động Nhân dân (PAP) cầm quyền từ 1959',
          },
          {
            text: 'Elections held every 5 years; compulsory voting',
            textVi: 'Bầu cử 5 năm một lần; bỏ phiếu bắt buộc',
          },
          {
            text: 'Meritocracy and technocratic governance prioritized',
            textVi: 'Ưu tiên cai trị dựa trên năng lực và kỹ trị',
          },
          {
            text: 'Strong emphasis on rule of law and low corruption',
            textVi: 'Nhấn mạnh pháp quyền và tham nhũng thấp',
          },
        ],
      },
    ],
    speakerNotes: 'Explain Singapore\'s unique political model: stable one-party dominance within a democratic framework. Discuss the elected presidency (since 1991) with custodial powers over reserves and key appointments. Note Singapore\'s consistently high rankings in governance and low corruption indices (Transparency International, World Bank).',
    facts: [
      {
        icon: 'Building',
        label: 'Current President',
        labelVi: 'Tổng thống hiện tại',
        value: 'Tharman Shanmugaratnam',
        year: '2023-present',
      },
      {
        icon: 'User',
        label: 'Current Prime Minister',
        labelVi: 'Thủ tướng hiện tại',
        value: 'Lawrence Wong',
        year: '2024-present',
      },
      {
        icon: 'Scale',
        label: 'Corruption Perceptions Index',
        labelVi: 'Chỉ số nhận thức tham nhũng',
        value: '5th globally',
        valueVi: 'Thứ 5 toàn cầu',
        year: '2023',
        source: 'Transparency International',
      },
    ],
  },

  // Slide 9: Economy Overview
  {
    id: '9',
    slug: 'economy',
    category: 'Economy',
    title: 'Economic Overview',
    titleVi: 'Tổng quan kinh tế',
    subtitle: 'A Global Financial and Trade Hub',
    subtitleVi: 'Trung tâm tài chính và thương mại toàn cầu',
    content: [
      {
        type: 'paragraph',
        text: 'Singapore has a highly developed free-market economy characterized by an open business environment, stable prices, and one of the highest per capita GDPs in the world. The economy is heavily dependent on exports, particularly in electronics, petrochemicals, and financial services.',
        textVi: 'Singapore có nền kinh tế thị trường tự do phát triển cao với môi trường kinh doanh mở, giá ổn định và GDP bình quân đầu người cao nhất thế giới.',
      },
      {
        type: 'list',
        text: 'Economic strengths:',
        textVi: 'Điểm mạnh kinh tế:',
        items: [
          {
            text: 'Strategic location at major shipping lanes',
            textVi: 'Vị trí chiến lược trên tuyến đường vận tải biển chính',
          },
          {
            text: 'Pro-business regulatory environment',
            textVi: 'Môi trường pháp lý thân thiện doanh nghiệp',
          },
          {
            text: 'Skilled and multilingual workforce',
            textVi: 'Lực lượng lao động lành nghề và đa ngôn ngữ',
          },
          {
            text: 'World-class infrastructure',
            textVi: 'Cơ sở hạ tầng đẳng cấp thế giới',
          },
          {
            text: 'Political stability and low corruption',
            textVi: 'Ổn định chính trị và tham nhũng thấp',
          },
        ],
      },
    ],
    speakerNotes: 'Highlight Singapore\'s transformation from entrepôt trade to manufacturing to services and innovation. Mention rankings: #1 in Ease of Doing Business (historically), top 5 in Global Competitiveness. Discuss the shift toward high-value sectors like biomedical sciences, fintech, and AI.',
    chart: {
      type: 'line',
      title: 'GDP Growth Rate (%)',
      data: [
        { year: '2015', growth: 2.9 },
        { year: '2016', growth: 3.0 },
        { year: '2017', growth: 4.3 },
        { year: '2018', growth: 3.4 },
        { year: '2019', growth: 1.3 },
        { year: '2020', growth: -3.9 },
        { year: '2021', growth: 8.9 },
        { year: '2022', growth: 3.6 },
        { year: '2023', growth: 1.1 },
        { year: '2024', growth: 2.6 },
      ],
      xAxisKey: 'year',
      dataKey: 'growth',
    },
  },

  // Slide 10: Trade & Finance
  {
    id: '10',
    slug: 'trade-finance',
    category: 'Economy',
    title: 'Trade & Financial Services',
    titleVi: 'Thương mại & Dịch vụ tài chính',
    subtitle: 'One of the World\'s Busiest Ports and Financial Centers',
    subtitleVi: 'Một trong những cảng bận rộn và trung tâm tài chính hàng đầu thế giới',
    content: [
      {
        type: 'paragraph',
        text: 'Singapore is the world\'s second-busiest container port and a leading maritime hub. The Port of Singapore handled over 37 million TEUs (twenty-foot equivalent units) in 2023. As a financial center, Singapore ranks third globally after New York and London, with over 200 banks and a thriving wealth management industry.',
        textVi: 'Singapore là cảng container bận rộn thứ hai thế giới. Cảng Singapore xử lý hơn 37 triệu TEU năm 2023. Là trung tâm tài chính thứ ba toàn cầu sau New York và London.',
      },
      {
        type: 'list',
        text: 'Key sectors:',
        textVi: 'Các ngành chính:',
        items: [
          {
            text: 'Maritime & Logistics: Major transshipment hub',
            textVi: 'Hàng hải & Logistics: Trung tâm trung chuyển lớn',
          },
          {
            text: 'Banking & Finance: Wealth management, private banking',
            textVi: 'Ngân hàng & Tài chính: Quản lý tài sản, ngân hàng tư nhân',
          },
          {
            text: 'Petrochemicals: Jurong Island refinery complex',
            textVi: 'Hóa dầu: Khu lọc dầu đảo Jurong',
          },
          {
            text: 'Electronics: Semiconductor manufacturing, R&D',
            textVi: 'Điện tử: Sản xuất bán dẫn, R&D',
          },
        ],
      },
    ],
    speakerNotes: 'Emphasize Singapore\'s role as a gateway to Asia. Discuss free trade agreements (FTAs) with major economies. Mention the Monetary Authority of Singapore (MAS) as a leading financial regulator. Note the rise of fintech and digital banking.',
    chart: {
      type: 'bar',
      title: 'Exports by Sector (% of total, 2023 est.)',
      data: [
        { sector: 'Electronics', percentage: 23 },
        { sector: 'Chemicals', percentage: 18 },
        { sector: 'Machinery', percentage: 14 },
        { sector: 'Refined Petroleum', percentage: 12 },
        { sector: 'Pharmaceuticals', percentage: 9 },
        { sector: 'Others', percentage: 24 },
      ],
      xAxisKey: 'sector',
      dataKey: 'percentage',
    },
  },

  // Slide 11: Education System
  {
    id: '11',
    slug: 'education',
    category: 'Education',
    title: 'World-Class Education System',
    titleVi: 'Hệ thống giáo dục đẳng cấp thế giới',
    subtitle: 'Consistently Top-Ranking in International Assessments',
    subtitleVi: 'Luôn xếp hạng cao trong đánh giá quốc tế',
    content: [
      {
        type: 'paragraph',
        text: 'Singapore\'s education system is renowned globally for its rigor and results. Students consistently rank at or near the top in international assessments like PISA (Programme for International Student Assessment) in mathematics, science, and reading.',
        textVi: 'Hệ thống giáo dục Singapore nổi tiếng toàn cầu về sự nghiêm ngặt và kết quả. Học sinh luôn xếp hạng cao trong các đánh giá quốc tế như PISA.',
      },
      {
        type: 'list',
        text: 'Educational highlights:',
        textVi: 'Điểm nổi bật giáo dục:',
        items: [
          {
            text: 'Bilingual policy: English + Mother Tongue (Mandarin, Malay, Tamil)',
            textVi: 'Chính sách song ngữ: Tiếng Anh + Tiếng mẹ đẻ',
          },
          {
            text: 'Meritocratic streaming system based on exams',
            textVi: 'Hệ thống phân luồng theo năng lực dựa trên kỳ thi',
          },
          {
            text: 'Strong emphasis on STEM (Science, Technology, Engineering, Mathematics)',
            textVi: 'Nhấn mạnh STEM (Khoa học, Công nghệ, Kỹ thuật, Toán học)',
          },
          {
            text: 'National University of Singapore (NUS) and Nanyang Technological University (NTU) rank among world\'s top universities',
            textVi: 'NUS và NTU xếp hạng trong số các trường đại học hàng đầu thế giới',
          },
        ],
      },
    ],
    speakerNotes: 'Discuss the emphasis on bilingualism to maintain cultural roots while ensuring English proficiency for global competitiveness. Note the PSLE (Primary School Leaving Examination) system. Mention investments in lifelong learning and SkillsFuture programs.',
    facts: [
      {
        icon: 'GraduationCap',
        label: 'Literacy Rate',
        labelVi: 'Tỷ lệ biết chữ',
        value: '97.5%',
        year: '2023',
        source: 'UNESCO',
      },
      {
        icon: 'BookOpen',
        label: 'PISA Ranking',
        labelVi: 'Xếp hạng PISA',
        value: 'Top 5 globally',
        valueVi: 'Top 5 toàn cầu',
        year: '2022',
        source: 'OECD',
      },
      {
        icon: 'Award',
        label: 'University Rankings',
        labelVi: 'Xếp hạng đại học',
        value: 'NUS #8, NTU #26',
        year: '2024',
        source: 'QS World University Rankings',
      },
    ],
  },

  // Slide 12: Research & Innovation
  {
    id: '12',
    slug: 'research-innovation',
    category: 'Education',
    title: 'Research & Innovation',
    titleVi: 'Nghiên cứu & Đổi mới sáng tạo',
    subtitle: 'Building a Knowledge-Based Economy',
    subtitleVi: 'Xây dựng nền kinh tế tri thức',
    content: [
      {
        type: 'paragraph',
        text: 'Singapore has invested heavily in R&D, allocating approximately 2% of GDP to research and innovation. The government established research institutes and innovation hubs to position Singapore as a global leader in biomedical sciences, AI, and advanced manufacturing.',
        textVi: 'Singapore đầu tư mạnh vào R&D, phân bổ khoảng 2% GDP cho nghiên cứu và đổi mới. Chính phủ thành lập các viện nghiên cứu để định vị Singapore là nhà lãnh đạo toàn cầu.',
      },
      {
        type: 'list',
        text: 'Innovation initiatives:',
        textVi: 'Sáng kiến đổi mới:',
        items: [
          {
            text: 'A*STAR: Agency for Science, Technology and Research',
            textVi: 'A*STAR: Cơ quan Khoa học, Công nghệ và Nghiên cứu',
          },
          {
            text: 'Biopolis: Biomedical research and development hub',
            textVi: 'Biopolis: Trung tâm nghiên cứu y sinh',
          },
          {
            text: 'Smart Nation initiative: Digital transformation and IoT',
            textVi: 'Sáng kiến Quốc gia Thông minh: Chuyển đổi số và IoT',
          },
          {
            text: 'Block71: Startup incubator and co-working space',
            textVi: 'Block71: Vườn ươm khởi nghiệp',
          },
        ],
      },
    ],
    speakerNotes: 'Highlight Singapore\'s pivot from manufacturing to innovation. Discuss government-backed funds for startups and venture capital. Mention collaborations with global tech companies (Google, Facebook, Dyson) setting up R&D centers.',
  },

  // Slide 13: Society & Culture
  {
    id: '13',
    slug: 'culture-society',
    category: 'Culture',
    title: 'Multicultural Society',
    titleVi: 'Xã hội đa văn hóa',
    subtitle: 'Harmony in Diversity',
    subtitleVi: 'Hòa hợp trong đa dạng',
    content: [
      {
        type: 'paragraph',
        text: 'Singapore is a multiracial and multicultural society with four major ethnic groups: Chinese (74%), Malay (14%), Indian (9%), and Others (3%). This diversity is a cornerstone of national identity, celebrated through public holidays, festivals, and cultural institutions.',
        textVi: 'Singapore là xã hội đa chủng tộc với bốn nhóm dân tộc chính: Hoa (74%), Mã Lai (14%), Ấn Độ (9%), Khác (3%). Sự đa dạng này là nền tảng của bản sắc quốc gia.',
      },
      {
        type: 'list',
        text: 'Cultural integration efforts:',
        textVi: 'Nỗ lực hội nhập văn hóa:',
        items: [
          {
            text: 'Ethnic integration in HDB housing estates',
            textVi: 'Hội nhập dân tộc trong khu nhà HDB',
          },
          {
            text: 'National service (military conscription) for cohesion',
            textVi: 'Nghĩa vụ quân sự quốc gia để gắn kết',
          },
          {
            text: 'Racial Harmony Day celebrated annually',
            textVi: 'Ngày Hòa hợp Chủng tộc được tổ chức hàng năm',
          },
          {
            text: 'Four official languages reflecting diversity',
            textVi: 'Bốn ngôn ngữ chính thức phản ánh sự đa dạng',
          },
        ],
      },
    ],
    speakerNotes: 'Emphasize the deliberate policies to foster racial and religious harmony. Discuss the HDB ethnic integration policy to prevent ethnic enclaves. Mention major festivals: Chinese New Year, Hari Raya, Deepavali, Christmas.',
    image: '/images/cultural-diversity.jpg',
  },

  // Slide 14: Food & Cuisine
  {
    id: '14',
    slug: 'food-cuisine',
    category: 'Culture',
    title: 'Food Paradise: Hawker Culture & Cuisine',
    titleVi: 'Thiên đường ẩm thực: Văn hóa ăn uống đường phố',
    subtitle: 'UNESCO-Recognized Hawker Culture',
    subtitleVi: 'Văn hóa ẩm thực đường phố được UNESCO công nhận',
    content: [
      {
        type: 'paragraph',
        text: 'Singapore\'s food culture is a vibrant reflection of its multicultural heritage. Hawker centers—open-air food courts with affordable local dishes—are central to daily life. In 2020, Singapore\'s hawker culture was inscribed on UNESCO\'s Representative List of Intangible Cultural Heritage of Humanity.',
        textVi: 'Văn hóa ẩm thực Singapore phản ánh di sản đa văn hóa. Trung tâm ẩm thực đường phố là trung tâm của cuộc sống hàng ngày. Năm 2020, UNESCO công nhận văn hóa này.',
      },
      {
        type: 'list',
        text: 'Iconic dishes:',
        textVi: 'Món ăn biểu tượng:',
        items: [
          {
            text: 'Hainanese Chicken Rice: Singapore\'s unofficial national dish',
            textVi: 'Cơm gà Hải Nam: Món quốc dân không chính thức',
          },
          {
            text: 'Laksa: Spicy coconut curry noodle soup',
            textVi: 'Laksa: Súp mì cà ri dừa cay',
          },
          {
            text: 'Chili Crab: Sweet and spicy seafood specialty',
            textVi: 'Cua sốt ớt: Đặc sản hải sản ngọt cay',
          },
          {
            text: 'Char Kway Teow: Stir-fried flat noodles',
            textVi: 'Char Kway Teow: Mì xào phẳng',
          },
          {
            text: 'Satay: Grilled meat skewers with peanut sauce',
            textVi: 'Satay: Xiên thịt nướng với sốt đậu phộng',
          },
        ],
      },
    ],
    speakerNotes: 'Explain the hawker center as a social leveler where people from all walks mingle. Note Michelin-starred hawker stalls. Discuss food safety and hygiene grading system (A, B, C ratings). Mention Singapore as a culinary tourism destination.',
    image: '/images/hawker-center.jpg',
  },

  // Continue with more slides...
