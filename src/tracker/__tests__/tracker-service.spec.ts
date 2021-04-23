import { mock } from './mock-data'
import { TrackerService } from '../data/tracker-service'
import { AmplitudeEventTracker } from '../infra/amplitude-tracker'

jest.mock('../data/tracker-service')
jest.mock('../infra/amplitude-tracker')

type SutResponse = {
  track: TrackerService
}

const makeSut = (): SutResponse => {
  const amplitude: AmplitudeEventTracker = new AmplitudeEventTracker()
  const track: TrackerService = new TrackerService(amplitude)
  return { track }
}

describe('Tracker Service', () => {
  test('Should to have be called init function with corret params', () => {
    const { track } = makeSut()
    const { apiKey, userId, options, callback } = mock
    track.init({ apiKey, userId, options, callback })

    expect(track.init).toHaveBeenCalledWith({ apiKey, userId, options, callback })
  })

  test('Should call setUserId function with corret values', () => {
    const { track } = makeSut()
    track.setUserId(mock?.userId)

    expect(track.setUserId).toHaveBeenCalledWith(mock?.userId)
  })

  test('Should call log function with corret values', () => {
    const { track } = makeSut()
    const { eventName, eventProperties, callback } = mock
    track.log({ eventName, eventProperties, callback })

    expect(track.log).toHaveBeenCalledWith({ eventName, eventProperties, callback })
  })

  test('Should call setUserProperties function with corret values', () => {
    const { track } = makeSut()
    track.setUserProperties(mock?.userProperties)

    expect(track.setUserProperties).toHaveBeenCalledWith(mock?.userProperties)
  })
})
