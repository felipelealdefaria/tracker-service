import { Tracker } from '@/tracker/domain/tracker'
import { TrackerService } from '@/tracker/data/tracker-service'
import { makeAmplitudeTracker } from '@/tracker/factories/amplitude-factory'

const makeTrackerService = (): Tracker => new TrackerService(makeAmplitudeTracker())
export const tracker = makeTrackerService()
