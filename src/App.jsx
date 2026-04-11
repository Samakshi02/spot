import { useGameState } from './hooks/useGameState'
import { StartScreen } from './components/menu/StartScreen'
import { HowToPlay } from './components/menu/HowToPlay'
import { GameScreen } from './components/game/GameScreen'
import { ResultsScreen } from './components/game/ResultsScreen'
import { FinalScoreScreen } from './components/game/FinalScoreScreen'
import { BuiltBy } from './components/ui/BuiltBy'

function App() {
  const { state, actions } = useGameState()

  return (
    <div className="min-h-screen flex flex-col text-[#1a1f2e]">
      <main className="flex-1 flex">
        <div className="w-full flex justify-center">
          {state.currentScreen === 'menu' && (
            <StartScreen onPlay={actions.startGame} onHowToPlay={actions.goToHowToPlay} />
          )}
          {state.currentScreen === 'howToPlay' && (
            <HowToPlay onBack={actions.backToMenu} />
          )}
          {state.currentScreen === 'puzzle' && (
            <GameScreen state={state} actions={actions} />
          )}
          {state.currentScreen === 'results' && (
            <ResultsScreen state={state} actions={actions} />
          )}
          {state.currentScreen === 'finalScore' && (
            <FinalScoreScreen state={state} actions={actions} />
          )}
        </div>
      </main>
      <BuiltBy />
    </div>
  )
}

export default App
