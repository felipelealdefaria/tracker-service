import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../domain/tracker'

describe('Tracker Service', () => {
  test('Should to have be called setUserProperties function with correct params and correct response', () => {
    const { track } = makeSut()
    const setUserPropertiesSpy = jest.spyOn(track, 'setUserProperties').mockImplementation(() => ({ success: true }))
    const res: StatusResponse = track.setUserProperties(mock?.userProperties)

    expect(res).toEqual({ success: true })
    expect(setUserPropertiesSpy).toHaveBeenCalledWith(mock?.userProperties)
  })

  test('Should to have be called setUserProperties function with error response', () => {
    const { track } = makeSut()
    const setUserPropertiesSpy = jest.spyOn(track, 'setUserProperties').mockImplementation(() => ({ error: true }))
    const res: StatusResponse = track.setUserProperties(mock?.userProperties)

    expect(res).toEqual({ error: true })
    expect(setUserPropertiesSpy).toHaveBeenCalledWith(mock?.userProperties)
  })
})
