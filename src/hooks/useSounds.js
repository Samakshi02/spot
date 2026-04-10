import { useCallback, useRef } from 'react'
import * as Tone from 'tone'

// Detective / noir sound palette:
// - Warm piano chords for finds (evidence discovered)
// - Muted typewriter clicks for wrong taps
// - Vintage bell chime for hints
// - Jazzy resolution chord for case closed
// - Low melancholy tones for failed cases

export function useSounds(soundEnabled) {
  const startedRef = useRef(false)
  const reverbRef = useRef(null)

  const ensureStarted = useCallback(async () => {
    if (!startedRef.current) {
      await Tone.start()
      // Shared warm reverb for noir ambience
      reverbRef.current = new Tone.Reverb({ decay: 2.5, wet: 0.25 }).toDestination()
      await reverbRef.current.generate()
      startedRef.current = true
    }
  }, [])

  // Correct find — warm piano two-note motif (detective "aha" moment)
  const playCorrect = useCallback(async () => {
    if (!soundEnabled) return
    await ensureStarted()
    const piano = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.005, decay: 0.4, sustain: 0.1, release: 0.6 },
      volume: -10,
    }).connect(reverbRef.current)
    // Warm minor 6th — jazzy discovery sound
    piano.triggerAttackRelease('G4', '8n', Tone.now())
    piano.triggerAttackRelease('D5', '8n', Tone.now() + 0.09)
    setTimeout(() => piano.dispose(), 1500)
  }, [soundEnabled, ensureStarted])

  // Wrong tap — muted typewriter click (dry, short)
  const playWrong = useCallback(async () => {
    if (!soundEnabled) return
    await ensureStarted()
    const click = new Tone.MembraneSynth({
      pitchDecay: 0.01,
      octaves: 2,
      envelope: { attack: 0.001, decay: 0.08, sustain: 0, release: 0.02 },
      volume: -14,
    }).toDestination()
    click.triggerAttackRelease('C2', '64n')
    // Second click for typewriter feel
    setTimeout(() => {
      const tap = new Tone.MetalSynth({
        frequency: 180,
        envelope: { attack: 0.001, decay: 0.03, release: 0.02 },
        harmonicity: 3.1,
        modulationIndex: 8,
        resonance: 800,
        octaves: 0.5,
        volume: -28,
      }).toDestination()
      tap.triggerAttackRelease('16n')
      setTimeout(() => tap.dispose(), 200)
    }, 20)
    setTimeout(() => click.dispose(), 300)
  }, [soundEnabled, ensureStarted])

  // Case closed — jazzy resolution chord (major 7, piano)
  const playComplete = useCallback(async () => {
    if (!soundEnabled) return
    await ensureStarted()
    const piano = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 0.5, sustain: 0.2, release: 1.2 },
      volume: -12,
    }).connect(reverbRef.current)
    // Ascending arpeggio leading to a warm Cmaj7 chord
    const arp = ['C4', 'E4', 'G4']
    arp.forEach((note, i) => {
      piano.triggerAttackRelease(note, '16n', Tone.now() + i * 0.08)
    })
    // Resolution chord — Cmaj7 (jazzy, satisfying)
    piano.triggerAttackRelease(['C4', 'E4', 'G4', 'B4'], '2n', Tone.now() + 0.3)
    setTimeout(() => piano.dispose(), 3000)
  }, [soundEnabled, ensureStarted])

  // Case cold — low melancholy descending piano
  const playFail = useCallback(async () => {
    if (!soundEnabled) return
    await ensureStarted()
    const piano = new Tone.Synth({
      oscillator: { type: 'sine' },
      envelope: { attack: 0.02, decay: 0.5, sustain: 0.1, release: 0.8 },
      volume: -12,
    }).connect(reverbRef.current)
    // Descending minor — "case went cold" feel
    piano.triggerAttackRelease('A3', '4n', Tone.now())
    piano.triggerAttackRelease('F3', '4n', Tone.now() + 0.3)
    piano.triggerAttackRelease('D3', '2n', Tone.now() + 0.6)
    setTimeout(() => piano.dispose(), 2500)
  }, [soundEnabled, ensureStarted])

  // Hint — vintage bell chime (flashlight on the clue)
  const playHint = useCallback(async () => {
    if (!soundEnabled) return
    await ensureStarted()
    const bell = new Tone.MetalSynth({
      frequency: 600,
      envelope: { attack: 0.001, decay: 0.8, release: 0.4 },
      harmonicity: 4.1,
      modulationIndex: 16,
      resonance: 2000,
      octaves: 1.2,
      volume: -24,
    }).connect(reverbRef.current)
    bell.triggerAttackRelease('16n')
    setTimeout(() => bell.dispose(), 1500)
  }, [soundEnabled, ensureStarted])

  // Click — subtle paper rustle / soft tap
  const playClick = useCallback(async () => {
    if (!soundEnabled) return
    await ensureStarted()
    const tap = new Tone.MembraneSynth({
      pitchDecay: 0.005,
      octaves: 1,
      envelope: { attack: 0.001, decay: 0.03, sustain: 0, release: 0.02 },
      volume: -24,
    }).toDestination()
    tap.triggerAttackRelease('C3', '64n')
    setTimeout(() => tap.dispose(), 200)
  }, [soundEnabled, ensureStarted])

  return { playCorrect, playWrong, playComplete, playFail, playHint, playClick }
}
