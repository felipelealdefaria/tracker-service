import { TrackerService } from '../data/tracker-service'
import { AmplitudeEventTracker } from '../infra/amplitude-tracker'

export type SutResponse = {
  track: TrackerService
  amplitude: AmplitudeEventTracker
}

export const makeSut = (): SutResponse => {
  const amplitude: AmplitudeEventTracker = new AmplitudeEventTracker()
  const track: TrackerService = new TrackerService(amplitude)

  return { track, amplitude }
}
