import { mock } from './mock-data'
import { AmplitudeEventTracker } from '../infra/amplitude-tracker'

jest.mock('../infra/amplitude-tracker')

type SutResponse = {
  amplitude: AmplitudeEventTracker
}

const makeSut = (): SutResponse => {
  const amplitude: AmplitudeEventTracker = new AmplitudeEventTracker()
  return { amplitude }
}

describe('Amplitude - Tracker', () => {
  test('Should to have be called init function with corret params', () => {
    const { amplitude } = makeSut()
    const { apiKey, userId, options, callback } = mock
    amplitude.init({ apiKey, userId, options, callback })

    expect(amplitude.init).toHaveBeenCalledWith({ apiKey, userId, options, callback })
  })

  test('Should call setUserId function with corret values', () => {
    const { amplitude } = makeSut()
    amplitude.setUserId(mock?.userId)

    expect(amplitude.setUserId).toHaveBeenCalledWith(mock?.userId)
  })

  test('Should call logEvent function with corret values', () => {
    const { amplitude } = makeSut()
    const { eventName, eventProperties, callback } = mock
    amplitude.logEvent({ eventName, eventProperties, callback })

    expect(amplitude.logEvent).toHaveBeenCalledWith({ eventName, eventProperties, callback })
  })

  test('Should call setUserProperties function with corret values', () => {
    const { amplitude } = makeSut()
    amplitude.setUserProperties(mock?.userProperties)

    expect(amplitude.setUserProperties).toHaveBeenCalledWith(mock?.userProperties)
  })
})
