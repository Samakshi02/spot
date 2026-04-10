import { useEffect, useRef, useState } from 'react'
import { HUD } from './HUD'
import { PuzzlePanel } from './PuzzlePanel'
import { useSounds } from '../../hooks/useSounds'

export function GameScreen({ state, actions }) {
  const {
    currentPuzzle,
    currentPuzzleIndex,
    foundDiffIds,
    wrongTaps,
    livesRemaining,
    hintsRemaining,
    totalScore,
    hintingDiffId,
  } = state

  const { completePuzzle, failPuzzle } = actions
  const sounds = useSounds(state.soundEnabled)

  const [isShaking, setIsShaking] = useState(false)
  const prevFoundCount = useRef(foundDiffIds.length)
  const prevLives = useRef(livesRemaining)

  // Play sound on correct find
  useEffect(() => {
    if (foundDiffIds.length > prevFoundCount.current) {
      sounds.playCorrect()
    }
    prevFoundCount.current = foundDiffIds.length
  }, [foundDiffIds.length, sounds])

  // Play sound on wrong tap
  useEffect(() => {
    if (livesRemaining < prevLives.current) {
      sounds.playWrong()
    }
    prevLives.current = livesRemaining
  }, [livesRemaining, sounds])

  useEffect(() => {
    if (!currentPuzzle) return
    if (foundDiffIds.length === currentPuzzle.totalDifferences) {
      sounds.playComplete()
      const timeout = setTimeout(() => {
        completePuzzle()
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [foundDiffIds, currentPuzzle, completePuzzle, sounds])

  useEffect(() => {
    if (livesRemaining <= 0) {
      sounds.playFail()
      const timeout = setTimeout(() => {
        failPuzzle()
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [livesRemaining, failPuzzle, sounds])

  if (!currentPuzzle) return null

  const { OriginalComponent, ModifiedComponent } = currentPuzzle

  const handleFound = (id) => {
    actions.registerCorrectTap(id)
  }

  const handleWrongTap = () => {
    if (livesRemaining <= 0) return
    setIsShaking(true)
    actions.registerWrongTap()
    setTimeout(() => setIsShaking(false), 400)
  }

  const handleHint = () => {
    const chosen = actions.useHintOnRandomDiff()
    if (!chosen) return
    sounds.playHint()
    setTimeout(() => {
      actions.clearHint()
    }, 2200)
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      <HUD
        puzzleIndex={currentPuzzleIndex}
        puzzle={currentPuzzle}
        foundCount={foundDiffIds.length}
        livesRemaining={livesRemaining}
        hintsRemaining={hintsRemaining}
        totalScore={totalScore}
        soundEnabled={state.soundEnabled}
        onWrongTap={handleWrongTap}
        onHint={handleHint}
        onToggleSound={actions.toggleSound}
        onExit={() => {
          const confirmed = window.confirm(
            'Leave this case? Your progress on this puzzle will be lost, but your score so far will be kept.',
          )
          if (confirmed) actions.backToMenu()
        }}
      />

      <div className="puzzle-panels-wrapper w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full flex flex-col lg:flex-row gap-3 pb-6">
            <PuzzlePanel label="Original" interactive={false}>
              <OriginalComponent />
            </PuzzlePanel>

            <PuzzlePanel
              label="Modified"
              interactive
              shaking={isShaking}
              onBackgroundClick={handleWrongTap}
            >
              <ModifiedComponent
                onFound={handleFound}
                foundIds={foundDiffIds}
                hintingId={hintingDiffId}
              />
            </PuzzlePanel>
          </div>
        </div>
      </div>
    </div>
  )
}
