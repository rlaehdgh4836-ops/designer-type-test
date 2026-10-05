import type { DesignerTypeId } from '../data/types'

/**
 * 가장 많이 고른 유형을 반환한다.
 * 동점이면 동점인 유형 중 가장 마지막 문항에서 고른 유형을 반환한다.
 */
export function getResult(answers: DesignerTypeId[]): DesignerTypeId {
  const counts = new Map<DesignerTypeId, number>()
  for (const type of answers) {
    counts.set(type, (counts.get(type) ?? 0) + 1)
  }

  const max = Math.max(...counts.values())
  const tied = new Set(
    [...counts].filter(([, count]) => count === max).map(([type]) => type),
  )

  for (let i = answers.length - 1; i >= 0; i--) {
    if (tied.has(answers[i])) return answers[i]
  }
  return answers[answers.length - 1]
}
