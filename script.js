/**
 * [과일 성향 테스트] JavaScript (script.js)
 * - 10문항 전체 과일 테마 상황 질문 & 4지선다형 선택지
 * - 과일 + 표정 이모지 조합 (🍎😋, 🍓🥰, 🍋😝 등)
 * - 공감형 대화체 & 불릿 포인트 & <b> 태그 강조 성향 탐구서
 * - 16가지 과일(MBTI) 매칭 알고리즘
 */

// 1. 과일 테마 10문항 질문 데이터
const QUESTIONS = [
  {
    category: "과일 고르기",
    question: "마트나 과일가게에서 제철 과일을 직접 고를 때 나의 행동은?",
    options: [
      {
        text: "당도 보증 마크, 원산지, 표면의 흠집 유무를 꼼꼼하게 대조하며 가장 완벽한 녀석을 골라요.",
        scores: { S: 2, J: 1 }
      },
      {
        text: "“사장님! 요즘 어떤 과일이 제일 달고 맛있어요?” 바로 물어보고 추천받아요.",
        scores: { E: 2, S: 1 }
      },
      {
        text: "“이 과일로 청을 담그거나 홈카페 디저트 만들면 어떨까?” 상상의 나래를 펴며 골라요.",
        scores: { N: 2, P: 1 }
      },
      {
        text: "비교하고 고르기 귀찮아서 눈앞에 보이는 맨 앞 상자를 쿨하게 집어 들어요.",
        scores: { P: 2, I: 1 }
      }
    ]
  },
  {
    category: "과일 선물하기",
    question: "고마운 친구나 지인에게 과일 바구니나 제철 과일을 선물하려고 할 때?",
    options: [
      {
        text: "받는 사람의 알레르기 유무, 평소 과일 취향, 보관 편의성을 철저히 파악해 가장 실용적인 걸 골라요.",
        scores: { T: 2, J: 1 }
      },
      {
        text: "“이 달콤한 과일 먹고 힘냈으면 좋겠다!” 정성 어린 감동 손편지와 함께 건네요.",
        scores: { F: 2, E: 1 }
      },
      {
        text: "흔한 과일보다는 “이거 먹어봤어?” 눈이 똥그래질 만한 독특하고 이색적인 프리미엄 과일을 수소문해요.",
        scores: { N: 2, E: 1 }
      },
      {
        text: "“부담 갖지 말고 편하게 먹어~” 메신저로 간편하게 제철 과일 모바일 교환권을 쓱 보내요.",
        scores: { I: 2, T: 1 }
      }
    ]
  },
  {
    category: "과일 깎아 먹기",
    question: "집에서 혼자 사과나 배 같은 과일을 깎아 먹을 때 나의 모습은?",
    options: [
      {
        text: "껍질 두께를 일정하게 맞추고 예쁜 접시에 정갈하게 담아서 포크까지 딱 세팅해 먹어요.",
        scores: { J: 2, S: 1 }
      },
      {
        text: "칼 쓰기 귀찮아서 대충 흐르는 물에 쓱 씻어 껍질째 와작와작 베어 물어요.",
        scores: { P: 2, S: 1 }
      },
      {
        text: "깎으면서 “과일 껍질이 끊기지 않고 한 번에 깎이면 소원이 이뤄진다던데...” 혼자 과몰입 챌린지를 해요.",
        scores: { N: 2, P: 1 }
      },
      {
        text: "과일 하나도 감성 있게! 좋아하는 잔잔한 음악 틀고 나만의 포근한 홈카페 시간을 즐겨요.",
        scores: { I: 2, F: 1 }
      }
    ]
  },
  {
    category: "카페 생과일 음료",
    question: "카페나 주스 바 카운터 앞에서 생과일 음료 메뉴를 주문할 때 나는?",
    options: [
      {
        text: "항상 마시던 실패 없는 익숙한 최애 과일 주스(딸기 바나나 등)를 망설임 없이 골라요.",
        scores: { S: 2, J: 1 }
      },
      {
        text: "“용과 패션후르츠 스무디? 무슨 맛이지?” 이름부터 독특하고 신기한 시즌 한정 메뉴를 도전해요.",
        scores: { N: 2, P: 1 }
      },
      {
        text: "“당도 조절이나 시럽 제외 되나요?” 원재료 함량이나 칼로리를 꼼꼼히 확인하고 주문해요.",
        scores: { T: 2, I: 1 }
      },
      {
        text: "“너 뭐 마실 거야? 우리 다른 거 시켜서 서로 한 입씩 나눠 마실래?” 같이 간 친구와 조율해요.",
        scores: { E: 2, F: 1 }
      }
    ]
  },
  {
    category: "상해가는 과일",
    question: "냉장고를 열었더니 며칠 전 사둔 과일이 조금씩 물러지며 상해가고 있는 것을 발견했다!",
    options: [
      {
        text: "“아깝다!” 즉시 상태를 확인하고, 상한 부위만 도려낸 뒤 갈아서 주스를 만들거나 냉동 처리해요.",
        scores: { T: 2, J: 1 }
      },
      {
        text: "“헉 불쌍해ㅠㅠ 내가 너무 신경을 못 써줬네…” 자책하며 가족이나 친구들에게 얼른 먹자고 나눠줘요.",
        scores: { F: 2, E: 1 }
      },
      {
        text: "“이거 상하면 날파리 생기는데 어떡하지…” 잠시 고민하다가 일단 냉장고 문을 닫고 현실 도피해요.",
        scores: { P: 2, I: 1 }
      },
      {
        text: "“과일이 썩어가는 것도 발효의 일종인데, 발효주가 될 순 없나?” 엉뚱한 과학적 상상을 해봐요.",
        scores: { N: 2, T: 1 }
      }
    ]
  },
  {
    category: "처음 보는 이색 과일",
    question: "해외여행이나 야시장에서 난생처음 보는 독특한 모양과 향기의 열대 과일을 마주쳤다!",
    options: [
      {
        text: "“우와 신기하다! 여기까지 왔는데 무조건 먹어봐야지!” 1초의 망설임도 없이 바로 사서 맛봐요.",
        scores: { E: 2, P: 1 }
      },
      {
        text: "위생 상태나 맛이 조금이라도 의심스러우면 절대 안 먹고 안전하게 눈으로만 구경해요.",
        scores: { S: 2, J: 1 }
      },
      {
        text: "스마트폰으로 과일 이름, 효능, 먹는 법, 현지 유래까지 그 자리에서 폭풍 검색해봐요.",
        scores: { T: 2, N: 1 }
      },
      {
        text: "함께 간 일행에게 “너 먼저 한 입 먹어봐, 맛이 어때?”라며 반응을 살핀 뒤 조심스레 도전해요.",
        scores: { I: 2, F: 1 }
      }
    ]
  },
  {
    category: "과일 피크닉",
    question: "날씨 좋은 주말, 친구들과 한강에서 '피크닉 과일 파티'를 열기로 했다! 내 역할은?",
    options: [
      {
        text: "과일 종류 선정부터 세척, 밀폐용기 소분, 포크와 물티슈 챙기기까지 총괄 기획을 맡아요.",
        scores: { J: 2, E: 1 }
      },
      {
        text: "돗자리 위에서 과일 들고 인생샷 찍어주고 신나는 음악 틀며 분위기 띄우는 텐션 담당!",
        scores: { E: 2, P: 1 }
      },
      {
        text: "시끄러운 분위기보다는 돗자리에 편하게 누워 따뜻한 햇살 받으며 조용히 포도 한 알씩 집어먹어요.",
        scores: { I: 2, P: 1 }
      },
      {
        text: "친구들이 좋아하는 과일을 기억해뒀다가 하나씩 챙겨주며 맛있게 먹는 모습에 뿌듯해해요.",
        scores: { F: 2, I: 1 }
      }
    ]
  },
  {
    category: "과일 먹는 순서",
    question: "식사 후 뷔페에서 여러 종류의 과일 모둠(수박, 레몬, 멜론, 포도 등)이 내 앞에 놓였다! 먹는 순서는?",
    options: [
      {
        text: "단맛이 덜한 것부터 가장 달콤한 순서대로(산미 높은 것 → 고당도) 미각의 정석대로 먹어요.",
        scores: { S: 2, T: 1 }
      },
      {
        text: "정해진 순서 없이 그냥 그 순간 눈에 꽂히는 제일 맛있어 보이는 것부터 집어먹어요.",
        scores: { P: 2, F: 1 }
      },
      {
        text: "“이 조합으로 먹으면 어떤 새로운 풍미가 날까?” 과일 두세 개를 한입에 같이 넣어봐요.",
        scores: { N: 2, P: 1 }
      },
      {
        text: "“다 같이 나눠 먹어야 하니까 개수를 공평하게 맞춰서 먹어야지” 눈대중으로 계산하며 집어요.",
        scores: { J: 2, T: 1 }
      }
    ]
  },
  {
    category: "누군가 깎아준 과일",
    question: "가족이나 친구가 “너 먹으라고 깎아뒀어~”라며 과일 한 접시를 쓱 건넸을 때 나의 반응은?",
    options: [
      {
        text: "“우와 대박! 너무 고마워 감동이야ㅠㅠ 최고!” 진심 어린 환호와 리액션을 쏟아내요.",
        scores: { F: 2, E: 1 }
      },
      {
        text: "“고마워 잘 먹을게!” 인사하고 바로 “근데 이거 제철이라 그런지 진짜 달고 신선하다”며 맛을 분석해요.",
        scores: { T: 2, S: 1 }
      },
      {
        text: "말은 조용히 “응 고마워” 하지만 속으로는 ‘나를 이렇게 챙겨주다니…’ 오래도록 뭉클해해요.",
        scores: { I: 2, F: 1 }
      },
      {
        text: "“너도 얼른 먹어봐!” 하며 상대방 입에 먼저 과일 한 조각을 쏙 넣어줘요.",
        scores: { E: 2, F: 1 }
      }
    ]
  },
  {
    category: "과일 껍질 뒷정리",
    question: "수박이나 귤을 배부르게 먹고 난 뒤 산더미처럼 쌓인 껍질과 쓰레기! 나의 뒷정리 스타일은?",
    options: [
      {
        text: "다 먹자마자 바로 음식물 쓰레기봉투에 담아 입구를 묶고 테이블까지 깨끗이 닦아야 마음이 편해요.",
        scores: { J: 2, S: 1 }
      },
      {
        text: "“아 배부르고 좋다~” 일단 소파나 침대에 누워 쉬다가 나중에 생각나면 치워요.",
        scores: { P: 2, I: 1 }
      },
      {
        text: "“수박 껍질로 나물 무쳐 먹을 수 있다던데? 귤껍질은 전자레인지 탈취에 써볼까?” 활용법을 고민해요.",
        scores: { N: 2, P: 1 }
      },
      {
        text: "주변 사람들과 분업해서 “내가 껍질 버릴 테니까 네가 테이블 닦아!” 하고 일사천리로 끝내요.",
        scores: { E: 2, J: 1 }
      }
    ]
  }
];

