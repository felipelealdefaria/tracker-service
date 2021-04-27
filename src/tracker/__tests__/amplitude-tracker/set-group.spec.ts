import { mock } from '../mock-data'
import { makeSut } from '../make-sut'
import { StatusResponse } from '../../data/tracker-params'

describe('Amplitude Tracker', () => {
  test('Should to have be called setGroup function with correct params and correct response', () => {
    const { amplitude } = makeSut()
    const setGroupSpy = jest.spyOn(amplitude, 'setGroup').mockImplementation(() => ({ success: true }))

    const { groupName, groupType } = mock
    const res: StatusResponse = amplitude.setGroup({ groupName, groupType })

    expect(res).toEqual({ success: true })
    expect(setGroupSpy).toHaveBeenCalledWith({ groupName, groupType })
  })

  test('Should to have be called setGroup function with error response', () => {
    const { amplitude } = makeSut()
    const setGroupSpy = jest.spyOn(amplitude, 'setGroup').mockImplementation(() => ({ error: true }))

    const { groupName, groupType } = mock
    const res: StatusResponse = amplitude.setGroup({ groupName, groupType })

    expect(res).toEqual({ error: true })
    expect(setGroupSpy).toHaveBeenCalledWith({ groupName, groupType })
  })
})
