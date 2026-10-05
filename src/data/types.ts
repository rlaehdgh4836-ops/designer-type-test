export type DesignerTypeId = 'visual' | 'logic' | 'connect'

export type DesignerType = {
  id: DesignerTypeId
  name: string
  tagline: string
  description: string
}

export const designerTypes: Record<DesignerTypeId, DesignerType> = {
  visual: {
    id: 'visual',
    name: '감각의 연금술사',
    tagline: '보는 순간 "와" 하게 만드는 디자이너',
    description:
      '레퍼런스를 모으고 픽셀 하나까지 다듬으며 아름다움을 완성해요. 직관과 감각으로 평범한 화면을 기억에 남는 경험으로 바꾸는 사람이에요.',
  },
  logic: {
    id: 'logic',
    name: '구조의 설계자',
    tagline: '문제부터 정의하고 근거로 답하는 디자이너',
    description:
      '화려함보다 왜 이렇게 만들어야 하는지를 먼저 고민해요. 플로우와 구조를 촘촘히 짜고, 데이터와 근거로 결정을 이끄는 사람이에요.',
  },
  connect: {
    id: 'connect',
    name: '연결의 촉진자',
    tagline: '사람과 사람 사이에서 답을 찾는 디자이너',
    description:
      '동료와 대화하며 아이디어를 키우고, 엇갈린 의견도 모두가 납득하는 방향으로 모아요. 사용자와 팀 모두에게 고맙다는 말을 듣는 사람이에요.',
  },
}