/// 2. 16가지 과일 유형 데이터 (표정 이모지 + 현실 일상 행동 중심 공감형 대화체 불릿 포인트 성향 탐구서)
const FRUIT_DATA = {
  ISTJ: {
    mbti: "ISTJ",
    name: "단단한 사과",
    nickname: "단단하고 우직한 원칙주의자",
    fruitEmoji: "🍎",
    faceEmoji: "😋",
    themeColor: "#ff6b6b",
    tags: ["#책임감끝판왕", "#신뢰의대명사", "#성실함", "#철저한원칙"],
    bullets: [
      "<b>지금 나온 결과를 보며 '맞아봐야 얼마나 맞겠어' 하며 덤덤하게 훑어보고 계실 가능성이 높아요.</b>",
      "갑자기 잡히는 당일 번개 약속보다는, 며칠 전부터 미리 약속되어 마음의 준비를 마친 일정이 훨씬 편안해요.",
      "<b>스마트폰 앱에 읽지 않은 빨간 알림 숫자가 쌓여있는 꼴을 못 봐서 보이는 족족 지워야 직성이 풀려요.</b>",
      "내 물건이 원래 있던 제자리에서 조금이라도 벗어나 있으면 은근히 신경 쓰이고 거슬려요.",
      "말보다는 묵묵한 행동으로 보여주는 편이라, 약속 시간 5분 전에는 무조건 도착해 있는 게 기본 매너예요."
    ],
    bestMatch: { mbti: "ESFP", name: "딸기", emoji: "🍓🥰" },
    worstMatch: { mbti: "ENFP", name: "오렌지", emoji: "🍊🤩" }
  },
  ISFJ: {
    mbti: "ISFJ",
    name: "달콤한 복숭아",
    nickname: "은은하게 달콤한 배려의 요정",
    fruitEmoji: "🍑",
    faceEmoji: "😊",
    themeColor: "#ffa8a8",
    tags: ["#따스한온기", "#프로챙김러", "#다정함", "#은은한힐링"],
    bullets: [
      "<b>단톡방에서 누가 무슨 말을 했을 때 아무도 답이 없으면, 안절부절못하다가 결국 내가 먼저 다정하게 답장을 남겨요.</b>",
      "거절하면 상대방이 무안하거나 상처받을까 봐 속으로는 난감해도 얼떨결에 부탁을 들어줄 때가 많아요.",
      "<b>겉으로는 “아니야, 난 다 괜찮아~”라고 웃으며 넘기지만, 집에 돌아와 침대에 누우면 낮에 있었던 일들이 계속 곱씹혀요.</b>",
      "친구가 지나가듯 흘린 사소한 취향이나 생일, 가족 이야기까지 놀라울 정도로 또렷하게 기억하고 챙겨줘요.",
      "혼자만의 조용한 방에서 좋아하는 예능이나 유튜브를 보며 뒹굴거릴 때 비로소 진정한 에너지가 충전돼요."
    ],
    bestMatch: { mbti: "ESTP", name: "파인애플", emoji: "🍍😎" },
    worstMatch: { mbti: "ENTP", name: "청포도", emoji: "🍇😜" }
  },
  INFJ: {
    mbti: "INFJ",
    name: "신비로운 무화과",
    nickname: "신비로운 통찰의 숲",
    fruitEmoji: "🪴",
    faceEmoji: "🧐",
    themeColor: "#a9e34b",
    tags: ["#깊은내면", "#따뜻한철학자", "#신비주의", "#통찰력"],
    bullets: [
      "<b>상대방의 표정 변화나 미세한 말투 뉘앙스만 봐도 '아, 지금 기분이 상했구나' 하고 본능적으로 눈치채요.</b>",
      "사람들과 어울릴 때는 세상 따뜻하고 사교적으로 보이지만, 집에 돌아오는 순간 배터리가 0%가 되어 방전돼요.",
      "<b>속으로는 인간관계에 대한 깊은 고민과 복잡한 생각을 달고 살지만, 겉으로는 늘 차분한 미소를 유지해요.</b>",
      "나만의 확실한 가치관과 도덕적 기준이 있어서, 예의 없고 무례한 사람을 보면 조용히 마음속에서 손절 버튼을 눌러요.",
      "밤마다 침대에 누워 '내 인생의 진정한 의미는 무엇일까' 하는 심오한 생각에 빠져 새벽 늦게 잠들곤 해요."
    ],
    bestMatch: { mbti: "ENFP", name: "오렌지", emoji: "🍊🤩" },
    worstMatch: { mbti: "ESTP", name: "파인애플", emoji: "🍍😎" }
  },
  INTJ: {
    mbti: "INTJ",
    name: "알찬 석류",
    nickname: "겉과 속이 알찬 완벽한 전략가",
    fruitEmoji: "🍷",
    faceEmoji: "😏",
    themeColor: "#c92a2a",
    tags: ["#지적인매력", "#치밀한전략", "#독립적", "#완벽주의"],
    bullets: [
      "<b>비효율적인 일 처리나 멍청한 실수를 반복하는 사람을 보면 속에서 천불이 나지만 겉으론 포커페이스를 유지해요.</b>",
      "“왜?”라는 의문이 풀리지 않으면 절대 납득하지 못하며, 남들이 다 맞다고 해도 내 논리에 안 맞으면 믿지 않아요.",
      "<b>주말에 아무도 안 만나고 혼자 방에서 관심 있는 지식을 탐색하거나 계획을 세울 때 가장 큰 행복을 느껴요.</b>",
      "인간관계의 폭이 매우 좁고 깊어서, 영양가 없거나 가식적인 스몰토크 자리에는 1분도 앉아있기 싫어해요.",
      "겉으로는 냉철해 보여도 내가 진정으로 인정하고 아끼는 소수의 사람에게는 누구보다 든든한 조력자가 되어줘요."
    ],
    bestMatch: { mbti: "ENTP", name: "청포도", emoji: "🍇😜" },
    worstMatch: { mbti: "ESFJ", name: "바나나", emoji: "🍌🤗" }
  },
  ISTP: {
    mbti: "ISTP",
    name: "상큼한 레몬",
    nickname: "쿨하고 상큼한 마이웨이",
    fruitEmoji: "🍋",
    faceEmoji: "😝",
    themeColor: "#ffd43b",
    tags: ["#쿨가이", "#효율주의", "#문제해결사", "#솔직담백"],
    bullets: [
      "<b>카톡 알림이 울려도 급한 용건이 아니면 '나중에 답장해야지' 하고 미리보기로 슥 본 뒤 몇 시간씩 잊어버려요.</b>",
      "쓸데없는 감정 소모나 구구절절 긴 설명은 딱 질색이고, “그래서 결론이 뭔데?”가 늘 먼저 떠올라요.",
      "<b>평소엔 만사가 귀찮아서 침대에 누워 멍때리지만, 내가 진짜 흥미를 느끼는 분야가 생기면 밤을 새워 집중해요.</b>",
      "남들이 나를 어떻게 생각하든 신경 쓰지 않으며, 나 역시 남의 인생에 간섭할 생각이 전혀 없는 쿨한 마이웨이예요.",
      "고장 난 물건이나 난처한 문제가 생기면 말없이 혼자 뚝딱뚝딱 만져서 기가 막히게 해결해놓곤 해요."
    ],
    bestMatch: { mbti: "ESFJ", name: "바나나", emoji: "🍌🤗" },
    worstMatch: { mbti: "ENFJ", name: "체리", emoji: "🍒🥳" }
  },
  ISFP: {
    mbti: "ISFP",
    name: "말랑한 망고",
    nickname: "부드럽고 말랑한 평화주의자",
    fruitEmoji: "🥭",
    faceEmoji: "😴",
    themeColor: "#ffa94d",
    tags: ["#자유로운영혼", "#예술적감각", "#평화주의", "#침대러버"],
    bullets: [
      "<b>외출 약속이 취소되었다는 연락을 받는 순간, 겉으로는 “아쉽다” 하면서 속으로는 내적 댄스를 춰요.</b>",
      "침대 위에 누워서 스마트폰을 보며 뒹굴거리는 시간이 하루 중 가장 소중하고 평화로운 순간이에요.",
      "<b>결정을 내리는 게 너무 어려워서 메뉴를 고를 때도 “난 너 먹는 거 아무거나 좋아~”를 달고 살아요.</b>",
      "갈등이나 언쟁이 생길 것 같으면 일단 그 자리를 피하거나 상대에게 맞춰주면서 평화를 유지하려 애써요.",
      "잔소리나 압박을 받으면 의욕이 바닥을 치지만, 자유로운 분위기에서는 숨겨둔 감각과 센스가 빛을 발해요."
    ],
    bestMatch: { mbti: "ENTJ", name: "샤인머스캣", emoji: "🍇👑" },
    worstMatch: { mbti: "ESTJ", name: "수박", emoji: "🍉😆" }
  },
  INFP: {
    mbti: "INFP",
    name: "감성 블루베리",
    nickname: "감성 가득한 이상주의 몽상가",
    fruitEmoji: "🫐",
    faceEmoji: "🥺",
    themeColor: "#4c6ef5",
    tags: ["#새벽감성", "#순수한영혼", "#낭만주의자", "#진정성"],
    bullets: [
      "<b>자기 전 이불 속에서 낮에 내가 했던 사소한 말실수나 행동을 떠올리며 끊임없이 이불킥을 날려요.</b>",
      "길을 걷다가 문득 흘러나오는 노래 한 곡이나 노을빛 풍경만 봐도 가슴 한구석이 몽글몽글해지는 감성파예요.",
      "<b>마음속에 나만의 거대하고 낭만적인 상상의 세계를 품고 있어서, 가끔 현실에 영혼이 안 돌아올 때가 있어요.</b>",
      "상대방의 사소한 차가운 단답이나 무표정에도 '나 뭐 잘못했나?' 혼자 수십 가지 시나리오를 써요.",
      "겉으로는 낯을 많이 가리고 조용해 보여도, 나와 결이 통하는 찐친 앞에서는 엉뚱한 장난꾸러기가 돼요."
    ],
    bestMatch: { mbti: "ENFJ", name: "체리", emoji: "🍒🥳" },
    worstMatch: { mbti: "ESTJ", name: "수박", emoji: "🍉😆" }
  },
  INTP: {
    mbti: "INTP",
    name: "청량한 라임",
    nickname: "톡 쏘는 탄산 같은 아이디어 뱅크",
    fruitEmoji: "🍈",
    faceEmoji: "🤔",
    themeColor: "#69db7c",
    tags: ["#지적호기심", "#논리왕", "#아이디어뱅크", "#팩트중시"],
    bullets: [
      "<b>궁금한 주제나 새로운 지적 호기심이 생기면 나무위키와 구글을 타고 들어가 새벽까지 끝없이 파고들어요.</b>",
      "남들이 당연하게 여기는 상식이나 관습에도 '도대체 왜 그래야 하지?' 혼자 의문을 품고 분석해요.",
      "<b>머릿속으로는 이미 대단한 프로젝트 10개를 완벽하게 끝냈는데, 막상 몸은 아직 침대에서 시작도 안 했어요.</b>",
      "감정적인 위로보다는 논리적인 팩트와 원인 분석이 먼저 튀어나와 가끔 로봇 같다는 소리를 들어요.",
      "세상의 편견에 얽매이지 않고 남들과는 완전히 다른 독창적이고 기발한 시각을 선물해요."
    ],
    bestMatch: { mbti: "ENTJ", name: "샤인머스캣", emoji: "🍇👑" },
    worstMatch: { mbti: "ESFJ", name: "바나나", emoji: "🍌🤗" }
  },
  ESTP: {
    mbti: "ESTP",
    name: "에너지 파인애플",
    nickname: "짜릿하고 에너지 넘치는 승부사",
    fruitEmoji: "🍍",
    faceEmoji: "😎",
    themeColor: "#fcc419",
    tags: ["#행동대장", "#스릴러버", "#순발력만렙", "#직진본능"],
    bullets: [
      "<b>골치 아프게 앉아서 고민만 하기보다는 “일단 저지르고 생각하자!” 하며 몸부터 먼저 움직여요.</b>",
      "계획표대로 딱딱 맞춰 사는 건 숨이 막혀서, 그때그때의 감과 즉흥적인 흐름을 즐기는 편이에요.",
      "<b>어떤 낯선 모임이나 어색한 술자리에 던져져도 10분 만에 주변 사람들과 웃고 떠들며 친구를 먹어요.</b>",
      "뒤끝이 전혀 없어서 친구와 한바탕 싸우더라도 쿨하게 털고 “야, 밥이나 먹으러 가자” 하며 바로 일상으로 돌아와요.",
      "위기 상황이나 돌발 변수가 터졌을 때 남들보다 세 배는 빠른 순발력으로 위기를 기회로 바꿔버려요."
    ],
    bestMatch: { mbti: "ISFJ", name: "복숭아", emoji: "🍑😊" },
    worstMatch: { mbti: "INFJ", name: "무화과", emoji: "🪴🧐" }
  },
  ESFP: {
    mbti: "ESFP",
    name: "주인공 딸기",
    nickname: "파티의 주인공이자 인간 비타민",
    fruitEmoji: "🍓",
    faceEmoji: "🥰",
    themeColor: "#ff4d6d",
    tags: ["#핵인싸", "#분위기메이커", "#인간비타민", "#현재를즐겨라"],
    bullets: [
      "<b>혼자 집에만 박혀 있으면 에너지가 뚝뚝 떨어지고 우울해져서, 어떻게든 밖으로 나가 사람을 만나야 살아나요.</b>",
      "길 가다 아는 사람을 마주치면 저 멀리서부터 손을 격하게 흔들며 반갑게 인사하는 분위기 메이커예요.",
      "<b>재미있는 썰이나 웃긴 에피소드가 생기면 도저히 입이 근질거려서 친구들에게 전화나 카톡을 돌려야 직성이 풀려요.</b>",
      "예쁜 옷, 맛있는 음식, 신나는 음악처럼 오감을 자극하는 즐거운 경험에 아낌없이 지갑을 열어요.",
      "고민이나 스트레스가 생겨도 친구들과 한바탕 맛있는 거 먹고 신나게 수다 떨면 말끔하게 잊어버려요."
    ],
    bestMatch: { mbti: "ISTJ", name: "사과", emoji: "🍎😋" },
    worstMatch: { mbti: "INTJ", name: "석류", emoji: "🍷😏" }
  },
  ENFP: {
    mbti: "ENFP",
    name: "통통 튀는 오렌지",
    nickname: "어디서나 통통 튀는 활력소",
    fruitEmoji: "🍊",
    faceEmoji: "🤩",
    themeColor: "#ff922b",
    tags: ["#열정보부상", "#리액션부자", "#아이디어폭발", "#자유로운영혼"],
    bullets: [
      "<b>오늘 하루 하고 싶은 아이디어가 100가지는 떠오르는데, 정작 3개쯤 벌여놓다가 금방 흥미가 식어버려요.</b>",
      "처음 만난 사람과도 5분 만에 호구조사를 끝내고 내적 친밀감을 형성하는 핵인싸 친화력의 소유자예요.",
      "<b>“와 진짜 대박이다!”, “헐 웬일이야!” 같은 감탄사와 리액션이 거의 일상 대화의 절반을 차지해요.</b>",
      "지루하고 반복되는 일상이나 딱딱한 규칙에 갇히면 온몸이 근질거려 새로운 재미를 찾아 탈출을 꿈꿔요.",
      "사람에 대한 애정이 넘쳐나서, 주변 사람들의 숨은 장점과 매력을 기가 막히게 발견해 칭찬 폭격을 날려요."
    ],
    bestMatch: { mbti: "INFJ", name: "무화과", emoji: "🪴🧐" },
    worstMatch: { mbti: "ISTJ", name: "사과", emoji: "🍎😋" }
  },
  ENTP: {
    mbti: "ENTP",
    name: "개성파 청포도",
    nickname: "매력 넘치는 재치와 위트의 개성파",
    fruitEmoji: "🍇",
    faceEmoji: "😜",
    themeColor: "#74b816",
    tags: ["#재치만점", "#토론의달인", "#혁신가", "#자유분방"],
    bullets: [
      "<b>친구들이 당연하다고 믿는 이야기에 괜히 장난으로 반대 논리를 들이밀며 말싸움을 붙여보는 게 너무 재밌어요.</b>",
      "“넌 절대 못 해”라는 말을 들으면 승부욕이 활활 불타올라 보란 듯이 해내서 코를 납작하게 만들어줘요.",
      "<b>틀에 박힌 뻔한 방식이나 꼰대 같은 참견을 극도로 싫어하며, 항상 남다른 꼼수나 지름길을 찾아내요.</b>",
      "관심사가 시시각각 바뀌어서 새로운 취미 장비만 잔뜩 사 모으고 금방 다음 관심사로 갈아타곤 해요.",
      "머리 회전이 엄청나게 빨라서 어떤 위기 상황이나 난처한 질문도 특유의 번뜩이는 순발력과 말빨로 빠져나가요."
    ],
    bestMatch: { mbti: "INTJ", name: "석류", emoji: "🍷😏" },
    worstMatch: { mbti: "ISFJ", name: "복숭아", emoji: "🍑😊" }
  },
  ESTJ: {
    mbti: "ESTJ",
    name: "똑 부러지는 수박",
    nickname: "철저하고 똑 부러지는 든든한 기둥",
    fruitEmoji: "🍉",
    faceEmoji: "😆",
    themeColor: "#2b8a3e",
    tags: ["#체계적관리", "#리더십", "#확실한일처리", "#팩트기반"],
    bullets: [
      "<b>약속 시간에 늦거나 일을 질질 끌며 미루는 사람을 보면 속에서 깊은 탄식과 함께 답답함이 밀려와요.</b>",
      "조별 과제나 회의에서 아무도 안 나서고 흐지부지되고 있으면, 답답해서 결국 내가 총대 메고 지휘봉을 잡아요.",
      "<b>할 일 목록(To-do List)을 수첩이나 앱에 적어두고 하나씩 줄을 그어 지워나갈 때 짜릿한 쾌감을 느껴요.</b>",
      "감정에 호소하는 징징거림보다는 명확한 사실 관계와 구체적인 해결책을 이야기하는 대화를 선호해요.",
      "내 사람들에게는 겉으론 잔소리 폭탄을 날려도 뒤에서는 실질적인 도움과 혜택을 챙겨주는 든든한 맏형/맏언니예요."
    ],
    bestMatch: { mbti: "ISFP", name: "망고", emoji: "🥭😴" },
    worstMatch: { mbti: "INFP", name: "블루베리", emoji: "🫐🥺" }
  },
  ESFJ: {
    mbti: "ESFJ",
    name: "따뜻한 바나나",
    nickname: "다정하고 따뜻한 사랑의 공급원",
    fruitEmoji: "🍌",
    faceEmoji: "🤗",
    themeColor: "#fab005",
    tags: ["#모두의친구", "#친화력갑", "#사랑둥이", "#세심한배려"],
    bullets: [
      "<b>모임에 나가면 구석에서 혼자 겉돌거나 어색해하는 사람이 없는지 신경이 쓰여 계속 챙겨주려 해요.</b>",
      "친구들에게 고민 상담을 해줄 때 영혼 없는 리액션은 절대 없고, 내 일처럼 같이 화내고 눈물 흘려줘요.",
      "<b>내가 해준 배려나 챙김에 대해 상대방이 “고마워! 너 덕분이야”라고 진심으로 인정해 줄 때 가장 큰 보람을 느껴요.</b>",
      "단톡방의 생일 알림이나 경조사를 절대 그냥 지나치지 않고 가장 먼저 축하 메시지와 선물을 보내요.",
      "주변 사람들의 분위기와 기분을 살피느라 정작 내 스트레스는 혼자 꾹꾹 참다가 집에 와서 앓을 때가 많아요."
    ],
    bestMatch: { mbti: "ISTP", name: "레몬", emoji: "🍋😝" },
    worstMatch: { mbti: "INTP", name: "라임", emoji: "🍈🤔" }
  },
  ENFJ: {
    mbti: "ENFJ",
    name: "달콤한 체리",
    nickname: "달콤하고 온화한 선한 영향력의 리더",
    fruitEmoji: "🍒",
    faceEmoji: "🥳",
    themeColor: "#e64980",
    tags: ["#인류애충만", "#따뜻한카리스마", "#성장서포터", "#진심어린응원"],
    bullets: [
      "<b>주변 사람들의 숨겨진 재능이나 장점을 보면 나도 모르게 가슴이 벅차올라 “너 진짜 할 수 있어!” 열렬히 응원해요.</b>",
      "사람들의 마음을 하나로 모으는 분위기 메이커이자, 모두가 화합하고 즐거운 분위기를 만드는 데 진심이에요.",
      "<b>남들이 부탁하기도 전에 상대방이 뭘 필요로 하는지 본능적으로 알아채고 센스 있게 먼저 건네줘요.</b>",
      "내 도움으로 누군가의 삶이나 기분이 긍정적으로 변화하는 모습을 볼 때 살아있음을 느껴요.",
      "남들의 고민과 슬픔까지 내 일처럼 끌어안고 가려다 혼자 조용히 번아웃이 올 수 있으니 가끔은 나를 챙겨야 해요."
    ],
    bestMatch: { mbti: "INFP", name: "블루베리", emoji: "🫐🥺" },
    worstMatch: { mbti: "ISTP", name: "레몬", emoji: "🍋😝" }
  },
  ENTJ: {
    mbti: "ENTJ",
    name: "샤인머스캣",
    nickname: "당당하고 프로페셔널한 야망가",
    fruitEmoji: "🍇",
    faceEmoji: "👑",
    themeColor: "#40c057",
    tags: ["#독보적카리스마", "#확실한비전", "#프로페셔널", "#추진력갑"],
    bullets: [
      "<b>어설프게 시간과 에너지를 낭비하는 꼴을 못 참아서, 무슨 일을 시작하든 최단거리 지름길과 확실한 결과를 설계해요.</b>",
      "목표가 한 번 정해지면 뒤도 안 돌아보고 불도저처럼 밀어붙이며, 장애물이 나타나도 기어이 돌파해내요.",
      "<b>지금 나온 성향 결과를 읽으면서도 '맞아, 난 이 정도로 유능하고 야망 있는 사람이지' 흐뭇하게 인정하고 계실 거예요.</b>",
      "칭찬을 들을 때 “착하다”는 말보다는 “진짜 일 잘한다, 똑똑하다”는 말을 들었을 때 입꼬리가 귀에 걸려요.",
      "능력 있는 사람들과 영양가 높은 대화를 나누며 함께 더 큰 성공을 향해 달려 나가는 비전을 꿈꿔요."
    ],
    bestMatch: { mbti: "INFP", name: "블루베리", emoji: "🫐🥺" },
    worstMatch: { mbti: "ISFP", name: "망고", emoji: "🥭😴" }
  }
};

