import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called setUserProperties function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const setUserPropertiesSpy = jest.spyOn(amplitude, 'setUserProperties').mockImplementation(() => ({ success: true }))
    const res: StatusResponse = amplitude.setUserProperties(mock?.userProperties)

    expect(res).toEqual({ success: true })
    expect(setUserPropertiesSpy).toHaveBeenCalledWith(mock?.userProperties)
  })

  test('Should to have be called setUserProperties function with error response', () => {
    const { amplitude } = makeSut()
    const setUserPropertiesSpy = jest.spyOn(amplitude, 'setUserProperties').mockImplementation(() => ({ error: true }))
    const res: StatusResponse = amplitude.setUserProperties(mock?.userProperties)

    expect(res).toEqual({ error: true })
    expect(setUserPropertiesSpy).toHaveBeenCalledWith(mock?.userProperties)
  })
})
