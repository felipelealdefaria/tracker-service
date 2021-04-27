import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called setTrackOff function with correct params and correct response', () => {
    const { track } = makeSut()
    const setTrackOffSpy = jest.spyOn(track, 'setTrackOff').mockImplementation(() => ({ success: true }))
    const res: StatusResponse = track.setTrackOff(mock?.enable)

    expect(res).toEqual({ success: true })
    expect(setTrackOffSpy).toHaveBeenCalledWith(mock?.enable)
  })

  test('Should to have be called setTrackOff function with error response', () => {
    const { track } = makeSut()
    const setTrackOffSpy = jest.spyOn(track, 'setTrackOff').mockImplementation(() => ({ error: true }))
    const res: StatusResponse = track.setTrackOff(mock?.enable)

    expect(res).toEqual({ error: true })
    expect(setTrackOffSpy).toHaveBeenCalledWith(mock?.enable)
  })
})
