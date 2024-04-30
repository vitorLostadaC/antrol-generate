import { ReactElement, useState } from 'react'

export function useMultistepForm(steps: ReactElement[], defaultStep = 0) {
  const [currentStepIndex, setCurrentStepIndex] = useState(defaultStep)

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    isPenultimate: currentStepIndex === steps.length - 2,
    goTo,
    next,
    back
  }
}
