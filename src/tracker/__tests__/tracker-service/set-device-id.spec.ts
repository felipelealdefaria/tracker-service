import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called setDeviceId function with correct params and correct response', () => {
    const { track } = makeSut()
    const setDeviceIdSpy = jest.spyOn(track, 'setDeviceId').mockImplementation(() => ({ success: true }))
    const res: StatusResponse = track.setDeviceId(mock?.deviceId)

    expect(res).toEqual({ success: true })
    expect(setDeviceIdSpy).toHaveBeenCalledWith(mock?.deviceId)
  })

  test('Should to have be called setDeviceId function with error response', () => {
    const { track } = makeSut()
    const setDeviceIdSpy = jest.spyOn(track, 'setDeviceId').mockImplementation(() => ({ error: true }))
    const res: StatusResponse = track.setDeviceId(mock?.deviceId)

    expect(res).toEqual({ error: true })
    expect(setDeviceIdSpy).toHaveBeenCalledWith(mock?.deviceId)
  })
})