// 3. 상태 변수
let currentQuestionIndex = 0;
let userAnswers = []; // 각 문항별 선택한 옵션 인덱스 저장

// DOM 엘리먼트
const screens = {
  start: document.getElementById("start-screen"),
  question: document.getElementById("question-screen"),
  loading: document.getElementById("loading-screen"),
  result: document.getElementById("result-screen")
};

const startBtn = document.getElementById("start-btn");
const prevBtn = document.getElementById("prev-btn");
const questionCard = document.getElementById("question-card");
const qCategory = document.getElementById("q-category");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressText = document.getElementById("progress-text");
const progressPercent = document.getElementById("progress-percent");
const progressBar = document.getElementById("progress-bar");

const shareBtn = document.getElementById("share-btn");
const restartBtn = document.getElementById("restart-btn");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

// 화면 전환 함수
function showScreen(screenName) {
  Object.keys(screens).forEach((key) => {
    screens[key].classList.remove("active");
  });
  if (screens[screenName]) {
    screens[screenName].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// 4. 질문 렌더링 함수
function renderQuestion(index) {
  const currentData = QUESTIONS[index];
  if (!currentData) return;

  // 이전 버튼 활성화/비활성화
  prevBtn.disabled = index === 0;

  // 프로그레스 바 업데이트
  const progressRatio = (index + 1) / QUESTIONS.length;
  const percentVal = Math.round(progressRatio * 100);
  progressText.textContent = `Q. ${String(index + 1).padStart(2, "0")} / ${QUESTIONS.length}`;
  progressPercent.textContent = `${percentVal}%`;
  progressBar.style.width = `${percentVal}%`;

  // 질문 카드 애니메이션 효과
  questionCard.classList.remove("anim-fade-in");
  questionCard.classList.add("anim-fade-out");

  setTimeout(() => {
    qCategory.textContent = currentData.category;
    questionText.textContent = currentData.question;
    optionsContainer.innerHTML = "";

    const optionLabels = ["A", "B", "C", "D"];

    currentData.options.forEach((opt, optIdx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      if (userAnswers[index] === optIdx) {
        btn.classList.add("selected");
      }

      btn.innerHTML = `
        <span class="option-index">${optionLabels[optIdx]}</span>
        <span class="option-content">${opt.text}</span>
      `;

      btn.addEventListener("click", () => handleOptionSelect(optIdx));
      optionsContainer.appendChild(btn);
    });

    questionCard.classList.remove("anim-fade-out");
    questionCard.classList.add("anim-fade-in");
  }, 180);
}

// 선택지 클릭 처리
function handleOptionSelect(optIdx) {
  const allBtns = optionsContainer.querySelectorAll(".option-btn");
  allBtns.forEach((b, i) => {
    if (i === optIdx) b.classList.add("selected");
    else b.classList.remove("selected");
  });

  userAnswers[currentQuestionIndex] = optIdx;

  setTimeout(() => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      currentQuestionIndex++;
      renderQuestion(currentQuestionIndex);
    } else {
      finishTest();
    }
  }, 220);
}

