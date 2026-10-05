import type { DesignerTypeId } from './types'

export type Choice = {
  label: string
  type: DesignerTypeId
}

export type Question = {
  title: string
  choices: [Choice, Choice]
}

export const questions: Question[] = [
  {
    title: '새 프로젝트를 시작할 때\n가장 먼저 하는 일은?',
    choices: [
      { label: '마음에 드는 레퍼런스부터 모은다', type: 'visual' },
      { label: '문제 정의와 요구사항부터 정리한다', type: 'logic' },
    ],
  },
  {
    title: '시안 리뷰에서\n가장 듣고 싶은 말은?',
    choices: [
      { label: '"보자마자 와, 했어요"', type: 'visual' },
      { label: '"사용자들이 정말 좋아하겠어요"', type: 'connect' },
    ],
  },
  {
    title: '작업이 막혔을 때\n나는?',
    choices: [
      { label: '플로우와 구조를 처음부터 다시 그려본다', type: 'logic' },
      { label: '동료를 붙잡고 이야기하면서 푼다', type: 'connect' },
    ],
  },
  {
    title: '팀의 피드백이\n서로 엇갈릴 때 나는?',
    choices: [
      { label: '데이터와 근거로 결정한다', type: 'logic' },
      { label: '모두가 납득할 수 있게 대화 자리를 만든다', type: 'connect' },
    ],
  },
  {
    title: '프로젝트를 마쳤을 때\n가장 뿌듯한 순간은?',
    choices: [
      { label: '결과물이 볼수록 아름다울 때', type: 'visual' },
      { label: '팀과 사용자에게 고맙다는 말을 들을 때', type: 'connect' },
    ],
  },
]
