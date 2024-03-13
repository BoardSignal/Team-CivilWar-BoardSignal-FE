export type SubwayStates = '수도권' | '대전' | '대구' | '광주' | '부산';

export type SubwayLines =
  | '1호선'
  | '2호선'
  | '3호선'
  | '4호선'
  | '5호선'
  | '6호선'
  | '7호선'
  | '8호선'
  | '9호선'
  | '김포골드'
  | '의정부'
  | '인천1호선'
  | '인천2호선'
  | '경춘'
  | '경의중앙'
  | '공항철도'
  | '수인분당'
  | '신분당'
  | '경강'
  | '에버라인'
  | '우이신설'
  | '서해'
  | '신림'
  | '김해'
  | '동해';

interface SubwayStations {
  states: SubwayStates[];
  lines: Record<SubwayStates, { name: SubwayLines; color: string }[]>;
  data: {
    category: SubwayStates;
    lineName: SubwayLines;
    stations: string[];
  }[];
}

const subwayStations: SubwayStations = {
  states: ['수도권', '대전', '대구', '광주', '부산'],
  lines: {
    수도권: [
      {
        name: '1호선',
        color: '#08308F',
      },
      {
        name: '2호선',
        color: '#0EA349',
      },
      {
        name: '3호선',
        color: '#F08302',
      },
      {
        name: '4호선',
        color: '#00A5DF',
      },
      {
        name: '5호선',
        color: '#A14A9B',
      },
      {
        name: '6호선',
        color: '#D09012',
      },
      {
        name: '7호선',
        color: '#627535',
      },
      {
        name: '8호선',
        color: '#E84E72',
      },
      {
        name: '9호선',
        color: '#BE941C',
      },
      {
        name: '김포골드',
        color: '#DBC57D',
      },
      {
        name: '의정부',
        color: '#F6BA02',
      },
      {
        name: '인천1호선',
        color: '#6496DF',
      },
      {
        name: '인천2호선',
        color: '#FD9800',
      },
      {
        name: '경춘',
        color: '#20C4A2',
      },
      {
        name: '경의중앙',
        color: '#79C0A0',
      },
      {
        name: '공항철도',
        color: '#038FA0',
      },
      {
        name: '수인분당',
        color: '#FCD203',
      },
      {
        name: '신분당',
        color: '#CD2234',
      },
      {
        name: '경강',
        color: '#0044A3',
      },
      {
        name: '에버라인',
        color: '#56AB32',
      },
      {
        name: '우이신설',
        color: '#B7B7B7',
      },
      {
        name: '서해',
        color: '#8BE800',
      },
      {
        name: '신림',
        color: '#2F97FF',
      },
    ],
    대전: [{ name: '1호선', color: '#007448' }],
    대구: [
      { name: '1호선', color: '#D93F5C' },
      { name: '2호선', color: '#00AA80' },
      { name: '3호선', color: '#FFB100' },
    ],
    광주: [{ name: '1호선', color: '#009088' }],
    부산: [
      {
        name: '1호선',
        color: '#F66130',
      },
      {
        name: '2호선',
        color: '#07A600',
      },
      {
        name: '3호선',
        color: '#AE7C21',
      },
      {
        name: '4호선',
        color: '#286CD3',
      },
      {
        name: '김해',
        color: '#AF49CC',
      },
      {
        name: '동해',
        color: '#4DCAF8',
      },
    ],
  },
  data: [
    {
      category: '수도권',
      lineName: '1호선',
      stations: [
        '연천',
        '전곡',
        '청산',
        '소요산',
        '동두천',
        '보산',
        '동두천중앙',
        '지행',
        '덕정',
        '덕계',
        '양주',
        '녹양',
        '가능',
        '의정부',
        '회룡',
        '망월사',
        '도봉산',
        '도봉',
        '방학',
        '창동',
        '녹천',
        '월계',
        '광운대',
        '석계',
        '신이문',
        '외대앞',
        '회기',
        '청량리',
        '제기동',
        '신설동',
        '동묘앞',
        '동대문',
        '종로5가',
        '종로3가',
        '종각',
        '시청',
        '서울역',
        '남영',
        '용산',
        '노량진',
        '대방',
        '신길',
        '영등포',
        '신도림',
        '구로',
        '구일',
        '개봉',
        '오류동',
        '온수',
        '역곡',
        '소사',
        '부천',
        '중동',
        '송내',
        '부개',
        '부평',
        '백운',
        '동암',
        '간석',
        '주안',
        '도화',
        '제물포',
        '도원',
        '동인천',
        '인천',
        '가산디지털단지',
        '독산',
        '금천구청',
        '광명',
        '석수',
        '관악',
        '안양',
        '명학',
        '금정',
        '군포',
        '당정',
        '의왕',
        '성균관대',
        '화서',
        '수원',
        '세류',
        '병점',
        '세마',
        '오산대',
        '오산',
        '진위',
        '송탄',
        '서정리',
        '평택지제',
        '평택',
        '성환',
        '직산',
        '두정',
        '천안',
        '봉명',
        '쌍용',
        '아산',
        '탕정',
        '배방',
        '온양온천',
        '신창',
        '서동탄',
      ],
    },
    {
      category: '수도권',
      lineName: '2호선',
      stations: [
        '까치산',
        '신정네거리',
        '양천구청',
        '도림천',
        '신도림',
        '문래',
        '영등포구청',
        '당산',
        '합정',
        '홍대입구',
        '신촌',
        '이대',
        '아현',
        '충정로',
        '시청',
        '을지로입구',
        '을지로3가',
        '을지로4가',
        '동대문역사문화공원',
        '신당',
        '상왕십리',
        '왕십리',
        '한양대',
        '뚝섬',
        '성수',
        '건대입구',
        '구의',
        '강변',
        '잠실나루',
        '잠실',
        '잠실새내',
        '종합운동장',
        '삼성',
        '선릉',
        '역삼',
        '강남',
        '교대',
        '서초',
        '방배',
        '사당',
        '낙성대',
        '서울대입구',
        '봉천',
        '신림',
        '신대방',
        '구로디지털단지',
        '대림',
        '용답',
        '신답',
        '용두',
        '신설동',
      ],
    },
    {
      category: '수도권',
      lineName: '3호선',
      stations: [
        '대화',
        '주엽',
        '정발산',
        '마두',
        '백석',
        '대곡',
        '화정',
        '원당',
        '원흥',
        '삼송',
        '지축',
        '구파발',
        '연신내',
        '불광',
        '녹번',
        '홍제',
        '무악재',
        '독립문',
        '경복궁',
        '안국',
        '종로3가',
        '을지로3가',
        '충무로',
        '동대입구',
        '약수',
        '금호',
        '옥수',
        '압구정',
        '신사',
        '잠원',
        '고속터미널',
        '교대',
        '남부터미널',
        '양재',
        '매봉',
        '도곡',
        '대치',
        '학여울',
        '대청',
        '일원',
        '수서',
        '가락시장',
        '경찰병원',
        '오금',
      ],
    },
    {
      category: '수도권',
      lineName: '4호선',
      stations: [
        '진접',
        '오남',
        '별내별가람',
        '당고개',
        '상계',
        '노원',
        '창동',
        '쌍문',
        '수유',
        '미아',
        '미아사거리',
        '길음',
        '성신여대입구',
        '한성대입구',
        '혜화',
        '동대문',
        '동대문역사문화공원',
        '충무로',
        '명동',
        '회현',
        '서울역',
        '숙대입구',
        '삼각지',
        '신용산',
        '이촌',
        '동작',
        '총신대입구',
        '사당',
        '남태령',
        '선바위',
        '경마공원',
        '대공원',
        '과천',
        '정부과천청사',
        '인덕원',
        '평촌',
        '범계',
        '금정',
        '산본',
        '수리산',
        '대야미',
        '반월',
        '상록수',
        '한대앞',
        '중앙',
        '고잔',
        '초지',
        '안산',
        '신길온천',
        '정왕',
        '오이도',
      ],
    },
    {
      category: '수도권',
      lineName: '5호선',
      stations: [
        '방화',
        '개화산',
        '김포공항',
        '송정',
        '마곡',
        '발산',
        '우장산',
        '화곡',
        '까치산',
        '신정',
        '목동',
        '오목교',
        '양평',
        '영등포구청',
        '영등포시장',
        '신길',
        '여의도',
        '여의나루',
        '마포',
        '공덕',
        '애오개',
        '충정로',
        '서대문',
        '광화문',
        '종로3가',
        '을지로4가',
        '동대문역사문화공원',
        '청구',
        '신금호',
        '행당',
        '왕십리',
        '마장',
        '답십리',
        '장한평',
        '군자',
        '아차산',
        '광나루',
        '천호',
        '강동',
        '길동',
        '굽은다리',
        '명일',
        '고덕',
        '상일동',
        '강일',
        '미사',
        '하남풍산',
        '하남시청',
        '하남검단산',
        '둔촌동',
        '올림픽공원',
        '방이',
        '오금',
        '개롱',
        '거여',
        '마천',
      ],
    },
    {
      category: '수도권',
      lineName: '6호선',
      stations: [
        '신내',
        '봉화산',
        '화랑대',
        '태릉입구',
        '석계',
        '돌곶이',
        '상월곡',
        '월곡',
        '고려대',
        '안암',
        '보문',
        '창신',
        '동묘앞',
        '신당',
        '청구',
        '약수',
        '버티고개',
        '한강진',
        '이태원',
        '녹사평',
        '삼각지',
        '효창공원앞',
        '공덕',
        '대흥',
        '광흥창',
        '상수',
        '합정',
        '망원',
        '마포구청',
        '월드컵경기장',
        '디지털미디어시티',
        '증산',
        '새절',
        '응암',
        '역촌',
        '불광',
        '독바위',
        '연신내',
        '구산',
      ],
    },
    {
      category: '수도권',
      lineName: '7호선',
      stations: [
        '석남',
        '산곡',
        '부평구청',
        '굴포천',
        '삼산체육관',
        '상동',
        '부천시청',
        '신중동',
        '춘의',
        '부천종합운동장',
        '까치울',
        '온수',
        '천왕',
        '광명사거리',
        '철산',
        '가산디지털단지',
        '남구로',
        '대림',
        '신풍',
        '보라매',
        '신대방삼거리',
        '장승배기',
        '상도',
        '숭실대입구',
        '남성',
        '총신대입구',
        '내방',
        '고속터미널',
        '반포',
        '논현',
        '학동',
        '강남구청',
        '청담',
        '자양',
        '건대입구',
        '어린이대공원',
        '군자',
        '중곡',
        '용마산',
        '사가정',
        '면목',
        '상봉',
        '중화',
        '먹골',
        '태릉입구',
        '공릉',
        '하계',
        '중계',
        '노원',
        '마들',
        '수락산',
        '도봉산',
        '장암',
      ],
    },
    {
      category: '수도권',
      lineName: '8호선',
      stations: [
        '암사',
        '천호',
        '강동구청',
        '몽촌토성',
        '잠실',
        '석촌',
        '송파',
        '가락시장',
        '문정',
        '장지',
        '복정',
        '남위례',
        '산성',
        '남한산성입구',
        '단대오거리',
        '신흥',
        '수진',
        '모란',
      ],
    },
    {
      category: '수도권',
      lineName: '9호선',
      stations: [
        '개화',
        '김포공항',
        '공항시장',
        '신방화',
        '마곡나루',
        '양천향교',
        '가양',
        '증미',
        '등촌',
        '염창',
        '신목동',
        '선유도',
        '당산',
        '국회의사당',
        '여의도',
        '샛강',
        '노량진',
        '노들',
        '흑석',
        '동작',
        '구반포',
        '신반포',
        '고속터미널',
        '사평',
        '신논현',
        '언주',
        '선정릉',
        '삼성중앙',
        '봉은사',
        '종합운동장',
        '삼전',
        '석촌고분',
        '석촌',
        '송파나루',
        '한성백제',
        '올림픽공원',
        '둔촌오륜',
        '중앙보훈병원',
      ],
    },
    {
      category: '수도권',
      lineName: '김포골드',
      stations: [
        '김포공항',
        '고촌',
        '풍무',
        '사우 (김포시청)',
        '걸포북변',
        '운양',
        '장기',
        '마산',
        '구래',
        '양촌',
      ],
    },
    {
      category: '수도권',
      lineName: '의정부',
      stations: [
        '발곡',
        '회룡',
        '범골',
        '경전철의정부',
        '의정부시청',
        '흥선',
        '의정부중앙',
        '동오',
        '새말',
        '경기도청북부청사',
        '효자',
        '곤제',
        '어룡',
        '송산',
        '탑석',
      ],
    },
    {
      category: '수도권',
      lineName: '인천1호선',
      stations: [
        '송도달빛축제공원',
        '국제업무지구',
        '센트럴파크',
        '인천대입구',
        '지식정보단지',
        '테크노파크',
        '캠퍼스타운',
        '동막',
        '동춘',
        '원인재',
        '신연수',
        '선학',
        '문학경기장',
        '인천터미널',
        '예술회관',
        '인천시청',
        '간석오거리',
        '부평삼거리',
        '동수',
        '부평',
        '부평시장',
        '부평구청',
        '갈산',
        '작전',
        '경인교대입구',
        '계산',
        '임학',
        '박촌',
        '귤현',
        '계양',
      ],
    },
    {
      category: '수도권',
      lineName: '인천2호선',
      stations: [
        '검단오류',
        '왕길',
        '검단사거리',
        '마전',
        '완정',
        '독정',
        '검암',
        '검바위',
        '아시아드경기장',
        '서구청',
        '가정',
        '가정중앙시장',
        '석남',
        '서부여성회관',
        '인천가좌',
        '가재울',
        '주안국가산단',
        '주안',
        '시민공원',
        '석바위시장',
        '인천시청',
        '석천사거리',
        '모래내시장',
        '만수',
        '남동구청',
        '인천대공원',
        '운연',
      ],
    },
    {
      category: '수도권',
      lineName: '경춘',
      stations: [
        '청량리',
        '회기',
        '중랑',
        '상봉',
        '망우',
        '신내',
        '갈매',
        '별내',
        '퇴계원',
        '사릉',
        '금곡',
        '평내호평',
        '천마산',
        '마석',
        '대성리',
        '청평',
        '상천',
        '가평',
        '굴봉산',
        '백양리',
        '강촌',
        '김유정',
        '남춘천',
        '춘천',
        '광운대',
      ],
    },
    {
      category: '수도권',
      lineName: '경의중앙',
      stations: [
        '임진강',
        '운천',
        '문산',
        '파주',
        '월롱',
        '금촌',
        '금릉',
        '운정',
        '야당',
        '탄현',
        '일산',
        '풍산',
        '백마',
        '곡산',
        '대곡',
        '능곡',
        '행신',
        '강매',
        '한국항공대',
        '수색',
        '디지털미디어시티',
        '가좌',
        '신촌',
        '서울역',
        '홍대입구',
        '서강대',
        '공덕',
        '효창공원앞',
        '용산',
        '이촌',
        '서빙고',
        '한남',
        '옥수',
        '응봉',
        '왕십리',
        '청량리',
        '회기',
        '중랑',
        '상봉',
        '망우',
        '양원',
        '구리',
        '도농',
        '양정',
        '덕소',
        '도심',
        '팔당',
        '운길산',
        '양수',
        '신원',
        '국수',
        '아신',
        '오빈',
        '양평',
        '원덕',
        '용문',
        '지평',
      ],
    },
    {
      category: '수도권',
      lineName: '공항철도',
      stations: [
        '인천공항2터미널',
        '인천공항1터미널',
        '공항화물청사',
        '운서',
        '영종',
        '청라국제도시',
        '검암',
        '계양',
        '김포공항',
        '마곡나루',
        '디지털미디어시티',
        '홍대입구',
        '공덕',
        '서울역',
      ],
    },
    {
      category: '수도권',
      lineName: '수인분당',
      stations: [
        '인천',
        '신포',
        '숭의',
        '인하대',
        '송도',
        '연수',
        '원인재',
        '남동인더스파크',
        '호구포',
        '인천논현',
        '소래포구',
        '월곶',
        '달월',
        '오이도',
        '정왕',
        '신길온천',
        '안산',
        '초지',
        '고잔',
        '중앙',
        '한대앞',
        '사리',
        '야목',
        '어천',
        '오목천',
        '고색',
        '수원',
        '매교',
        '수원시청',
        '매탄권선',
        '망포',
        '영통',
        '청명',
        '상갈',
        '기흥',
        '신갈',
        '구성',
        '보정',
        '죽전',
        '오리',
        '미금',
        '정자',
        '수내',
        '서현',
        '이매',
        '야탑',
        '모란',
        '태평',
        '가천대',
        '복정',
        '수서',
        '대모산입구',
        '개포동',
        '구룡',
        '도곡',
        '한티',
        '선릉',
        '선정릉',
        '강남구청',
        '압구정로데오',
        '서울숲',
        '왕십리',
        '청량리',
      ],
    },
    {
      category: '수도권',
      lineName: '신분당',
      stations: [
        '신사',
        '논현',
        '신논현',
        '강남',
        '양재',
        '양재시민의숲',
        '청계산입구',
        '판교',
        '정자',
        '미금',
        '동천',
        '수지구청',
        '성복',
        '상현',
        '광교중앙',
        '광교',
      ],
    },
    {
      category: '수도권',
      lineName: '경강',
      stations: [
        '판교',
        '이매',
        '삼동',
        '경기광주',
        '초월',
        '곤지암',
        '신둔도예촌',
        '이천',
        '부발',
        '세종대왕릉',
        '여주',
      ],
    },
    {
      category: '수도권',
      lineName: '에버라인',
      stations: [
        '기흥',
        '강남대',
        '지석',
        '어정',
        '동백',
        '초당',
        '삼가',
        '시청·용인대',
        '명지대',
        '김량장',
        '용인중앙시장',
        '고진',
        '보평',
        '둔전',
        '전대·에버랜드',
      ],
    },
    {
      category: '수도권',
      lineName: '우이신설',
      stations: [
        '신설동',
        '보문',
        '성신여대입구',
        '정릉',
        '북한산보국문',
        '솔샘',
        '삼양사거리',
        '삼양',
        '화계',
        '가오리',
        '4·19민주묘지',
        '솔밭공원',
        '북한산우이',
      ],
    },
    {
      category: '수도권',
      lineName: '서해',
      stations: [
        '일산',
        '풍산',
        '백마',
        '곡산',
        '대곡',
        '능곡',
        '김포공항',
        '원종',
        '부천종합운동장',
        '소사',
        '소새울',
        '시흥대야',
        '신천',
        '신현',
        '시흥시청',
        '시흥능곡',
        '달미',
        '선부',
        '초지',
        '시우',
        '원시',
      ],
    },
    {
      category: '수도권',
      lineName: '신림',
      stations: [
        '샛강',
        '대방',
        '서울지방병무청',
        '보라매',
        '보라매공원',
        '보라매병원',
        '당곡',
        '신림',
        '서원',
        '서울대벤처타운',
        '관악산(서울대)',
      ],
    },
    {
      category: '대전',
      lineName: '1호선',
      stations: [
        '판암',
        '신흥',
        '대동',
        '대전',
        '중앙로',
        '중구청',
        '서대전네거리',
        '오룡',
        '용문',
        '탄방',
        '시청',
        '정부청사',
        '갈마',
        '월평',
        '갑천',
        '유성온천',
        '구암',
        '현충원',
        '월드컵경기장',
        '노은',
        '지족',
        '반석',
      ],
    },
    {
      category: '대구',
      lineName: '1호선',
      stations: [
        '설화명곡',
        '화원',
        '대곡',
        '진천',
        '월배',
        '상인',
        '월촌',
        '송현',
        '성당못',
        '대명',
        '안지랑',
        '현충로',
        '영대병원',
        '교대',
        '명덕',
        '반월당',
        '중앙로',
        '대구',
        '칠성시장',
        '신천',
        '동대구',
        '동구청',
        '아양교',
        '동촌',
        '해안',
        '방촌',
        '용계',
        '율하',
        '신기',
        '반야월',
        '각산',
        '안심',
      ],
    },
    {
      category: '대구',
      lineName: '2호선',
      stations: [
        '문양',
        '다사',
        '대실',
        '강창',
        '계명대',
        '성서공단',
        '이곡',
        '용산',
        '죽전',
        '감삼',
        '두류',
        '내당',
        '반고개',
        '청라언덕',
        '반월당',
        '경대병원',
        '대구은행',
        '범어',
        '수성구청',
        '만촌',
        '담티',
        '연호',
        '대공원',
        '고산',
        '신매',
        '사월',
        '정평',
        '임당',
        '영남대',
      ],
    },
    {
      category: '대구',
      lineName: '3호선',
      stations: [
        '칠곡경대병원',
        '학정',
        '팔거',
        '동천',
        '칠곡운암',
        '구암',
        '태전',
        '매천',
        '매천시장',
        '팔달',
        '공단',
        '만평',
        '팔달시장',
        '원대',
        '북구청',
        '달성공원',
        '서문시장',
        '청라언덕',
        '남산',
        '명덕',
        '건들바위',
        '대봉교',
        '수성시장',
        '수성구민운동장',
        '어린이세상',
        '황금',
        '수성못',
        '지산',
        '범물',
        '용지',
      ],
    },
    {
      category: '광주',
      lineName: '1호선',
      stations: [
        '녹동',
        '소태',
        '학동증심사입구',
        '남광주',
        '문화전당',
        '금남로4가',
        '금남로5가',
        '양동시장',
        '돌고개',
        '농성',
        '화정',
        '쌍촌',
        '운천',
        '상무',
        '김대중컨벤션센터',
        '공항',
        '송정공원',
        '광주송정역',
        '도산',
        '평동',
      ],
    },
    {
      category: '부산',
      lineName: '1호선',
      stations: [
        '다대포해수욕장',
        '다대포항',
        '낫개',
        '신장림',
        '장림',
        '동매',
        '신평',
        '하단',
        '당리',
        '사하',
        '괴정',
        '대티',
        '서대신',
        '동대신',
        '토성',
        '자갈치',
        '남포',
        '중앙',
        '부산역',
        '초량',
        '부산진',
        '좌천',
        '범일',
        '범내골',
        '서면',
        '부전',
        '양정',
        '시청',
        '연산',
        '교대앞',
        '동래',
        '명륜',
        '온천장',
        '부산대',
        '장전',
        '구서',
        '두실',
        '남산',
        '범어사',
        '노포',
      ],
    },
    {
      category: '부산',
      lineName: '2호선',
      stations: [
        '장산',
        '중동',
        '해운대',
        '동백',
        '벡스코',
        '센텀시티',
        '민락',
        '수영',
        '광안',
        '금련산',
        '남천',
        '경성대·부경대',
        '대연',
        '못골',
        '지게골',
        '문현',
        '국제금융센터·부산은행',
        '전포',
        '서면',
        '부암',
        '가야',
        '동의대',
        '개금',
        '냉정',
        '주례',
        '감전',
        '사상',
        '덕포',
        '모덕',
        '모라',
        '구남',
        '구명',
        '덕천',
        '수정',
        '화명',
        '율리',
        '동원',
        '금곡',
        '호포',
        '증산',
        '부산대양산캠퍼스',
        '남양산',
        '양산',
      ],
    },
    {
      category: '부산',
      lineName: '3호선',
      stations: [
        '수영',
        '망미',
        '배산',
        '물만골',
        '연산',
        '거제',
        '종합운동장',
        '사직',
        '미남',
        '만덕',
        '남산정',
        '숙등',
        '덕천',
        '구포',
        '강서구청',
        '체육공원',
        '대저',
      ],
    },
    {
      category: '부산',
      lineName: '4호선',
      stations: [
        '미남',
        '동래',
        '수안',
        '낙민',
        '충렬사',
        '명장',
        '서동',
        '금사',
        '반여농산물시장',
        '석대',
        '영산대',
        '윗반송',
        '고촌',
        '안평',
      ],
    },
    {
      category: '부산',
      lineName: '김해',
      stations: [
        '사상',
        '괘법르네시떼',
        '서부산유통지구',
        '공항',
        '덕두',
        '등구',
        '대저',
        '평강',
        '대사',
        '불암',
        '지내',
        '김해대학',
        '인제대',
        '김해시청',
        '부원',
        '봉황',
        '수로왕릉',
        '박물관',
        '연지공원',
        '장신대',
        '가야대',
      ],
    },
    {
      category: '부산',
      lineName: '동해',
      stations: [
        '부전역',
        '거제해맞이역',
        '거제역',
        '교대역',
        '동래역',
        '안락역',
        '부산원동역',
        '재송역',
        '센텀역',
        '벡스코역',
        '신해운대역',
        '송정역',
        '오시리아역',
        '기장역',
        '일광역',
        '좌천역',
        '월내역',
        '서생역',
        '남창역',
        '망양역',
        '덕하역',
        '개운포역',
        '태화강역',
      ],
    },
  ],
};

export default subwayStations;
