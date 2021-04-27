import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called setDeviceId function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const setDeviceIdSpy = jest.spyOn(amplitude, 'setDeviceId').mockImplementation(() => ({ success: true }))
    const res: StatusResponse = amplitude.setDeviceId(mock?.deviceId)

    expect(res).toEqual({ success: true })
    expect(setDeviceIdSpy).toHaveBeenCalledWith(mock?.deviceId)
  })

  test('Should to have be called setDeviceId function with error response', () => {
    const { amplitude } = makeSut()
    const setDeviceIdSpy = jest.spyOn(amplitude, 'setDeviceId').mockImplementation(() => ({ error: true }))
    const res: StatusResponse = amplitude.setDeviceId(mock?.deviceId)

    expect(res).toEqual({ error: true })
    expect(setDeviceIdSpy).toHaveBeenCalledWith(mock?.deviceId)
  })
})
