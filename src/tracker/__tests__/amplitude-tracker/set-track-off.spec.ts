import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called setTrackOff function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const setTrackOffSpy = jest.spyOn(amplitude, 'setTrackOff').mockImplementation(() => ({ success: true }))
    const res: StatusResponse = amplitude.setTrackOff(mock?.enable)

    expect(res).toEqual({ success: true })
    expect(setTrackOffSpy).toHaveBeenCalledWith(mock?.enable)
  })

  test('Should to have be called setTrackOff function with error response', () => {
    const { amplitude } = makeSut()
    const setTrackOffSpy = jest.spyOn(amplitude, 'setTrackOff').mockImplementation(() => ({ error: true }))
    const res: StatusResponse = amplitude.setTrackOff(mock?.enable)

    expect(res).toEqual({ error: true })
    expect(setTrackOffSpy).toHaveBeenCalledWith(mock?.enable)
  })
})