// 이전 질문으로 이동
function handlePrev() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
  }
}

// MBTI 결과 계산 함수
function calculateMBTI() {
  const totalScores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  userAnswers.forEach((ansIdx, qIdx) => {
    const opt = QUESTIONS[qIdx].options[ansIdx];
    if (opt && opt.scores) {
      for (const [key, val] of Object.entries(opt.scores)) {
        if (totalScores[key] !== undefined) {
          totalScores[key] += val;
        }
      }
    }
  });

  const e_i = totalScores.E >= totalScores.I ? "E" : "I";
  const s_n = totalScores.S >= totalScores.N ? "S" : "N";
  const t_f = totalScores.T >= totalScores.F ? "T" : "F";
  const j_p = totalScores.J >= totalScores.P ? "J" : "P";

  return `${e_i}${s_n}${t_f}${j_p}`;
}

// 5. 테스트 완료 및 결과 도출
function finishTest() {
  showScreen("loading");

  const mbti = calculateMBTI();
  const fruit = FRUIT_DATA[mbti] || FRUIT_DATA["ENFP"];

  setTimeout(() => {
    displayResult(fruit);
    showScreen("result");
  }, 1300);
}

// 결과 화면 렌더링 함수
function displayResult(fruit) {
  document.getElementById("res-mbti").textContent = fruit.mbti;
  document.getElementById("res-nickname").textContent = fruit.nickname;
  document.getElementById("res-fruit-name").textContent = fruit.name;
  
  // 과일 이모지 + 표정 이모지 조합 표시
  document.getElementById("res-emoji").textContent = `${fruit.fruitEmoji}${fruit.faceEmoji}`;

  // 글로우 컬러 반영
  const glow = document.getElementById("res-emoji-glow");
  glow.style.background = `radial-gradient(circle, ${fruit.themeColor}55 0%, rgba(255, 255, 255, 0) 70%)`;

  // 태그 목록
  const tagsContainer = document.getElementById("res-tags");
  tagsContainer.innerHTML = "";
  fruit.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag-badge";
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });

  // 성향 탐구서: 불릿 포인트(•) 문장 단위 리스트 렌더링
  const descContainer = document.getElementById("res-description");
  descContainer.innerHTML = "";
  fruit.bullets.forEach((bulletText) => {
    const item = document.createElement("div");
    item.className = "exploration-item";
    item.innerHTML = `
      <span class="exploration-bullet">•</span>
      <span class="exploration-text">${bulletText}</span>
    `;
    descContainer.appendChild(item);
  });

  // 케미 정보
  document.getElementById("res-best-emoji").textContent = fruit.bestMatch.emoji;
  document.getElementById("res-best-name").textContent = fruit.bestMatch.name;
  document.getElementById("res-best-mbti").textContent = fruit.bestMatch.mbti;

  document.getElementById("res-worst-emoji").textContent = fruit.worstMatch.emoji;
  document.getElementById("res-worst-name").textContent = fruit.worstMatch.name;
  document.getElementById("res-worst-mbti").textContent = fruit.worstMatch.mbti;

  // URL 파라미터 업데이트
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set("fruit", fruit.mbti);
  window.history.replaceState({ fruit: fruit.mbti }, "", currentUrl.toString());
}

