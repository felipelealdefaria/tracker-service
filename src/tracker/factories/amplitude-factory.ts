import { AmplitudeEventTracker } from '@/tracker/infra/amplitude-tracker'

export const makeAmplitudeTracker = (): AmplitudeEventTracker => new AmplitudeEventTracker()
