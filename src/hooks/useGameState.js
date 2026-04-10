import { useCallback, useMemo, useState } from 'react'
import { puzzles } from '../puzzles'

const INITIAL_LIVES = 5
const INITIAL_HINTS = 2

export function useGameState() {
  const [currentScreen, setCurrentScreen] = useState('menu')
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)

  const [foundDiffIds, setFoundDiffIds] = useState([])
  const [wrongTaps, setWrongTaps] = useState(0)
  const [livesRemaining, setLivesRemaining] = useState(INITIAL_LIVES)
  const [hintsRemaining, setHintsRemaining] = useState(INITIAL_HINTS)
  const [puzzleScore, setPuzzleScore] = useState(0)
  const [puzzleStartTime, setPuzzleStartTime] = useState(null)
  const [puzzleEndTime, setPuzzleEndTime] = useState(null)
  const [puzzleOutcome, setPuzzleOutcome] = useState(null)
  const [hintingDiffId, setHintingDiffId] = useState(null)

  const currentPuzzle = puzzles[currentPuzzleIndex]

  const resetPuzzleState = useCallback(() => {
    setFoundDiffIds([])
    setWrongTaps(0)
    setLivesRemaining(INITIAL_LIVES)
    setHintsRemaining(INITIAL_HINTS)
    setPuzzleScore(0)
    setPuzzleStartTime(new Date())
    setPuzzleEndTime(null)
    setPuzzleOutcome(null)
    setHintingDiffId(null)
  }, [])

  const startGame = useCallback(() => {
    setCurrentPuzzleIndex(0)
    resetPuzzleState()
    setCurrentScreen('puzzle')
  }, [resetPuzzleState])

  const goToHowToPlay = useCallback(() => {
    setCurrentScreen('howToPlay')
  }, [])

  const backToMenu = useCallback(() => {
    setCurrentScreen('menu')
  }, [])

  const completePuzzle = useCallback(() => {
    const end = new Date()
    setPuzzleEndTime(end)
    setPuzzleOutcome('completed')
    setTotalScore((prev) => prev + puzzleScore)
    setCurrentScreen('results')
  }, [puzzleScore])

  const failPuzzle = useCallback(() => {
    const end = new Date()
    setPuzzleEndTime(end)
    setPuzzleOutcome('failed')
    setCurrentScreen('results')
  }, [])

  const goToNextPuzzle = useCallback(() => {
    if (currentPuzzleIndex === puzzles.length - 1) {
      setCurrentScreen('finalScore')
      return
    }
    setCurrentPuzzleIndex((idx) => Math.min(idx + 1, puzzles.length - 1))
    resetPuzzleState()
    setCurrentScreen('puzzle')
  }, [currentPuzzleIndex, resetPuzzleState])

  const retryPuzzle = useCallback(() => {
    resetPuzzleState()
    setCurrentScreen('puzzle')
  }, [resetPuzzleState])

  const playAgain = useCallback(() => {
    setTotalScore(0)
    setCurrentPuzzleIndex(0)
    resetPuzzleState()
    setCurrentScreen('puzzle')
  }, [resetPuzzleState])

  const registerCorrectTap = useCallback(
    (diffId) => {
      setFoundDiffIds((prev) => {
        if (prev.includes(diffId)) return prev
        const updated = [...prev, diffId]
        if (updated.length === currentPuzzle.totalDifferences) {
          // completion will be triggered by GameScreen once state updates propagate
        }
        return updated
      })
      setPuzzleScore((prev) => prev + 100)
    },
    [currentPuzzle?.totalDifferences],
  )

  const registerWrongTap = useCallback(() => {
    setWrongTaps((prev) => prev + 1)
    setLivesRemaining((prev) => Math.max(prev - 1, 0))
  }, [])

  const useHintOnRandomDiff = useCallback(() => {
    if (hintsRemaining <= 0 || !currentPuzzle) return null

    const remaining = currentPuzzle.differences
      .map((d) => d.id)
      .filter((id) => !foundDiffIds.includes(id))

    if (remaining.length === 0) return null

    const choice = remaining[Math.floor(Math.random() * remaining.length)]
    setHintingDiffId(choice)
    setHintsRemaining((prev) => Math.max(prev - 1, 0))
    return choice
  }, [currentPuzzle, foundDiffIds, hintsRemaining])

  const clearHint = useCallback(() => {
    setHintingDiffId(null)
  }, [])

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev)
  }, [])

  const state = useMemo(
    () => ({
      currentScreen,
      currentPuzzleIndex,
      currentPuzzle,
      totalPuzzles: puzzles.length,
      totalScore,
      foundDiffIds,
      wrongTaps,
      livesRemaining,
      hintsRemaining,
      puzzleScore,
      puzzleStartTime,
      puzzleEndTime,
      puzzleOutcome,
      hintingDiffId,
      soundEnabled,
    }),
    [
      currentScreen,
      currentPuzzleIndex,
      currentPuzzle,
      totalScore,
      foundDiffIds,
      wrongTaps,
      livesRemaining,
      hintsRemaining,
      puzzleScore,
      puzzleStartTime,
      puzzleEndTime,
      puzzleOutcome,
      hintingDiffId,
      soundEnabled,
    ],
  )

  const actions = useMemo(
    () => ({
      startGame,
      goToHowToPlay,
      backToMenu,
      completePuzzle,
      failPuzzle,
      goToNextPuzzle,
      retryPuzzle,
      playAgain,
      registerCorrectTap,
      registerWrongTap,
      useHintOnRandomDiff,
      clearHint,
      toggleSound,
      resetPuzzleState,
    }),
    [
      startGame,
      goToHowToPlay,
      backToMenu,
      completePuzzle,
      failPuzzle,
      goToNextPuzzle,
      retryPuzzle,
      playAgain,
      registerCorrectTap,
      registerWrongTap,
      useHintOnRandomDiff,
      clearHint,
      toggleSound,
      resetPuzzleState,
    ],
  )

  return { state, actions }
}