// 토스트 메시지 표시
let toastTimer = null;
function showToast(msg) {
  if (toastTimer) clearTimeout(toastTimer);
  toastMessage.textContent = msg;
  toast.classList.add("show");
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

// 결과 링크 복사
function handleShare() {
  const shareUrl = window.location.href;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        showToast("링크가 클립보드에 복사되었어요! 친구에게 공유해보세요 🍓");
      })
      .catch(() => {
        fallbackCopyText(shareUrl);
      });
  } else {
    fallbackCopyText(shareUrl);
  }
}

// 클립보드 대체 함수 (구형 브라우저 호환)
function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand("copy");
    showToast("링크가 복사되었어요! 친구에게 공유해보세요 🍇");
  } catch (err) {
    showToast("링크 복사에 실패했습니다. 주소창의 링크를 복사해주세요.");
  }
  document.body.removeChild(textarea);
}

// 테스트 리셋
function handleRestart() {
  currentQuestionIndex = 0;
  userAnswers = [];
  
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.delete("fruit");
  window.history.replaceState({}, "", currentUrl.pathname);

  showScreen("start");
}

// 6. 이벤트 리스너 등록
startBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  userAnswers = [];
  showScreen("question");
  renderQuestion(0);
});

prevBtn.addEventListener("click", handlePrev);
shareBtn.addEventListener("click", handleShare);
restartBtn.addEventListener("click", handleRestart);

// 7. 페이지 초기 로드 시 URL 파라미터 검사 (?fruit=ENFP 등)
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const fruitParam = params.get("fruit");

  if (fruitParam && FRUIT_DATA[fruitParam.toUpperCase()]) {
    displayResult(FRUIT_DATA[fruitParam.toUpperCase()]);
    showScreen("result");
  } else {
    showScreen("start");
  }
});
