import { useState } from 'react'
import { questions } from './data/questions'
import { designerTypes, type DesignerTypeId } from './data/types'
import { getResult } from './lib/getResult'
import { QuestionScreen } from './screens/QuestionScreen'
import { ResultScreen } from './screens/ResultScreen'
import { StartScreen } from './screens/StartScreen'

type Step = { screen: 'start' } | { screen: 'question'; index: number } | { screen: 'result' }

export default function App() {
  const [step, setStep] = useState<Step>({ screen: 'start' })
  // 문항 순서대로 고른 유형. 이전으로 돌아가도 남겨 두어 선택 상태를 보여준다.
  const [answers, setAnswers] = useState<DesignerTypeId[]>([])

  if (step.screen === 'start') {
    return <StartScreen onStart={() => setStep({ screen: 'question', index: 0 })} />
  }

  if (step.screen === 'question') {
    const { index } = step
    const handleSelect = (type: DesignerTypeId) => {
      setAnswers((prev) => [...prev.slice(0, index), type, ...prev.slice(index + 1)])
      const next = index + 1
      setStep(next < questions.length ? { screen: 'question', index: next } : { screen: 'result' })
    }
    const handleBack = () => {
      setStep(index === 0 ? { screen: 'start' } : { screen: 'question', index: index - 1 })
    }

    return (
      <QuestionScreen
        question={questions[index]}
        index={index}
        total={questions.length}
        selected={answers[index]}
        onSelect={handleSelect}
        onBack={handleBack}
      />
    )
  }

  return (
    <ResultScreen
      result={designerTypes[getResult(answers)]}
      onRestart={() => {
        setAnswers([])
        setStep({ screen: 'start' })
      }}
    />
  )
}
